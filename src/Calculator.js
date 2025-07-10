import { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";

export default function Calculator() {
  const [screen, setScreen] = useState("");
  const [result, setResult] = useState("");

  function handleClick(e) {
    const value = e.target.dataset.num;

    if (value === "C") {
      setScreen("");
      setResult("");
    } else if (value === "=") {
      try {
        if (screen !== "") {
          const res = evaluate(screen);
          setResult(res);
        } else {
          setResult("Error");
        }
      } catch (err) {
        setResult("Error");
      }
    } else {
      setScreen(screen + value);
    }
  }
  return (
    <>
      <h1>React Calculator</h1>
      <div className="calculator">
        <div className="cal-screen">
          <input type="text" value={screen} />
        </div>
        <div className="cal-result">{result}</div>
        <div className="cal-buttons">
          <button type="button" data-num="7" onClick={handleClick}>
            7
          </button>
          <button type="button" data-num="8" onClick={handleClick}>
            8
          </button>
          <button type="button" data-num="9" onClick={handleClick}>
            9
          </button>
          <button type="button" data-num="+" onClick={handleClick}>
            +
          </button>
          <button type="button" data-num="4" onClick={handleClick}>
            4
          </button>
          <button type="button" data-num="5" onClick={handleClick}>
            5
          </button>
          <button type="button" data-num="6" onClick={handleClick}>
            6
          </button>
          <button type="button" data-num="-" onClick={handleClick}>
            -
          </button>
          <button type="button" data-num="1" onClick={handleClick}>
            1
          </button>
          <button type="button" data-num="2" onClick={handleClick}>
            2
          </button>
          <button type="button" data-num="3" onClick={handleClick}>
            3
          </button>
          <button type="button" data-num="*" onClick={handleClick}>
            *
          </button>
          <button type="button" data-num="C" onClick={handleClick}>
            C
          </button>
          <button type="button" data-num="0" onClick={handleClick}>
            0
          </button>
          <button type="button" data-num="=" onClick={handleClick}>
            =
          </button>
          <button type="button" data-num="/" onClick={handleClick}>
            /
          </button>
        </div>
      </div>
    </>
  );
}
