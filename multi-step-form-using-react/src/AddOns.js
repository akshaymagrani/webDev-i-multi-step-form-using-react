function AddOns(props) {
    console.log(props);
    let mORy = 'mo';
    mORy = props.formData.monthly_OR_yearly === false ? 'mo' : 'yr'
    return (
        <section className="card3">
            <form className="card-bg card py-7 px-4" name="multi-step-form">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>

                <label className={`container addOn rounded ${props.formData.onlineService ? 'selected':''}`} htmlFor="onlineService">
                <div>
                    <input type="checkbox" name="onlineService" id="onlineService" checked={props.formData.onlineService} onChange={props.handleChange}/>
                    <span className="checkmark"></span>
                    <div className="ml-7">
                        <h3>Online service</h3>
                        <p className="p-color">Access to multiplayer games</p>
                    </div>
                </div>
                <p>+$
                    <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.onlineService}/${mORy}`: `${props.formData.yearlyRates.onlineService}/${mORy}`}</span>
                </p>
                </label>

                <label className={`container addOn rounded  ${props.formData.extraSpace ? 'selected':''}`} htmlFor="extraSpace">
                    <div>
                    <input type="checkbox" name="extraSpace" id="extraSpace" checked={props.formData.extraSpace} onChange={props.handleChange}/>
                    <span className="checkmark"></span>
                    <div className="ml-7">
                        <h3>Larger storage</h3>
                        <p className="p-color">Extra 1TB of cloud save</p>
                    </div>
                    </div>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.extraSpace}/${mORy}`: `${props.formData.yearlyRates.extraSpace}/${mORy}`}</span>
                    </p>
                </label>

                <label className={`container addOn rounded  ${props.formData.theme ? 'selected':''}`} htmlFor="theme">
                    <div>
                    <input type="checkbox" name="theme" id="theme" checked={props.formData.theme} onChange={props.handleChange}/>
                    <span className="checkmark"></span>
                    <div className="ml-7">
                        <h3>Customizable Profile</h3>
                        <p className="p-color">Custom theme on your profile</p>
                    </div>
                    </div>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.theme}/${mORy}`: `${props.formData.yearlyRates.theme}/${mORy}`}</span>
                    </p>
                </label>
            </form>

            <div className="btn-position">
                <input type="button" className="pd-2" name="Back-3" id="back3" value="Go Back" onClick={() => props.makeVisible(props.componentNameBack)}/>
                <input type="button" className="pd-2" name="Next-3" id="next3" value="Next Step" onClick={() => props.makeVisible(props.componentNameNext)}/>
            </div>
        </section>
    )
}

export default AddOns;