import { 
    getAllMadridClients,
    getAllSpanishClientsNames,
    getListClientsPayIn2008,
    getClientAndSaleAgentFullName,
    getClientsWithSalesRepresentatives,
    getClientsWithoutPayments,
    getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity,
    getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity,
    getClientsEmploy,
    

    
} from "./module/clients.js";


console.log(await getAllJanuaryDeliveredAnyYear());




import { 
    getAllOficceAndCodeCity,
    getAllCityNamesAndMovilNUmbersOfSpanishOffices,
    

} from "./module/offices.js";


import { 

    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllFullnamePositionDiferentSalesRepresentative,
    getEmployeesWithBossesAndBossesOfBosses
    

} from "./module/employees.js";


import { 
    getAllTheProductStatus,
    getAllRequestsOutOfTime,
    getAllRequestsWithTwoDaysOfAnticipation,
    getAllRejectedRequestAtTwoThosuandNine,
    getAllJanuaryDeliveredAnyYear,
    getAllPaymentsStatus 

} from "./module/requests.js";



import { 
    getAllPaymentsFromPayPalEachYear,
    getAllPaymentMethods

} from "./module/payments.js";

import{
    getAllOrnamentalProductsWithMoreThan100Stock
}
from"./module/product.js"


