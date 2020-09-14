import React, { Component } from "react";
import Titulo from "../../components/Texto/Titulo";

import Button from "../../components/Button/Simples";
import { Link } from "react-router-dom";

import { TextoDados } from "../../components/Texto/Dados";
import InputSelect from "../../components/Inputs/Select";
import InputValor from "../../components/Inputs/InputValor";

import BlocoImagens from "../../components/Imagens/Bloco";

import Voltar from "../../components/Links/Voltar";

// import { connect } from 'react-redux';
// import * as actions from '../../actions/produtos';
// import AlertGeral from '../../components/Alert/Geral';

class DetalhesProduto extends Component {
  state = {
    nome: "Produto 1",
    disponibilidade: "disponivel",
    descricao: "",
    imagens: [
      "https://dummyimage.com/100x100/ff9900/000222.jpg",
      "https://dummyimage.com/100x100/ff9900/000222.jpg",
      "https://dummyimage.com/100x100/ff9900/000222.jpg",
      "https://dummyimage.com/100x100/ff9900/000222.jpg",
      "https://dummyimage.com/100x100/ff9900/000222.jpg",
      "https://dummyimage.com/100x100/ff9900/000222.jpg"
    ]
  };

  renderCabecalho() {
    const { nome } = this.state;
    // const { produto } = this.props;
    return (
      <div className="flex">
        <div className="flex-1 flex vertical">
          <Titulo tipo="h1" titulo={nome} />
          {/* {produto && ( */}
          <Link to={`/avaliacoes/gfgfgfdgfdgfdg}`}>
            <small>Ver Avaliações</small>
          </Link>
          {/* )} */}
        </div>
        <div className="flex-1 flex flex-end">
          <Button
            type="success"
            label="Salvar"
            onClick={() => alert("Salvo")}
          />
        </div>
      </div>
    );
  }

  renderDados() {
    const {
      nome,
      disponibilidade,
      descricao
      //   categoria,
      //   preco,
      //   promocao,
      //   sku,
      //   erros
    } = this.state;
    //const { categorias } = this.props;
    return (
      <div className="Dados-Produto">
        <TextoDados
          chave="Nome"
          valor={
            <InputValor
              value={nome}
              noStyle
              name="nome"
              //erro={erros.nome}
              //handleSubmit={valor => this.onChangeInput("nome", valor)}
              handleSubmit={valor => this.setState({ nome: valor })}
            />
          }
        />
        <TextoDados
          chave="Disponibilidade"
          valor={
            <InputSelect
              name="disponibilidade"
              onChange={ev =>
                this.onChangeInput("disponibilidade", ev.target.value)
              }
              value={disponibilidade}
              opcoes={[
                { label: "Disponível", value: "disponivel" },
                { label: "Indisponível", value: "indisponivel" }
              ]}
            />
          }
        />
        <br />
        {/* <TextoDados
          chave="Categoria"
          valor={
            <InputSelect
              name="categoria"
              onChange={ev => this.onChangeInput("categoria", ev.target.value)}
              value={categoria}
              opcoes={(categorias || []).map(item => ({
                label: item.nome,
                value: item._id
              }))}
            />
          }
        /> */}
        <br />
        <TextoDados
          chave="Descricao"
          vertical
          valor={
            <textarea
              name={"descricao"}
              //onChange={ev => this.onChangeInput("descricao", ev.target.value)}
              onChange={ev => this.setState({ descricao: ev.target.value })}
              value={descricao}
              rows="10"
              style={{ resize: "none" }}
            />
          }
        />
        {/* <TextoDados
          chave="Preço"
          valor={
            <InputValor
              value={preco}
              noStyle
              name="preco"
              erro={erros.preco}
              handleSubmit={valor => this.onChangeInput("preco", valor)}
            />
          }
        /> */}
        {/* <TextoDados
          chave="Valor em Promoção"
          valor={
            <InputValor
              value={promocao}
              noStyle
              name="promocao"
              erro={erros.promocao}
              handleSubmit={valor => this.onChangeInput("promocao", valor)}
            />
          }
        /> */}
        {/* <TextoDados
          chave="SKU"
          valor={
            <InputValor
              value={sku}
              noStyle
              name="sku"
              erro={erros.sku}
              handleSubmit={valor => this.onChangeInput("sku", valor)}
            />
          }
        /> */}
      </div>
    );
  }

  //   onRemove = id => {
  //     const { usuario, produto } = this.props;
  //     if (!usuario || !produto) return null;
  //     const { fotos: _fotos } = this.state;
  //     const fotos = _fotos.filter((foto, index) => index !== id);
  //     if (window.confirm("Você deseja realmente remover essa imagem?")) {
  //       this.props.removeProdutoImagens(
  //         fotos,
  //         produto._id,
  //         usuario.loja,
  //         error => {
  //           this.setState({
  //             aviso: {
  //               status: !error,
  //               msg: error
  //                 ? error.message
  //                 : "Foto do produto removida com sucesso"
  //             }
  //           });
  //         }
  //       );
  //     }
  //   };

  onRemove = id => {
    const { imagens } = this.state;
    this.setState({ imagens: imagens.filter((i, idx) => idx !== id) });
  };

  renderImagens() {
    const { imagens } = this.state;
    return (
      <div className="dados-de-imagens">
        <BlocoImagens
          imagens={imagens}
          handleSubmit={() => alert("enviado")}
          onRemove={this.onRemove}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="Detalhes-do-Produto">
        {/* <Voltar history={this.props.history} /> */}
        <Voltar path="/produtos" />
        {this.renderCabecalho()}
        {/* <AlertGeral aviso={this.state.aviso} /> */}
        <br />
        <div className="flex horizontal">
          <div className="flex-1 flex vertical">{this.renderDados()}</div>
          <div className="flex-1 flex vertical">{this.renderImagens()}</div>
        </div>
      </div>
    );
  }
}

export default DetalhesProduto;
