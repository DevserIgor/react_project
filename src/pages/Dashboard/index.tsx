import React from "react";
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repos } from "./style";
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";


export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Gitcollection" />
      <Title>Catálogos de Repositórios do github</Title>

      <Form>
        <input placeholder="username/repoditory_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <Link to={"/repositories"}>
          <img
            src="https://avatars.githubusercontent.com/u/68967867?v=4"
            alt="Repositorio"
          />
          <div>
            <strong>aluisiodeveloper/mini-surso-reactks</strong>
            <p>Repositório do mini curo gratuito de reactjs</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Repos>
    </>
  );

};
