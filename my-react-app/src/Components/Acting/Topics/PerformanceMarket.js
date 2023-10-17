import ImgSegMapa from '../../../Config/Images/Mapa/mapa-svg-min.svg'
import { Fade, Container, Row, Col } from "reactstrap"
import { useTranslation } from "react-i18next"
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function PerformanceMarket({ id }) {
    const { t } = useTranslation()
    const isDesktop = useMediaQuery({ minWidth: 992 });

    return <div style={{ padding: (isDesktop ? '5rem 0 2rem 0' : '5rem 15px 2rem 15px'), borderEndStartRadius : 20 }} className={`bg-white`} id={id}>
        <Container >
            <Row>
                <Fade baseClassActive={'show'} >
                <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title ">{t('atuacao.mercado.titulo')}</h2>
                        <img src={ImgSegMapa} alt="" style={{ width: '100%' }} />
                        {t('atuacao.mercado.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto }) => <>
                            {titulo && <h2>{titulo}</h2>}
                            {subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
                            {texto && texto.map(text => <p className="description mt-3 " > {text} </p>)}
                        </>)}
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>;
}

export default PerformanceMarket;