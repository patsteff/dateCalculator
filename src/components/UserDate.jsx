import { useState } from "react";

export default function UserDate({ userDateInput, handleChange }) {


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
    </section>
  );
}
