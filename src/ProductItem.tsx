import React from 'react';
import { Product } from './types';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div style={{border: '1px solid #ccc', padding: 16, borderRadius: 4}}>
      <h2 style={{fontSize: 20}}>{product.name}</h2>
      <div style={{margin: '8px 0', fontWeight: 'bold'}}>Price: ${product.price}</div>
      <div>{product.description}</div>
    </div>
  );
};

export default ProductItem;
