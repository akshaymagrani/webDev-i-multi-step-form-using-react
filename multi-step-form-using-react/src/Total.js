function Total(props) {
    let mORy = 'mo';
    mORy = props.formData.monthly_OR_yearly === false ? 'mo' : 'yr';
    let total = 0;
    if (mORy === 'mo') {
        if (props.formData.plan === 'Arcade') {
            total += props.formData.monthlyRates.arcade;
        }

        if (props.formData.plan === 'Advanced') {
            total += props.formData.monthlyRates.advanced;
        }
        
        if (props.formData.plan === 'Pro') {
            total += props.formData.monthlyRates.pro;
        }

        if (props.formData.onlineService) {
            total += props.formData.monthlyRates.onlineService;
        }

        if (props.formData.extraSpace) {
            total += props.formData.monthlyRates.extraSpace;
        }

        if (props.formData.theme) {
            total += props.formData.monthlyRates.theme;
        }
    }
    else{
        if (props.formData.plan === 'Arcade') {
            total += props.formData.yearlyRates.arcade;
        }

        if (props.formData.plan === 'Advanced') {
            total += props.formData.yearlyRates.advanced;
        }
        
        if (props.formData.plan === 'Pro') {
            total += props.formData.yearlyRates.pro;
        }

        if (props.formData.onlineService) {
            total += props.formData.yearlyRates.onlineService; // or yearlyRate
        }
        if (props.formData.extraSpace) {
            total += props.formData.yearlyRates.extraSpace; // or yearlyRate
        };
        if (props.formData.theme) {
            total += props.formData.yearlyRates.theme; // or yearlyRate
        };
    }
    const updateTotal = () => {
        const updatedData = { ...props.formData, total: total };
        props.updateFormData(updatedData);
    };
        /* 
        
        
        by default: total = arcade's code + 0;
        loop through each addon:
            if add-ons1 are checked,
                total += cost of addon
        display the total.
        */
    return (
        <section className="card4">
            <form className="card-bg py-7 px-4 card" name="multi-step-form">
                <h1>Finishing up</h1>
                <p className="p-color">Double-check everything looks OK before confirming.</p>

                {/* Dynamically add subscription and add-on selections here */}
                <div id="totalCost" className="my-3">
                <div>
                    <div>
                    <h3>{props.formData.plan} ({mORy === 'mo' ? `Monthly`: `Yearly`})<span id="choice"></span></h3>
                    <a href="#plan">Change</a>
                    </div>
                    <p>$
                        {props.formData.plan === "Arcade" && 
                            <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.arcade}/${mORy}`: `${props.formData.yearlyRates.arcade}/${mORy}`}</span>}
                        {props.formData.plan === "Advanced" && 
                            <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.advanced}/${mORy}`: `${props.formData.yearlyRates.advanced}/${mORy}`}</span>}
                        {props.formData.plan === "Pro" && 
                            <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.pro}/${mORy}`: `${props.formData.yearlyRates.pro}/${mORy}`}</span>}
                    </p>
                </div>
                <hr />
                {props.formData.onlineService && 
                <div>
                    <p>Online service</p>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.onlineService}/${mORy}`: `${props.formData.yearlyRates.onlineService}/${mORy}`}</span>
                    </p>    
                </div>}
                {props.formData.extraSpace &&
                <div>
                    <p>Larger storage</p>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.extraSpace}/${mORy}`: `${props.formData.yearlyRates.extraSpace}/${mORy}`}</span>
                    </p>
                </div>}
                {props.formData.theme &&
                <div>
                    <p>Customizable Profile</p>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.theme}/${mORy}`: `${props.formData.yearlyRates.theme}/${mORy}`}</span>
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