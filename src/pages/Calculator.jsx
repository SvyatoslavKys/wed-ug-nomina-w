
import {useState} from "react";


export function Calculator(){

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
         setDisplay(calculate(operator, firstOperand, display));

    };
    
    setDisplay((prev) => prev + value);
  };
//   console.log(display); 
//   console.log(firstOperand);    
//   console.log(operator);
//   console.log(waitingForSecondOperand);

    return(
        <div className="min-h-screen flex items-center justify-center flex-col">
            <h1 className="my-0 mx-auto">Calculator Page</h1>
            <div className="flex items-center justify-center">
                <div className="bg-amber-600 max-w-150">
                    <div className="p-1.5 bg-amber-300"><h2 className="pl-2.5 h-5.5">{display}</h2></div>
                    <div className="flex">
                        <div>
                            <div className="p-0.5 bg-amber-200">
                                <button onClick={() => {handleClick("1")}} className="w-16 h-16 bg-amber-400 m-0.5 rounded-lg">1</button>
                                <button onClick={() => {handleClick("2")}} className="w-16 h-16 bg-amber-400 m-0.5 rounded-lg">2</button>
                                <button onClick={() => {handleClick("3")}} className="w-16 h-16 bg-amber-400 m-0.5 rounded-lg">3</button>
                            </div>
                            <div className="p-0.5 bg-amber-200">
                                <button onClick={() => {handleClick("4")}} className="w-16 h-16 bg-amber-400 m-0.5 rounded-lg">4</button>
                                <button onClick={() => {handleClick("5")}} className="w-16 h-16 bg-amber-400 m-0.5 rounded-lg">5</button>
                                <button onClick={() => {handleClick("6")}} className="w-16 h-16 bg-amber-400 m-0.5 rounded-lg">6</button>
                            </div>
                            <div className="p-0.5 bg-amber-200">
                                <button onClick={() => {handleClick("7")}} className="w-16 h-16 bg-amber-400 m-0.5 rounded-lg">7</button>
                                <button onClick={() => {handleClick("8")}} className="w-16 h-16 bg-amber-400 m-0.5 rounded-lg">8</button>
                                <button onClick={() => {handleClick("9")}} className="w-16 h-16 bg-amber-400 m-0.5 rounded-lg">9</button>
                            </div>
                            <div className="p-0.5 bg-amber-200">
                                <button onClick={() => {handleClick("0")}} className="w-16 h-16 bg-amber-400 m-0.5 rounded-lg">0</button>
                            </div>
                        </div>
                        <div>
                        <div className="p-0.5 bg-amber-200 flex flex-col">
                                <button onClick={() => {handleClick("+")}} className="w-10 h-10 bg-amber-400 m-0.5 rounded-lg">+</button>
                                <button onClick={() => {handleClick("-")}} className="w-10 h-10 bg-amber-400 m-0.5 rounded-lg">-</button>
                                <button onClick={() => {handleClick("x")}} className="w-10 h-10 bg-amber-400 m-0.5 rounded-lg">x</button>
                                <button onClick={() => {handleClick("/")}} className="w-10 h-10 bg-amber-400 m-0.5 rounded-lg">/</button>
                                <button onClick={() => {handleClick("%")}} className="w-10 h-10 bg-amber-400 m-0.5 rounded-lg">%</button>
                                <button onClick={() => {handleClick("=")}} className="w-10 h-10 bg-amber-400 m-0.5 rounded-lg">=</button>
                                <button onClick={() => {handleClick("ac")}} className="w-10 h-10 bg-amber-400 m-0.5 rounded-lg">AC</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}