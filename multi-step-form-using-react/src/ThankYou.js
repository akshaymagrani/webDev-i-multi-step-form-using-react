import thankYou from './assets/images/icon-thank-you.svg'
function ThankYou() {
    return (
        <section className="t-auto card5">
            <div className="card-bg py-12 px-4 card">
                <img src={thankYou} alt="icon-thank-you" className="m-auto my-3 w-10" />
                <h1>Thank you!</h1>

                <p className="p-color">Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com. </p>
            </div>
        </section>
    )
}

export default ThankYou;