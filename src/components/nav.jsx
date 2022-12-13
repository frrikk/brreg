import { Logo } from "./logo.jsx";
import { Link, NavLink } from "react-router-dom";
import { Divider } from "./divider";

export const Nav = () => {
  return (
    <section>
      <header className="flex justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex gap-4 text-slate-600">
            <li>
              <NavLink className="hover:text-slate-400" to="/">
                Enhetsregister
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-slate-400" to="/project">
                Prosjekt
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Divider width="full" />
    </section>
  );
};
