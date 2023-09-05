import './CampoTexto.css'

export const CampoTexto = (props) => {
    const phAlterado = `${props.placeholder}...`;

    const evDigitado = (evento) => {
        props.evAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={evDigitado} type="text" placeholder={phAlterado} required={props.obrigatorio} />
        </div>
    )
}
