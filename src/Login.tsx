import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      (username === "customer" ||
        username === "teller" ||
        username === "admin") &&
      password === "123456"
    ) {
      setMessage("✅ Login successful!");

      setTimeout(() => {
        git diff --name-only --diff-filter=Unavigate("/dashboard");
      }, 1000);
    } else {
      setMessage("❌ Invalid username or password.");
    }
  }

  return (
    <main className="login-page">
      <div className="login-container">
        <h1 className="title">Secure Bank Login</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="login-button" type="submit">
            Log in
          </button>

          <p className="message">{message}</p>
        </form>
      </div>
    </main>
  );
}