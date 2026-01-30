import { useMemo, useState } from "react";

const nominals = [500, 200, 100, 50, 20, 10];

export function Nominaly() {
 
  const [counts, setCounts] = useState(() =>
    Object.fromEntries(nominals.map((d) => [d, '']))
  );

  
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
  

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Nominały</h1>

        <ul className="space-y-2">
          {nominals.map((d) => (
            <li key={d} className="flex items-center justify-between gap-3">
              <span className="w-24 font-semibold">{d} PLN</span>

              <input
                type="number"
                min="0"
                value={counts[d]}                         
                onChange={(e) => handleChange(d, e.target.value)} 
                className="w-36 border rounded px-2 py-1"
                placeholder="Liczba banknotów"
              />

              <span className="w-28 text-right">
                {d * counts[d]} PLN
              </span>
            </li>
          ))}
        </ul>

        <div className="text-xl font-bold">Suma: {total} PLN</div>
      </div>
    </div>
  );
}
