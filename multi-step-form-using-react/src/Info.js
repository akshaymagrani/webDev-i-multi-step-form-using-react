import React from "react";

function Info(props) {
    console.log(props);

    return (
        <section className="personalInfo card1">
            <form name="multi-step-form" className="card card-bg py-7 px-4">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>

                <legend htmlFor="name" className="flex">
                    <span className="mr-auto">Name</span>
                    <span className={`text-xs text-red-600 ml-auto ${props.state.nameError ? '': 'hidden'}`}>This field is required.</span>
                </legend>
                <input 
                    type="text" 
                    className={`pd-2 w-full border ${props.state.nameError ? 'error': ''}`}
                    id="name" 
                    name="name" 
                    value={props.state.name}
                    onChange={(event) =>
                        props.dispatch({
                            type: 'name-update',
                            payload: {
                            name: event.target.value,
                            error: props.state.touched ? event.target.value.length === 0 : null,
                            },
                        })}
                    placeholder="e.g. Stephen King" 
                    autoComplete="given-name"
                />
                <br /><br />
                <legend htmlFor="email" className="flex">
                    <span>Email Address</span>
                    <span className={`text-xs text-red-600 ml-auto ${props.state.emailError ? '': 'hidden'}`}>This field is required.</span>
                </legend>
                <input 
                    type="email" 
                    className={`pd-2 w-full border ${props.state.emailError ? 'error': ''}`} 
                    id="email" 
                    name="email" 
                    value={props.state.email} 
                    onChange={(event) =>
                        props.dispatch({
                            type: 'email-update',
                            payload: {
                            email: event.target.value,
                            error: props.state.touched ? event.target.value.length === 0 : null,
                            },
                        })} 
                    placeholder="e.g. stephenking@lorem.com" 
                    autoComplete="email"
                />
                <br /><br />
                <legend htmlFor="phone-no" className="flex">
                    <span>Phone Number</span>
                    <span className={`text-xs text-red-600 ml-auto ${props.state.phoneNoError ? '': 'hidden'}`}>This field is required.</span>
                </legend>
                <input 
                    type="number" 
                    className="pd-2 w-full border" 
                    id="phone-no" 
                    name="phoneNo" 
                    value={props.state.phoneNo} 
                    onChange={(event) =>
                        props.dispatch({
                            type: 'phone-update',
                            payload: {
                            phoneNo: event.target.value,
                            error: props.state.touched ? event.target.value.length === 0 : null,
                            },
                        })} 
                    placeholder="e.g. +1 234 567 890" 
                    required
                />
                <br /><br />
            </form>
            <div className="btn-position">
                <input type="button" className="pd-2" id="next1" name="Next-1" value="Next Step" onClick={() => props.makeVisible(props.componentNameNext)}/>
            </div>
        </section>
    )
}

export default Info;