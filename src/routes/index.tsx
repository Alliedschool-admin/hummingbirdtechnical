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
    <main>
      {CONTEXT === "deploy-preview" && (
        <>
          <Title>Hello! This is a preview version of our site.</Title>
          <p>The branch is {BRANCH}</p>
        </>
      )}

      <Title>{companyDetails.name}</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>{companyDetails.description}</p>
      <p>
        Visit{" "}
        <a href={companyDetails.website} target="_blank">
          Hummingbird Technical & Cleaning Services
        </a>{" "}
        to learn more about our services.
      </p>

      {/* Add the plumbing services section below */}
      <h2>Our Plumbing Services</h2>
      <ul>
        {plumbingServices.map((service, index) => (
          <li key={index}>
            <a href={`#${service.replace(/\s+/g, "-").toLowerCase()}`}>
              {service}
            </a>
          </li>
        ))}
      </ul>

      <h2>Details of Plumbing Services:</h2>
      {plumbingServices.map((service, index) => (
        <div key={index} id={service.replace(/\s+/g, "-").toLowerCase()}>
          <h3>{service}</h3>
          {/* Add details for each plumbing service here */}
          <p>Details for {service}.</p>
        </div>
      ))}
    </main>
  );
}
