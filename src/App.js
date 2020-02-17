import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lista: []
    };
  }


  componentDidMount(){
    fetch("http://localhost:8080/api/projetos")
    .then(res => res.json())
    .then((result) => {
      this.setState({lista: result.data})
    });
  }

  render() {
    return (
      <>
        <div class="ui menu inverted">
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
        <div class="bloco">
          <div class="ui stackable container three column grid">
            {this.state.lista.map(function(projeto) {
              return (
                <div class="column">
                  <div class="ui card">
                    <div class="image">
                      <img src="logo.svg" />
                    </div>
                    <div class="content">
                      <div class="header"> {projeto.nome} </div>
                      <div class="meta">
                        <span class="date">{projeto.usuario}</span>
                      </div>
                      <div class="description">
                        {projeto.descricao}
                      </div>
                    </div>
                    <div class="extra content">
                      <a>
                        <i aria-hidden="true" class="like icon"></i>
                        {projeto.likes} Likes
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        )
      </>
    );
  }
}

export default App;
