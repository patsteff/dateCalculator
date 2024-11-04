export default function UserInput({
    onChangeInput, userInputs
}) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investment</label>
                <input type="number" required value={userInputs.initialInvestment} onChange={(e) => onChangeInput("initialInvestment", e.target.value)}/>
            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input type="number" required value={userInputs.annualInvestment} onChange={(e) => onChangeInput("annualInvestment", e.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Expected Return</label>
                <input type="number" required value={userInputs.expectedReturn} onChange={(e) => onChangeInput("expectedReturn", e.target.value)}/>
            </p> 
            <p>
                <label htmlFor="">Duration</label>
                <input type="number" required value={userInputs.duration} onChange={(e) => onChangeInput("duration", e.target.value)}/>
            </p>
        </div>
    </section>
}