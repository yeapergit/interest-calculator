import logo from './../assets/investment-calculator-logo.png'

export default function Header() {
    console.log("dummy test")
    return (<header id='header'>
        <img src={logo}/>
        <h1>Investment Calculator</h1> 
    </header>)
}