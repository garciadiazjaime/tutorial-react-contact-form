export default function ContactForm() {
  return (
    <>
      <fieldset style={{ margin: "12px 0" }}>
        <legend>* Email:</legend>
        <input
          style={{
            width: "calc(100% - 16px)",
            fontSize: 24,
            padding: "12px 6px",
          }}
        />
      </fieldset>
      <fieldset style={{ margin: "12px 0" }}>
        <legend>* Message:</legend>
        <textarea
          style={{
            width: "calc(100% - 16px)",
            minHeight: 200,
            fontSize: 24,
            padding: "12px 6px",
          }}
        />
      </fieldset>
      <div style={{ margin: "12px 0" }}>
        <button
          style={{
            width: "100%",
            fontSize: 24,
            padding: "12px 0px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </>
  );
}
