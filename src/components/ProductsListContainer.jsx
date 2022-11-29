import React, { useEffect, useState } from "react";
import { resolveBaseUrl } from "vite";

let productos = [
    {id: "1", name: "producto 1", categoria: "indumentaria", price: "2000"},
    {id: "2", name: "producto 1", categoria: "indumentaria", price: "3000"},
    {id: "3", name: "producto 1", categoria: "indumentaria", price: "4000"}
]

const gFetch = (nro) => {
    return new Promise( (resolve, reject) => {
        const condition = true
        if(condition) {
            setTimeout(() => {
                resolve(obj)
            }, 2000)
        } else {
            reject('reject')
        }
    })
}

const ProductsListContainer = () => {

    const [ products, setProducts ] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect (() => {
        gFetch()
        .then(res => setProducts(res))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    return <>
        <section>
            { 
                loading 
                ? <h1>Cargando</h1>
                : products.map(product => <li key={product.id}>{product.name}</li>)
            }
        </section>
    </>

}

export default ProductsListContainer;