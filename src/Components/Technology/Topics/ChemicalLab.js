import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next"
import { useMediaQuery } from 'react-responsive';

function ChemicalLab({ id }) {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const { t } = useTranslation()


    return <div style={{ padding: (isDesktop ? '1rem 0 2rem 0' : '0 15px 2rem 15px'), borderEndStartRadius: 20 }} className={`bg-dark`} id={id}>
        <Container>
            <Row className='mt-3'>
                <Col className="ml-auto mr-auto" md="12" lg="6" sm="12">
                    {t('tecnologia.laboratorio-quimico.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto, itens }, index) => <div key={index}>
                        {titulo && <h2 className='title' >{titulo}</h2>}
                        {subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
                        {texto && texto.map((text, index) => <p className="description mt-3 fw-semibold" key={index}> {text} </p>)}
                        {itens && itens.map((item) => <>
                            <p className=''>{item.titulo}</p>
                            {item.textos.map(text => <p className='px-4'>{text}</p>)}
                        </> )}
                    </div>)}
                </Col>
                <Col md='12' lg='6' sm='12'>
                
                </Col>
            </Row>
        </Container>
    </div>;
}

export default ChemicalLab;