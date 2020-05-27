import React, { useEffect, useState } from 'react';

import { FiTrash2, FiPower } from 'react-icons/fi';

import { Container, Header, Content2, Content3, BoxOfContent } from './styles';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

const Home = () => {
  const [notes, setNotes] = useState([]);

  const { signOut } = useAuth();

  useEffect(() => {
    api.get('notes').then((response) => {
      setNotes(response.data);
    });
  }, [notes]);

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
          {notes.map((note) => (
            <BoxOfContent>
              <div className="div-conteudo">
                <div>
                  <p>
                    <strong>Caso:</strong>
                  </p>
                  <p>{note.case_title}</p>
                </div>

                <div>
                  <p>
                    <strong>Descrição:</strong>
                  </p>
                  <p>{note.description}</p>
                </div>

                <div>
                  <p>
                    <strong>O que me ajudaria:</strong>
                  </p>
                  <p>{note.help}</p>
                </div>
              </div>

              <a href="button">
                <FiTrash2 size={23} />
              </a>
            </BoxOfContent>
          ))}
        </Content3>
      </Content2>
    </Container>
  );
};

export default Home;
