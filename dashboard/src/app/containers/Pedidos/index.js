import React, { Component } from "react";
import moment from "moment";

import Titulo from "../../components/Texto/Titulo";

import Pesquisa from "../../components/Inputs/Pesquisa";
import Tabela from "../../components/Tabela/Simples";
import Paginacao from "../../components/Paginacao/Simples";

class Pedidos extends Component {
  state = {
    pesquisa: "",
    atual: 0,
  };

  onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });
  changeNumeroAtual = (atual) => this.setState({ atual });

  render() {
    const { pesquisa } = this.state;

    //DADOS
    const dados = [
      {
        Cliente: "Cliente 1",
        "Valor Total": 89.9,
        Data: moment().toISOString(),
        Situação: "Aguardando Pagamento",
        botaoDetalhes: "/pedido/d6s7dd8d6s7dsa768",
      },
      {
        Cliente: "Cliente 2",
        "Valor Total": 189.9,
        Data: moment().toISOString(),
        Situação: "Aguardando Concluído",
        botaoDetalhes: "/pedido/d6s78drr6s7dsa768",
      },
      {
        Cliente: "Cliente 3",
        "Valor Total": 8,
        Data: moment().toISOString(),
        Situação: "Aguardando Pagamento",
        botaoDetalhes: "/pedido/d6s78dyy6s7dsa768",
      },
    ];

    return (
      <div className="Pedidos">
        <div className="Card">
          <Titulo tipo="h1" titulo="Pedidos" />
          <br />
          <Pesquisa
            valor={pesquisa}
            placeholder={"Pesquisa aqui pelo nome do cliente..."}
            onChange={(ev) => this.onChangePesquisa(ev)}
            onClick={() => alert("Pesquisar")}
          />
          <br />
          <Tabela
            cabecalho={["Cliente", "Valor Total", "Data", "Situação"]}
            dados={dados}
          />
          {
            <Paginacao
              atual={this.state.atual}
              total={120}
              limite={20}
              onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
            />
          }
        </div>
      </div>
    );
  }
}

export default Pedidos;
