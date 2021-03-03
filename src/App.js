import './MyCss.css';

function App() {
  
  const allowedState=
  [
  {Mycar: "BMW",Owner:"xyz"},
  {Mycar: "Tesla",Owner:"ElonMusk"},
  {Mycar: "Tata",Owner:"RatanTata"},
  ]
  
  return (
    <div>
      <h1> Select Tag </h1>
        <select>
          {allowedState.map((i,index)=>(<option key={i.id}>{i.Mycar}</option>))}
        </select>


    <h1> OrderedList Tag (ol)</h1>
        <ol>
            {allowedState.map((i,index)=>(<li key={i.id}>{i.Mycar}</li>))}
        </ol>


    <h1> UnorderedList Tag (ul)</h1>
        <ul>
            {allowedState.map((i,index)=>(<li key={i.id}>{i.Mycar}</li>))}
        </ul>

<table className="border">

    <tr> 
        <td> SrNo. </td> 
        <td> Name </td> 
        <td> Owner </td> 
    </tr>

     
     {allowedState.map((i,index)=>(
     <tr>
          <td key={i.id}>{index+1}</td>
          <td key={i.id}>{i.Mycar}</td>
          <td key={i.id}>{i.Owner}</td>
     </tr>  
))}
   
</table>

    </div>
  );
}

export default App;
