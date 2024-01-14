import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner1 from './../../../assets/home/01.jpg'
import Banner2 from './../../../assets/home/02.jpg'
import Banner3 from './../../../assets/home/03.png'
import Banner4 from './../../../assets/home/04.jpg'
import Banner5 from './../../../assets/home/05.png'
export default function Banner(){
    return (
        <div>
            <Carousel>
                <div>
                    <img src={Banner1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Banner2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Banner3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Banner4} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Banner5} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}