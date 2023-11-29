import photo from '../../../Config/Images/Fotos Maxiatualidades/ete.webp'
import photo2 from '../../../Config/Images/Fotos Maxiatualidades/tunel-verde.webp'
import photo3 from '../../../Config/Images/Fotos Maxiatualidades/ETE3.webp'
import { Col, Container, Fade, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';
import React from 'react';
//import { Container } from './styles';

function ETE({ id }) {
	const { t } = useTranslation()
	const isDesktop = useMediaQuery({ minWidth: 992 });

	return <div style={{ padding: (isDesktop ? '5rem 0 2rem 0' : '5rem 15px 2rem 15px') }} className={`bg-white`} id={id}>
		<Container>
			<Row className='mt-3'>
				<Fade className="mt-3" baseClassActive={'show'} >
					<Col className="ml-auto mr-auto" md="12" lg="12" sm="12">
						
						<h2 className="title mt-3" style={{ fontWeight: '400' }}>{t('sustentabilidade.ete.titulo')}</h2>
						<img className='imgSustentability' src={photo2} alt="Árvores da Entrada"/>
						
						{t('sustentabilidade.ete.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto }, index) => <div key={index}>
							{titulo && <h2 className='title' >{titulo}</h2> }
							{subtitulo && <h3 className='color-maxi'> {subtitulo}  </h3>}
							
							{texto && texto.map((text, index) => <p className="description mt-3 text-black" key={index}> {text} </p>)}
							
						</div>)}
						

						<div className='d-flex text-start'>
							<Fade>
								<img className='imgSustentability' src={photo} alt="ETE" />
								<img className='imgSustentability' src={photo3} alt="ETE entrada"/>
							</Fade>
						</div>
					</Col>
				</Fade>
			</Row>
		</Container>
	</div>
}

export default ETE;