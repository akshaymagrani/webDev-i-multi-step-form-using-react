function AddOns(props) {
    console.log(props);
    let mORy;
    mORy = props.state.monthly_OR_yearly === false ? 'mo' : 'yr';
    console.log(mORy);
    return (
        <section className="card3">
            <form className="card-bg card py-7 px-4" name="multi-step-form">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>

                <label className={`container addOn rounded ${props.state.onlineService ? 'selected':''}`} htmlFor="onlineService">
                <div>
                    <input 
                        type="checkbox" 
                        name="onlineService" 
                        id="onlineService" 
                        checked={props.state.onlineService} 
                        onChange={(event) =>
                        props.dispatch({
                            type: 'addOn-OnlineService-update',
                            payload: {
                                onlineService: event.target.value,
                            },
                        })}
                    />
                    <span className="checkmark"></span>
                    <div className="ml-7">
                        <h3>Online service</h3>
                        <p className="p-color">Access to multiplayer games</p>
                    </div>
                </div>
                <p>+$
                    <span className="monthlyCost">{mORy === 'mo' ? `${props.state.monthlyRates.onlineService}/${mORy}`: `${props.state.yearlyRates.onlineService}/${mORy}`}</span>
                </p>
                </label>

                <label className={`container addOn rounded  ${props.state.extraSpace ? 'selected':''}`} htmlFor="extraSpace">
                    <div>
                    <input 
                        type="checkbox" 
                        name="extraSpace" 
                        id="extraSpace" 
                        checked={props.state.extraSpace} 
                        onChange={(event) =>
                        props.dispatch({
                            type: 'addOn-extraSpace-update',
                            payload: {
                                extraSpace: event.target.checked,
                            },
                        })}
                    />
                    <span className="checkmark"></span>
                    <div className="ml-7">
                        <h3>Larger storage</h3>
                        <p className="p-color">Extra 1TB of cloud save</p>
                    </div>
                    </div>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.state.monthlyRates.extraSpace}/${mORy}`: `${props.state.yearlyRates.extraSpace}/${mORy}`}</span>
                    </p>
                </label>

                <label className={`container addOn rounded  ${props.state.theme ? 'selected':''}`} htmlFor="theme">
                    <div>
                    <input 
                        type="checkbox" 
                        name="theme" 
                        id="theme" 
                        checked={props.state.theme}
                        onChange={(event) =>
                        props.dispatch({
                            type: 'addOn-theme-update',
                            payload: {
                                theme: event.target.checked,
                            },
                        })}
                    />
                    <span className="checkmark"></span>
                    <div className="ml-7">
                        <h3>Customizable Profile</h3>
                        <p className="p-color">Custom theme on your profile</p>
                    </div>
                    </div>
                    <p>+$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.state.monthlyRates.theme}/${mORy}`: `${props.state.yearlyRates.theme}/${mORy}`}</span>
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