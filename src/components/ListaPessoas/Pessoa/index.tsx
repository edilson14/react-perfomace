import { memo } from "react";

interface IPessoas {
    deletar: Function;
    pessoa: { name: string, id: string };
}

function Pessoa(props: IPessoas) {
    const { deletar, pessoa } = props;
    return (<li className="box mb-3">
        {pessoa.name}
        <button onClick={() => deletar(pessoa)}
            className="button is-danger ml-2">
            Remover
        </button>
    </li>)
}


export default memo(Pessoa);