import axios from 'axios';
import { useEffect } from 'react';
import EndPoints from '../../../api/endPoints';
import { HOST, VARIANT } from '../../../api/instance';
import CarouselForm from '../../../forms/carouselform/CarouselForm';
import { useAuth } from '../../../hooks/useAuth';
import '../default-page/default-page-style.css';

const DefaultP = () => {


	return (
		<div className="carousel">
			<CarouselForm />
		</div>
	)
}

export default DefaultP;
