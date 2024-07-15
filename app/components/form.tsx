"use client";

import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const messageHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setMessage(event.target.value);
  };

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
          onChange={emailHandler}
          value={email}
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
          onChange={messageHandler}
          value={message}
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
