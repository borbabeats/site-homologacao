import { Container, Row, Col } from "reactstrap"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

function Containers({ h2, texto, id, children, style, bground, colorTitle }) {
    const { t } = useTranslation()

    useEffect(() => {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                const targetOffsetTop = element.offsetTop;

                window.scrollTo({
                    top: targetOffsetTop,
                    behavior: "smooth"
                });
            }
        }
    }, []);

    return <div className={bground} style={style} id={id} >
        <Container className=''>
            <Row>
                <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                    <h2 className={`title mt-5 ${colorTitle}`}>{t(h2)}</h2>
                    {t(texto, { returnObjects: true }).map(({ titulo, subtitulo, texto }, index) => <div key={index}>
                        {titulo && <h2>{titulo}</h2>}
                        {subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
                        {texto && texto.map((text, index) => <p className="description mt-3 bg-dange text-whit" key={index}> {text} </p>)}
                    </div>)}
                </Col>
            </Row>
            {children}
        </Container>
    </div>
}

export default Containers;