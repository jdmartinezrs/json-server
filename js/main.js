import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil 
} from "./module/offices.js";
import { 
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllFullnamePositionDiferentSalesRepresentative
} from "./module/employees.js";

import { 
    getAllClientsFromCityAndCode,
    getAll,
    getAllSpanishClientsNames
} from "./module/clients.js";

import { 
    getAllPaymentsFromPayPalEachYear,
    getAllCodeClientsWhoPayedInTwoThousanEight
} from "./module/payments.js";


// console.log(await getAllSpanishClientsNames());
console.log(await getAllCodeClientsWhoPayedInTwoThousanEight());