import React, {useState} from "react"
import './Products.css';
import {FaCartArrowDown} from 'react-icons/fa'

import { Link } from "react-router-dom";
import Order from "./Order";
const Products = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState( [
    {id: 1, name: 'CBSE Question Bank ', price: 200, image:'https://m.media-amazon.com/images/I/51Xw5MJX4mS._AC_UY436_FMwebp_QL65_.jpg', productStatus: 'hot'},
    {id: 2, name: 'Biology', price: 250, image: 'https://m.media-amazon.com/images/I/81sLiN0HNrL._AC_UY436_FMwebp_QL65_.jpg',productStatus: 'new'},
    {id: 3, name: 'PERFECTION BOOK', price: 300, image: 'https://images-eu.ssl-images-amazon.com/images/I/51-ZroJU7JS._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',productStatus: 'new'},
    {id: 4,
            name:'Maths',
            price: 'Rs'+270,
            image:'https://m.media-amazon.com/images/I/61mtBt+RDdS._AC_UY436_FMwebp_QL65_.jpg',productStatus: 'new'},
    { id:5,
            name:'Black book of english vocab ',
            price: 'Rs'+200,
            image:'https://m.media-amazon.com/images/I/81uXT4C8T+L._AC_UY436_FMwebp_QL65_.jpg',productStatus: 'hot'},
    {  id:6,
            name:'Atlas of Distal Radius Fractures',
            price: 'Rs'+199,
            image:'https://images-na.ssl-images-amazon.com/images/I/51Tl3SKOvxL._SX377_BO1,204,203,200_.jpg',productStatus: 'new'},
    { id:7,
            name:'Clinical Methods in Cardiology',
            price: 'Rs'+199,
            image:'https://images-eu.ssl-images-amazon.com/images/I/51arHqrG7uL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',productStatus: 'hot'},
    { id:8,
            name:'Fundamentals of Essay and Answer Writing',
            price: 'Rs'+199,
            image:'https://images-na.ssl-images-amazon.com/images/I/41SElE9A5+L._SX329_BO1,204,203,200_.jpg',productStatus: 'new'},
  ]);
 
   
   
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };
 
 
  
    return(
        <>
        <Order/>
        
        <Link to="/Cart"><div className="gotocart">Go to Cart &nbsp;
        <FaCartArrowDown></FaCartArrowDown><div className="cartno">{cart.length}</div>
        </div></Link> <br/>
        <div className="products" style={{marginTop: '30px'}}>
        {products.map(product => (
            <div className="product" key={product.id}>
              <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="productDetails">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   Rs{product.price}.00
               </div>
            </div>
            <div className="proButton">
                <button className="buyNow" onClick={() => addToCart(product)}  >add to cart</button>
               </div>
               {product.productStatus === 'new' ? <div className="new">New</div>: ''}
               {product.productStatus === 'hot' ? <div className="hot">Hot</div>: ''}
            </div>
            </div>
        ))}
        
        </div>
      
        </>
    )

}

export default Products;