import React from "react";

function Info(props) {
    console.log(props);

    return (
        <section className="personalInfo card1">
            <form name="multi-step-form" className="card card-bg py-7 px-4">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>

                <legend htmlFor="name">Name</legend>
                <input 
                    type="text" 
                    className="pd-2 w-full border" 
                    id="name" 
                    name="name" 
                    value={props.formData.name} 
                    onChange={props.handleChange} 
                    placeholder="e.g. Stephen King" 
                    autoComplete="given-name"
                />
                <br /><br />
                <legend htmlFor="email">Email Address</legend>
                <input 
                    type="email" 
                    className="pd-2 w-full border" 
                    id="email" 
                    name="email" 
                    value={props.formData.email} 
                    onChange={props.handleChange} 
                    placeholder="e.g. stephenking@lorem.com" 
                    autoComplete="email"
                />
                <br /><br />
                <legend htmlFor="phone-no">Phone Number</legend>
                <input 
                    type="number" 
                    className="pd-2 w-full border" 
                    id="phone-no" 
                    name="phoneNo" 
                    value={props.formData.phoneNo} 
                    onChange={props.handleChange} 
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