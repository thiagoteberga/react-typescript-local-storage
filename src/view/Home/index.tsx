import React, {useState, useEffect } from 'react';
import * as S from './style';
import api from '../../services/api';
import Cart from '../../assets/img/cart.png';
import Logo from '../../assets/img/logo.png';

interface IProduct {
  id: number;
  name:string;
  photo: string;
  description: string;
  price: number;
  type: string;
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
  };


  const smartphone = data.filter((data) => {
    return  data.type === "Smartphone";
  })

  const smartwatch = data.filter((data) => {
    return  data.type === "Smartwatch";
  })


  return (
    <>
    <S.HomeHeader>
            <div>
              <a href="/"><img className="logo" src={Logo} alt="Logo" width="100px" height="auto" /></a>
            </div>
            <div className="cart">
            <a href="/"><img className="cartLogo" src={Cart} alt="Carrinho de Compras" width="50px" height="auto"/> </a>
            <span>({cart.length}) Itens</span> 
            </div>
    </S.HomeHeader>

    <S.HomeSectionOne>
      <S.Title>
        <S.TextoCabecalho>Smartphones</S.TextoCabecalho>
      </S.Title>
      <S.HomeContainer>
              {
              
              smartphone.map( (prod, index) => (
              <S.Cards key={prod.id}>
                <img src={prod.photo} alt="iphone" width="200px" height="auto" />
                <h4>{prod.name}</h4>
                <span>{prod.description}</span>
                <h6>R${prod.price},00</h6>
                <button className="button" onClick={ () => handleCart(prod.id-1)}>Adicionar ao Carrinho</button>
              </S.Cards>
             )) }
      </S.HomeContainer>
    </S.HomeSectionOne>

    <S.HomeSectionTwo>
      <S.Title>
        <S.TextoCabecalhoA>Smartwatches</S.TextoCabecalhoA>
      </S.Title>
      <S.HomeContainer>

              {
              
              smartwatch.map( (prod, index) => (
              <S.Cards key={prod.id}>
                <img src={prod.photo} alt="iphone" width="200px" height="auto" />
                <h4>{prod.name}</h4>
                <span>{prod.description}</span>
                <h6>R${prod.price},00</h6>
                <button className="button" onClick={ () => handleCart(prod.id-1)}>Adicionar ao Carrinho</button>
              </S.Cards>
             )) }
      </S.HomeContainer>
    </S.HomeSectionTwo>

    <S.HomeSectionThree>
      <S.HomeContainerThree>
        <S.Card>
          <S.H4>
            Você tem algum Smartphone ou Smartwatch e gostaria de utiliza-lo com parte do pagamento?
          </S.H4>
          <S.H4>
            Informe aqui os seus dados que em breve <u>entraremos em contato</u>: 
          </S.H4>
          <S.CardContainer>
          <S.Input className="nome" type="text" placeholder="Nome" />
          <S.Input className="email" type="email" placeholder="Email" />
          <S.Input className="telefone" type="text" placeholder="Celular" />
          <S.Input className="descricao" type="text" placeholder="Escreve aqui uma vreve descrição sobre o dispositivo" />
          <S.Button type="button">Cadastrar</S.Button>
          </S.CardContainer>
        </S.Card>
      </S.HomeContainerThree>


    </S.HomeSectionThree>
    <S.HomeFooter>
        <S.Paragrafo>
        Desenvolvido por <b><a href="https://github.com/thiagoteberga/landing-page-english-course">Thiago Teberga</a></b> - Hiring Coders
        <br/>
        Todos os direitos reservados.
        </S.Paragrafo>
    </S.HomeFooter>
  </>

  )
}

export default Home;