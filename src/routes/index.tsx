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

  const CONTEXT = "deploy-preview"; // Replace with your actual context
  const BRANCH = "main"; // Replace with your actual branch

  return (
    <main>
      {CONTEXT === "deploy-preview" && (
        <>
          <Title>Hummingbird Technical & Cleaning Services UAE.</Title>

        </>
      )}

      <Title>{companyDetails.name}</Title>
      <h1>Hummingbird Technical & Cleaning Services</h1>
      <Counter />
      <p>{companyDetails.description}</p>
      <p>
        Visit{" "}
       <a href={companyDetails.website} target="_blank">
  Hummingbird Technical & Cleaning Services
</a>
        to learn more about our services.
      </p>
    </main>
  );
}
