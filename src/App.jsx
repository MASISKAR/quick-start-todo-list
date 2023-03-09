import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';

import Product from './products/Product';
import Counter from './Counter';

class App extends Component {
state = {
  amd: 0,
  exchangeRate: 391,
  products: [
    {    
    name:'banana', 
    price:'5', 
    description: 'Fresh bananas from Ecuador'
    },
    {    
      name:'apple', 
      price:'8', 
      description: 'Golden apples'
      },
      {    
        name:'pear', 
        price:'8', 
        description: 'Sweet pears!'
        },
      {    
        name:'plum', 
        price:'4', 
        description: 'Sweet plums!'
        },
    ]
}
handleInputChange = (event)=>{
this.setState({
  amd: event.target.value,
});
};


render(){
  const productComponents = this.state.products.map((product)=>{
    return (
      <Product 
      key={product.name}
      name={product.name} 
      price={product.price} 
      description={product.description}
      />
    )
  });
  console.log(productComponents);
  const usd = (this.state.amd / this.state.exchangeRate).toFixed(2);

    return (
      <div className="App">

<Container>
<Row >
<Col md={6} xs={2}>
  <div className="block">1</div>
</Col>
<Col md={6} xs={2}>
  <div className="block">2</div>
</Col>
<Col md={6} xs={2}>
  <div className="block">3</div>
</Col>
<Col md={6} xs={2}>
  <div className="block">4</div>
</Col>
<Col md={6} xs={2}>
  <div className="block">5</div>
</Col>
<Col xs={2}>
  <div className="block">6</div>
</Col >
<Col xs={2}>
  <div className="block">7</div>
</Col>
<Col>
  <div className="block">8</div>
</Col>
<Col>
  <div className="block">9</div>
</Col>
<Col>
  <div className="block">10</div>
</Col>
</Row>

</Container>





      AMD: 
      <input
      type="number" 
      placeholder='Input AMD'
      value = {this.state.amd}
      onChange={this.handleInputChange}
      /> 
     = 
     <input type="text" value={usd} readOnly={true}/>$

<hr />




      {productComponents}
{
  [<span key={2}>Text</span>, <span key={3}>Text</span>, <span key={9}>Text</span>]
}
      {
        this.state.products.map((product)=>{
          return (
            <Product 
            test={false}
            key={product.name}
            name={product.name} 
            price={product.price} 
            description={product.description}
            />
          )
        })
      }

      <Counter />


      </div>

    );
}

}

export default App;

