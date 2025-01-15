import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail= () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/giruan/shoppingmall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
