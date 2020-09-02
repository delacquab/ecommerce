import React, { Component } from "react";
import Titulo from "../../components/Texto/Titulo";
import ButtonSimples from "../../components/Button/Simples";
import { TextoDados } from "../../components/Texto/Dados";
import TabelaSimples from "../../components/Tabela/Simples";

class DetalhesDoPedido extends Component {
  renderCabecalho() {
    return (
      <div>
        <div>
          <Titulo tipo="h2" titulo="Pedido - Cliente 1 - 04/04/2019" />
        </div>
        <div>
          <ButtonSimples
            type="danger"
            label="CANCELAR PEDIDO"
            onClick={() => alert("Cancelando")}
          />
        </div>
      </div>
    );
  }

  renderDadosDoCliente() {
    return (
      <div>
        <Titulo tipo="h4" titulo="Dados do Cliente" />
        <br />
        <TextoDados chave="Nome" valor="Cliente 1" />
        <TextoDados chave="CPF" valor="111.222.333-45" />
        <TextoDados chave="Telefone" valor="11 1234-45678" />
        <TextoDados chave="Data de Nascimento" valor="10/04/1990" />
      </div>
    );
  }

  renderDadosDeEntrega() {
    return (
      <div>
        <Titulo tipo="h4" titulo="Dados de Entrega" />
        <br />
        <TextoDados chave="Endereço" valor="Rua teste, 123" />
        <TextoDados chave="Bairro" valor="Centro" />
        <TextoDados chave="Cidade" valor="Uberaba" />
        <TextoDados chave="Estado" valor="Minas Gerais" />
        <TextoDados chave="CEP" valor="38540-123" />
      </div>
    );
  }

  renderDadosDePagamento() {
    return (
      <div>
        <Titulo tipo="h4" titulo="Dados de Pagamento" />
        <br />
        <TextoDados chave="Taxa de Entrega" valor="R$ 15,50 (PAC)" />
        <TextoDados chave="Valor do Pedido" valor="R$ 32,00" />
        <TextoDados chave="Valor Total" valor="R$ 47,50" />
        <TextoDados chave="Forma de Pagamento" valor="BOLETO" />
      </div>
    );
  }

  renderDadosDoCarrinho() {
    const dados = [
      {
        Produto: "Produto 1",
        "Preço Und.": "R$ 10,00",
        Quantidade: "1",
        "Preço Total": "R$ 10,00"
      },
      {
        Produto: "Produto 2",
        "Preço Und.": "R$ 10,00",
        Quantidade: "2",
        "Preço Total": "R$ 20,00"
      }
    ];
    return (
      <div>
        <Titulo tipo="h4" titulo="Carrinho" />
        <br />
        <TabelaSimples
          cabecalho={["Produto", "Preço Und.", "Quantidade", "Preço Total"]}
          dados={dados}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="Detalhes-do-Pedido">
        {this.renderCabecalho()}
        {this.renderDadosDoCliente()}
        {this.renderDadosDoCarrinho()}
        {this.renderDadosDeEntrega()}
        {this.renderDadosDePagamento()}
      </div>
    );
  }
}

export default DetalhesDoPedido;
