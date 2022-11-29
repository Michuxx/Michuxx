import { useState} from "react";


function Calculations() {
    const [sum01, setSum01]=useState(0);
    const [sum02, setSum02]=useState(0);
    const [SumResult, SetSumResult]=useState(0);

    const [Diff01, setDiff01]=useState(0);
    const [Diff02, setDiff02]=useState(0);
    const [DiffResult, SetDiffResult]=useState(0);

    const [Mult01, setMult01]=useState(0);
    const [Mult02, setMult02]=useState(0);
    const [MultResult, SetMultResult]=useState(0);

    const [Divine01, setDivine01]=useState(0);
    const [Divine02, setDivine02]=useState(0);
    const [DivineResult, SetDivineResult]=useState(0);
    
    

    const Summing = (event) => {
       event.preventDefault();

        SetSumResult(Number(sum01) + Number(sum02))
        console.log(SetSumResult)

        }

    const Difference = (event) => {
       event.preventDefault();

        SetDiffResult(Number(Diff01) - Number(Diff02))
        console.log(DiffResult)

        }   

    const Multiple = (event) => {
       event.preventDefault();

        SetMultResult(Number(Mult01) * Number(Mult02))
        console.log(MultResult)

        }   
    const Divine = (event) => {
       event.preventDefault();

        SetDivineResult(Number(Divine01) / Number(Divine02))
        console.log(DivineResult)

        } 

    const Results=[SumResult,DiffResult,MultResult,DivineResult];
    const ListItems = Results.map((item) => (<div>{item}</div>));
    return (
        <main>
            <form>
                <h2>Suma: {SumResult}</h2><br/>
                <div className="Sums">
                    <input type="number" name="sum01" id="sum01" value={sum01} onChange={(e) => setSum01(e.target.value)}/> 
                    <input type="number" name="sum02" id="sum02" value={sum02} onChange={(e) => setSum02(e.target.value)}/>                    
                </div>
                <div className="buttonFlex">
                <input type="button" value="Oblicz" className="StylesForButton1" onClick={Summing}/>
                </div>
            </form>
            
            <form>
                <h2>Różnica: {DiffResult}</h2><br/>
                <div className="Sums ">
                    <input type="number" name="Diff01" id="Diff01" value={Diff01} onChange={(e) => setDiff01(e.target.value)}/> 
                    <input type="number" name="Diff02" id="Diff02" value={Diff02} onChange={(e) => setDiff02(e.target.value)}/>                    
                </div>
                <div className="buttonFlex">
                <input type="button" value="Oblicz" className="StylesForButton2" onClick={Difference}/>
                </div>
            </form>
            <form>
                <h2>Mnożenie: {MultResult}</h2><br/>
                <div className="Sums ">
                    <input type="number" name="Mult01" value={Mult01} onChange={(e) => setMult01(e.target.value)}/> 
                    <input type="number" name="Mult02" value={Mult02} onChange={(e) => setMult02(e.target.value)}/>                    
                </div>
                <div className="buttonFlex">
                <input type="button" value="Oblicz" className="StylesForButton3" onClick={Multiple}/>
                </div>
            </form>
            <form>
                <h2>dzielenie: {DivineResult}</h2><br/>
                <div className="Sums ">
                    <input type="number" name="Divine01" value={Divine01} onChange={(e) => setDivine01(e.target.value)}/> 
                    <input type="number" name="Divine02" value={Divine02} onChange={(e) => setDivine02(e.target.value)}/>                    
                </div>
                <div className="buttonFlex">
                <input type="button" value="Oblicz" className="StylesForButton4" onClick={Divine}/>
                </div>
            </form>

             <div className="lista">Wyniki Obliczeń to: {ListItems}</div>
        </main>
    )

    
}
   

export default Calculations;