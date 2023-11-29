import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next"
import { useMediaQuery } from 'react-responsive';
import photo from '../../../Config/Images/Tecnologia/2023_081.webp'

function Forging({ id }) {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const { t } = useTranslation()


    return <div style={{ padding: (isDesktop ? '5rem 0 0 0' : '5rem 15px 2rem 15px') }} className={`bg-pearl`} id={id}>
        <Container>
            <Row className='mt-3'>
                <Col className="ml-auto mr-auto" md="12" lg="5" sm="12">
                    {t('tecnologia.forjaria.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto, itens }, index) => <div key={index}>
                        {titulo && <h2 className='title' >{titulo}</h2>}
                        {subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
                        {texto && texto.map((text, index) => <p className="description mt-3" key={index}> {text} </p>)}
                        {itens && itens.map((item) => <>
                            <p className=''>{item.titulo}</p>
                            {item.textos.map(text => <p className='px-4'>{text}</p>)}
                        </> )}
                    </div>)}
                </Col>
                <Col className='ml-auto d-inline-flex-end ' md='6' lg='7' sm='12'>
                <img className='mt-4' src={photo} alt="..." width={'100%'} />
            </Col>
            </Row>
        </Container>
    </div>;
}

export default Forging;
