import { Component } from 'react';
import { Button } from 'react-bootstrap';

class Price extends Component{
constructor(props){
    super(props);
    this.state = {
        price: `${props.text}$`,
        exchangeRate: 390,
    };
}


changeCurrency = ()=>{
    const { price, exchangeRate } = this.state;
    let modifiedPrice;
    if(price.endsWith('$')){
        modifiedPrice = parseFloat(price)*exchangeRate + '֏';
    }
    else {
        modifiedPrice = parseFloat(price)/exchangeRate + '$';
    }
    
    this.setState({
        price: modifiedPrice
    });
};

    render(){
        
        return (
            <div>
            Price: {this.state.price}
            <Button 
            variant="warning" 
            onClick={this.changeCurrency}
            >
            Change the currency
            </Button>
            </div>
            );
    }
}

export default Price;