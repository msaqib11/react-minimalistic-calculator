import { useState } from "react"
import InputBox from "../Input/InputBox"
import Button from "../Button"

function Calculator() {
    const [display, setDisplay] = useState("")
    let [preValue, setPreValue] = useState("")
    const [operator, setOperator] = useState("")
    const [calculated,setCalculated] = useState(false)
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse()
    const Add = "+"
    const Subtract = "-"
    const Multiply = "*"
    const divide = "/"
    const equal = "="
    const operators = [Add, Subtract, Multiply, divide, equal]
    function handleClick(val) {


        if(display && val==='x'){
            let removeLastChar = display.split("").slice(0,-1).join("");
           setDisplay(removeLastChar)
       }
       if(val === "sqrt") {
           setDisplay(Math.sqrt(display))
       }   

        if (!isNaN(val) || val === ".") {
       
            
        if(calculated){
            setDisplay(val)
            setCalculated(false)
        }else{
            if (operator) {
                // If there's an operator, start fresh with a new number
                setDisplay(prev => prev === operator ? val.toString() : prev + val.toString());
            } else {
                setDisplay(prev => prev + val.toString());
            }
        }
    } else if (operators.includes(val) && val !== "=") {
       
        if (display !== "") {
            setPreValue(display);  
        }
        setOperator(val); 
        setDisplay(val);  
    } else if (val === "=") {
        
        calculate(); 
    } else if (val === "clear") {
        
        setDisplay("");
        setPreValue("");
        setOperator("");
    }
}

function calculate() {
    let result = 0;
    let currentValue = parseFloat(display);
    let prev = parseFloat(preValue);
    switch (operator) {
        case Add:
            result = prev + currentValue;
            break;
        case Subtract:
            result = prev - currentValue;
            break;
        case Multiply:
            result = prev * currentValue;
            break;
        case divide:
            if (currentValue === 0) {
                setDisplay("Cannot divide by zero");
                setPreValue("");
                setOperator("");
                return;
            } else {
                result = prev / currentValue;
            }
            break;
        default:
            return;
    }
    setDisplay(result.toString());
    setPreValue("");
    setOperator("");
    setCalculated(true)
}


    return (
        <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-blueGray-500 text-charcoal  rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
    <div>
        <div className="p-5 text-white text-center text-3xl ">
            Calculator
        </div>
        <InputBox
            type='text'
            className="p-5 text-charcoal border-t  border-blueGray-500 bg-coolGray
             text-right text-3xl  w-full"
            onChange={(val) => setDisplay(val)}
            value={display}
        />
        <div className="flex border-t-2 border-green-50">
            {/* Left: Numbers */}
            <div className="w-full md:w-[70%] flex flex-wrap bg-coolGray justify-center">
                <div className="px-2 py-2 justify-center flex items-center  text-charcoal text-4xl font-semibold">
                    <Button label={"x"} onClick={() => handleClick("x")} />
                </div>
                <div className="px-2 py-2 justify-center flex items-center text-charcoal text-4xl font-semibold">
                    <Button label={"AC"} onClick={() => handleClick("clear")} />
                </div>
                <div className="px-2 py-2 justify-center flex items-center text-charcoal text-4xl font-semibold">
                    <Button label={"\u221A"} onClick={() => handleClick("sqrt")} />
                </div>
                {nums.map((num) => (
                    <div className="px-2 py-2 justify-center flex items-center text-charcoal text-4xl font-semibold" key={num}>
                        <Button label={num} onClick={() => handleClick(num)} />
                    </div>
                ))}
                <div className="px-2 py-2 justify-center flex items-center  text-charcoal text-4xl font-semibold">
                    <Button label={"."}  onClick={() => handleClick(".")} />
                </div>
            </div>
            {/* Right: Operators */}
            <div className="w-[30%] flex flex-col">
                {operators.map((op) => (
                    <div className="px-2 py-2 justify-center flex items-center text-4xl font-semibold bg-coolGray" key={op}>
                        <Button className="rounded-full h-20 w-20 flex items-center text-charcoal  justify-center  bg-yellow-300 hover:bg-yellow-400 hover:cursor-pointer " label={op} onClick={() => handleClick(op)} />
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>

    )
}


export default Calculator