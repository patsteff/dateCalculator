
export default function Output({userDateInput}) {

    const newPeriod = addDays(userDateInput.lastPeriod, userDateInput.duration);

      // Function to add days to the current date
  function addDays(date, duration) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + parseInt(duration, 10)); // Corrected
    return newDate.toISOString().slice(0, 10); // Return as 'YYYY-MM-DD' string
  }

    return <section>    
    <div id="user-input">
            <label htmlFor="expected-period">Expected period</label>
            <input type="date" id="expected-period" value={newPeriod} disabled />
        </div>
    </section>



}