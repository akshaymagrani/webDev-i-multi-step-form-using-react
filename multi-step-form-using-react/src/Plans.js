import arcade from './assets/images/icon-arcade.svg';
import advance from './assets/images/icon-advanced.svg';
import pro from './assets/images/icon-pro.svg';

function Plans(props) {
    console.log(props);
    let mORy = 'mo';
    mORy = props.formData.monthly_OR_yearly === false ? 'mo' : 'yr'
    return (
        <section className="card2" id="plan">
            <form className="card-bg py-7 px-4 card" name="multi-step-form">
                <h1>Select your plan</h1>
                <p className="p-color">You have the option of monthly or yearly billing.</p>
                <form className="gr-plan">
                <label className={`plan p-3 ${props.formData.plan === "Arcade" ? 'selected' : ''}`} htmlFor="plan1">
                    <input type="radio" name="plan" id="plan1" value="Arcade" checked={props.formData.plan === "Arcade"} onChange={props.handleChange}/>
                    <img src={arcade} alt="arcade-icon" />
                    <div className="ml-2">
                    <h3>Arcade</h3>
                        <p className="p-color">$
                            <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.arcade}/${mORy}`: `${props.formData.yearlyRates.arcade}/${mORy}`}</span>
                        </p>
                        {mORy === 'yr' && <p className="text-xs">2 months free</p>}
                    </div>
                </label>
                <label className={`plan p-3 ${props.formData.plan === "Advanced" ? 'selected' : ''}`} htmlFor="plan2">
                    <input type="radio" name="plan" value="Advanced" id="plan2" checked={props.formData.plan === "Advanced"} onChange={props.handleChange}/>
                    <img src={advance} alt="advance-icon"/>
                    <div className="ml-2">
                    <h3>Advanced</h3>
                    <p className="p-color">$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.advanced}/${mORy}`: `${props.formData.yearlyRates.advanced}/${mORy}`}</span>
                    </p>
                    {mORy === 'yr' && <p className="text-xs">2 months free</p>}
                    </div>
                </label>
                <label className={`plan p-3 ${props.formData.plan === "Pro" ? 'selected' : ''}`} htmlFor="plan3">
                    <input type="radio" name="plan" value="Pro" id="plan3" checked={props.formData.plan === "Pro"} onChange={props.handleChange}/>
                    <img src={pro} alt="pro-icon"/>
                    <div className="ml-2">
                    <h3>Pro</h3>
                    <p className="p-color">$
                        <span className="monthlyCost">{mORy === 'mo' ? `${props.formData.monthlyRates.pro}/${mORy}`: `${props.formData.yearlyRates.pro}/${mORy}`}</span>
                    </p>
                    {mORy === 'yr' && <p className="text-xs">2 months free</p>}
                    </div>
                </label>
                </form>
                <div className="M-or-Y">
                    <p>Monthly</p>
                    {/* Rounded switch */}
                    <label className="switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" name="monthly_OR_yearly" className="M-or-Y1" onChange={props.handleChange} checked={props.formData.monthly_OR_yearly}/>
                        <span className="slider round"></span>
                    </label>
                    <p>Yearly</p>
                </div>
            </form>
            <div className="btn-position">
                <input type="button" className="pd-2" name="Back-3" id="back2" value="Go Back" onClick={() => props.makeVisible(props.componentNameBack)}/>
                <input type="button" className="pd-2" name="Next-2" id="next2" value="Next Step" onClick={() => props.makeVisible(props.componentNameNext)}/>
            </div>
        </section>
    )
}

export default Plans;