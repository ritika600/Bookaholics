import React, {createContext,  useState} from "react"
import Order from "./Order";
import Products from "./Products";


export const productContext = createContext();


const SciFantasy = (props) => {

    const [products] = useState( [
        {id: 1, name: 'DSLR Camera', price: 40, image:'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/SBD/Desktop-GW-QC_Books-1x_01._SY116_CB665670517_.jpg', productStatus: 'hot'},
        {id: 2, name: 'Perfume', price: 200, image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/SBD/Desktop-GW-QC_Books-1x_01._SY116_CB665670517_.jpg',productStatus: 'new'},
        {id: 3, name: 'Watch', price: 300, image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/SBD/Desktop-GW-QC_Books-1x_01._SY116_CB665670517_.jpg',productStatus: 'new'},
        {id: 4, name: 'Shoes', price: 150, image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/SBD/Desktop-GW-QC_Books-1x_01._SY116_CB665670517_.jpg',productStatus: 'new'},
        {id: 5, name: 'Microphone', price: 160, image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/SBD/Desktop-GW-QC_Books-1x_01._SY116_CB665670517_.jpg',productStatus: 'hot'},
        {id: 6, name: 'Headphones', price: 500, image:'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/SBD/Desktop-GW-QC_Books-1x_01._SY116_CB665670517_.jpg',productStatus: 'new'},
        {id: 7, name: 'Iphone X', price: 240, image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/SBD/Desktop-GW-QC_Books-1x_01._SY116_CB665670517_.jpg',productStatus: 'hot'},
        {id: 8, name: 'Rings', price: 120, image:'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/SBD/Desktop-GW-QC_Books-1x_01._SY116_CB665670517_.jpg',productStatus: 'new'},
      ])
      
    return(
        <>
        <Order/>
        <productContext.Provider value={{products}}>
           <Products/>
        </productContext.Provider>
        </>
    )

}

export default SciFantasy;