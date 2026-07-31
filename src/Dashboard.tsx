import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <main>
      <header>
        <h1>Secure Bank Dashboard</h1>
        <button onClick={() => navigate("/")}>Log out</button>
      </header>

      <h2>Welcome back</h2>

      <section>
        <h3>Available Balance</h3>
        <p>$12,500.00</p>
      </section>

      <section>
        <h3>Quick Actions</h3>
        <button>Transfer Money</button>
        <button>Pay a Bill</button>
        <button>View Transactions</button>
      </section>
    </main>
  );
}