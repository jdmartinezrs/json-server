//15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock.
//El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
export const getAllOrnamentalProductsWithMoreThan100Stock = async()=>{
    let res = await fetch("http://localhost:5506/products?stock_gt=100&gama=Ornamentales&_sort=-price_sale")
    let data = await res.json();
    return data;
}