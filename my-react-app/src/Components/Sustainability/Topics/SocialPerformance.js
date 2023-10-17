import photo from '../../../Config/Images/Financeiro/Certificado Duns Number - Maxiforja Componentes Automotivos Ltda (1).svg'
import { Col, Container, Fade, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';
import React from 'react';

function SocialPerformance({ id }) {
	const { t } = useTranslation()
	const isDesktop = useMediaQuery({ minWidth: 992 });

	return <div style={{ minHeight: '70vh', padding: (isDesktop ? '5rem 0 2rem 0' : '5rem 15px 2rem 15px') }} className={`bg-white`} id={id}>
		<Container>
			<Row className='mt-3'>
				<Fade className="mt-3" baseClassActive={'show'} >
					<Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
						<h2 className="title mt-3 color-maxi-invert" style={{ fontWeight: '' }}>{t('sustentabilidade.atuacao-social.titulo')}</h2>
						{t('sustentabilidade.atuacao-social.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto }, index) => <div key={index}>
							{titulo && <h2 className='title' >{titulo}</h2>}
							{subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
							{texto && texto.map((text, index) => <p className="description mt-3 text-whit" key={index}> {text} </p>)}
						</div>)}
						<Row className=" text-center items-align d-flex justify-content-center align-items-center mt-3" >
							{/* <img src={photo} alt="spm" style={{ width: '100%', height: 'auto', borderRadius: 10 }} /> */}
						</Row>
					</Col>
				</Fade>
			</Row>
		</Container>
	</div>;
}

export default SocialPerformance;