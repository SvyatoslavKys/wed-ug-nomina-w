import { NavLink } from "react-router-dom";

const linkClass = (theme) => ({ isActive }) =>
  "inline-block px-3 py-2 rounded-lg transition-transform hover:scale-110 active:scale-95 " +
  (isActive
    ? "bg-amber-700 text-white"
    : theme === "dark"
    ? "text-slate-100"
    : "text-black/80");

export default function Header({ theme, onToggleTheme, leng, setLeng, languages, t }) {
  const navBg = theme === "dark" ? "bg-slate-900" : "bg-amber-600";
  const buttonTheme =
    theme === "dark"
      ? "border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700"
      : "border-white/40 bg-yellow-500 sm:bg-white/90 text-slate-900 hover:bg-slate-100";

  const handleLanguageToggle = () => {
    const currentIndex = languages.indexOf(leng);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLeng(languages[nextIndex]);
  };

  return (
    <nav
      className={`w-screen h-16 ${navBg} relative flex items-center justify-around px-4 transition-colors duration-300`}
    >
      <div className="flex gap-2">
        <NavLink to="/" className={linkClass(theme)} end>
          {t?.title ?? "Home"}
        </NavLink>
        <NavLink to="/calculator" className={linkClass(theme)}>
          {t?.calc ?? "Calculator"}
        </NavLink>
        <NavLink to="/nominaly" className={linkClass(theme)}>
          {t?.nominaly ?? "Nominaly"}
        </NavLink>
      </div>

      <button
        onClick={onToggleTheme}
        className={`cursor-pointer absolute top-17 sm:top-4 right-4 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold shadow-sm transition hover:scale-110 ${buttonTheme}`}
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
      <button
        onClick={handleLanguageToggle}
        className={`cursor-pointer absolute  top-17 sm:top-4 right-24 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold shadow-sm transition hover:scale-110 ${buttonTheme}`}
      >
        {leng.toUpperCase()}
      </button>
    </nav>
  );
}

