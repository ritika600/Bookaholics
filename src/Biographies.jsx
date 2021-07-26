
import React, {createContext,  useState} from "react"
import Order from "./Order";
import Products from "./Products";


export const productContext = createContext();


const Biographies = (props) => {

    const [products] = useState( [
        {id: 1, name: 'Wings Of Fire', price: 140, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOVn4Qx2Ck5zPUxo1D-4xuQqclblEz_JTIg&usqp=CAU', productStatus: 'hot'},
        {id: 2, name: 'Gandhi', price: 200, image: 'https://tse3.mm.bing.net/th?id=OIP.x4Yvagy0DukHsPdaOrbXZgAAAA&pid=Api&P=0&w=300&h=300',productStatus: 'new'},
        {id: 3, name: 'Einstien', price: 300, image: 'https://tse2.mm.bing.net/th?id=OIP.t30QP-ZHyTdQ38bL7cpD8wHaLw&pid=Api&P=0&w=300&h=300',productStatus: 'new'},
        {id: 4, name: 'Bhagat Singh', price: 150, image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1592242748l/53239199._SY475_.jpg',productStatus: 'new'},
        {id: 5, name: 'Bill Gates', price: 160, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1XiU4ppOoM78UKuxVmeWpVAZ1tB3gFpN0Jw&usqp=CAU',productStatus: 'hot'},
        {id: 6, name: 'Bob Daylan', price: 500, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0NZ9PzqKJioGY1QqVxrMOWHuJXQRzeY9gQ&usqp=CAU',productStatus: 'new'},
        {id: 7, name: 'Subhash Chandra Bose', price: 240, image: 'https://tse1.mm.bing.net/th?id=OIP.cKw_D4k63dEJzb_NyVJjfgHaLQ&pid=Api&P=0&w=300&h=300',productStatus: 'hot'},
        {id: 8, name: 'Sachin Tendulkar', price: 120, image:'https://tse1.mm.bing.net/th?id=OIP.Sq7nAa25c88Tk42ZExy2AgAAAA&pid=Api&P=0&w=300&h=300',productStatus: 'new'},
      ])
      
    return(
        <>
        
        <productContext.Provider value={{products}}>
           <Products/>
        </productContext.Provider>
        </>
    )

}

export default Biographies;