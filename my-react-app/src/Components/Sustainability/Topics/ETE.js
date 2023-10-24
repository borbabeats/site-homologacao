import photo from '../../../Config/Images/Fotos Maxiatualidades/ete.webp'
import { Col, Container, Fade, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';
import React from 'react';
// import { Container } from './styles';

function ETE({ id }) {
	const { t } = useTranslation()
	const isDesktop = useMediaQuery({ minWidth: 992 });

	return <div style={{ padding: (isDesktop ? '5rem 0 2rem 0' : '5rem 15px 2rem 15px') }} className={`bg-white`} id={id}>
		<Container>
			<Row className='mt-3'>
				<Fade className="mt-3" baseClassActive={'show'} >
					<Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
						<h2 className="title mt-3 color-maxi-invert" style={{ fontWeight: '' }}>{t('sustentabilidade.ete.titulo')}</h2>
						{t('sustentabilidade.ete.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto }, index) => <div key={index}>
							{titulo && <h2 className='title' >{titulo}</h2>}
							{subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
							{texto && texto.map((text, index) => <p className="description mt-3 text-black" key={index}> {text} </p>)}
						</div>)}

						<div className='d-flex text-center'>
							<Fade>
								<img src={photo} alt="" style={{ height: '100%', width: '50%', borderRadius: 0, opacity: '0.9', background: 'rbga(0,0,0,0.8)', padding: 10 }} />
								<img src={photo} alt="" style={{ height: '100%', width: '50%', borderRadius: 0, opacity: '0.9', background: 'rbga(0,0,0,0.8)', padding: 10 }} />
							</Fade>
						</div>
					</Col>
				</Fade>
			</Row>
		</Container>
	</div>
}

export default ETE;