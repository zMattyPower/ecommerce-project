import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from "../Card/Card";
import './CarouselWithCards.css';

const CarouselWithCards = ({ items }) => {
    // Creiamo gruppi di 4 elementi per ogni slide
    const chunkedItems = [];
    for (let i = 0; i < items.length; i += 4) {
        chunkedItems.push(items.slice(i, i + 4));
    }

    return (
        <Carousel showArrows={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        autoPlay={true} 
        interval={5000} // Intervallo tra le slide (8 secondi)
        transitionTime={2000} // Tempo di transizione (2 secondi)
        stopOnHover={true}>
            {chunkedItems.map((group, index) => (
                <div key={index} className="carousel-slide">
                    {group.map((item, idx) => (
                        <Card
                            key={idx}
                            titolo={item.titolo}
                            descrizione={item.descrizione}
                            immagine={item.immagine}
                        />
                    ))}
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselWithCards;
