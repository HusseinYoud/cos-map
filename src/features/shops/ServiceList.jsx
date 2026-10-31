import ContentDescription from "../../shared/components/ContentDescription";

export default function ServiceList({ services }) {
  if (!services?.length) return null;

  return (
    <section>
      <h2>Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <strong>{service.name}</strong>
            {service.price && (
              <span> — {service.price.amount} {service.price.currency}</span>
            )}
            {service.priceNote && <p>{service.priceNote}</p>}
            <ContentDescription description={service.description} />
          </li>
        ))}
      </ul>
    </section>
  );
}
