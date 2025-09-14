import "./App.css";
import { useState } from "react";

function App() {
const [weight, setWeight] = useState(0);
const [height, setHeight] = useState(0);
const [bmi, setBmi] = useState(0);
const [message, setMessage] = useState(0);


// logic

let calcBmi=(e)=>{
    event.preventDefault();
    if(weight===0 && height===0){
    alert("Please Enter valid weight and height")
    } 
    else {
        let bmi = (weight/(height*height))
        setBmi(bmi.toFixed(1))

        // message

        if(bmi<18.5){
            setMessage("you are UnderWeight")
        } 
        else if (bmi>=18.5 && bmi<25){
            setMessage("you are Healthy")
        }
        else if (bmi>=25 && bmi<30){
            setMessage("you are OverWeight")
        }
        else{
            setMessage("you are at Obesity")
        }
    }
}

let reload = ( )=> {
    window.location.reload()
}



return (
    <div className="App">
    <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
        <div>
            <label>Weight(kg)</label>
            <input
            type="text"
            placeholder="Enter wight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            />
        </div>
        <div>
            <label>height(m)</label>
            <input
            type="text"
            placeholder="Enter height(cm)"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            />
        </div>
        <div>
            <button className="btn" type="submit">
            Submit
            </button>
            <button className="btn" onClick={reload} type="button">
            Reload
            </button>
        </div>
        <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
        </div>
        </form>
    </div>
    </div>
);
}

export default App;
