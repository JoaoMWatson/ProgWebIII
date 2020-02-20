import React, { Component } from "react";
import "./cards.css";

class CardProjeto extends Component {
  render() {
    return (
      <div class="column">
        <div class="ui card">
          <div class="content">
            <div class="header">{this.props.usuario}</div>
          </div>
          <div class="image espacinho">
            <img src="https://visualpharm.com/assets/387/Person-595b40b75ba036ed117da139.svg" />
          </div>
          <div class="content">
            <div class="header">{this.props.nome}</div>
            <div class="description">{this.props.descricao}</div>
          </div>
          <div class="extra content">
            <div class="right floated">
              <a>
                <i aria-hidden="true" class="like outline icon"></i>
                {this.props.likes} Likes
              </a>
            </div>
            <a>
              <i aria-hidden="true" class="icon comment"></i>
              {/* {this.props.likes}  */}
              10 Comentarios
            </a>
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
