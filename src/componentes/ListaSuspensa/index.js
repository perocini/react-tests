import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    const evSelecionado = (evento) => {
        props.evAlterado(evento.target.value);
    }

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select title={props.label} required={props.obrigatorio} onChange={evSelecionado} value={props.valor} >
                <option value="">Selecione...</option>
                {props.itens.map(
                    item => <option value={item.id} key={item.id}>{item.nome}</option>
                )}
            </select>
        </div>
    )
}

export default ListaSuspensa