/* eslint-disable camelcase */
import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import Input from '../../components/Input/input';
import TextArea from '../../components/TextArea/input';

import { Container, Content } from './styles';

const CreateNote = () => {
  const [desc, setDesc] = useState('');

  const descCount = useMemo(() => {
    return desc.length;
  }, [desc]);

  const history = useHistory();

  const handleSubmit = useCallback(async (data) => {
    try {
      const schema = Yup.object().shape({
        case_title: Yup.string().required('case'),
        description: Yup.string()
          .max(250, 'Maximo de caracteres: 250')
          .required('Description obrigatorio'),
        help: Yup.string().required('Help obrigatoria'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { case_title, description, help } = data;

      api.post('notes', { case_title, description, help });

      history.push('/Home');
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Registre o Caso</h1>

          <Input name="case_title" placeholder="Case" />
          <TextArea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows="10"
            cols="56"
            name="description"
            placeholder="Description, max: 250 caracters"
          />
          <p>{descCount}</p>
          <Input name="help" type="text" placeholder="Help" />

          <button type="submit">Registrar Caso</button>

          <Link to="/Home">
            <FiArrowLeft /> Voltar para Home
          </Link>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateNote;
