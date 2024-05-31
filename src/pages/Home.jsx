import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import CarouselWithCards from "../Components/Carousel/Carousel";


const items = [
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://www.beautystreet.it/4183-medium_default/polo-noa-maniche-corte-uomo-bianco.jpg",
  },
  {
    titolo: "Seconda Card",
    descrizione: "Questa è la descrizione della seconda card.",
    immagine:
      "https://cdn.triangleabbigliamento.it/wp-content/uploads/2024/05/IMG_8759-scaled.jpg",
  },
  {
    titolo: "quartaa Card",
    descrizione: "Questa è la descrizione della terza card.",
    immagine:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsVOdnGPzx9oC2gAaCgBHfpuMZyOlsYEK7A&s",
  },
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://images.hugoboss.com/is/image/hugobosscsprod/WearingSuit_750x900_SmallHeadteaser_Mobile.?%24large%24&align=0,-1&fit=crop,1&ts=1692105653735&qlt=80&wid=768&hei=870",
  },
  {
    titolo: "Seconda Card",
    descrizione: "Questa è la descrizione della seconda card.",
    immagine:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wbBtfEVDPI2ywRG49d3UHrmYv3vIH69BxQ&s",
  },
  {
    titolo: "Terza Card",
    descrizione: "Questa è la descrizione della terza card.",
    immagine: "https://i.ebayimg.com/images/g/6e8AAOSw05FjZ2x8/s-l1200.webp",
  },
  {
    titolo: "Terza Card",
    descrizione: "Questa è la descrizione della terza card.",
    immagine: "https://i.ebayimg.com/images/g/6e8AAOSw05FjZ2x8/s-l1200.webp",
  },
  {
    titolo: "Terza Card",
    descrizione: "Questa è la descrizione della terza card.",
    immagine: "https://i.ebayimg.com/images/g/6e8AAOSw05FjZ2x8/s-l1200.webp",
  },
  {
    titolo: "Terza Card",
    descrizione: "Questa è la descrizione della terza card.",
    immagine: "https://i.ebayimg.com/images/g/6e8AAOSw05FjZ2x8/s-l1200.webp",
  },
];

export default function Home() {

  return (
  <>
          <CarouselWithCards items={items} />;
          
  </>);
  
}
