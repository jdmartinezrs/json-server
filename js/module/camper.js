export const getAllProfile = async()=>{
    let conecion = await fetch("http://localhost:3000/profile", {method: "GET"});
    let data = await conecion.json();
    return data;
}
export const postProfile = async(name, edad)=>{
    let conexion = await fetch("http://localhost:3000/profile", 
    {
        method: "POST",
        body: JSON.stringify({name, edad})
    }
    );
    let data = await conexion.json();
    return data
}