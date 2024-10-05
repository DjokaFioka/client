import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://localhost:44353/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []) //if we forget to add the second parameter (the dependancy) this will execute forever. 

    return (
        <>
            <ProductList products={products} />
        </>
    )
}
