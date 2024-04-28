import { 
    getAllMadridClients,
    getAllSpanishClientsNames,
    getListClientsPayIn2008,
    getClientAndSaleAgentFullName,
    getClientsWithSalesRepresentatives,
    getClientsWithoutPayments,
    getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity,
    getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity 

    
} from "./module/clients.js";







import { 
    getAllOficceAndCodeCity,
    getAllCityNamesAndMovilNUmbersOfSpanishOffices,
    

} from "./module/offices.js";


import { 

    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllFullnamePositionDiferentSalesRepresentative,
    

} from "./module/employees.js";


import { 
    getAllTheProductStatus,
    getAllRequestsOutOfTime,
    getAllRequestsWithTwoDaysOfAnticipation,
    getAllRejectedRequestAtTwoThosuandNine,
    getAllJanuaryDeliveredAnyYear,
    getAllPaymentsStatus 

} from "./module/requests.js";

console.log(await getAllPaymentsStatus ());

import { 
    getAllPaymentsFromPayPalEachYear,
    getAllPaymentMethods

} from "./module/payments.js";

import{
    getAllOrnamentalProductsWithMoreThan100Stock
}
from"./module/product.js"


