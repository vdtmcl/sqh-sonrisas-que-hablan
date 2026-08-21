const DESTINATION_EMAIL = "formulario@sqh.cl";
const MAX_ATTACHMENT_SIZE = 10 * 1024 * 1024;
const ALLOWED_ATTACHMENT_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "image/jpeg",
  "image/png",
  "image/webp",
]);

type PagesContext = {
  request: Request;
  env: {
    RESEND_API_KEY?: string;
    RESEND_FROM_EMAIL?: string;
  };
};

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ] ?? character,
  );
}

function toBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";

  for (let index = 0; index < bytes.length; index += 1) {
    binary += String.fromCharCode(bytes[index]);
  }

  return btoa(binary);
}

export async function onRequestPost({ request, env }: PagesContext) {
  if (!env.RESEND_API_KEY) {
    return json({ error: "El servicio de correo no está configurado." }, 500);
  }

  let form: FormData;

  try {
    form = await request.formData();
  } catch {
    return json({ error: "No pudimos leer los datos del formulario." }, 400);
  }

  const name = String(form.get("name") ?? "").trim();
  const role = String(form.get("role") ?? "").trim();
  const institution = String(form.get("institution") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const whatsapp = String(form.get("whatsapp") ?? "").trim();
  const reason = String(form.get("reason") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const attachment = form.get("attachment");

  if (!name || !email || !reason || !message) {
    return json({ error: "Completa todos los campos obligatorios." }, 400);
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return json({ error: "Ingresa un email válido." }, 400);
  }

  if (message.length > 5000) {
    return json({ error: "El mensaje no puede superar los 5.000 caracteres." }, 400);
  }

  const attachments: Array<{ filename: string; content: string }> = [];

  if (attachment instanceof File && attachment.size > 0) {
    if (attachment.size > MAX_ATTACHMENT_SIZE) {
      return json({ error: "El archivo adjunto no puede superar los 10 MB." }, 400);
    }

    if (!ALLOWED_ATTACHMENT_TYPES.has(attachment.type)) {
      return json({ error: "El tipo de archivo adjunto no está permitido." }, 400);
    }

    attachments.push({
      filename: attachment.name,
      content: toBase64(await attachment.arrayBuffer()),
    });
  }

  const subject = `${name} | ${institution || "No indicada"} Formulario SQH Podcast`;
  const html = `
    <h2>Nuevo mensaje desde sqh.cl</h2>
    <p><strong>Nombre y apellido:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp || "No indicado")}</p>
    <p><strong>Profesión / cargo:</strong> ${escapeHtml(role || "No indicado")}</p>
    <p><strong>Institución:</strong> ${escapeHtml(institution || "No indicada")}</p>
    <p><strong>Motivo:</strong> ${escapeHtml(reason)}</p>
    <hr />
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL || "SQH Web <formulario@sqh.cl>",
      to: [DESTINATION_EMAIL],
      reply_to: email,
      subject,
      html,
      ...(attachments.length > 0 ? { attachments } : {}),
    }),
  });

  if (!resendResponse.ok) {
    return json({ error: "Resend no pudo entregar el mensaje." }, 502);
  }

  return json({ ok: true });
}
