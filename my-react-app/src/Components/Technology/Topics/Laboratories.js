import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next"
import { useMediaQuery } from 'react-responsive';

function Laboratories({ id }) {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const { t } = useTranslation()


    return <div style={{ padding: (isDesktop ? '1rem 0 2rem 0' : '0 15px 2rem 15px'), borderEndStartRadius: 20 }} className={`bg-white`} id={id}>
        <Container>
            <Row className='mt-3'>
                <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                    {t('tecnologia.laboratorio-quimico.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto }, index) => <div key={index}>
                        {titulo && <h2 className='title' >{titulo}</h2>}
                        {subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
                        {texto && texto.map((text, index) => <p className="description mt-3 text-whit" key={index}> {text} </p>)}
                    </div>)}
                </Col>
            </Row>
        </Container>
    </div>;
}

export default Laboratories;