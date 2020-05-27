import React from 'react';
import { Link } from 'react-router-dom';

import { FiTrash2, FiPower } from 'react-icons/fi';

import { Container, Header, Content2, Content3 } from './styles';
import { useAuth } from '../../hooks/AuthContext';

const Home = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <p>Bem vindo, Héroi</p>

        <div>
          <button type="button">Cadastrar novo caso</button>
          <button id="svg_button" type="button" onClick={signOut}>
            <FiPower size={25} />
          </button>
        </div>
      </Header>

      <Content2>
        <h1>Casos Cadastrados:</h1>
        <Content3>
          <a href="a" className="Conteudo">
            <div className="div-conteudo">
              <div>
                <p>
                  <strong>Caso:</strong>
                </p>
                <p>Caso 1</p>
              </div>

              <div>
                <p>
                  <strong>Descrição:</strong>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum repudiandae voluptatum quod atque tenetur tempore,
                  accusamus voluptate eos dicta aliquid odit labore. Alias
                  maiores ratione sapiente, deserunt voluptatibus exercitationem
                  magnam?
                </p>
              </div>

              <div>
                <p>
                  <strong>O que me ajudaria:</strong>
                </p>
                <p>R$500,00</p>
              </div>
            </div>

            <a href="button">
              <FiTrash2 size={23} />
            </a>
          </a>

          <a href="a" className="Conteudo">
            <div className="div-conteudo">
              <div>
                <p>
                  <strong>Caso:</strong>
                </p>
                <p>Caso 1</p>
              </div>

              <div>
                <p>
                  <strong>Descrição:</strong>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum repudiandae voluptatum quod atque tenetur tempore,
                  accusamus voluptate eos dicta aliquid odit labore. Alias
                  maiores ratione sapiente, deserunt voluptatibus exercitationem
                  magnam?
                </p>
              </div>

              <div>
                <p>
                  <strong>O que me ajudaria:</strong>
                </p>
                <p>R$500,00</p>
              </div>
            </div>

            <a href="button">
              <FiTrash2 size={23} />
            </a>
          </a>

          <a href="a" className="Conteudo">
            <div className="div-conteudo">
              <div>
                <p>
                  <strong>Caso:</strong>
                </p>
                <p>Caso 1</p>
              </div>

              <div>
                <p>
                  <strong>Descrição:</strong>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum repudiandae voluptatum quod atque tenetur tempore,
                  accusamus voluptate eos dicta aliquid odit labore. Alias
                  maiores ratione sapiente, deserunt voluptatibus exercitationem
                  magnam?
                </p>
              </div>

              <div>
                <p>
                  <strong>O que me ajudaria:</strong>
                </p>
                <p>R$500,00</p>
              </div>
            </div>

            <a href="button">
              <FiTrash2 size={23} />
            </a>
          </a>

          <a href="a" className="Conteudo">
            <div className="div-conteudo">
              <div>
                <p>
                  <strong>Caso:</strong>
                </p>
                <p>Caso 1</p>
              </div>

              <div>
                <p>
                  <strong>Descrição:</strong>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum repudiandae voluptatum quod atque tenetur tempore,
                  accusamus voluptate eos dicta aliquid odit labore. Alias
                  maiores ratione sapiente, deserunt voluptatibus exercitationem
                  magnam?
                </p>
              </div>

              <div>
                <p>
                  <strong>O que me ajudaria:</strong>
                </p>
                <p>R$500,00</p>
              </div>
            </div>

            <a href="button">
              <FiTrash2 size={23} />
            </a>
          </a>
        </Content3>
      </Content2>
    </Container>
  );
};

export default Home;
