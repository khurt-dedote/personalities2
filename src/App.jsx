import { useState } from "react";
import "./App.css";

const developers = [
  { name: "Wally Bayola", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1mKDOq4k-M0yP4UVp4dltddl2hMG2IZsgg&s", details: "He was discovered while at a comedy bar, and became host of Eat Bulaga! beginning on May 3, 2000, his 28th birthday. He then formed a comedic duo with Jose Manalo." },
  { name: "Boss Toyo", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMvFnxwTP_ogLsqZhF9vC6A1ScwuScKvN-w&s", details: "Boss Toyos real name is Jayson Luzadas. He is an adopted son who said he ran away from his adoptive parents when he was in Grade 6 upon discovering he was not their biological son." },
  { name: "Bong Revilla", imageSrc: "https://images.squarespace-cdn.com/content/v1/5bd06baf01232c415484d342/f098ad2e-3fe9-42dc-b156-1231332c8dfe/br+pic.jpg", details: "commonly known as Bong Revilla, is a Filipino actor, director, producer, television presenter and politician serving as a Senator since 2019, and previously from 2004 to 2016." },
  { name: "Chris Brown", imageSrc: "https://riffmagazine.com/wp-content/uploads/2024/08/DSC_1279.jpg", details: "Chris Brown (born May 5, 1989, Tappahannock, Virginia, U.S.) is an American rhythm-and-blues (R&B) singer, songwriter, and actor whose melodic voice and skilled dancing propelled him to fame, though his success was sometimes overshadowed by his tumultuous personal life." }
];

export default function DeveloperCard() {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % developers.length);
    setShowDetails(false); // Hide details when switching to next developer
  };

  const handleBack = () => {
    setIndex((prev) => (prev - 1 + developers.length) % developers.length);
    setShowDetails(false); // Hide details when switching to previous developer
  };

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="header">
        <h2 className="title">ARTISTS</h2>
        <p className="subtitle">KRISTOFER KHURT DE DOTE - C-PEITEL3</p>
      </div>
      <div className="button-group">
        <button onClick={handleBack} className="button">BACK</button>
        <button onClick={handleNext} className="button">NEXT</button>
      </div>
      <img src={developers[index].imageSrc} alt={developers[index].name} className="image" />
      <h3 className="title">{developers[index].name}</h3>
      <button onClick={toggleDetails} className="details-button">
        {showDetails ? "Hide Details ▲" : "Show Details ▼"}
      </button>
      {showDetails && <p className="details">{developers[index].details}</p>}
      <p className="subtitle">{index + 1} of {developers.length}</p>
    </div>
  );
}