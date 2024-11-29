import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const data = searchParams.get("data");
  const valor = searchParams.get("valor");

  return (
    <div className="h-screen w-screen bg-fuchsia-900 p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)} //para o botão voltar p/ a pagina inicial
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-slate-100 text-3xl font-bold text-center">
            Detalhes dos serviços
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">Cliente: {title}</h2>
          <p className="text-slate-600">Serviço: {description}</p>
          <p className="text-slate-600">Data: {data}</p>
          <p className="text-slate-600">Valor: {valor}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
