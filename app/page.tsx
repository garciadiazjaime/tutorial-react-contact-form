import ContactForm from "./components/form";

export default function Home() {
  return (
    <main style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>Contact Form</h1>
      <p>
        <small>Step 1</small>
      </p>
      <hr />
      <ContactForm />
    </main>
  );
}
