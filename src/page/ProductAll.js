import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

//npm install -g json-server
//json-server --watch db.json --port 5000
// --> 포트번호를 지정하지 않으면 무조건 3000에서 시작함
//     React가 기본적으로 3000번이기 때문에 겹치지 않도록 해줘야 함
//RESTful API 를 활용한 데이터접근
const ProductAll = () => {
    const [query, setQuery] = useSearchParams();
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let searchQuery = query.get('q') || '';
        console.log('쿼리값은?', searchQuery)
        // let url = `http://localhost:5000/products?q=${searchQuery}`;
        let url = `https://my-json-server.typicode.com/smartIT8150/hnm-project/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        console.log('데이터', data)
        setProductList(data)

    }

    //배열이 비워져있으면 프로젝트 시작 후 딱! 한번!
    //검색에 따라 내용이 바뀌려면 query 즉 검색어가 변경되었을 때 getProducts()가 실행되도록!
    useEffect(() => {
        getProducts()
    }, [query])

    return (
        <div>
            <Container>
                {/* 한 줄에 최대 크기는 12 */}
                <Row>
                    {productList && productList.map((menu, index) => (
                        <Col lg={3} key={index}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll
