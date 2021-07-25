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

interface IClient {
  nome:string;
  email: string;
  celular: string;
  descricao: string;
}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);
  const [ cliente, setCliente ] = useState<IClient[]>([]);
  
  let [ nome, setNome ] = useState('');
  let [ email, setEmail ] = useState('');
  let [ celular, setCelular ] = useState('');
  let [ descricao, setDescricao ] = useState('');



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
    let product = data[index]
    setCart(cart => [...cart,product]);
  };



  useEffect(() => {
    localStorage.setItem(`@cliente`, JSON.stringify(cliente));
  }, [cliente]);

  function handleCadastra() {
    localStorage.setItem('nome',JSON.stringify(nome));
    localStorage.setItem('email',JSON.stringify(email));
    localStorage.setItem('celular',JSON.stringify(celular));
    localStorage.setItem('descricao',JSON.stringify(descricao));

    let newCliente = JSON.parse(`{"nome": "`+nome+`","email":"`+email+`","celular":"`+celular+`","descricao":"`+descricao+`"}`);
    setCliente(cliente => [...cliente,newCliente]);
    //localStorage.setItem('cliente',`{"nome": "`+nome+`","email":"`+email+`","celular":"`+celular+`","descricao":"`+descricao+`"}`);

    alert('Cliente cadastrado com sucesso!');

}


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
            Você tem algum Smartphone ou Smartwatch e gostaria de utilizá-lo como parte do pagamento?
          </S.H4>
          <S.H4>
            Informe aqui os seus dados que em breve <u>entraremos em contato</u>: 
          </S.H4>
          <S.CardContainer>
          <S.Input className="nome" id="nome" type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
          <S.Input className="email" id="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <S.Input className="celular" id="celular" type="text" placeholder="Celular" value={celular} onChange={e => setCelular(e.target.value)}/>
          <S.Input className="descricao" id="descricao" type="text" placeholder="Escreva aqui uma breve descrição sobre o dispositivo" value={descricao} onChange={e => setDescricao(e.target.value)}/>
          <S.Button type="button" onClick={handleCadastra}>Cadastrar</S.Button>
          </S.CardContainer>
        </S.Card>
      </S.HomeContainerThree>
    </S.HomeSectionThree>

    <S.HomeFooter>
        <S.Paragrafo>
        Desenvolvido por <b><a href="https://github.com/thiagoteberga/react-typescript-local-storage">Thiago Teberga</a></b> - Hiring Coders
        <br/>
        Todos os direitos reservados.
        </S.Paragrafo>
    </S.HomeFooter>
  </>

  )
}

export default Home;