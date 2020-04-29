import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input/input';

import { Container, Content, Background } from './styles';

import BackgroundPessoal from '../../assets/volunteers3.png';

const SignIn = () => {
  return (
    <Container>
      <Content>
        <h1>Seja o héroi de alguém</h1>

        <form>
          <h2>Faça seu Login</h2>

          <Input type="email" icon={FiMail} placeholder="E-mail" />
          <Input type="password" icon={FiLock} placeholder="Password" />
          <div>
            <button type="button">Entrar</button>

            <a href="forogt">Esqueci minha senha</a>
          </div>
        </form>

        <a href="SingUp">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>

      <Background>
        <img src={BackgroundPessoal} alt="a" />
      </Background>
    </Container>
  );
};

export default SignIn;
