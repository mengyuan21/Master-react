import {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';


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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
            this.setState(() => {
              return {searchField}
            })
  }

  //determined what to show
  render() {

    const {monsters,searchField} = this.state
    const {onSearchChange} = this

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <input 
          className='searchBox' 
          type='search' 
          placeholder='search monsters here' 
          onChange={onSearchChange} 
        />
        {/* {
          filterMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            ) 
          })
        }  */}
        <CardList monsters={filterMonsters}/>
      </div>
    );
  }
}

export default App;
