"use client";

import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const messageHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setMessage(event.target.value);
  };

  const sendHandler = () => {
    if (email.length === 0 || message.length === 0) {
      setFeedback("Please fill in all the fields.");
      return;
    }

    setFeedback("sending...");
  };

  return (
    <>
      <fieldset style={{ margin: "12px 0" }}>
        <legend>Say Hi</legend>
        <label style={{ marginTop: 20, display: "block" }}>* Email:</label>
        <input
          style={{
            width: "calc(100% - 16px)",
            fontSize: 24,
            padding: "12px 6px",
          }}
          onChange={emailHandler}
          value={email}
        />

        <label style={{ marginTop: 20, display: "block" }}>* Message:</label>
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
          onClick={sendHandler}
        >
          Send
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ fontSize: 24 }}>{feedback}</div>
      </div>
    </>
  );
}
