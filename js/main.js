import { 
    getAllOficceAndCodeCity, 
    getAllCityNamesAndMovilNUmbersOfSpanishOffices
} from "./module/offices.js";






import { 
   
    getBossFullNameAndEmail,
    getAllFullnamePositionDiferentSalesRepresentative,
    getAllFullNameAndEmailtoEmployeesBossIsSeventCod,
    getEmployeesByCode
} from "./module/employees.js";


import { 
    getAllClientsFromCityAndCode,
    getAll,
    getAllSpanishClientsNames,
    getAllclientNamesAndMannagerFullName,
    getAllEachClientNameAndSalesMan,
    getAllClientWhoPayedNamesAndSalesMan,
    getAllClientWhoNotPayedNamesAndSalesMan,
    getAllNotAlreadyClientsPaymentsAndManagerOffice,
    getAllAddresWithClietnsInFuenlabra 
    

} from "./module/clients.js";






import { 
    getAllPaymentsFromPayPalEachYear,
    getAllCodeClientsWhoPayedInTwoThousanEight,
    getAllPaymentMethods,
    getAllCodeClientsWhoPayedInTwoThousanEight 
   
} from "./module/payments.js";
 console.log(await getAllCodeClientsWhoPayedInTwoThousanEight ());


// console.log(await getAllSpanishClientsNames());
// console.log(await getAllCodeClientsWhoPayedInTwoThousanEight());

import { 
                                                                                                            
    getAllTheProductStatus,
    getAllRejectedRequestAtTwoThosuandNine,
    getAllJanuaryDeliveredAnyYear,
    getAllClientsWithDelayDelivery

} from "./module/requests.js"

export{
    getOfficesByCode, 
    getPaymentByClientCode,
    getEmployeeByCode,
    getAllClientsWithDelayDelivery
    
};
