import React, { Component } from "react";
import moment from "moment";

import Titulo from "../../components/Texto/Titulo";

import Tabela from "../../components/Tabela/Simples";

class DetalhesDosPedidos extends Component {
  render() {
    //DADOS
    const dados = [
      {
        ID: "d6s7dd8d6s7dsa768",
        "Valor Total": 89.9,
        Data: moment().toISOString(),
        Situação: "Aguardando Pagamento",
        botaoDetalhes: "/pedido/d6s7dd8d6s7dsa768"
      },
      {
        ID: "d6s78drr6s7dsa768",
        "Valor Total": 189.9,
        Data: moment().toISOString(),
        Situação: "Aguardando Concluído",
        botaoDetalhes: "/pedido/d6s78drr6s7dsa768"
      },
      {
        ID: "d6s78dyy6s7dsa768",
        "Valor Total": 8,
        Data: moment().toISOString(),
        Situação: "Aguardando Pagamento",
        botaoDetalhes: "/pedido/d6s78dyy6s7dsa768"
      }
    ];

    return (
      <div className="Detalhes-dos-Pedidos">
        <Titulo tipo="h3" titulo="Pedidos Feitos" />

        <br />
        <Tabela
          cabecalho={["ID", "Valor Total", "Data", "Situação"]}
          dados={dados}
        />
      </div>
    );
  }
}

export default DetalhesDosPedidos;
