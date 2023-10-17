import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ItemsCardNews = [
    {
        id: 1, col: '6', img: require('../../../Config/Images/Fotos Maxiatualidades/selo60anos.webp'),
        titulo: 'fique-por-dentro.63anos.titulo',
        subtitulo: 'fique-por-dentro.63anos.titulo',
        texto: 'fique-por-dentro.63anos.texto',
    },
    {
        id: 2, col: '3', img: require('../../../Config/Images/Fotos Maxiatualidades/fenatram.webp'),
        titulo: 'fique-por-dentro.tendencia.titulo',
        subtitulo: 'fique-por-dentro.tendencia.titulo',
        texto: 'fique-por-dentro.tendencia.texto',
    },
    {
        id: 3, col: '3', img: require('../../../Config/Images/Fotos Maxiatualidades/ete.webp'),
        titulo: 'fique-por-dentro.ETE.titulo',
        subtitulo: 'fique-por-dentro.ETE.titulo',
        texto: 'fique-por-dentro.ETE.texto',
    },
]


function ContainerNews() {
    const { t } = useTranslation()

    const ClickInNewHomePage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return <div className="section landing-section  text-center" >
        <Container>
            <h2 className="title mb-5">{'Fique por Dentro'}</h2>
            <Row>
                {ItemsCardNews && ItemsCardNews.map(({ id, col, img, titulo, subtitulo, texto }) => <Col className="ml-auto mr-auto" md={col} lg={col} sm={col} key={id}>
                    <Card body color="light" className='' style={{ padding: 0, height: '45rem', border: 0 }}>
                        <img alt={titulo} src={img} style={{ maxHeight: '20rem', width: 'auto', objectFit: 'cover', objectPosition: 'center', }} />
                        <CardBody>
                            <CardTitle tag="h3" className='mb-2' > {t(titulo)} </CardTitle>
                            <CardSubtitle className="mb-2 text-muted " tag="h6" > {t(subtitulo)} </CardSubtitle>
                            <CardText className='' tag='h5'> {t(texto)} </CardText>
                            <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
                                <Link to={`/fique-por-dentro#${subtitulo}`}  >
                                    <Button className='btn-maxi-color m-2' onClick={ClickInNewHomePage} style={{ bottom: 0 }}>
                                        {t('geral.saiba-mais')}
                                    </Button>
                                </Link>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                )}
            </Row>
        </Container>
    </div>;
}

export default ContainerNews;