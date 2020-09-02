import React, { Component } from "react";
import Titulo from "../../components/Texto/Titulo";
import ListaDinamicaSimples from "../../components/Listas/ListaDinamicaSimples";
import InputValor from "../../components/Inputs/InputValor";

class DetalhesDaEntrega extends Component {
  state = {
    status: [
      "Preparando para Envio",
      "Entregue a Transportadora",
      "Em trânsito"
    ],
    codigoDeRastreamento: "PA123456BR"
  };

  onRemoveListaDinamica = index => {
    let { status } = this.state;
    status = status.filter((item, _index) => _index !== index);
    this.setState({ status });
  };

  onAddListaDinamica = texto => {
    if (!texto) return false;
    let { status } = this.state;
    status.push(texto);
    this.setState({ status });
  };

  handleSubmit = value => {
    this.setState({ codigoDeRastreamento: value });
    alert("SALVO!");
  };

  render() {
    const { status, codigoDeRastreamento } = this.state;
    return (
      <div className="Detalhes-da-Entrega">
        <Titulo tipo="h4" titulo="Entrega" />
        <br />
        <label>Código de Rastreamento</label>
        <InputValor
          value={codigoDeRastreamento}
          handleSubmit={value => this.handleSubmit(value)}
          name={"codigoDeRastreamento"}
        />
        <br />
        <ListaDinamicaSimples
          dados={status}
          //onRemove={this.onRemoveListaDinamica}
          onAdd={this.onAddListaDinamica}
        />
      </div>
    );
  }
}

export default DetalhesDaEntrega;
