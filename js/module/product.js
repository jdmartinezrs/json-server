//15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock.
//El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
export const getAllOrnamentalProductsWithMoreThan100Stock = async()=>{
    let res = await fetch("http://localhost:5506/products?gama=Ornamentales")
    let data = await res.json();
    let dataUpdate = data.filter( val => (val.stock > 100)).map(
        val => {
            return { 
                price_sale: val.price_sale,
                gama: val.gama
            }
        })
        dataUpdate.sort((a,b) => b.price_sale - a.price_sale)
    return dataUpdate;
}
