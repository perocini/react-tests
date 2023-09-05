import './Colaborador.css'

const Colaborador = (props) => {
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src={props.item.imagem} alt={props.item.nome} />
            </div>
            <div className="rodape">
                <h4>{props.item.nome}</h4>
                <h5>{props.item.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador