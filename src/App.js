import './App.css';
import axios from 'axios';

function App() {

  var options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1'},
    headers: {
      'x-api-key': 'U62XEMG_finzHFoYUYGPboSfbxpjb6abCLSNUzOL24c'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div className="App">
      hhe

    </div>
  );
}

export default App;
