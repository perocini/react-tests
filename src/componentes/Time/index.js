import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) &&
        <section className={`${props.id} time`}>
            <h3 className={props.id}>{props.nome}</h3>
            <div className={`${props.id} time-colabs`}>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} item={colaborador} />)}
            </div>
        </section>
    )
}

export default Time