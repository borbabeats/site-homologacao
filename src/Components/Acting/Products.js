import EquipmentConstructionTracking from "./Topics/EquipmentConstructionTracking";
import AgriculturalFollowup from "./Topics/AgriculturalFollowup";
import AutomotiveTracking from "./Topics/AutomotiveTracking";
import PerformanceMarket from "./Topics/PerformanceMarket";
import { Container, Row, Col } from "reactstrap";
import ImgSegAuto from '../../Config/Images/ImageAutomotivo/CAMINHÃO.png'
import ImgSegAgri from '../../Config/Images/ImagensTrator/TRATOR.png'
import retro from '../../Config/Images/ImagesConstruction/construcao.png'
import NavSideBar from "../Component/NavSideBar";

const ItemsNavLinkActing = [
    {
        id: 1,
        menu: "atuacao.automotivo.menu",
        href: "automotivo",
    }, {
        id: 2,
        menu: "atuacao.agricola.menu",
        href: "agricola",
    }, {
        id: 3,
        menu: "atuacao.MEC.menu",
        href: "maquina-equipamentos-construcao",
    }, {
        id: 4,
        menu: "atuacao.mercado.menu",
        href: "mercado",
    }
]

function Acting() {
    return (ImgSegAuto && ImgSegAgri && retro) && <Container fluid className='bg-maxi' style={{ overflow: 'hidden' }}  >
        <Row >
            <Col xs={2} lg={2} sm={2} className="d-none d-lg-block bg-maxi" style={{ padding: 0, paddingTop: '10rem' }}>
                <NavSideBar ItemsNavLink={ItemsNavLinkActing} />
            </Col>
            <Col xs={12} lg={10} sm={12} className="align-items-center justify-content-center bg-maxi " style={{ height: 'auto', padding: 0, }}>
                <AutomotiveTracking id={'automotivo'} ImgSegAuto={ImgSegAuto} />
                <AgriculturalFollowup id={'agricola'} ImgSegAgri={ImgSegAgri} />
                <EquipmentConstructionTracking id={'maquina-equipamentos-construcao'} retro={retro} />
                <PerformanceMarket id={'mercado'} />
            </Col>
        </Row>
    </Container>
}

export default Acting;