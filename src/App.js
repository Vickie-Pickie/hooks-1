import './App.css';
import React, {
  useEffect,
  useState,
} from 'react';
import List from './List';
import Details from './Details';

function App() {
  const [list, setList] = useState([]);
  const [info, setInfo] = useState(null);

  const fetchData = async() => {
    let response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
    let result = await response.json();
    setList(result);
  }

  useEffect( () => {
    fetchData();
  }, []);

  const onNameClick = (item) => {
    setInfo(item);
  };

  return (
    <div className="App">
      <List list={list} onNameClick={onNameClick}/>
      {
        info && <Details info={info}/>
      }
    </div>
  );
}

export default App;
