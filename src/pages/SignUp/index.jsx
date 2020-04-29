import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import registerImage from '../../assets/registerImage.png';

import { Container, Content2, Content } from './styles';

const SingUp = () => {
  return (
    <Container>
      <Content>
        <img src={registerImage} alt="a" />
        <div>
          <h2>Registre-se</h2>
          <p>
            E torne-se o héroi de alguem, ajudando a resolver seus problemas
            durante essas crises
          </p>

          <Link to="/">
            <FiArrowLeft /> Já tenho cadastro
          </Link>
        </div>
      </Content>

      <Content2>
        <form>
          <h1>Faça seu Registro</h1>

          <input placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <div>
            <input type="phone" placeholder="Whatsapp" />
            <input placeholder="UF" />
          </div>
          <button type="button">Registrar-se</button>
        </form>
      </Content2>
    </Container>
  );
};

export default SingUp;