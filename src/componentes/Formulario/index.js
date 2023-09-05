import { useState } from 'react';
import Botao from '../Botao';
import { CampoTexto } from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const evSalvar = (evento) => {
        evento.preventDefault();
        console.log('enviado => ', nome, cargo, imagem, time)
        props.evCadastrado({nome, cargo, imagem, time})
        setNome(''); setCargo(''); setImagem(''); setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={evSalvar}>
                <h2>Preencha o formulário para cadastrar o colaborador</h2>
                <CampoTexto label="Nome" placeholder="Informe seu nome" obrigatorio={true} 
                    valor={nome} evAlterado={valor => setNome(valor)} />
                <CampoTexto label="Cargo" placeholder="Informe seu cargo" obrigatorio={true} 
                    valor={cargo} evAlterado={valor => setCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="URL da sua imagem" 
                    valor={imagem} evAlterado={valor => setImagem(valor)} />
                <ListaSuspensa label="Time" itens={props.times} obrigatorio={true}
                    valor={time} evAlterado={valor => setTime(valor)} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario