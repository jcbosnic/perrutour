import { useMemo, useState } from "react";
import WhatsAppFormModal from "./WhatsAppFormModal";

export default function Services() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = useMemo(
    () => [
      {
        id: "daily",
        name: "Rock Diario",
        tagline: "Una hora de paseo con toda la energía.",
        price: "$7.000",
        suffix: "/hora",
      },
      {
        id: "weekly",
        name: "Semana en Patas",
        tagline: "Cinco días seguidos de pura diversión.",
        price: "$30.000",
        suffix: "/semana",
      },
      {
        id: "monthly",
        name: "Tour Estrella",
        tagline: "El plan completo para tu rockstar peludo.",
        price: "$110.000",
        suffix: "/mes",
      },
    ],
    []
  );

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setOpenModal(true);
  };

  return (
    <>
      <section id="servicios" className="services">
        <div className="services__container">
          <header className="services__header">
            <h2>Planes con actitud y patitas felices</h2>
            <h3>
              Elige el plan perfecto para que tu perro salga a pasear con toda
              la energía.
            </h3>
          </header>

          <div className="services__grid">
            {plans.map((p) => (
              <article key={p.id} className="card card--simple">
                <div className="card__title">
                  <span className="card__name">{p.name}</span>
                </div>

                <p className="card__tagline">{p.tagline}</p>

                <div className="card__bottom">
                  <div className="card__price">
                    <div className="card__amount">{p.price}</div>
                    <div className="card__suffix">{p.suffix}</div>
                  </div>

                  {/* Botón para abrir modal */}
                  <button
                    className="card__btn"
                    onClick={() => handleOpenModal(p)}
                  >
                    Agendar
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <WhatsAppFormModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        defaultPlan={selectedPlan}
      />
    </>
  );
}
