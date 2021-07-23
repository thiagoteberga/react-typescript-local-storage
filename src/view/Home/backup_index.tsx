import React, {useState, useEffect } from 'react';
import { Container } from './style';
import api from '../../services/api';
import Cart from '../../assets/img/cart.png';
import Logo from '../../assets/img/logo.png';

interface IProduct {
  id: number;
  name:string;
  photo: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);



  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

 

  const handleCart = (index: number) => {
    let product = data[index]
    let push: any = [...cart, cart.push(product)]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
  }


  return (
    <Container>
        <div className="nav">
          <div>
            <img src={Logo} alt="Logo" width="100px" height="auto" />
          </div>
          <div className="cart">
          <img src={Cart} alt="Carrinho de Compras" width="50px" height="auto" /> 
          <span>({cart.length}) - Itens</span> 
          </div>
        </div>
        <section>

          {data.map((prod, index) => (
            <div className="product-content" key={prod.id}>
              <img src={prod.photo} alt="iphone" width="200px" height="auto" />
              <h4>{prod.name}</h4>
              <span>{prod.description}</span>
              <h6>{prod.price}</h6>
              <button onClick={ () => handleCart(index)}>Adicionar ao Carrinho</button>
            </div>
          ) ) }

        </section>
    </Container>
  )
}

export default Home;