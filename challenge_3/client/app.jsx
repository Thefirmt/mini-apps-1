import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
    
            this.state = {
                form: F1
            };
            this.form1 = true;
            this.form2 = false;
            this.form3 = false;
            this.grabF1 = this.grabF1.bind(this)
        }

    grabF1() {
        var name = document.getElementById('name-field').value;
        var email = document.getElementById('email-field').value;
        var password = document.getElementById('password-field').value;
    }

    grabF2() {
        var address = document.getElementById("address-field").value
        var address2 = document.getElementById("address2-field").value
        var city = document.getElementById("city-field").value
        var state = document.getElementById("state-field").value
        var zip = document.getElementById("zip-field").value
        var phone = document.getElementById("phone-field").value
    }

    render() {
        return (
            <div>
                <h1> BUY SOMETHING </h1>
                <F1 grabF1={this.grabF1} />
                <F2 grabF2={this.grabF2} />
            </div>
        )
    }
}

const F1 = (props) => (
    <div>
        Name:<input type="text" id="name-field" />
        Email:<input type="text" id="email-field" />
        Password:<input type="text" id="password-field" />
        <button id="checkout" onClick={(event) => {props.grabF1()}}>Checkout</button>
    </div>
)

const F2 = (props) => (
    <div>
        Address:<input type="text" id="address-field" />
        Address 2:<input type="text" id="address2-field" />
        City:<input type="text" id="city-field" />
        State:<input type="text" id="state-field" />
        Zip:<input type="text" id="zip-field" />
        Phone:<input type="text" id="phone-field" />
        <button id="next2" onClick={(event) => {props.grabF2()}}>Next</button>
    </div>
);

const F3 = (props) => (
    <div>
        CC#:<input type="text" id="cc-field" />
        Expiry Date:<input type="text" id="exp-field" />
        CVV:<input type="text" id="cvv-field" />
        Billing Zip Code:<input type="text" id="bzc-field" />
        <button id="checkout" onClick={(event) => {props.grabF3()}}>Next</button>
    </div>
);


ReactDOM.render(<App />, document.getElementById('app'));