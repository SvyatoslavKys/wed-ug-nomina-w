import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { languages as availableLanguages, translations } from "../components/shared/changeLeng";

let datetheme = new Date().toISOString();
const timetheme = datetheme.slice(-13);
const corectTime = timetheme.slice(0, 5);

function dataTime(corectTime) {
  if (corectTime >= "06:00" && corectTime < "18:00") {
    return "light";
  } else {
    return "dark";
  }
}

export function Layout() {
  const [leng, setLeng] = useState(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && availableLanguages.includes(storedLang)) {
      return storedLang;
    }

    const browserLang = typeof navigator !== "undefined"
      ? navigator.language?.split("-")[0]
      : null;

    return availableLanguages.includes(browserLang) ? browserLang : "pl";
  });

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme || dataTime(corectTime);

    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", leng);
  }, [leng]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const t = translations[leng] || translations[availableLanguages[0]];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-950 text-slate-100"
          : "bg-slate-50 text-slate-950"
      }`}
    >
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        leng={leng}
        setLeng={setLeng}
        languages={availableLanguages}
        t={t}
      />
      <div className="justify-center items-center">
        <Outlet context={{ theme, leng, setLeng, languages: availableLanguages, t }} />
      </div>
    </div>
  );
}

