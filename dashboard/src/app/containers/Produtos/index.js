import React, { Component } from "react";

import Titulo from "../../components/Texto/Titulo";

import Pesquisa from "../../components/Inputs/Pesquisa";
import Tabela from "../../components/Tabela/Simples";
import Paginacao from "../../components/Paginacao/Simples";

class Produtos extends Component {
  state = {
    pesquisa: "",
    atual: 0
  };

  onChangePesquisa = ev => this.setState({ pesquisa: ev.target.value });
  changeNumeroAtual = atual => this.setState({ atual });

  render() {
    const { pesquisa } = this.state;

    //DADOS
    const dados = [
      {
        Produto: "Mouse 1",
        Categoria: "acessorios",
        Disponível: "sim",
        botaoDetalhes: "/produto/d6s78dyy6s7dsa768"
      },
      {
        Produto: "Mouse 2",
        Categoria: "acessorios",
        Disponível: "sim",
        botaoDetalhes: "/produto/d6s78dyyffffsa768"
      },
      {
        Produto: "Mouse 3",
        Categoria: "acessorios",
        Disponível: "sim",
        botaoDetalhes: "/produto/d6s78hhhh6s7dsa768"
      },
      {
        Produto: "Mouse 4",
        Categoria: "acessorios",
        Disponível: "sim",
        botaoDetalhes: "/produto/d6s78dyy6s7iiiii768"
      },
      {
        Produto: "Mouse 5",
        Categoria: "acessorios",
        Disponível: "sim",
        botaoDetalhes: "/produto/d6s7tttty6s7dsa768"
      }
    ];

    return (
      <div className="Clientes full-width">
        <div className="Card">
          <Titulo tipo="h1" titulo="Clientes" />
          <br />
          <div className="flex">
            <div className="flex-3">
              <Pesquisa
                valor={pesquisa}
                placeholder={
                  "Pesquisa aqui pelo nome do produto, descrição ou categoria..."
                }
                onChange={ev => this.onChangePesquisa(ev)}
                onClick={() => alert("Pesquisar")}
              />
            </div>
            <div className="flex flex-1 vertical">
              <label>
                <small>Ordenar por</small>
              </label>
              <select defaultValue="">
                <option>Aleatório</option>
                <option value={"oaA-Z"}>Alfabética A-Z</option>
                <option value={"oaZ-A"}>Alfabética Z-A</option>
                <option value={"op-menor"}>Preço Menor</option>
                <option value={"op-maior"}>Preço Maior</option>
              </select>
            </div>
            <div className="flex-1"></div>
          </div>
          <br />
          <Tabela
            cabecalho={["Produto", "Categoria", "Disponível"]}
            dados={dados}
          />
          {
            <Paginacao
              atual={this.state.atual}
              total={120}
              limite={20}
              onClick={numeroAtual => this.changeNumeroAtual(numeroAtual)}
            />
          }
        </div>
      </div>
    );
  }
}

export default Produtos;
