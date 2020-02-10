import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div class="ui menu inverted fixed">
        <h2 class="ui header item">ClaudioFundais</h2>
        <span class="item">
          <button class="ui animated blue basic inverted button ">
            <span class="visible content">Criar Projeto</span>
            <span class="hidden content">
              <i aria-hidden="true" class="arrow right icon"></i>
            </span>
          </button>
        </span>
        <div class="ui inverted input item right">
          <input type="text" placeholder="Procurar..." />
        </div>
      </div>

      <div class="ui center aligned container grid ">

        <div class="four wide colum">
          
          <div class="ui card">
            <div class="image">
              <img src="logo.svg"/>
            </div>
            <div class="content">
              <div class="header">Elliot Baker</div>
              <div class="meta">Friend</div>
              <div class="description">
                Elliot is a sound engineer living in Nashville who enjoys
                playing guitar and hanging with his cat.
              </div>
            </div>
            <div class="extra content">
              <a>
                <i aria-hidden="true" class="comment icon"></i>
                15 Comentarios
              </a>
            </div>
          </div>

        </div>

      
        
      </div>
    </>
  );
}

export default App;
