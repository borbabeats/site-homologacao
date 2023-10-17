import { Container, Row, Col } from "reactstrap";
import React from 'react';
import ETE from "./Topics/ETE";
import NavSideBar from "../Component/NavSideBar";
import SocialPerformance from "./Topics/SocialPerformance";
import CorporateGovernance from "./Topics/CorporateGovernance";

const ItemsNavLinkSustent = [
    {
        id: 1,
        menu: "sustentabilidade.ete.menu",
        href: "ete",
   
    },
    {
        id: 2,
        menu: "sustentabilidade.atuacao-social.menu",
        href: "atuacao-social",
   
    },
    {
        id: 3,
        menu: "sustentabilidade.governancia-corporativa.menu",
        href: "governancia-corporativa",
   
    }
]

function Sustainability() {
    return <Container fluid className='bg-maxi ' style={{ overflow: 'hidden' }} id='content'>
        <Row >
            <Col xs={2} lg={2} sm={2} md={0} className="d-none d-lg-block bg-maxi" style={{ padding: 0, paddingTop: '10rem' }}>
                <NavSideBar  ItemsNavLink={ItemsNavLinkSustent} />
            </Col>
            <Col xs={12} lg={10} sm={12} className="align-items-center justify-content-center bg-maxi " style={{ height: 'auto', padding: 0, }}>
                <ETE id={'ete'} />
                <SocialPerformance id={'atuacao-social'} />
                <CorporateGovernance id={'governancia-corporativa'} />
            </Col>
        </Row>
    </Container>
}


export default Sustainability;