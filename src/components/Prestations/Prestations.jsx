import './prestations.css';

import { useState } from 'react';

import imageMicropieux1 from "../../assets/micropieux1.png";
import imageMicropieux2 from "../../assets/micropieux2.png";
import imageMicropieux3 from "../../assets/micropieux3.png";

import imageCl1 from "../../assets/cl1.jpg";
import imageCl2 from "../../assets/cl2.jpg";
import imageCl3 from "../../assets/cl3.jpg";

import imageEs1 from "../../assets/es1.jpg";
import imageEs2 from "../../assets/es2.jpg";
import imageEs3 from "../../assets/es3.jpg";

import imageTa1 from "../../assets/ta1.jpg";
import imageTa2 from "../../assets/ta2.jpg";
import imageTa3 from "../../assets/ta3.jpg";




const allPrestations = [
  {
    imageSrc: [
      imageMicropieux1, imageMicropieux2, imageMicropieux3
    ],
    title: "Essais sur micropieux",
    text: [
      "Essais à la rupture et contrôle sur micropieux dans le cadre de bâtiments et / ou ville neuve, également dans le cadre de reprise en sous œuvre.",
      "Réalisation d’essai de traction ou de compression pour un large panel de charge jusqu’à 2100 kN"
    ]
  },
  {
    imageSrc: [
      imageCl1, imageCl2, imageCl3
    ],
    title: "Test destructif et contrôle sur clouages et ancrages<",
    text: [
      "Dans le cadre de travaux de soutènement, que ce soit pour la reprise en sous œuvre de mur, de culée et pile de pont ou bien dans le cadre d’ouvrage neuf",
      "Nous réalisons ces essais sur des clous et autres tirants passifs"
    ],
  },
  {
    imageSrc: [
      imageEs1, imageEs2, imageEs3
    ],
    title: "Etudes et système spécifique",
    text: [
      "Nous sommes à l’écoute de vos problématiques de test et nous recherchons avec vous des solutions de traction en fonction de vos impératifs de chantiers ou tout autres systèmes de traction spécifique.",
      "L’ensemble de ces prestations peuvent-être réalisé en acrobatiques avec nos techniciens spécialisés."
    ],
  },
  {
    imageSrc: [
      imageTa1, imageTa2, imageTa3
    ],
    title: "Conformité et mise en service de tirants actifs",
    text: [
      "Nous réalisons vos essais préalables et de conformité sur barre comme câbles, ainsi que la mise en service de tirants précontraints.",
    ],
  }
]

function Prestations() {

  const [image, setImage] = useState(0);

  const handleClick = (toto) => {
    setImage((image + 1) % toto.length);
  }

  return (
    allPrestations.map(presta => {
      return (
        <article className="presta" key={presta.title}>
          <div className="presta-imgs">
            <img src={presta.imageSrc[image]} alt={presta.title} className="glass" />
          </div>
          <svg onClick={() => { handleClick(presta.imageSrc) }} width="800px" height="800px" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#ee8f0b" />
          </svg>
          <div className="presta-text glass">
            <h3>{presta.title}</h3>
            <div className="line"></div>
            {presta.text.map((paragraph, i) => {
              return (
                <p key={i}>{paragraph}</p>
              )
            })}
          </div>
        </article>
      )
    })
  )
}
export default Prestations