import { Fade, Container, Row, Col } from "reactstrap";
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from "react-i18next"


function Contact() {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	const { t } = useTranslation()

	return <div style={{ marginTop: '5rem' }}>
		<Container>
			<Fade className="mt-3 mb-5" baseClassActive={'show'} >
				<Row>
					<Col md={!isDesktop ? 12 : 6} lg={!isDesktop ? 12 : 6} sm={!isDesktop ? 12 : 6}>
						<h2 className="title mt-5">{t('contato.endereco')}</h2>
						<iframe className="m-2" style={{ width: '90%', height: '25rem', border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.5372064703206!2d-51.171004823556316!3d-29.877617823562005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196f8e31d89b61%3A0xc2fbf4f9610cc981!2sMaxiforja%20Componentes%20Automotivos!5e0!3m2!1spt-BR!2sbr!4v1697650419307!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						<p className="m-2"> Maxiforja Componentes Automotivos Ltda </p>
						<p className="m-2"> Av. Antonio Frederico Ozanan, 1.181</p>
						<p className="m-2"> Bairro: Brigadeira - Canoas/RS - CEP 92420-360</p>
					</Col>
					<Col className="bg-pearl align-middle" md={!isDesktop ? 12 : 6} lg={!isDesktop ? 12 : 6} sm={!isDesktop ? 12 : 6}>
						<h2 className="title mt-5">{t('contato.fale-conosco')}</h2>
						<p> {t('contato.telefone')}: +55 (51) 2121-8900  </p>
						<p> maxiforja@maxiforja.com.br </p>
						<p> comercial.atendimento@maxiforja.com.br</p>
						<h2 className="title mt-5">{t('contato.canal-denuncia')}</h2>
						<p> {t('contato.canal-denuncia')} <a className="text-danger" href="https://www.contatoseguro.com.br/maxiforja" target="_blank" rel="noreferrer" style={{fontWeight: "bold"}}> ({t('contato.clique')}) </a></p>
					</Col>
				</Row>
			</Fade>
		</Container>
	</div>
}

export default Contact;