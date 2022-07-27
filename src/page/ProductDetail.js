import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let { id } = useParams()
    const [product, setProduct] = useState(null)
    const getProductDetail = async () => {
        // let url = `http://localhost:5000/products/${id}`
        let url = `https://my-json-server.typicode.com/smartIT8150/hnm-project/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        console.log('[ProductDetail.js]:', data)
        setProduct(data)
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    return (
        <Container>
            <Row>
                <Col className='product-img'>
                    <img src={product?.img} alt="" />
                </Col>
                <Col className='product-info'>
                    <div><h3>{product?.title}</h3></div>
                    <div><h4>{`$${product?.price}`}</h4></div>
                    <div>{product?.choice === true ? 'Conscious choice' : ''}</div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant='outline-dark'>
                                사이즈 선택
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {product?.size.map((size, index) => (
                                    <Dropdown.Item key={index}>{size}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='d-grid gap-2'><Button variant='dark' size='lg'>추가</Button></div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail
