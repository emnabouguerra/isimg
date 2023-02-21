import { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [posts , setPosts] =useState([]);
  axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
    setPosts(response.data)

  })
  .catch(function(error){
    console.log(error);
  })
  return (
    <div className="App">
     <header className="App-header">
      {posts.map((posts)=><h1>{posts.title}</h1>)}
     </header>
    </div>
  );
}

export default App;
