import React from "react";
import Titulo from "../../components/Texto/Titulo";
import ButtonSimples from "../../components/Button/Simples";
import InputValor from "../../components/Inputs/InputValor";
import { TextoDados } from "../../components/Texto/Dados";
import Voltar from "../../components/Links/Voltar";

class DetalhesDoCliente extends React.Component {
  state = {
    nome: "Cliente 1",
    CPF: "111.222.333-45",
    telefone: "12 1234-5678",
    dataDeNascimento: "10/01/2019",
    email: "cliente1@hotmail.com",

    endereco: "Rua teste, 123",
    bairro: "centro",
    cidade: "Bauru",
    estado: "SP",
    cep: "14325-198"
  };

  handleSubmit = (field, value) => {
    this.setState({ [field]: value });
  };

  renderCabecalho() {
    const { nome } = this.state;
    return (
      <div className="flex">
        <div className="flex-1 flex">
          <Titulo tipo="h1" titulo={nome} />
        </div>
        <div className="flex-1 flex flex-end">
          <ButtonSimples
            onClick={() => alert("Salvo!")}
            label="Salvar"
            type="success"
          />
          <ButtonSimples
            onClick={() => alert("Removido")}
            label="Remover"
            type="danger"
          />
        </div>
      </div>
    );
  }

  renderDetalhesCadastro() {
    const { nome, CPF, email, telefone, dataDeNascimento } = this.state;
    return (
      <div className="Detalhes-do-Cadastro">
        <TextoDados
          chave="Nome"
          valor={
            <InputValor
              name="nome"
              handleSubmit={valor => this.handleSubmit("nome", valor)}
              value={nome}
              noStyle
            />
          }
        />
        <TextoDados
          chave="CPF"
          valor={
            <InputValor
              name="CPF"
              handleSubmit={valor => this.handleSubmit("CPF", valor)}
              value={CPF}
              noStyle
            />
          }
        />
        <TextoDados
          chave="Telefone"
          valor={
            <InputValor
              name="telefone"
              handleSubmit={valor => this.handleSubmit("telefone", valor)}
              value={telefone}
              noStyle
            />
          }
        />
        <TextoDados
          chave="E-mail"
          valor={
            <InputValor
              name="email"
              handleSubmit={valor => this.handleSubmit("email", valor)}
              value={email}
              noStyle
            />
          }
        />
        <TextoDados
          chave="Data de Nascimento"
          valor={
            <InputValor
              name="datadenascimento"
              handleSubmit={valor =>
                this.handleSubmit("dataDeNascimento", valor)
              }
              value={dataDeNascimento}
              noStyle
            />
          }
        />
      </div>
    );
  }

  renderDetalhesEntrega() {
    const { endereco, bairro, cidade, estado, cep } = this.state;
    return (
      <div className="Detalhes-da-Entrega">
        <TextoDados
          chave="Endereço"
          valor={
            <InputValor
              name="endereco"
              handleSubmit={valor => this.handleSubmit("endereco", valor)}
              value={endereco}
              noStyle
            />
          }
        />
        <TextoDados
          chave="Bairro"
          valor={
            <InputValor
              name="bairro"
              handleSubmit={valor => this.handleSubmit("bairro", valor)}
              value={bairro}
              noStyle
            />
          }
        />
        <TextoDados
          chave="Cidade"
          valor={
            <InputValor
              name="cidade"
              handleSubmit={valor => this.handleSubmit("cidade", valor)}
              value={cidade}
              noStyle
            />
          }
        />
        <TextoDados
          chave="Estado"
          valor={
            <InputValor
              name="estado"
              handleSubmit={valor => this.handleSubmit("estado", valor)}
              value={estado}
              noStyle
            />
          }
        />
        <TextoDados
          chave="CEP"
          valor={
            <InputValor
              name="cep"
              handleSubmit={valor => this.handleSubmit("cep", valor)}
              value={cep}
              noStyle
            />
          }
        />
      </div>
    );
  }

  render() {
    return (
      <div className="DetalhesDoCliente">
        <Voltar path="/clientes" />
        {this.renderCabecalho()}
        <div className="flex horizontal">
          <div className="flex-1 flex vertical">
            {this.renderDetalhesCadastro()}
          </div>
          <div className="flex-1 flex vertical">
            {this.renderDetalhesEntrega()}
          </div>
        </div>
      </div>
    );
  }
}

export default DetalhesDoCliente;
