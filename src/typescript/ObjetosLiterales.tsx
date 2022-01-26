
interface Persona {
    nombre: string,
    edad: number,
    direccion:Direccion
}

interface Direccion {
    pais:string,
    casaNo:number
}

const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Cesar',
        edad: 35,
        direccion:{
            pais:'venezuela',
            casaNo:15
        }
    }

    return (
        <>
            <h3> Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify(persona,null,2) }
                </pre>
            </code>
        </>
    );
};

export default ObjetosLiterales;