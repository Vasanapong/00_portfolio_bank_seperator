import './App.css';
import useStateRef from 'react-usestateref'

function App() {

  const allBank = [1000,500,100,50,20,10,5,1]
  const allBankReverse = [...allBank].reverse()
  const [inputAmount, setInputAmount, amountRef] = useStateRef(0)

  const calBank = () =>{
    if(inputAmount >= 0){
      allBank.forEach((item)=>{
        document.querySelector(`.app__${item}-result`).innerHTML = Math.floor(amountRef.current/item)
        setInputAmount(prev => prev%item)
      })
    }
  }

  return (
    <div className="App">
      <div className="app__bank-seperator">
        <div className="app__input">
          <p>Input Amount</p>
          <div>
            <input type="number" onChange={(e)=>setInputAmount(e.target.value)} value={inputAmount}/>
            <button onClick={calBank}>Calculate</button>
          </div>
        </div>
        <div className="app__seperator">
          {allBankReverse.map((item,index)=>{
            return(
              <div className={`app__${item}`} key={index}>
               <div className={`app__${item}-title`}>{item} THB</div>
                <div className={`app__${item}-result result`}>0</div>
              </div>
            )
          })}
          <div className="app__clear" onClick={()=>{setInputAmount(0);calBank()}}>
            <div className="app__1000-title">Clear</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
