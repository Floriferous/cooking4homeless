// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

type TutorialPageProps = {};

const TutorialPage = (props: TutorialPageProps) => {
  const [state, setState] = useState(0);

  if (state === 0) {
    return (
      <div className="tutorial-page">
        <h1>Avant de commencer, concentre-toi un instant</h1>

        <Button onClick={() => setState(1)}>Je suis prêt!</Button>
      </div>
    );
  }

  if (state === 1) {
    return (
      <div className="tutorial-page">
        <h2>
          Viens cuisiner pour des sans-abris dans un centre d'accueil genevois
        </h2>
        <Button onClick={() => setState(2)}>Ça marche</Button>
      </div>
    );
  }

  if (state === 2) {
    return (
      <div className="tutorial-page">
        <h2>Comment ça marche</h2>

        <ul>
          <li>Choisis une date dispo</li>
          <li>Inscris-toi</li>
          <li>Rassemble ton équipe de cuisiniers en herbe</li>
          <li>
            Cuisine chez toi 2 heures avant l'ouverture du centre d'accueil
          </li>
          <li>Viens servir les gens, et passer un bon moment humain</li>
        </ul>

        <Button onClick={() => setState(3)}>Compris</Button>
      </div>
    );
  }

  if (state === 3) {
    return (
      <div className="tutorial-page">
        <h2>Fais-le une fois, ou chaque semaine, c'est que du plaisir</h2>
        <Link to="/booking">
          <Button>C'est tipar</Button>
        </Link>
      </div>
    );
  }
};

export default TutorialPage;
