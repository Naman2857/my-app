import React from 'react';
import Cart from './cart';
import Navbar from './navbar';
 
class App extends React.Component {
  constructor () 
  {
    super();
    this.state = 
    {
        products: 
        [
    {
        price: 999,
        title: 'Watch',
        qty: 1,
        img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2glMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D',
        id: 1
    },
    {
        price: 99,
        title: 'Phone',
        qty: 11,
        img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D',
        id: 2
    },
    {
        price: 9999,
        title: 'Laptop',
        qty: 12,
        img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww',
        id: 3
    }
      ], loading: true
  }
}

handleincreasequantity = (product) => 
{
  const {products} = this.state;
  const index = products.indexOf(product);
  products[index].qty++;
  this.setState({products})
}
handledecreasequantity = (product) => 
{
  console.log("increase the quantity");
  const {products} = this.state;
  const index = products.indexOf(product);
  if(products[index].qty==0)
      return;
  products[index].qty--;
  this.setState({products})
}
handledeleteproduct = (id) => 
{
  const { products } = this.state;
  const items = products.filter((item) => item.id !== id);
  this.setState({products: items})
}
getcartcount = () => 
{
  const {products} = this.state;
  let count = 0;
  products.forEach(product => {count+= product.qty;});
  return count;
}
getcarttotal = () => 
{
  const {products} = this.state;
  let total = 0;
  products.forEach(product => {total += product.price*product.qty;});
  return total;
}
  render()
  {
    const {products, loading} = this.state;
    return (
    <div className="App">
      <Navbar count={this.getcartcount()}/>
      <Cart
      products={products}
      onincreasequantity={this.handleincreasequantity}
      ondecreasequantity={this.handledecreasequantity}
      ondeleteproduct={this.handledeleteproduct}/>
      {loading && <h1>Loading Products</h1>}
      <div style={{padding: 10, fontSize: 20}}>Total: {this.getcarttotal()}</div>
    </div>
  );
  }
}

export default App;