import { useState } from "react";

export default function UserDate() {
  const [userDateInput, setUserDateInput] = useState({
    lastPeriod: new Date().toISOString().slice(0, 10),
    duration: 28,
  });

  // Function to add days to the current date
  function addDays(date, duration) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + parseInt(duration, 10)); // Corrected
    return newDate.toISOString().slice(0, 10); // Return as 'YYYY-MM-DD' string
  }

  function handleChange(inputIdentifier, newValue) {
    setUserDateInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: inputIdentifier === "duration" ? parseInt(newValue, 10) : newValue,
      };
    });
  }

  const newPeriod = addDays(userDateInput.lastPeriod, userDateInput.duration);

  return (
    <section>
      <div id="user-input">
        <p>
          <label htmlFor="last-period">Last period</label>
          <input
            type="date"
            id="last-period"
            value={userDateInput.lastPeriod}
            onChange={(e) => handleChange("lastPeriod", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration in days</label>
          <input
            type="number"
            id="duration"
            value={userDateInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </p>
      </div>
      <div id="user-input">
        <label htmlFor="expected-period">Expected period</label>
        <input type="date" id="expected-period" value={newPeriod} disabled />
      </div>
    </section>
  );
}
