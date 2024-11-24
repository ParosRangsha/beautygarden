import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'


const Product = () => {
  let [myArray, setmyArray] = useState([])
  let getArray = ()=>{
    axios.get('https://dummyjson.com/products').then((response)=>{
      setmyArray(response.data.products);
    })
  }
  useEffect(()=>{
    getArray()
  })
  console.log(myArray);
  
  return (
    <div className="products">
      <Container>
        <Row>
          <h2>Our Products Details</h2>
        </Row>
        <Row>
          {myArray.map((item)=>(
              <Col lg={4} className='myItem'>
                <img src={item.thumbnail} alt="" />
                <p>Category: {item.category}, Brand: {item.brand}</p>
                <h5><del>Price: {item.price}</del></h5>
                <p>Discount: {item.discountPercentage}% </p>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </Col>
          ))}
        </Row>
      </Container>  
    </div>
  )
}

export default Product