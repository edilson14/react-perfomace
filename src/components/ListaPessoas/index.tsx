import { useCallback, useState } from "react";
import { faker } from '@faker-js/faker';

import Pessoa from "./Pessoa";

faker.locale = 'pt_BR';

export default function ListaPessoas() {
    const [pessoas, setPessoas] = useState<{ name: string, id: string }[]>
        ([{ name: 'Maria', id: faker.datatype.uuid() }, { name: 'João', id: faker.datatype.uuid() }])

    const removerPessoa = useCallback((pessoa: { name: string, id: string }) => {
        setPessoas(prevList => prevList.filter((_pess) => _pess.id !== pessoa.id));
    }, []);

    return (
        <div className="has-text-centered">
            <ul>
                {pessoas.map((pessoa) =>
                    <Pessoa
                        key={pessoa.id}
                        pessoa={pessoa}
                        deletar={() => removerPessoa(pessoa)} />)}
            </ul>

            <button className="button is-primary is-outlined"
                onClick={() => setPessoas((prevs) => [...prevs, { name: faker.name.fullName(), id: faker.datatype.uuid() }])}>
                Adicionar
            </button>
        </div>
    )
}