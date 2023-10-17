import img1963 from '../../../Config/Icons/LineHistory/eletrico.svg'
import img1971 from '../../../Config/Icons/LineHistory/trator.svg'
import img1988 from '../../../Config/Icons/LineHistory/Prensa.svg'
import img1995 from '../../../Config/Icons/LineHistory/caminhao.svg'
import img2008 from '../../../Config/Icons/LineHistory/extrusão.svg'
import img2010 from '../../../Config/Icons/LineHistory/Usinagem.svg'
import FotosAereaHome from '../../../Config/Images/Home/FotosAereaHome.webp'
import imageFirst from '../../../Config/Images/Home/firstPhoto.webp'
import { Button, Fade, Container, Row, Col, } from "reactstrap";
import { Link } from "react-router-dom";
import React from 'react';
import { useTranslation } from "react-i18next";

function PageHome() {
    const { t } = useTranslation()
    const Highlights = [
        {
            id: 1,
            classNameIcon: '',
            textForTitle: '1963',
            textForApresentation: 'home.marco1',
            img: img1963

        }, {
            id: 2,
            classNameIcon: '',
            textForTitle: '1971',
            textForApresentation: 'home.marco2',
            img: img1971

        }, {
            id: 3,
            classNameIcon: '',
            textForTitle: '1988 ',
            textForApresentation: 'home.marco3',
            img: img1988

        }, {
            id: 4,
            classNameIcon: '',
            textForTitle: '1995',
            textForApresentation: 'home.marco4',
            img: img1995

        }, {
            id: 5,
            classNameIcon: '',
            textForTitle: '2008',
            textForApresentation: 'home.marco5',
            img: null/*img2008*/, sort : 'definir imagem'

        }, {
            id: 6,
            classNameIcon: '',
            textForTitle: '2010',
            textForApresentation: 'home.marco6',
            img: img2010

        },
    ]

    return <section className="section text-center">
        <Container>
            <Row>
                <Col className="ml-auto mr-auto mt-3" md="15" lg="15" sm="15">
                    <h2 className="title mt-5">{t('home.historia')}</h2>
                    <div className='d-flex text-center'>
                        <Fade>
                            <img src={imageFirst} alt="Primeira Sede" style={{ height: '100%', width: '50%', borderRadius: 20, opacity: '0.9', background: 'rbga(0,0,0,0.8)', padding: 10 }} />
                            <img src={FotosAereaHome} alt="Sede Atual" style={{ height: '100%', width: '50%', borderRadius: 20, opacity: '0.9', background: 'rbga(0,0,0,0.8)', padding: 10 }} />
                        </Fade>
                    </div>
                    <p className="description pt-3 px-3" > {t('home.texto-historia')} </p>
                </Col>
            </Row>
            <Row className='pt-4' >
                {Highlights && Highlights.map(({ id, textForTitle, textForApresentation, img, sort }) => {
                    return <Col className='p-2' md="2" key={id}>
                        <div className="info">
                            <div className="icon">
                                {img === null ? <small className='bg-danger'>{sort}</small> : <img src={img} alt={img} style={{ width: '8rem', height: '8rem', color: 'white', backgroundColor: '-moz-initial', padding: 0, margin: 0 }} />}
                            </div>
                            <div className="description">
                                <div className='text-center text-break' style={{ height: 'auto', minHeight: '8rem' }}>
                                    <h3 className="info-title">{textForTitle}</h3>
                                    <p className="description " style={{ color: '#000000' }}>
                                        {t(textForApresentation)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                })}
            </Row>
            <Fade className="mt-3" tag="div" >
                <Col className="ml-auto mr-auto text-center " md="15" lg="15" sm="15">
                    <Link to="/institucional#historico">
                        <Button className="btn-round btn-maxi-color "> {t('geral.saiba-mais')} </Button>
                    </Link>
                </Col>
            </Fade>
        </Container>
    </section>;
}

export default PageHome;