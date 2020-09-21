import React, { Component } from "react";
import Titulo from "../../components/Texto/Titulo";
import ButtonSimples from "../../components/Button/Simples";
import { TextoDados } from "../../components/Texto/Dados";
import InputValor from "../../components/Inputs/InputValor";
import InputSimples from "../../components/Inputs/Simples";

class Perfil extends Component {
  state = {
    nome: "Usuário teste",
    email: "usuario@teste.com",
    telefone: "11 1234-4321",

    senhaAntiga: "",
    novaSenha: "",
    confirmarNovaSenha: ""
  };

  renderCabecalho() {
    return (
      <div className="flex">
        <div className="flex-1 flex">
          <Titulo tipo="h1" titulo="Perfil" />
        </div>
        <div className="flex-1 flex flex-end">
          <ButtonSimples
            type="success"
            onClick={() => alert("salvo")}
            label={"Salvar"}
          />
        </div>
      </div>
    );
  }

  renderDadosConfiguracao() {
    const { nome, telefone, email } = this.state;
    return (
      <div className="dados-perfil">
        <TextoDados
          chave="Nome"
          valor={
            <InputValor
              noStyle
              value={nome}
              name="nome"
              handleSubmit={valor => this.setState({ nome: valor })}
            />
          }
        />

        <TextoDados
          chave="E-mail"
          valor={
            <InputValor
              noStyle
              value={email}
              name="email"
              handleSubmit={valor => this.setState({ email: valor })}
            />
          }
        />
        <TextoDados
          chave="Telefone"
          valor={
            <InputValor
              noStyle
              value={telefone}
              name="telefone"
              handleSubmit={valor => this.setState({ telefone: valor })}
            />
          }
        />
      </div>
    );
  }

  renderDadosSenha() {
    const { senhaAntiga, novaSenha, confirmarNovaSenha } = this.state;
    return (
      <div className="dados-endereco">
        <InputSimples
          type="password"
          name="senha-antiga"
          label="Senha Antiga:"
          value={senhaAntiga}
          onChange={ev => this.setState({ senhaAntiga: ev.target.value })}
        />
        <InputSimples
          type="password"
          name="nova-senha"
          label="Nova Senha:"
          value={novaSenha}
          onChange={ev => this.setState({ novaSenha: ev.target.value })}
        />
        <InputSimples
          type="password"
          name="confirmar-nova-senha"
          label="Confirmar Nova Senha:"
          value={confirmarNovaSenha}
          onChange={ev =>
            this.setState({ confirmarNovaSenha: ev.target.value })
          }
        />
      </div>
    );
  }

  render() {
    return (
      <div className="Configuracoes full-width">
        <div className="Card">
          {this.renderCabecalho()}
          <div className="flex horizontal">
            <div className="flex-1">{this.renderDadosConfiguracao()}</div>
            <div className="flex-1">{this.renderDadosSenha()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Perfil;
