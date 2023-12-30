import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hummingbird Technical & Cleaning Services</Title>
      <h1>Top Drainage and plumbing Services Company UAE!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://hummingbirdtechnical.com" target="_blank">
          Hummingbird Technical & Cleaning Services
        </a>{" "}
        To Get Drainage Cleaning Services IN UAE.
      </p>
    </main>
  );
}
