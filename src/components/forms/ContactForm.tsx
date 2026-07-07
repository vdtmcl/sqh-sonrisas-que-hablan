import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteContent } from "../../data/content";
import { env } from "../../lib/env";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const required = ["name", "lastName", "email", "reason", "message"];
    setStatus(required.every((field) => String(form.get(field) || "").trim()) ? "success" : "error");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="name" label="Nombre" required />
        <Field name="lastName" label="Apellido" required />
        <Field name="role" label="Profesión / cargo" />
        <Field name="institution" label="Institución / centro médico" />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Teléfono" />
      </div>
      <label className="grid gap-2 text-sm font-bold">
        Motivo de contacto
        <select name="reason" required className="rounded-2xl border border-ri-ink/15 bg-white px-4 py-3 font-normal outline-none focus:border-ri-blue">
          <option value="">Selecciona una opción</option>
          {siteContent.contactReasons.map((reason) => (
            <option key={reason}>{reason}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold">
        Mensaje
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Cuéntanos brevemente quién eres, qué tema te gustaría proponer y por qué crees que puede aportar a la conversación de SQH."
          className="rounded-2xl border border-ri-ink/15 bg-white px-4 py-3 font-normal outline-none focus:border-ri-blue"
        />
      </label>
      <div className="rounded-2xl border border-dashed border-ri-ink/20 bg-ri-mist p-4 text-sm text-ri-ink/60">
        Cloudflare Turnstile preparado: {env.turnstileSiteKey ? "site key detectada" : "agrega VITE_CLOUDFLARE_TURNSTILE_SITE_KEY para activar el widget real"}.
      </div>
      <button className="inline-flex w-fit items-center gap-2 rounded-full bg-ri-ink px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-ri-blue">
        Enviar mensaje <Send size={16} />
      </button>
      {status === "success" && <p className="rounded-2xl bg-green-50 p-4 text-sm text-green-800">Gracias por escribirnos. El equipo de SQH revisará tu mensaje y se pondrá en contacto si la propuesta se alinea con la línea editorial del podcast.</p>}
      {status === "error" && <p className="rounded-2xl bg-red-50 p-4 text-sm text-red-800">No pudimos enviar tu mensaje. Revisa los campos obligatorios e inténtalo nuevamente.</p>}
    </form>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-bold">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-2xl border border-ri-ink/15 bg-white px-4 py-3 font-normal outline-none focus:border-ri-blue"
      />
    </label>
  );
}
