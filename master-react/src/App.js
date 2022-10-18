import {Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    // defined what intial state looks like
    this.state = {
      monsters:[], 
      searchField: '',
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

    const filterMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <input 
          className='searchBox' 
          type='search' 
          placeholder='search monsters here' 
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();
            this.setState(() => {
              return {searchField}
            })
          }} 
        />
        {
          filterMonsters.map((monster) => {
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
