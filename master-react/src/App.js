import {useEffect, useState} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Title from './components/title/title.component';


const App = () => {
  const [searchField, setSearchField] = useState('') // [value, setValueFunction]
  const [monsters, setMonsters] = useState([])
  const [filterMonsters, setFilterMonsters] = useState(monsters)


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  //useEffect(): Call API
  useEffect(() => {
    console.log('useEffect() called')
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => setMonsters(users))
  },[])

  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilterMonsters);
  }, [monsters, searchField])


  return(
    <div className="App">
      <Title/>
      <SearchBox onSearchChange={onSearchChange} placeholder='search monsters'/>
      <CardList monsters={filterMonsters}/>
  </div>
  )
}

export default App;
