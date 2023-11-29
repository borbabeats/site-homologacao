import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next"
import { useMediaQuery } from 'react-responsive';
import photo3 from '../../../Config/Images/Tecnologia/2023_162.webp'

function MechanicalLaboratory({ id }) {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const { t } = useTranslation()


    return <div style={{ padding: (isDesktop ? '1rem 0 2rem 0' : '0 15px 2rem 15px') }} className={`bg-pearl`} id={id}>
        <Container >
            <Row className='' >
                <Col className="ml-auto mr-auto" md="12" lg="5" sm="12">
                    {t('tecnologia.laboratorio-mecanico.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto, itens }, index) => <div key={index}>
                        {titulo && <h2 className='title' >{titulo}</h2>}
                        {subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
                        {texto && texto.map((text, index) => <p className="description mt-3" key={index}> {text} </p>)}
                        {itens && itens.map((item) => <>
                            <p className=''>{item.titulo}</p>
                            {item.textos.map(text => <p className='px-4'>{text}</p>)}
                        </> )}
                    </div>)}
                </Col>
                <Col className='' md='12' lg='7' sm='12'>
                <img className='mt-4' src={photo3} alt="..." width={'100%'} />
                </Col>
            </Row>
        </Container>
    </div>;
}

export default MechanicalLaboratory;