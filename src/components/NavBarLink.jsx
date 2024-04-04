import { Link } from "react-router-dom";

export const NavBarLink = () => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/songInfo", text: "Song Info" },
  ];



  return (
    <div>
      <h4>Navigation</h4>
      <nav>
        <ul className="app-ul">
          {links.map(({ to, text }) => (
            <li key={to} className="app-li">
              <Link to={to}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}