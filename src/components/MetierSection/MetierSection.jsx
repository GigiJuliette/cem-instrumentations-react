import { useState } from "react";
import Prestations from "./Prestations";
import Section from "../Section/Section";
import "./metierSection.css";

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
    imageSrc: [imageMicropieux1, imageMicropieux2, imageMicropieux3],
    title: "Essais sur micropieux",
    text: [
      "Essais à la rupture et contrôle sur micropieux dans le cadre de bâtiments et / ou ville neuve, également dans le cadre de reprise en sous œuvre.",
      "Réalisation d’essai de traction ou de compression pour un large panel de charge jusqu’à 2100 kN",
    ],
  },
  {
    imageSrc: [imageCl1, imageCl2, imageCl3],
    title: "Test destructif et contrôle sur clouages et ancrages",
    text: [
      "Dans le cadre de travaux de soutènement, que ce soit pour la reprise en sous œuvre de mur, de culée et pile de pont ou bien dans le cadre d’ouvrage neuf",
      "Nous réalisons ces essais sur des clous et autres tirants passifs",
    ],
  },
  {
    imageSrc: [imageEs1, imageEs2, imageEs3],
    title: "Etudes et système spécifique",
    text: [
      "Nous sommes à l’écoute de vos problématiques de test et nous recherchons avec vous des solutions de traction en fonction de vos impératifs de chantiers ou tout autres systèmes de traction spécifique.",
      "L’ensemble de ces prestations peuvent-être réalisé en acrobatiques avec nos techniciens spécialisés.",
    ],
  },
  {
    imageSrc: [imageTa1, imageTa2, imageTa3],
    title: "Conformité et mise en service de tirants actifs",
    text: [
      "Nous réalisons vos essais préalables et de conformité sur barre comme câbles, ainsi que la mise en service de tirants précontraints.",
    ],
  },
];

function MetierSection() {
  const [image, setImage] = useState(0);

  return (
    <Section anchor={"metier"} title={"Nos Services"}>
      {allPrestations.map((presta, i) =>
        i % 2 == 0 ? (
          <Prestations presta={presta} side={"right"} key={i} />
        ) : (
          <Prestations presta={presta} side={"left"} key={i} />
        )
      )}
    </Section>
  );
}
export default MetierSection;
