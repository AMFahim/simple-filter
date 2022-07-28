import { useState } from 'react';
import './App.css';
import { projectdb, projectTitledb } from './localDB/localDB';

function App() {
  const [filter, setFilter] = useState("all")
  let items = projectdb.filter(item => item.name.includes(filter))
  return (
    <div className="App">
      <h1>Hello World</h1>

      <div>
        {
          projectTitledb.map(item => (
            <button key={item.id} onClick={() => setFilter(item.name)} type="button" className={`${filter === item.name ? "btn1" : "btn2" }`}>{item.title}</button>
          ))
        }
      </div>
      <div>
        {
          items.map(item => (
            <div key={item.id}>
              <p>{item.des}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
