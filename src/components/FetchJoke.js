import React from 'react';
import '../App.css';
import giphy from '../giphy.gif';
import { useEffect, useState } from 'react';
import axios from 'axios';

function FetchJoke() {
  const [data, setData] = useState();
  useEffect(() => {
    getJoke();
  }, []);
  const getJoke = async () => {
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then((res) => {
        setData(res.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container'>
      <img src={giphy} alt='chuck norris' />
      <h1 className='joke'>{data}</h1>
      <button onClick={() => getJoke()}>New Joke</button>
    </div>
  );
}

export default FetchJoke;
