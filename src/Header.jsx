import react from "react";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <a href="#">Blog</a>
        <button className="btn-login">Login</button>
      </nav>
    </header>
  );
}
