import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  "inline-block px-3 py-2 rounded-lg transition-transform hover:scale-110 active:scale-95 " +
  (isActive ? "bg-amber-700 text-white" : "text-black/80");


export default function Header() {
  return (
    <nav className="w-screen h-16 bg-amber-600 flex items-center justify-center px-4 my-0 mx-auto">
      <NavLink to="/" className={linkClass} end>
        Home
      </NavLink>

      <div className="flex gap-2">
        <NavLink to="/calculator" className={linkClass}>Calculator</NavLink>
        <NavLink to="/nominaly" className={linkClass}>Nominały</NavLink>
      </div>
    </nav>
  );
}
