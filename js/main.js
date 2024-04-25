import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil 
} from "./module/offices.js";
import { 
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllFullnamePositionDiferentSalesRepresentative,
    getAllFullNameAndBossAndBoss

} from "./module/employees.js";

import { 
    getAllClientsFromCityAndCode,
    getAll,
    getAllSpanishClientsNames,
    getAllclientNamesAndMannagerFullName 
} from "./module/clients.js";

import { 
    getAllPaymentsFromPayPalEachYear,
    getAllCodeClientsWhoPayedInTwoThousanEight,
   
} from "./module/payments.js";


// console.log(await getAllSpanishClientsNames());
// console.log(await getAllCodeClientsWhoPayedInTwoThousanEight());

import { 
    getAllCancelledRequestsInTwoThousandNin,
    getAllTheProductStatus
} from "./module/requests.js";

//  console.log(await getAllCancelledRequestsInTwoThousandNine());

// console.log(await getAllTheProductStatus());
console.log (await  getAllclientNamesAndMannagerFullName ());