
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export function Calculator() {
  const { theme } = useOutletContext();

  const [display, setDisplay] = useState("");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  
  function clearDisplay(){
    setDisplay("");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  } 
  function calculate(operator, firstOperand, secondOperand){
            if(operator === "+"){
        return firstOperand + secondOperand;
    } else if(operator === "-"){
        return firstOperand - secondOperand;
    } else if(operator === "x"){
        return firstOperand * secondOperand;
    } else if(operator === "/"){
        return firstOperand / secondOperand;
    } else if(operator === "%"){
        return firstOperand % secondOperand;
    }
  }
  const operators = ["+", "-", "x", "/", "%"]; 
  function handleClick(value){
    if(operators.includes(value)){
        setOperator(value);
         setFirstOperand(display);
         setWaitingForSecondOperand(true);
         setDisplay("");
        return;
    };
    if(value === "ac"){
        clearDisplay()
        return;
    };
    if(value === "="){
         setDisplay(calculate(operator, Number(firstOperand), Number(display)));
         return;
    };
    
    setDisplay((prev) => prev + value);
  };
  console.log(display); 
  console.log(firstOperand);    
  console.log(operator);
  console.log(waitingForSecondOperand);

    return (
        <div className={`min-h-screen px-4 py-6 flex items-center justify-center transition-colors duration-300 ${theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-950"}`}>
            <div className={`w-full max-w-[22rem] rounded-[2rem] p-4 shadow-lg sm:p-5 ${theme === "dark" ? "bg-slate-900 border border-slate-800" : "bg-white border border-slate-200"}`}>
                <div className={`mb-4 rounded-[1.5rem] p-4 text-right text-2xl font-semibold min-h-[4.5rem] break-words ${theme === "dark" ? "bg-slate-800 text-slate-100" : "bg-slate-100 text-slate-900"}`}>
                    {display || "0"}
                </div>
                <div className="grid gap-2">
                    <div className="grid grid-cols-3 gap-2">
                        <button onClick={() => handleClick("1")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "bg-amber-400 text-slate-950 hover:bg-amber-500"}`}>1</button>
                        <button onClick={() => handleClick("2")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "bg-amber-400 text-slate-950 hover:bg-amber-500"}`}>2</button>
                        <button onClick={() => handleClick("3")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "bg-amber-400 text-slate-950 hover:bg-amber-500"}`}>3</button>
                        <button onClick={() => handleClick("4")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "bg-amber-400 text-slate-950 hover:bg-amber-500"}`}>4</button>
                        <button onClick={() => handleClick("5")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "bg-amber-400 text-slate-950 hover:bg-amber-500"}`}>5</button>
                        <button onClick={() => handleClick("6")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "bg-amber-400 text-slate-950 hover:bg-amber-500"}`}>6</button>
                        <button onClick={() => handleClick("7")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "bg-amber-400 text-slate-950 hover:bg-amber-500"}`}>7</button>
                        <button onClick={() => handleClick("8")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "bg-amber-400 text-slate-950 hover:bg-amber-500"}`}>8</button>
                        <button onClick={() => handleClick("9")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "bg-amber-400 text-slate-950 hover:bg-amber-500"}`}>9</button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <button onClick={() => handleClick("0")} className={`col-span-2 h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "bg-amber-400 text-slate-950 hover:bg-amber-500"}`}>0</button>
                        <button onClick={() => handleClick("ac")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-slate-700 text-slate-100 hover:bg-slate-600" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}>AC</button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <button onClick={() => handleClick("+")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-slate-700 text-slate-100 hover:bg-slate-600" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}>+</button>
                        <button onClick={() => handleClick("-")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-slate-700 text-slate-100 hover:bg-slate-600" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}>-</button>
                        <button onClick={() => handleClick("x")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-slate-700 text-slate-100 hover:bg-slate-600" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}>x</button>
                        <button onClick={() => handleClick("/")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-slate-700 text-slate-100 hover:bg-slate-600" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}>/</button>
                        <button onClick={() => handleClick("%") } className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-slate-700 text-slate-100 hover:bg-slate-600" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}>%</button>
                        <button onClick={() => handleClick("=")} className={`h-14 rounded-[1rem] font-semibold transition ${theme === "dark" ? "bg-amber-500 text-slate-950 hover:bg-amber-400" : "bg-amber-500 text-white hover:bg-amber-600"}`}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}