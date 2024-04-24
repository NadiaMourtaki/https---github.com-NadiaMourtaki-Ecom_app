import React from 'react'
import './ProductDisplay.css'
import star_icon from "../assets/star_icon.png"
function ProductDisplay(props) {
    const {product}=props
  return (
    <div className='productdisplay'>
        <div className="productdisplay">
            <div className="productdisplay-left">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
               <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Natus enim nisi commodi perferendis officiis, 
                     corporis sunt et iste maiores porro ipsa quisquam id.
                    Suscipit commodi soluta in. Fuga, laboriosam provident.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProductDisplay