function Total(props) {
    let mORy = 'mo';
    mORy = props.state.monthly_OR_yearly === false ? 'mo' : 'yr';
    let total = 0;
    if (mORy === 'mo') {
        if (props.state.plan === 'Arcade') {
            total += props.state.monthlyRates.arcade;
        }

        if (props.state.plan === 'Advanced') {
            total += props.state.monthlyRates.advanced;
        }
        
        if (props.state.plan === 'Pro') {
            total += props.state.monthlyRates.pro;
        }

        if (props.state.onlineService) {
            total += props.state.monthlyRates.onlineService;
        }

        if (props.state.extraSpace) {
            total += props.state.monthlyRates.extraSpace;
        }

        if (props.state.theme) {
            total += props.state.monthlyRates.theme;
        }
    }
    else{
        if (props.state.plan === 'Arcade') {
            total += props.state.yearlyRates.arcade;
        }

        if (props.state.plan === 'Advanced') {
            total += props.state.yearlyRates.advanced;
        }
        
        if (props.state.plan === 'Pro') {
            total += props.state.yearlyRates.pro;
        }

        if (props.state.onlineService) {
            total += props.state.yearlyRates.onlineService; // or yearlyRate
        }
        if (props.state.extraSpace) {
            total += props.state.yearlyRates.extraSpace; // or yearlyRate
        };
        if (props.state.theme) {
            total += props.state.yearlyRates.theme; // or yearlyRate
        };
    }

    return (
        <section className="card4">
            <form className="card-bg py-7 px-4 card" name="multi-step-form">
                <h1>Finishing up</h1>
                <p className="p-color">Double-check everything looks OK before confirming.</p>

                {/* Dynamically add subscription and add-on selections here */}
                <div id="totalCost" className="my-3">
                <div>
                    <div>
                    <h3>{props.state.plan} ({mORy === 'mo' ? `Monthly`: `Yearly`})<span id="choice"></span></h3>
                    <a href="#plan">Change</a>
                    </div>
                    <p>$
                        {props.state.plan === "Arcade" && 
                            <span className="monthlyCost">{mORy === 'mo' ? `${props.state.monthlyRates.arcade}/${mORy}`: `${props.state.yearlyRates.arcade}/${mORy}`}</span>}
                        {props.state.plan === "Advanced" && 
                            <span className="monthlyCost">{mORy === 'mo' ? `${props.state.monthlyRates.advanced}/${mORy}`: `${props.state.yearlyRates.advanced}/${mORy}`}</span>}
                        {props.state.plan === "Pro" && 
                            <span className="monthlyCost">{mORy === 'mo' ? `${props.state.monthlyRates.pro}/${mORy}`: `${props.state.yearlyRates.pro}/${mORy}`}</span>}
                    </p>
                </div>
                <hr />
                {props.state.onlineService && 
                <div>
                    <p>Online service</p>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.state.monthlyRates.onlineService}/${mORy}`: `${props.state.yearlyRates.onlineService}/${mORy}`}</span>
                    </p>    
                </div>}
                {props.state.extraSpace &&
                <div>
                    <p>Larger storage</p>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.state.monthlyRates.extraSpace}/${mORy}`: `${props.state.yearlyRates.extraSpace}/${mORy}`}</span>
                    </p>
                </div>}
                {props.state.theme &&
                <div>
                    <p>Customizable Profile</p>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.state.monthlyRates.theme}/${mORy}`: `${props.state.yearlyRates.theme}/${mORy}`}</span>
                    </p>
                </div>}
                </div>
                <div className="pd-3 d-flex justify-spacebetween">
                <p className="p-color">Total (per<span></span>)</p>
                <p>${total}/{mORy}</p>
                </div>
            </form>
            <div className="btn-position">
                <input type="button" className="pd-2" name="Back-3" id="back4" value="Go Back" onClick={() => props.makeVisible(props.componentNameBack)}/>
                <input type="button" className="pd-2" name="Confirm" id="next4" value="Confirm" onClick={() => props.makeVisible(props.componentNameNext)}/>
            </div>
        </section>
    )
}

export default Total;