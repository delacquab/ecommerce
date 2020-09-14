import React from "react";

export default ({ value, name, opcoes, onChange, error }) => (
  <div className="1flex 1vertical">
    <select value={value} name={name} onChange={onChange}>
      {opcoes.map((opcao, idx) => (
        <option key={opcao.value} value={opcao.value}>
          {opcao.label}
        </option>
      ))}
    </select>
    {error && <small className="small-danger">{error}</small>}
  </div>
);
