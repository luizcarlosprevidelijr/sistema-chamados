import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside style={{
      width: 220,
      background: "#1e293b",
      color: "#fff",
      padding: 20
    }}>
      <h2>Chamados TI</h2>

      <nav>
        <Link to="/" style={{ color: "#fff", display: "block", marginTop: 10 }}>
          Dashboard
        </Link>

        <Link to="/novo-chamado" style={{ color: "#fff", display: "block", marginTop: 10 }}>
          Novo Chamado
        </Link>
      </nav>
    </aside>
  );
}
