import { 
    getAllMadridClients,
    getAllSpanishClientsNames,
    getListClientsPayIn2008
} from "./module/clients.js";





import { 
    getAllOficceAndCodeCity,
    getAllCityNamesAndMovilNUmbersOfSpanishOffices

} from "./module/offices.js";


import { 

    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllFullnamePositionDiferentSalesRepresentative

} from "./module/employees.js";

import { 
    getAllTheProductStatus,
    getAllRequestsOutOfTime,
    getAllRequestsWithTwoDaysOfAnticipation,
    getAllRejectedRequestAtTwoThosuandNine,
    getAllJanuaryDeliveredAnyYear

} from "./module/requests.js";

import { 
    getAllPaymentsFromPayPalEachYear,
    getAllPaymentMethods

} from "./module/payments.js";

import{
    getAllOrnamentalProductsWithMoreThan100Stock
}
from"./module/product.js"
console.log(await getAllOrnamentalProductsWithMoreThan100Stock());

