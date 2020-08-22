import React, { Component } from "react";
import axios from 'axios';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { CartContext } from '../context/Cart';


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('https://hhqjx.sse.codesandbox.io/products').then(res => {
    console.log(res.data) ; 
    this.setState({
        products: res.data
      });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products.map(product => (
            <Col sm='4'>
              <Card>
                <CardImg top width="100%" src={product.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle><b>{product.name}</b></CardTitle>
                  <CardText>{product.description}</CardText>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                  <CartContext.Consumer>
                    {({ addToCart }) => 
                      <Button onClick={() => addToCart(product) }>
                        Add to Cart
                      </Button>
                    }
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
            ))}
        </Row>
      </Container>
    )
  }
}
export default Product;