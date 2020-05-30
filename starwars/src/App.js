import React, {useState, useEffect} from 'react';
import './App.css';
import {Container, Row} from "reactstrap";
import axios from "axios"
import Header from "./components/Header";
import CharacterCard from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("https://rickandmortyapi.com/api/character/");
  const [info, setInfo] = useState("");

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    const getData = ()=>{
      axios.get(query)
      .then(res => {
        setData(res.data.results)
        setInfo(res.data.info);
      });
    };

    getData();
  }, [query]);

  return (
    <div className="App">
    <Header setQuery={setQuery} info={info} setInfo={setInfo} />
      <h1 className="Header">Characters</h1>
      <Container>
        <Row sm={5}>
          {data.map(character => (
            <CharacterCard data={character} setQuery={setQuery}  />
          ))}
        </Row>
      </Container>
      
      
    </div>
  );
}

export default App;
