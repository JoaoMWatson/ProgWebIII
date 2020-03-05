import React, { Component } from "react";
import { Button, Modal, Form } from "semantic-ui-react";

class NewProjectModal extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      usuario: "",
      descricao: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = ({target}) => this.setState({ [target.name]: target.value})

  handleSubmit(evento){
    evento.preventDefault();
    this.props.inserirProjeto(this.state)
  }

  render() {
    return (
      <Modal>
        <Modal.Header>Crie seu projeto!!</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.hanldeSubmit}>
            <Form.Input
              name="nome"
              value={this.state.nome}
              onChange={this.handleInputChange}
              label="Nome do projeto"
            />
            <Form.Input
              name="usuario"
              value={this.state.usuario}
              onChange={this.handleInputChange}
              label="Autor do projeto"
            />
            <Form.TextArea
              name="descricao"
              value={this.state.descricao}
              onChange={this.handleInputChange}
              label="Descrição do projeto"
            />
            <Button></Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default NewProjectModal;
