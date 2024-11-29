import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");

  function handleValorChange(event) {
    let input = event.target.value.replace(/[^0-9]/g, "");
    if (input.length > 0) {
      input = (parseInt(input, 10) / 100).toFixed(2);
    }
    setValor(input);
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Cliente"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Serviço contratado"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <input
        type="date"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={data}
        onChange={(event) => setData(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Valor do serviço em reais (R$)"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={valor}
        onChange={handleValorChange}
      ></input>
      <button
        onClick={() => {
          if (!title.trim() || !description.trim() || !data.trim()) {
            return alert("Preencha o título, descrição e data do serviço.");
          }
          onAddTaskSubmit(title, description, data, parseFloat(valor) || 0);
          setTitle("");
          setDescription("");
          setData("");
          setValor("");
        }}
        className="bg-fuchsia-950	 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
