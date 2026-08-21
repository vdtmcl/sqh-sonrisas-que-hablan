import { FormEvent, useState } from "react";
import { FileUp, Send } from "lucide-react";
import { siteContent } from "../../data/content";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: form,
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "No pudimos enviar tu mensaje.");
      }

      formElement.reset();
      setFileName("");
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "No pudimos enviar tu mensaje.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="name" label="Nombre y apellido" required />
        <Field name="role" label="Profesión / cargo" />
        <Field name="institution" label="Institución / centro médico" />
        <Field name="email" label="Email" type="email" required />
        <Field name="whatsapp" label="WhatsApp" />
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
      <label className="grid gap-2 text-sm font-bold">
        Archivo adjunto <span className="font-normal text-ri-ink/50">(opcional, máximo 10 MB)</span>
        <span className="flex items-center gap-3 rounded-2xl border border-dashed border-ri-ink/20 bg-ri-mist px-4 py-3 font-normal">
          <FileUp size={18} className="shrink-0 text-ri-blue" />
          <span className="min-w-0 flex-1 truncate text-ri-ink/70">{fileName}</span>
          <input
            name="attachment"
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.webp"
            onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
            className="w-[105px] shrink-0 text-xs font-normal"
          />
        </span>
      </label>
      <button disabled={status === "sending"} className="inline-flex w-fit items-center gap-2 rounded-full bg-ri-ink px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-ri-blue disabled:cursor-wait disabled:opacity-60">
        {status === "sending" ? "Enviando…" : "Enviar mensaje"} <Send size={16} />
      </button>
      {status === "success" && <p aria-live="polite" className="rounded-2xl bg-green-50 p-4 text-sm text-green-800">Mensaje enviado correctamente. El equipo de SQH revisará tu solicitud.</p>}
      {status === "error" && <p aria-live="assertive" className="rounded-2xl bg-red-50 p-4 text-sm text-red-800">{errorMessage}</p>}
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
