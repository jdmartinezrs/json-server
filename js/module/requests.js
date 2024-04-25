export const getAllCancelledRequestsInTwoThousandNine = async()=>{
    let res = await fetch ("http://localhost:5508/requests")
    let data = await res.json();
    return data;
    // let clientUpdated = data.map(val =>{
    //     return{
    //         status: val.status,
    //         date_delivery: val.date_delivery
    //     }
    // });
    // return clientUpdated;

};

//7Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllTheProductStatus= async()=>{
    let res= await fetch ("http://localhost:5508/requests")
    let data = await res.json();
    let dataUpdated = data.map(val=>{
        return{

            status: val.status
           
            

        }
    });
    return dataUpdated;
};