import { useState, useEffect } from "react";

const WHATSAPP_PHONE = "56963442411";

export default function WhatsAppFormModal({ isOpen, onClose, defaultPlan }) {
  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    mascota: "",
    horario: "",
    plan: defaultPlan?.name || "",
  });

  useEffect(() => {
    if (defaultPlan) {
      setForm((f) => ({
        ...f,
        plan: defaultPlan.name,
      }));
    }
  }, [defaultPlan]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text =
      `¡Hola PerruTour! 🐾\n\n` +
      `Quiero agendar el *${form.plan}* (${defaultPlan?.price} ${defaultPlan?.suffix}).\n\n` +
      `• Nombre: ${form.nombre}\n` +
      `• Dirección: ${form.direccion}\n` +
      `• Mascota: ${form.mascota}\n` +
      `• Horario preferido: ${form.horario}\n\n` +
      `¿Me confirmas disponibilidad?`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;

    // Abre WhatsApp
    window.open(url, "_blank", "noopener,noreferrer");

    // ✅ Limpia el formulario
    setForm({
      nombre: "",
      direccion: "",
      mascota: "",
      horario: "",
      plan: defaultPlan?.name || "",
    });

    // Cierra el modal
    onClose();
  };

  return (
    <div className="modal__backdrop" role="dialog">
      <div className="modal">
        <header className="modal__header">
          <h3>Agendar paseo por WhatsApp</h3>
          <button className="modal__close" onClick={onClose}>
            ×
          </button>
        </header>

        <form className="modal__body" onSubmit={handleSubmit}>
          <div className="form__field">
            <label>Plan</label>
            <input name="plan" value={form.plan} readOnly />
          </div>

          <div className="form__field">
            <label>Nombre</label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__field">
            <label>Dirección</label>
            <input
              name="direccion"
              value={form.direccion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__field">
            <label>Mascota</label>
            <input
              name="mascota"
              value={form.mascota}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__field">
            <label>Horario preferido</label>
            <input
              name="horario"
              value={form.horario}
              onChange={handleChange}
              required
            />
          </div>

          <footer className="modal__footer">
            <button type="button" className="btn btn--ghost" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn">
              Enviar a WhatsApp
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
