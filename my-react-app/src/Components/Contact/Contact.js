import { Fade, Container, Row, Col } from "reactstrap";
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from "react-i18next"
import { useEffect } from "react";

function Contact() {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	const { t } = useTranslation()

	return <div style={{ marginTop: '5rem' }}>
		<Container>
			<Fade className="mt-3 mb-5" baseClassActive={'show'} >
				<Row>
					<Col md={!isDesktop ? 12 : 6} lg={!isDesktop ? 12 : 6} sm={!isDesktop ? 12 : 6}>
						<h2 className="title mt-5">{t('contato.endereco')}</h2>
						<iframe className="m-2" style={{ width: '90%', height: '25rem', border: 0 }} src="http://maps.google.com.br/maps?f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Av.+Antonio+Frederico+Ozanan,+1181&amp;sll=-14.239424,-53.186502&amp;sspn=50.603317,93.076172&amp;ie=UTF8&amp;hq=&amp;hnear=R.+Ant%C3%B4nio+Frederico+Ozanan,+1181+-+Bairro+do+Parque,+Canoas+-+Rio+Grande+do+Sul,+92420-360&amp;ll=-29.8779744,-51.1695529,15&amp;spn=0.011164,0.031285&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
						<p className="m-2"> Maxiforja Componentes Automotivos Ltda </p>
						<p className="m-2"> Av. Antonio Frederico Ozanan, 1.181</p>
						<p className="m-2"> Bairro: Brigadeira - Canoas/RS - CEP 92420-360</p>
					</Col>
					<Col className=" " md={!isDesktop ? 12 : 6} lg={!isDesktop ? 12 : 6} sm={!isDesktop ? 12 : 6}>
						<h2 className="title mt-5">{t('contato.fale-conosco')}</h2>
						<p> {t('contato.telefone')}: +55 (51) 2121-8900  </p>
						<p> maxiforja@maxiforja.com.br </p>
						<p> comercial.atendimento@maxiforja.com.br</p>
						<h2 className="title mt-5">{t('contato.canal-denuncia')}</h2>
						<p> {t('contato.canal-denuncia')} <a className="text-dark" href="https://www.contatoseguro.com.br/maxiforja" target="_blank" > ({t('contato.clique')}) </a></p>
					</Col>
				</Row>
			</Fade>
		</Container>
	</div>
}

export default Contact;