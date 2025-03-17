import React, { useEffect, useState } from 'react'

export default function PersistTasks() {
  const products = ['Phone', 'Laptop', 'Headphones', 'Watch', 'Tablet']


  const [product, setProduct] = useState([])

  useEffect(()=>{
    const onimder = localStorage.getItem('onim')|| []
    setProduct(onimder)
  }, [])

  const handleClick = (product)=>{
    setProduct((prod)=>{
      const updatedProduct = [product, ...prod.filter((e) => e !== product)]
      localStorage.setItem('onim', JSON.stringify(updatedProduct))
      return updatedProduct
    })
  }

  return (
    <div className='cont'>
      <h2>Onimder</h2>
      <div className='products'>
        {products.map(product => (
          <button key={product} onClick={() => handleClick(product)}>
            {product}
          </button>
        ))}
      </div>
      <h2>Songy qaralgandar</h2>
      <ul>
        {product.map((product)=>(
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  )
}
