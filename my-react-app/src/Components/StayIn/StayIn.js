import { Button, Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react";

const ItemsCardNews = [
    {
        id: 1, col: '6', img: require('../../Config/Images/Fotos Maxiatualidades/selo60anos.webp'),
        titulo: 'fique-por-dentro.63anos.titulo',
        subtitulo: 'fique-por-dentro.63anos.subtitulo',
        texto: 'fique-por-dentro.63anos.texto',
        paragraph: 'fique-por-dentro.63anos.paragraph'
    },
    {
        id: 2, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/fenatram.webp'),
        titulo: 'fique-por-dentro.tendencia.titulo',
        subtitulo: 'fique-por-dentro.tendencia.subtitulo',
        texto: 'fique-por-dentro.tendencia.texto',
        paragraph: 'fique-por-dentro.tendencia.paragraph'
    },
    {
        id: 3, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/ete.webp'),
        titulo: 'fique-por-dentro.ETE.titulo',
        subtitulo: 'fique-por-dentro.ETE.subtitulo',
        texto: 'fique-por-dentro.ETE.texto',
        paragraph: 'fique-por-dentro.ETE.paragraph'
    },
    {
        id: 4, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/premioexportacao.webp'),
        titulo: 'fique-por-dentro.exportacao.titulo',
        subtitulo: 'fique-por-dentro.exportacao.subtitulo',
        texto: 'fique-por-dentro.exportacao.texto',
        paragraph: 'fique-por-dentro.exportacao.paragraph'
    },
    {
        id: 5, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/premiomeritor.webp'),
        titulo: 'fique-por-dentro.supplier.titulo',
        subtitulo: 'fique-por-dentro.supplier.subtitulo',
        texto: 'fique-por-dentro.supplier.texto',
        paragraph: 'fique-por-dentro.supplier.paragraph'
    },
    {
        id: 6, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/100marcas.webp'),
        titulo: 'fique-por-dentro.100marcas.titulo',
        subtitulo: 'fique-por-dentro.100marcas.subtitulo',
        texto: 'fique-por-dentro.100marcas.texto',
        paragraph: 'fique-por-dentro.100marcas.paragraph'
    },
    {
        id: 7, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/mastermover.webp'),
        titulo: 'fique-por-dentro.mastermover.titulo',
        subtitulo: 'fique-por-dentro.mastermover.subtitulo',
        texto: 'fique-por-dentro.mastermover.texto',
        paragraph: 'fique-por-dentro.mastermover.paragraph'
    },
]

function StayIn() {
    const { t } = useTranslation()

    const ItemCard = ({ id, col, img, titulo, subtitulo, texto, paragraph }) => {
        const [modal, setModal] = useState(false);

        useEffect(() => {
            if (window.location.hash.substring(1) === titulo)
                setModal(true)
        }, [])

        const toggle = () => setModal(!modal);

        return <Col className="ml-auto mr-auto" md={15} lg={col} sm={15} key={id}>
            <Card body color="light" className='' style={{ padding: 0, maxHeight: '45rem', minHeight: '45rem', border: 0 }}>
                {img && <img alt={titulo} src={img} style={{ maxHeight: '15rem', width: 'auto', objectFit: 'cover', objectPosition: 'center', }} />}
                <CardBody>
                    <CardTitle tag="h3" className='mb-2' > {t(titulo)} </CardTitle>
                    {<CardSubtitle className="mb-2 text-muted text-truncate " tag="h6" > {t(subtitulo)} </CardSubtitle>}
                    <CardText className='' tag='h5'> {t(texto)} </CardText>
                    <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                        <Button className='btn-maxi-color'  onClick={toggle}> {t('geral.saiba-mais')} </Button>
                    </div>
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle} fullscreen={'xl'} size={'xl'} >
                <div style={{ display: 'block', alignItems: 'center', alignContent: 'center', textAlign: 'center', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem', borderBottom: '1px solid #dddddd' }}>
                    <h2 className="title color-maxi mt-3 px-4">{t(titulo)}</h2>
                    {<h3 className='m-4'>{t(subtitulo)}</h3>}
                </div>
                <ModalBody>
                    <div style={{ display: 'block', alignItems: 'center', alignContent: 'center', textAlign: 'center', justifyContent: 'center', marginBottom: '2rem',  }}>
                        {img && <img alt={titulo} src={img} style={{ maxHeight: '25rem', maxWidth: '100%', borderRadius: 10 }} />}
                    </div>
                    <div >
                        {t(paragraph, { returnObjects: true }).map(({ titulo, texto }, index) => <div key={index}>
                            {titulo && <h3 className='color-maxi text-center pb-2'>{titulo}</h3>}
                            {texto && <p className='description text-justify'> &emsp;{texto}</p>}
                        </div>
                        )}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className='btn-maxi-color m-3' onClick={toggle}>
                        {t('geral.fechar')}
                    </Button>
                </ModalFooter>
            </Modal>
        </Col>
    }

    return <div className="" style={{ marginTop: '8rem' }}>
        <Container>
            <Row> {ItemsCardNews && ItemsCardNews.map((map, index) => <ItemCard {...map} key={index} />)} </Row>
        </Container>
    </div>
}

export default StayIn;
