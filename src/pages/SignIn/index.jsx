import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import { FiLogIn } from 'react-icons/fi';

import Input from '../../components/Input/input';

import { Container, Content, Background } from './styles';

import BackgroundPessoal from '../../assets/volunteers3.png';

const SignIn = () => {
  return (
    <Container>
      <Content>
        <h1>Seja o héroi de alguém</h1>

        <Form>
          <h2>Faça seu Login</h2>

          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Password" />
          <div>
            <button type="submit">Entrar</button>

            <a href="forogt">Esqueci minha senha</a>
          </div>
        </Form>

        <Link to="/SignUp">
          <FiLogIn />
          Criar Conta
        </Link>
      </Content>

      <Background>
        <img src={BackgroundPessoal} alt="a" />
      </Background>
    </Container>
  );
};

export default SignIn;
