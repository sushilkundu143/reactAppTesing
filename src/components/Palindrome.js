import { isPalidrome } from "../utils/utils";
import { useState } from "react";
import _ from "lodash";

export default function Palindrome() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    console.log("value printed here", value);
    const de_fn = _.debounce(function () {
      const result = isPalidrome(value);
      setResult(value.length > 0 ? result : null);
    }, 500);
    de_fn();
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="textblock">
        <input
          type="text"
          data-testid="palindrome"
          onChange={handleChange}
          name="palindrome"
          value={value}
        />
        <p>
          {result
            ? "This is a Palidrome"
            : result === null
            ? ""
            : "This is not a Palidrome"}
        </p>
      </div>
    </div>
  );
}
