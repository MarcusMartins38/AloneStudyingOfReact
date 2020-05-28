import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiTrash2, FiPower } from 'react-icons/fi';

import { Container, Header, Content2, Content3, BoxOfContent } from './styles';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const history = useHistory();

  const { signOut } = useAuth();

  function handleRedirectCreateNote() {
    history.push('/CreateNote');
  }

  useEffect(() => {
    api.get('notes').then((response) => {
      setNotes(response.data);
    });
  }, [notes]);

  function handleDeleteNote(id) {
    api.delete(`notes/${id}`);
  }

  return (
    <Container>
      <Header>
        <p>Bem vindo, Héroi</p>

        <div>
          <button onClick={handleRedirectCreateNote} type="button">
            Cadastrar novo caso
          </button>
          <button id="svg_button" type="button" onClick={signOut}>
            <FiPower size={25} />
          </button>
        </div>
      </Header>

      <Content2>
        <h1>Casos Cadastrados:</h1>
        <Content3>
          {notes.map((note) => (
            <BoxOfContent key={note.id}>
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

              <button type="button" onClick={() => handleDeleteNote(note.id)}>
                <FiTrash2 size={23} />
              </button>
            </BoxOfContent>
          ))}
        </Content3>
      </Content2>
    </Container>
  );
};

export default Home;
