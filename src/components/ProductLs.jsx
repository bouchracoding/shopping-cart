import React,{useContext} from 'react'
import ProductListItem from './ProductListItem';
import { ShoppingContext } from './context/ShoppingContext';

function ProductLs() {
    const {products}=useContext(ShoppingContext);
  return (
    <div className='row my-4'>
       
        
        {
        products && products.map(product => <ProductListItem key={product.id}
                        product={product} />)
                        }
       
       
       

    </div>
  )
}

export default ProductLs;