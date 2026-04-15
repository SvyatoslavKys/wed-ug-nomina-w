import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";

const nominals = [500, 200, 100, 50, 20, 10];

export function Nominaly() {

  const [counts, setCounts] = useState(() =>
    Object.fromEntries(nominals.map((d) => [d, ""]))
  );
  const { theme, t } = useOutletContext();
  function handleChange(denom, raw) {
    if (raw === "") {
      setCounts((prev) => ({ ...prev, [denom]: "" }));
      return;
    }
    const n = Math.max(0, Number(raw) || 0);
    setCounts((prev) => ({ ...prev, [denom]: String(n) }));
  }

  const total = useMemo(() => {
    return nominals.reduce((sum, d) => sum + d * (Number(counts[d]) || 0), 0);
  }, [counts]);

  function handleSave() {
    const data = {
      savedAt: new Date().toISOString(),
      total: total,
      counts: counts,
    };
    console.log("data", data);
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nominals_${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const pageTheme =
    theme === "dark"
      ? "bg-slate-950 text-slate-100"
      : "bg-slate-50 text-slate-950";
  const cardTheme =
    theme === "dark"
      ? "bg-slate-900 border border-slate-700"
      : "bg-white";
  const inputTheme =
    theme === "dark"
      ? "bg-slate-800 text-slate-100 border-slate-600"
      : "bg-white text-slate-950 border-slate-300";
  const buttonTheme =
    theme === "dark"
      ? "bg-amber-500 hover:bg-amber-400"
      : "bg-amber-400 hover:bg-amber-500";

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${pageTheme} transition-colors duration-300`}>
      <div className={`w-full max-w-md space-y-4 p-4 rounded-xl shadow-sm ${cardTheme}`}>
        <h1 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-950"}`}>
         {t?.nominaly ?? "Nominaly"}
        </h1>
        <ul className="space-y-2">
          {nominals.map((d) => (
            <li key={d} className="flex items-center justify-between gap-3">
              <span className={`w-24 font-semibold ${theme === "dark" ? "text-slate-100" : "text-slate-950"}`}>{d} PLN</span>
              <input
                type="number"
                min="0"
                value={counts[d]}
                onChange={(e) => handleChange(d, e.target.value)}
                className={`w-36 rounded px-2 py-1 ${inputTheme}`}
                placeholder={t?.countPlaceholder ?? "Liczba banknotów"}
              />
              <span className={`w-28 text-right ${theme === "dark" ? "text-slate-100" : "text-slate-950"}`}>
                {d * counts[d]} PLN
              </span>
            </li>
          ))}
        </ul>
        <div className={`text-xl font-bold ${theme === "dark" ? "text-slate-100" : "text-slate-950"}`}>
          {t?.totalLabel ?? "Suma:"} {total} PLN
        </div>
        <div>
          <button
            onClick={handleSave}
            className={`cursor-pointer text-white font-bold py-2 px-4 rounded ${buttonTheme}`}
          >
            {t?.saveButton ?? "Zachwaj"}
          </button>
        </div>
      </div>
    </div>
  );
}
