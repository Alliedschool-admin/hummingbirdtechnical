import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  const companyDetails = {
    name: "Hummingbird Technical & Cleaning Services",
    location: "UAE",
    description:
      "Your trusted partner for top-notch plumbing services in the UAE. With a commitment to excellence and customer satisfaction, we have established ourselves as a leading provider in the industry.",
    website: "https://hummingbirdtechnical.com",
  };

  const plumbingServices = [
    "Leak Detection and Repair",
    "Pipe Installation and Repair",
    "Water Heater Installation and Repair",
    "Drain Cleaning",
    "Toilet Repair and Installation",
    "Fixture Installation",
  ];

  const CONTEXT = "deploy-preview"; // Replace with your actual context
  const BRANCH = "main"; // Replace with your actual branch

  return (
    <main style={styles.main}>
      {CONTEXT === "deploy-preview" && (
        <>
          <Title style={styles.title}>Preview Version</Title>
          <p style={styles.previewText}>The branch is {BRANCH}</p>
        </>
      )}

      <Title style={styles.title}>{companyDetails.name}</Title>
      <h1 style={styles.heading}>Welcome to {companyDetails.name}</h1>
      <Counter />

      <section style={styles.section}>
        <h2 style={styles.subHeading}>About Us</h2>
        <p>{companyDetails.description}</p>
        <p>
          Visit{" "}
          <a href={companyDetails.website} target="_blank" style={styles.link}>
            {companyDetails.name}
          </a>{" "}
          to learn more about our services.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Our Plumbing Services</h2>
        <ul style={styles.list}>
          {plumbingServices.map((service, index) => (
            <li key={index} style={styles.listItem}>
              <a href={`#${service.replace(/\s+/g, "-").toLowerCase()}`} style={styles.link}>
                {service}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Details of Plumbing Services</h2>
        {plumbingServices.map((service, index) => (
          <div key={index} id={service.replace(/\s+/g, "-").toLowerCase()} style={styles.serviceDetails}>
            <h3 style={styles.subSubHeading}>{service}</h3>
            {/* Add details for each plumbing service here */}
            <p style={styles.paragraph}>Details for {service}.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

const styles = {
  main: {
    fontFamily: "Arial, sans-serif",
    margin: "20px",
  },
  title: {
    color: "#333",
  },
  heading: {
    color: "#444",
    fontSize: "1.5em",
  },
  section: {
    marginBottom: "20px",
  },
  subHeading: {
    color: "#555",
    fontSize: "1.2em",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    marginBottom: "8px",
  },
  link: {
    color
