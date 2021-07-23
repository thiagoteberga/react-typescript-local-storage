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
  }, []);

  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);


  const handleCart = ( index: number ) => {

    // Retrieve the object from storage
    //let retrievedObject: any = localStorage.getItem('@cart') || '[]';
    //console.log('recuperado:' + retrievedObject);
    let product = data[index]
    //console.log('data:' + JSON.stringify(product));
    setCart(cart => [...cart,product]);
    //console.log('cart:' + JSON.stringify(cart)); //Sai zerado
    
    //const productStorage = JSON.stringify(cart); //Converte JSON para String
    //localStorage.setItem(`@cart`, productStorage); //Insere o Json no Local
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