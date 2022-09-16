import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

// eslint-disable-next-line no-unused-vars
const [el, setel]=useState({
  q:"Australia"
});

  function makereq(q){

    var options = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {q: q, lang: 'en', sort_by: 'relevancy', page: '1'},
      headers: {
        'x-api-key': 'U62XEMG_finzHFoYUYGPboSfbxpjb6abCLSNUzOL24c'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div className="App">
      hhe
      <button onClick={()=>{makereq(el.q)}}>click</button>

    </div>
  );
}

export default App;
