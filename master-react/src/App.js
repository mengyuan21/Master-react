import {useEffect, useState} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Title from './components/title/title.component';


const App = () => {
  const [searchField, setSearchField] = useState('') // [value, setValueFunction]
  const [monsters, setMonsters] = useState([])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => setMonsters(users))
  },[])

  const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

  return(
    <div className="App">
      <Title/>
      <SearchBox onSearchChange={onSearchChange} placeholder='search monsters'/>
      <CardList monsters={filterMonsters}/>
  </div>
  )
}

export default App;
