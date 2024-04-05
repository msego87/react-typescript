interface ComponenteHijoProps{
    name: string;
    apeliido1: string;
    apeliido2?: string;
    edad: number;
    clickReturnName: (nameComplete: string) => void
}

export function ComponenteHijo(props: ComponenteHijoProps): JSX.Element{

    const devolverNomnbre = () => {

        let nombreCompleto;

        (props.apeliido2 != undefined) ? nombreCompleto = props.name + ' ' + props.apeliido1 + ' ' + props.apeliido2 : nombreCompleto = props.name + ' ' + props.apeliido1;
        
        props.clickReturnName(nombreCompleto);        
    }

    return<>
    Hola {props.name + ' ' + props.apeliido1 + ' '}
    { (props.apeliido2 != undefined) ? props.apeliido2 : null }
    <br />
    Edad: {props.edad} años.
    <br />
    <button
        onClick={()=>{
            devolverNomnbre()
        }}
    >
        Devolver el nombre completo
    </button>
    </>
}
