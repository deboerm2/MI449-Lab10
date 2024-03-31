//import logo from './logo.svg';
import './App.css';

const game = {
  title: 'Bloodborne',
  system: 'Playstation',
  releaseDate: 'March 24, 2015',
}
const bosses =[
  {id:'1', name:'Cleric Beast', isRequired: false},
  {id:'2', name:'Father Gascoigne', isRequired: true},
  {id:'3', name:'Vicar Amelia', isRequired: true},
  {id:'4', name:'Witches of Hemwick', isRequired: false},
  {id:'5', name:'Blood-starved Beast', isRequired: false}
]

function ShowGame(){
  return(
    <div>
      <h2>{game.title}</h2>
      <p>released: {game.releaseDate}</p>
      <p>available on {game.system}</p>
    </div>
  
  )
}

function ListBosses(){
  const bossList = bosses.map( boss => 
    <li 
    key={bosses.id} 
    style = {{
      textDecorationLine: boss.isRequired ? 'underline' : 'none',
      color: boss.isRequired ? 'green' : 'red'
    }}
    >
      {boss.name}
    </li>
  );
  return(
    bossList
  )
}

function ShowLegend(){
  return(
    <div style= {{background: 'grey',
                  width: '200px'}}>
      <h3>Legend</h3>
      <p style= {{color: 'green'}}>required</p>
      <p style= {{color: 'red'}}>optional</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ShowGame/>
       <ListBosses/>
       <ShowLegend/>
      </header>
    </div>
  );
}

export default App;
