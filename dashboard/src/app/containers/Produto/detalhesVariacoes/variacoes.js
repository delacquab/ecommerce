import React, { Component } from "react";
import Titulo from "../../../components/Texto/Titulo";

class Variacoes extends Component {
  state = {
    variacaoSelecionada: "HJKDSdsjSA",
    variacoes: [
      { nome: "P", id: "HJKDSdsjSA" },
      { nome: "M", id: "HJKDSLG7dd" }
    ]
  };
  render() {
    const { variacoes, variacaoSelecionada } = this.state;
    return (
      <div className="Variacoes flex vertical flex-center">
        <Titulo tipo="h2" titulo="Variações" />
        {variacoes.map((item, idx) => (
          <div
            className={`flex flex-center variacao-item ${
              variacaoSelecionada === item.id ? "variacao-item-ativa" : ""
            }`}
            onClick={() => this.setState({ variacaoSelecionada: item.id })}
          >
            <span>{item.nome}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Variacoes;
