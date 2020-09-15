import React, { Component } from "react";
import moment from "moment";

import Titulo from "../../components/Texto/Titulo";
import Tabela from "../../components/Tabela/Simples";
import Voltar from "../../components/Links/Voltar";

class Avaliacoes extends Component {
  render() {
    const dados = [
      {
        Cliente: "Cliente 1",
        Data: moment().format("DD/MM/YYYY"),
        botaoDetalhes: "/avaliacao/dddd6s78dyy6s7dsa768"
      },
      {
        Cliente: "Cliente 2",
        Data: moment().format("DD/MM/YYYY"),
        botaoDetalhes: "/avaliacao/d6s78dytty6s7dsa768"
      },
      {
        Cliente: "Cliente 3",
        Data: moment().format("DD/MM/YYYY"),
        botaoDetalhes: "/avaliacao/d6s78dyy6sjj7dsa768"
      },
      {
        Cliente: "Cliente 4",
        Data: moment().format("DD/MM/YYYY"),
        botaoDetalhes: "/avaliacao/d6s78dydd6s7dsa768"
      },
      {
        Cliente: "Cliente 5",
        Data: moment().format("DD/MM/YYYY"),
        botaoDetalhes: "/avaliacao/d6s78drryy6s7dsa768"
      },
      {
        Cliente: "Cliente 6",
        Data: moment().format("DD/MM/YYYY"),
        botaoDetalhes: "/avaliacao/d6s78dyyhh6s7dsa768"
      }
    ];

    return (
      <div className="Avaliacoes full-width">
        <div className="Card">
          <Voltar path="/produto/hkjfhfkjdhfkjd" />

          <Titulo tipo="h1" titulo="Avaliações - Produto 1" />
          <br />

          <Tabela cabecalho={["Cliente", "Data"]} dados={dados} />
        </div>
      </div>
    );
  }
}

export default Avaliacoes;
