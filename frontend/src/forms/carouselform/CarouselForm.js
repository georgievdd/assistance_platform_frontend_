import './carouselform.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../res/img/carouselImg1.png';
import img2 from '../../res/img/carouselImg2.png';

const CarouselForm = () => {

	const imgArray = [img1, img2];

	return (
		<div className="carousel-container">
			<div>
				<Carousel>
					{imgArray.map(element => 
						<Carousel.Item>
							<div>
								<img
									className='carousel-img'
									src={element}
								/>
							</div>
							<Carousel.Caption>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, tempore., ipsum dolor sit amet consectetur adipisicing elit. Harum modi quod maxime amet earum necessitatibus nobis eaque sequi quos voluptate?
							</Carousel.Caption>
						</Carousel.Item>
					)}
				</Carousel>
			</div>
		</div>
	)
}

export default CarouselForm;
