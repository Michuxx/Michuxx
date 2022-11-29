import calculator from '../images/calculator.png';
const Logo = () => {

   
    return (
        <header>
            
            <div className='Nazwa'>
                <h1>Kalkulator</h1>
                <h1>Prosty</h1>
            </div>
            <img src={calculator} alt="calculator" width="150px" height="auto"/>
        </header>
    )
}

export default Logo;