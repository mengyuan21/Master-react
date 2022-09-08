import {Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    // defined what intial state looks like
    this.state = {
      monsters:[], 
    };
  }



  //this function will run whenever this componet mount, put API requests here
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {return {monsters: users}}
      ))
  }

  //determined what to show
  render() {
    return (
      <div className="App">
        <input 
          className='searchBox' 
          type='search' 
          placeholder='search monsters here' 
          onChange={(event) => {
            const searchString = event.target.value.toLowerCase();
            const filterMonsters = this.state.monsters.filter((monster) => {
              return monster.name.includes(searchString)
            })
            this.setState(() => {
              return {monsters:filterMonsters}
            })
          }} 
        />
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            ) 
          })
        } 
      </div>
    );
  }
}

export default App;
