import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import CarouselWithCards from "../Components/Carousel/Carousel";
import  CardImg  from "../Components/Card/CardImg";

//Immagini
import img1 from "../Components/Img/d_maglietta_1_1.jpg"

const items = [
  {
    titolo: "",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/I/0/1/p/7541/538/800/276c778a4b18314fbfcc698a6db17b9f-7541538800_2_13_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh",
  },
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/V/0/1/p/2790/819/251/d44aef80d22c65d404646bee35d32b48-2790819251_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh",
  },
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/V/0/1/p/2457/210/250/4d1832239c0999daaf4c5743c6e1b85a-2457210250_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh",
  },
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/V/0/1/p/2469/167/251/b91a579591c51e93191d7a374f958986-2469167251_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh",
  },
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/I/0/2/p/1426/168/400//01/1426168400_2_4_3.jpg?t=1716382110892",
  },
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/V/0/2/p/1407/496/711/6207a34fd370bee75ee2fb0081d29208-1407496711_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh",
  },

  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/V/0/2/p/3319/352/426/207dbe98dd78490927592219f11a547f-3319352426_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh",
  },
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/V/0/2/p/0409/335/428/89e7ea83808b7523df299979d00aa114-0409335428_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh",
  },
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/V/0/1/p/3559/168/300/8fa2863e4121ba07c42dd038998c4e8a-3559168300_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh",
  },
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/I/0/2/p/2837/623/526//15/2837623526_2_4_3.jpg?t=1716803796526",
  },
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/V/0/2/p/7448/732/802/c82350546f35d208a126e11f1eee88ad-7448732802_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh",
  },
  {
    titolo: "Prima Card",
    descrizione: "Questa è la descrizione della prima card.",
    immagine:
      "https://static.bershka.net/4/photos2/2024/V/0/1/p/3834/168/902//01/3834168902_2_4_3.jpg?t=1709806241279",
  },
 
 
];

export default function Home() {

  return (
  <>
          <div><CarouselWithCards items={items} /></div>
          <h1>Evidenza</h1>
          <div className="evidenza">
           
            <CardImg 
              immagine={"https://static.bershka.net/4/photos2/2024/V/0/2/p/1423/557/400/89f9358d659c10d2fd9ea9481ad4da83-1423557400_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh"}
            />
            <CardImg 
              immagine={"https://static.bershka.net/4/photos2/2024/V/0/1/p/1859/644/830/02db2c95d7ee9431a9e257ddb6e2f96a-1859644830_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh"}
            />
            <CardImg 
              immagine={"https://static.bershka.net/4/photos2/2024/V/0/1/p/1581/534/400/8ccc8cad194c6cd2dd7ce1528c1cf599-1581534400_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh"}
            />
            <CardImg 
              immagine={"https://static.bershka.net/4/photos2/2024/V/0/1/p/6582/016/800/6ce8b0558e3d9387ab43b12917e69e9c-6582016800_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmediumhigh"}
          />
          </div>
  </>);
  
}
