import QualityPolicyEnvironmentalPolicy from './Topics/QualityPolicyEnvironmentalPolicy'
import OrganizationalPhilosoph from './Topics/OrganizationalPhilosophy'
import GeneralPresentation from './Topics/GeneralPresentation'
import ManualsCodesGuides from './Topics/ManualsCodesGuides'
import Certification from './Topics/Certificates'
import { Container, Row, Col } from 'reactstrap'
import NavSideBar from '../Component/NavSideBar'
import Historic from './Topics/Historic'

const ItemsNavLinkInstitucional = [
    {
        id: 1,
        menu: 'institucional.apresentacao.menu',
        href: "apresentacao-geral",
    }, {
        id: 2,
        menu: 'institucional.filosofia.menu',
        href: "filosofia-organizacional",
    }, {
        id: 3,
        menu: 'institucional.historico.menu',
        href: "historico",
    }, {
        id: 4,
        menu: 'institucional.certificados.menu',
        href: "certificados",
    }, {
        id: 5,
        menu: 'institucional.politica.menu',
        href: "politica-organizacionais",
    }, {
        id: 6,
        menu: 'institucional.manuais.menu',
        href: "manuais-codigos-guia",
    }
]

export default function Institucional() {
    return <Container fluid className='bg-maxi' style={{ overflow: 'hidden' }} id='content' >
        <Row >
            <Col xs={2} lg={2} sm={0} md={0} className="d-none d-lg-block bg-maxi" style={{ padding: 0, paddingTop: '10rem' }}>
                <NavSideBar ItemsNavLink={ItemsNavLinkInstitucional} />
            </Col>
            <Col xs={15} lg={10} sm={15} style={{ height: 'auto', padding: 0 }}>
                <GeneralPresentation id={'apresentacao-geral'} />
                <OrganizationalPhilosoph id={'filosofia-organizacional'} />
                <Historic id={'historico'} />
                <Certification id={'certificados'} />
                <QualityPolicyEnvironmentalPolicy id={'politica-organizacionais'} />
                <ManualsCodesGuides id={'manuais-codigos-guia'} />
            </Col>
        </Row>
    </Container>
}