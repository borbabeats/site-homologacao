
import icon from '../../Config/Images/Footer/logo_horizontal_invert.svg'
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Row, Container, Col, Modal, ModalBody, ModalFooter, Button } from "reactstrap"
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Footer() {
	const [classNameButtom, SetClassNameButtom] = useState('btn-outline-dark')
	const isDesktop = useMediaQuery({ minWidth: 992 });
	const [modal, setModal] = useState(false);
	const [modalInfo, setModalInfo] = useState({
		URL: '', titulo: ''
	});

	const { t } = useTranslation()
	useEffect(() => {
		const handleScroll = () => {
			const footer = document.getElementById("footer");
			const buttom = document.getElementById("button");
			if (footer.getBoundingClientRect().top < buttom.getBoundingClientRect().bottom) {
				SetClassNameButtom('color-secondary border-0')
			} else {
				SetClassNameButtom('color-primary border-0')
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const ClickInNavLinkOrNavbarBrand = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const ClickOnPolicy = (e) => {
		e.preventDefault();
		setModalInfo({
			URL: e.target.href, titulo: e.target.title
		})
		setModal(!modal)
	}

	return <>
		<button id="button" href='' className={classNameButtom} onClick={ClickInNavLinkOrNavbarBrand} title='Para cima' ></button>
		<footer className={"main-footer"} id="footer">
			<Container>
				<div className="footer-content px-0">
					<Row>
						<Col sm={12} md={12} lg={3} className='pt-3 pb-0'>
							<Link onClick={ClickInNavLinkOrNavbarBrand} to='/' className="text-white footer-title color-secondary">
								<figure className="logo-box">
									<img src={icon} alt="Logo-Maxiforja" title='Maxiforja' style={{ width: '160px' }} />
								</figure>
							</Link>
							<div className="text mt-1">
								<a href="https://instagram.com/maxiforja?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noreferrer" title='Instagram'>
									<BsInstagram className={isDesktop ? "icons-social-media" : "icons-social-media-mobile"} />
								</a>
								<a href="https://www.linkedin.com/company/maxiforja/" target="_blank" rel="noreferrer" title='Linkedin'>
									<BsLinkedin className={isDesktop ? "icons-social-media" : "icons-social-media-mobile"} />
								</a>
							</div>

						</Col>
						<Col sm={12} md={12} lg={4} className='pt-3 pb-0'>
							<div className="footer-title ">{'Políticas '}</div>
							{/*<div className="footer-title ">{'\u200B'}</div>*/}
							
							<ul className="list p-0 mt-3">
								<li className="pb-2 ">
									<a href={t('rodape.cookies.href')} className="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe text-white color-secondary"
										title={t('rodape.cookies.titulo')} onClick={ClickOnPolicy} > {t('rodape.cookies.titulo')}</a> 
								</li>
								<li className="pb-2 ">
									<a href={t('rodape.privacidade.href')} className="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe text-white color-secondary"
										title={t('rodape.privacidade.titulo')} onClick={ClickOnPolicy} >{t('rodape.privacidade.titulo')}</a> 
								</li>
							</ul>
						</Col>
						<Col sm={12} md={12} lg={5} className='pt-3 pb-0'>
							<div className=" footer-widget">
								<div className="footer-title">
									<Link onClick={ClickInNavLinkOrNavbarBrand} to='/contato' className="text-white footer-title color-secondary">
										Contato
									</Link>
								</div>
								<ul className="list p-0 mt-3 ">
									<li className="pb-2 text-white color-secondary">Av. Antonio Frederico Ozanan, 1.181 - Bairro Brigadeira - Canoas - CEP 92420-360</li>
									<li className="pb-2 text-white color-secondary">+55 (51) 2121-8900 </li>
									<li className="pb-2 text-white color-secondary">maxiforja@maxiforja.com.br</li>
									<li className="pb-2 text-white color-secondary">comercial.atendimento@maxiforja.com.br</li>
								</ul>

							</div>
						</Col>
					</Row>
					<Row>
						<Col sm={15} md={15} lg={15} >
							<div className="text-white color-secondary px-3">Maxiforja &copy; {new Date().getFullYear()} Todos os direitos reservados</div>
						</Col>
					</Row>
				</div>
			</Container>
		</footer>
		{modal && <Modal isOpen={modal} toggle={ClickOnPolicy}  fullscreen={'xl'} size={'lg'}>
			<ModalBody style={{margin : 0, padding : 0, marginTop : 0}}>
				<iframe src={modalInfo.URL} style={{height : '70vh', width : '100%', border : 0, margin : 0, padding : 0, borderRadius : 10}} ></iframe>
			</ModalBody>
			<ModalFooter>
				<Button className='btn-maxi-color m-3' onClick={ClickOnPolicy}>
					{t('geral.fechar')}
				</Button>
			</ModalFooter>
		</Modal>}
	</>
}

export default Footer;