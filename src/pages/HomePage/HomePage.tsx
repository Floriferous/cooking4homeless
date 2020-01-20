import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensilsAlt } from '@fortawesome/pro-duotone-svg-icons/faUtensilsAlt';
import { faUserFriends } from '@fortawesome/pro-duotone-svg-icons/faUserFriends';
import Button from '../../components/Button';

const HomePage: React.FunctionComponent = () => {
  return (
    <div className="home-page">
      <header>
        <div className="blue"></div>
        <div className="card1">
          <h1 className="display4">Cooking for the homeless</h1>
          <h2>
            Bookez un soir avec vos ami(e)s et faites à manger pour les
            sans-abris de Genève
          </h2>
          <Button type="primary" size="large">
            Je veux cuisiner!
          </Button>
        </div>
      </header>

      <section className="section1">
        <div className="card1">
          <FontAwesomeIcon
            icon={faUserFriends}
            size="5x"
            className="icon"
          ></FontAwesomeIcon>

          <h2>Aidez les plus démunis</h2>

          <p>
            Chaque soir des centres accueillent les sans-abris, sans pouvoir
            préparer des repas de très haute qualité. À vous de jouer!
          </p>
        </div>

        <div className="card1">
          <FontAwesomeIcon
            icon={faUtensilsAlt}
            size="5x"
            className="icon"
          ></FontAwesomeIcon>

          <h2>Une soirée en bonne compagnie</h2>

          <p>
            Cuisinez chez vous entre amis, puis amenez et servez à manger, avant
            de partager des conversations avec les sans-abris qui nous
            rappellent de rester humbles.
          </p>
        </div>
      </section>

      <section className="section2">
        <h2>Comment ça marche?</h2>

        <div className="step">
          <div className="display4">1.</div>
          <p>Bookez un soir disponible depuis ce site web</p>
        </div>

        <div className="step">
          <div className="display4">2.</div>
          <p>
            Le jour d'avant, vous achetez les ingrédients pour cuisiner.
            Apprenez à faire bien avec peu de moyens
          </p>
        </div>

        <div className="step">
          <div className="display4">3.</div>
          <p>
            Deux heures avant le début, rejoignez-vous et préparez la recette
            que vous avez prévue.
          </p>
        </div>

        <div className="step">
          <div className="display4">4.</div>
          <p>
            Amenez votre plat à l'heure à l'abri et aidez pour la mise en place.
          </p>
        </div>

        <div className="step">
          <div className="display4">5.</div>
          <p>Servez et partagez votre repas avec les personnes présentes.</p>
        </div>

        <div className="step">
          <div className="display4">6.</div>
          <p>
            Profitez de faire des rencontres et d'en apprendre plus sur les
            parcours de chacun, vous serez surpris!
          </p>
        </div>
      </section>

      <footer>
        <div className="content">
          <p>An initiative of the Geneva Global Shapers Hub</p>
          <p>Contact: genevahub@gmail.com</p>
        </div>

        <small>Copyright Geneva Global Shapers 2020</small>
      </footer>
    </div>
  );
};

export default HomePage;
