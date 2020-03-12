import React, { Component } from "react";
import "./cards.css";
import api from "../api";

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
    let novo_likes = parseInt(this.state.likes) + 1;
    api.put(
      `projetos/${this.props.id}`, JSON.stringify({likes:novo_likes})
    )
    .then( () => this.setState({ likes: novo_likes }) )
  }

  handleKeyDown(event){
    if(event.key === 'Enter') {
      api.post(
        `projeto/${this.props.id}/comentario`,
        { comentario: this.state.comentario }
      )
      .then(() => this.setState(
        { qtde_comentarios: this.state.qtde_comentarios + 1} ))
    }
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
