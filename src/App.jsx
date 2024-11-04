import { useState } from "react";
import UserDate from "./components/UserDate.jsx";
import Output from "./components/Output.jsx";


function App() {

  const [userDateInput, setUserDateInput] = useState({
    lastPeriod: new Date().toISOString().slice(0, 10),
    duration: 28,
  });


  function handleChange(inputIdentifier, newValue) {
    setUserDateInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: inputIdentifier === "duration" ? parseInt(newValue, 10) : newValue,
      };
    });
  }


  return (
    <>
    <UserDate userDateInput={userDateInput} handleChange={handleChange}/>
    <Output userDateInput={userDateInput}/>
    </>
  )
}

export default App
