import { Card, CardTitle, Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ContainersItems() {
    const { t } = useTranslation()

    const ItemsApresentation = [
        {
            id: 1,
            col: 4,
            src: [
                require('../../../Config/Images/ImageAutomotivo/Axle End 2.webp'),
                require('../../../Config/Images/ImageAutomotivo/Steering Knuckle.webp'),
                require('../../../Config/Images/ImageAutomotivo/Break CamShaft.webp'),
                require('../../../Config/Images/ImageAutomotivo/Tie Rod Arm.webp'),
            ],
            title: t('home.produto.automotivo'),
            className: 'img-itens-apresentation'
        }, {
            id: 2,
            col: 4,
            src: [
                require('../../../Config/Images/ImagensTrator/Rear Bar Axle.webp'),
                require('../../../Config/Images/ImagensTrator/Stabilizer.webp'),
                require('../../../Config/Images/ImagensTrator/Hook.webp'),
                require('../../../Config/Images/ImagensTrator/Center Link.webp'),
            ],
            title: t('home.produto.agricola'),
            className: 'img-itens-apresentation'
        }, {
            id: 3,
            col: 4,
            src: [
                require('../../../Config/Images/ImagesConstruction/Lift Cylinder Yoke.webp'),
                require('../../../Config/Images/ImagesConstruction/Lock-Hook.webp'),
                require('../../../Config/Images/ImagesConstruction/Cap.webp'),
                require('../../../Config/Images/ImagesConstruction/Retainer.webp'),
            ],
            title: t('home.produto.MEC'),
            className: 'img-itens-apresentation'
        },
    ]

    const ItemsApresentationComponent = ({ col, id, src, title, className}) => {
        return (<Col md={col} key={id} >
            <Card className="card-profile card-plain " >
                <Link to={'/produtos'} onClick={e => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ padding: 0, margin: 0, border: 0 }}>
                    <div className="grid-container " style={{ borderRadius: 10, backgroundColor : '#757575' }} >
                        {src && src.map((m, index) => <div className="grid-item w-100" key={index}>
                            <img alt="..." src={m} className={className}/>
                        </div>)}
                    </div>
                    <CardTitle className='text-white' tag="h4"  >{title}</CardTitle>
                </Link>
            </Card>
        </Col>);
    }

    return <div className="section bg-maxi text-center">
        <Container>
            <h2 className="title text-white">{t('home.produto.produto')}</h2>
            <Row >
                {ItemsApresentation && ItemsApresentation.map(props =>
                    <ItemsApresentationComponent  {...props} />
                )}
            </Row>
        </Container>
    </div>;
}




export default ContainersItems;