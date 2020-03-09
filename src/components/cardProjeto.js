import React, { Component } from "react";
import "./cards.css";

class CardProjeto extends Component {
  constructor() {
    super();
    this.state = { likes: 0 };
    this.addLike = this.addLike.bind(this);
  }

  componentDidMount() {
    this.setState({
      likes: this.props.likes
    });
  }

  addLike() {
    let likes = parseInt(this.state.likes) + 1;
    fetch("http://localhost:8080/api/projetos/" + this.props.id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ likes: likes })
    })
      .then(result => result.json())
      .then(
        function(result) {
          this.setState({ likes: result.likes });
        }.bind(this)
      );
  }

  render() {
    return (
      <div class="column">
        <div class="ui card">
          <div class="content">
            <div class="header">{this.props.usuario}</div>
          </div>
          <div class="image espacinho">
            <img src="https://visualpharm.com/assets/387/Person-595b40b75ba036ed117da139.svg"/>
          </div>
          <div class="content">
            <div class="header">{this.props.nome}</div>
            <div class="description">{this.props.descricao}</div>
          </div>
          <div class="content">
            <span>
              <i aria-hidden="true" class="icon comment"></i>
              10 Comentarios
            </span>

            <span
              href="/"
              class="right floated "
              onClick={this.addLike}
            >
              <i aria-hidden="true" class="heart icon botao-like"></i>
              {this.state.likes} likes
            </span>
          </div>

          <div class="extra content">
            <i aria-hidden="true" class="like outline icon large"></i>
            Adicionar comentario ...
          </div>
        </div>
      </div>
    );
  }
}

export default CardProjeto;
