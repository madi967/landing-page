import React from "react";
import { useInterval } from "../../utils/useInterval";
import Timer_ from "../Timer_";

const imageData = [
  {
    src: "images/mariage.jpg",
    title: "Voiture de mariage"
  },
  {
    src: "images/luxe.jpg",
    title: "voiture de luxe"
  },
  {
    src: "images/chauffeur.jpg",
    title: "chauffeur"
  },
  {
    src: "images/volant.jpg",
    title: "volant"
  },
  {
    src: "images/voiture.jpg",
    title: "Voiture"
  },
  {
    src: "images/ville.jpg",
    title: "Ville"
  }
];

const textData = [
  {
    title: "Mieux qu'une auto de location",
    description:
      "Réservez des voitures uniques auprès d’hôtes de confiance à travers le Cameroun",
    button: "En savoir plus"
  },
  {
    title: "Oubliez le comptoir de location",
    description: "Camcar, la plus grande plateforme d’autopartage du Cameroun",
    button: "S'informer"
  },
  {
    title: "Partagez votre voiture et gagnez de l’argent",
    description:
      "Allégez le fardeau de vos paiements automobiles mensuels ou augmentez simplement vos revenus en partageant votre voiture sur camcar lorsque vous ne l’utilisez pas.",
    button: "Nous contacter"
  }
];

const TextComponent = ({ title, description, button }) => (
  <div className="carcam_text_component">
    <h2 className="title">{title}</h2>
    <div className="description ">{description}</div>
    <a href="#contact">
      <button className="button">{button}</button>
    </a>
  </div>
);

export const ImageAndText = () => {
  const [imageToShow, setImageToShow] = React.useState(0);
  const [textNumberToShow, setTextToShow] = React.useState(0);
  useInterval(() => {
    // Your custom logic here
    setImageToShow((imageToShow + 1) % imageData.length);
  }, 5000);
  useInterval(() => {
    // Your custom logic here
    setTextToShow((textNumberToShow + 1) % textData.length);
  }, 6000);
  const textToShow = textData[textNumberToShow];

  return (
    <div
      style={{
        backgroundImage: `url(${imageData[imageToShow].src})`
      }}
      className="carcam_image_and_text"
    >
      <TextComponent {...textToShow} />
      <Timer_ />
    </div>
  );
};
