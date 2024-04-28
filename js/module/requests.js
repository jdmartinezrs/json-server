
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


//9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y
//fecha de entrega de los pedidos que no han sido entregados a tiempo.


export const getAllRequestsOutOfTime = async()=>{
    let res=await fetch("http://localhost:5508/requests")
    let data =await res.json();
    let dataUpdate = [];
    data.forEach(val=>{
        let fecha1 = new Date(val.date_wait);
        let fecha2 = new Date(val.date_delivery);
        if(fecha2 > fecha1){
            dataUpdate.push({
                code_request: val.code_request,
                code_client: val.code_client,
                date_wait: val.date_wait,
                date_delivery: val.date_delivery,
            })
        }
    })
    return dataUpdate;
}

//10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega
//de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

export const getAllRequestsWithTwoDaysOfAnticipation = async()=>{
    let res=await fetch("http://localhost:5508/requests")
    let data =await res.json();
    let dataUpdate = [];
    data.forEach(val=>{
        let fecha1 = new Date(val.date_wait);
        let fecha2 = new Date(val.date_delivery);
        if(fecha2 < fecha1){
            let diferenciaM = fecha1.getTime()-fecha2.getTime();
            let diferenciaD = diferenciaM / (1000*3600*24)
            if(diferenciaD>=2 && val.date_delivery != null){
                dataUpdate.push({
                    code_request: val.code_request,
                    code_client: val.code_client,
                    date_wait: val.date_wait,
                    date_delivery: val.date_delivery,
                })
            }
        }
    })
    return dataUpdate;
}

//11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`

export const getAllRejectedRequestAtTwoThosuandNine = async()=>{
    let res = await fetch ("http://localhost:5508/requests?status=Rechazado")
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val=>{     
        let[year]= val.date_request.split("-")
        if(year == "2009"){
            dataUpdate.push(val)
        
        }
    })
    return dataUpdate;
}

//12. Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.

export const getAllJanuaryDeliveredAnyYear = async()=>{
    let res = await fetch("http://localhost:5508/requests?status=Entregado");
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val =>{
        if(val.date_delivery !== null){
            let [year,month, day] = val.date_delivery.split("-");
            if(month === "01"){
                dataUpdate.push(val);
            }
        }
    }) 
    return dataUpdate;
}  
 

//Obtener el estado de un pedido mediante el codigo de su cliente
export const getAllOrdersByClientCode = async(code = "")=>{
    let res = await fetch(`http://localhost:5506/requests?code_client=${code}`).then(res => res.json());
    return res
}


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
