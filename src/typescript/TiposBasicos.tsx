

const TiposBasicos = () => {

    let nombre : string = "Cesar";
    const edad:number = 33;
    const active:boolean = false; 
    const poderes : string[] = [ 'kameha', 'katon', 'doton' ];
    return (
        <>
            <h3>Tipos Basiscos</h3>
            { nombre }, { edad }, { (active) ? 'activo' : 'No activo' }
            <br />
            { poderes.join(', ') }
        </>
    );
};

export default TiposBasicos;