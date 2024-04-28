//15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100`
 //unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

 export const getGamaOrnamentsThatHaveMoreThanOneHundred = async () =>{
  let res = await fetch ("http://localhost:5503/gama?gama=Ornamentales")
  let data = await res.json();
  let dataUpdate =[];
  data
 }