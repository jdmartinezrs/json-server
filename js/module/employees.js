

// 3. Devuelve un listado con el nombre, apellidos y email de los empleados 
// cuyo jefe tiene un código de jefe igual a 7.
export const getAllFullNameAndEmailsAndBoss = async() =>{
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return {
            
            fullname: `${val.name} ${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0],
            codigodeljefe: val.code_boss
        }
    })
    return dataUpdate;
}

// 4. Devuelve el nombre del puesto, nombre, apellidos y
//  email del jefe de la empresa.
export const getBossFullNameAndEmail = async() =>{
    let res=await fetch("http://localhost:5502/employees")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.code_boss == null){
            dataUpdate.push({
                position: val.position,
                
                fullname: `${val.name}     ${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
            })
        }
    })
    return dataUpdate
}
//5. Devuelve un listado con el nombre, apellidos y puesto de aquellos 
// empleados que no sean representantes de ventas.
export const getAllFullnamePositionDiferentSalesRepresentative = async()=>{
    let res = await fetch("http://localhost:5502/employees?position_ne=Representante Ventas")
    let data = await res.json();
    let dataUpdata = []
    data.forEach(val => {
        if(val.code_boss != null){
            dataUpdata.push({
                fullname:`${val.name}${val.lastname1}${val.lastname2}`,
                position: val.position,
            })
        }
    });
    return dataUpdata;
}


// Obtener toda la informacion del empleado por codigo
export const getEmployeeSaleAgent= async(code)=>{
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`)
    let data = await res.json()
    return data
}



export const getEmployeesSales = async (code) => {
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}

// 8.Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

export const getEmployeesWithBossesAndBossesOfBosses = async () => {
    let dataEmployees = await getAllEmploy();
    for (let i = 0; i < dataEmployees.length; i++) {
        let { code_boss, name, lastname1, lastname2 } = dataEmployees[i];
        let bossName = null;
        if (code_boss) {
            let [boss] = await getEmployByCode(code_boss);
            if (boss) {
                bossName = boss.name; // Almacena el nombre del jefe
            }
        }
        dataEmployees[i] = { name, lastname1, lastname2, boss: bossName };
    }
    return dataEmployees;
};



export const getEmployByCode = async(code) =>{
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}
export const getAllEmploy = async() =>{
    let res = await fetch(`http://localhost:5502/employees`);
    let data = await res.json();
    return data;
}







