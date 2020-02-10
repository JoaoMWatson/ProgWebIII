import React from "react";
import "./App.css";

function App() {
  return (
    <>

    <div class="ui menu inverted fixed">
      <h2 class="item ">Claudio Fundais</h2>
      <button class="ui button primary">
        criar projetos
      </button>
      <div class="ui focus input right menu massive">
        <input type="text" placeholder="Procurar..." />
      </div>
    </div>

    <div class="ui container three column grid">

      <div class="column">
        <div class="ui card">
          <div class="image"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe1uuFovZHMBlCjay9_KWo6DGvTiXlQ6UL-j3e-jWr6x27rRYy"/>  </div>
          <div class="content">
            <div class="header">Haru</div>
            <div class="meta">Juntou-se em 2012</div>
            <div class="description">Haru é uma youtuber que o bruno ama xDD.</div>
          </div>
        </div>
      </div>

    </div>

    </>
  );
}

export default App;
