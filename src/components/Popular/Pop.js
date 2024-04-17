import React from 'react';
import  './Pop.css';
import data_product from '../assets/data';
const Pop = () =>{
 return(
  <div>

    <h1>POPULAR IN WOMEN</h1>
<hr/>
<div className='popular-item'>
  {data_product.map((item, index) => (
    <div key={index}>
      <p> {item.id}</p>
      <p>{item.name}</p>
      <img src={item.image} alt={item.name} />
      <p> {item.new_price}</p>
      <p>{item.old_price}</p>
    </div>
  ))}
</div>

  </div>
 )
}
export default Pop;