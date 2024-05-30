import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Home.css";
import Card  from "../Components/Card/Card";


export default function Home () {
    return (
      <Card  
      titolo="Titolo della Card"         
      descrizione="Questa è una descrizione della card."        
      immagine="https://siviaggia.it/wp-content/uploads/sites/2/2020/12/Italia-paese-piu-desiderato-mondo.jpg">
    </Card>
    )
}