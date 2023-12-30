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
    { name: "Leak Detection and Repair", details: "Detect and repair leaks efficiently." },
    { name: "Pipe Installation and Repair", details: "Expert installation and repair of pipes." },
    { name: "Water Heater Installation and Repair", details: "Installation and repair of water heaters." },
    { name: "Drain Cleaning", details: "Professional drain cleaning services." },
    { name: "Toilet Repair and Installation", details: "Repair and installation of toilets." },
    { name: "Fixture Installation", details: "Installation of plumbing fixtures with precision." },
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
              <a href={`#${service.name.replace(/\s+/g, "-").toLowerCase()}`} style={styles.link}>
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Details of Plumbing Services</h2>
        {plumbingServices.map((service, index) => (
          <div key={index} id={service.name.replace(/\s+/g, "-").toLowerCase()} style={styles.serviceDetails}>
            <h3 style={styles.subSubHeading}>{service.name}</h3>
            <p style={styles.paragraph}>{service.details}</p>
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
    color: "#007BFF",
    textDecoration: "none",
  },
  serviceDetails: {
    marginTop: "16px",
  },
  subSubHeading: {
    color: "#333",
    fontSize: "1.1em",
  },
  paragraph: {
    color: "#666",
  },
};
