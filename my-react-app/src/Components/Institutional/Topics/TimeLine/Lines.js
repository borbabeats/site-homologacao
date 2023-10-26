import { Container, Row, Col, Image, DropdownMenu, DropdownItem } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import texture from '../../../../Config/Images/History/texture-dot.svg'

const items = [
    {
        id: 1,
		decade: "60s",
		yearsOfDecade: [
				{
				    year: "1963",
        			img: require('../../../../Config/Images/Home/firstPhoto.webp'),
        			text: "Constituição da CIME - Companhia Industrial de Materiais Elétricos com a finalidade de produzir eletroferragem galvanizada para rede de energia elétrica"
                },
				{ 
        			year: "1968",
        			img: require('../../../../Config/Images/History/1968.webp'),
        			text: "Início da gestão da Família Veit"
                }		
			]
	},
    {
        id: 2,
		decade: "70s",
		yearsOfDecade: [
				{
				year: "1973",
				img: require('../../../../Config/Images/History/1973.webp'),
        		text: "A empresa se transfere para o atual endereço, em terreno de 26000m² e área construída de 1600m². Inaugurada a Forjaria I, com Martelo Banning de 25kj"
                },
				{
        			year: "1975",
        			img: require('../../../../Config/Images/History/1975.webp'),
        			text: "Entra em operação Martelo Banning de 50 kj."
                }
            ]
	},
    {   
        id: 3,
		decade: "80s",
		yearsOfDecade: [
            {
                
                year: "1988",
                img: require('../../../../Config/Images/History/1988.webp'),
                text: "Inaugurada a Forjaria II com prensa Smeral de 4.000 t. "
            },
            ]
	},
    {   
        id: 4,
		decade: "90s",
		yearsOfDecade: [
            {
                year: "1991",
                img: require('../../../../Config/Images/History/1991.webp'),
                text: "Iniciada a produção de peças usinadas de precisão com tornos, retíficas e geradora de engrenagens CNC"
            },
            {
                year: "1995",
                img: require('../../../../Config/Images/History/1995.webp'),
                text: "Iniciada a produção de braços de direção para caminhões"
            },
            {
                year: "1998",
                img: require('../../../../Config/Images/History/1998.webp'),
                text: "Implantada a unidade para produção de componentes do sistema de 3º Ponto de Tratores Agrícolas"
            },
        ]   
	},
    {
        id: 5,
		decade: "'00s",
		yearsOfDecade: [
            {
                year: "2001",
                img: require('../../../../Config/Images/History/2001.webp'),
                text: "Empresa passa a utilizar o software Solid Edge para CAD e o Unigraphics para aplicações CAD/CAM"
            },
            { 
                year: "2003",
                img: require('../../../../Config/Images/History/2003_1.webp'),
                text: "Empresa lança novo produto no segmento agrícola: Gancho de engate rápido"
            },
            {  
                year: "2003",
                img: require('../../../../Config/Images/History/2003_2.webp'),
                text: "High Speed Machining: Empresa investe na aquisição de nova tecnologia para matrizaria"
            },
            {
                year: "2004",
                img: require('../../../../Config/Images/History/2004_1.webp'),
                text: "Implantado o Laboratório de Teste e Ensaios Mecânicos, com instalação de uma máquina de tração Kratos, capacidade 50 ton com software completo para definição das curvas força x deformação."
            },
            {
                year: "2004",
                img: require('../../../../Config/Images/History/2004_2.webp'),
                text: "Maxiforja inicia operações com seu primeiro robô para soldagem. Robô KR 15/2 KUKA de seis eixos, um mesa posicionadora de dois eixos, uma fonte sinérgica de 400A, além de acessórios como o sistema automático para o corte do arame e sistema de limpeza da tocha"
            },
        ]
	},
]


export default function Lines() {
    const [activeYear, setActiveYear] = useState(items[0].id)
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM

    const handleYearClick = (event) => setActiveYear(event)

    const Navbar = ({ items }) => {
        return <nav style={{ zIndex: 90, margin: 0 }}>
            <ul className="navbar d-sm-inline-flex d-flex" style={{ zIndex: 91, backgroundColor: 'transparent' }}>
                {items && items.map(({ id, decade, index}) => {
                    return <DropdownButton className={`${decade} nav-item  ${activeYear === id && 'active'}` } onClick={() => handleYearClick(id)} key={`nav-bar-activeYear-${index}`} title={decade}>
                        {/*<span className="year">{decade}</span>*/}                   
                    <DropdownMenu>
                        {items && items.map(({ yearsOfDecade: {year} }) => {
                       return <DropdownItem key={index}>{year}</DropdownItem>
                            }
                        )
                       }
                    
                    </DropdownMenu>
                    </DropdownButton>
                })}
            </ul>
        </nav>
    }

    return !isMobile
        ? <Container fluid className="vh-100">
            <Col>
                <Navbar items={items} />
            </Col>
            {items && items.map(({ id, decade, img, text }) => id === activeYear && <Row className="h-100">
                <div className='div-animate-smaller ' style={{ color: '#484848', borderRadius: 15, position: 'absolute', top: '9%', left: '4%', fontSize: '12rem' }}>{decade}</div>
                <Image src={texture} className='' style={{position:'absolute', top: '50%', right: '0', width: '360px'}}></Image>
                {/*<div className='div-animate-bigger ' style={{ color: '#484848', borderRadius: 15, position: 'absolute', top: '30%', right: '30%', fontSize: '40rem' }}>{year}</div>*/}
                <Col lg={12} className="h-100">
                    <Row className="h-100">
                        <Col lg={6} sm={12} md={12} className="d-flex align-items-center">
                            <div className="p-4 d-none d-lg-block  mr-auto ml-auto div-animate-text fade-in text-break text-white">
                                <div style={{ borderRadius: 15, position: 'absolute', bottom: '35%', left: '20% ', width: '60%', }}>
                                    <p style={{ fontSize: '2rem' }}>{text}</p>
                                </div>
                            </div>
                            <div className="p-5 text-white d-lg-none d-sm-block  mr-auto ml-auto div-animate-text fade-in text-break">
                                <p style={{ fontSize: '2rem' }}>{text}</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} md={12} >
                            <Image src={img} className='d-none d-md-block div-animate-img mr-auto ml-auto imgHistoric' style={{ borderRadius: 0, position: 'absolute', bottom: '40%', right: '20% ', width: '60%', maxHeight: '520px' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>)}
        </Container>
        
        /*? is mobile*/
        : <Container fluid style={{ display: 'block', width: '100vw', padding: 0, margin: 0 }} >
            <Col style={{position:"absolute", top: "0"}}>
                <Navbar items={items}  />
            </Col>
            {items && items.map(({ id, decade, img, text }) => id === activeYear && <Row className="h-100">
                <div className='div-animate-smaller ' style={{ color: '#484848', borderRadius: 15, position: 'absolute', top: '30%', left: '4%', fontSize: '6rem' }}>{decade}</div>
                {<div className='div-animate-bigger ' style={{ color: '#484848', borderRadius: 15, position: 'absolute', top: '70%', right: '25%', fontSize: '15rem' }}>{decade}</div>}
                <Col lg={12} className="h-100">
                    <Row className="h-100">
                        <Col lg={6} sm={12} md={12} className="d-flex align-items-center">
                            <div className="p-4 d-none d-lg-block  mr-auto ml-auto div-animate-text fade-in text-break text-white">
                                <div style={{ borderRadius: 15, position: 'absolute', bottom: '35%', left: '20% ', width: '60%', }}>
                                    <p style={{ fontSize: '2rem' }}>{text}</p>
                                </div>
                            </div>
                            <div className="p-5 text-white d-lg-none d-sm-block  mr-auto ml-auto div-animate-text fade-in text-break">
                                <p>{text}</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={12} md={12} >
                            <Image src={img} className='d-flex d-sm-block div-animate-img mr-auto ml-auto imgHistoric' style={{ borderRadius: 0, position: 'absolute', top: '0%', left: '25% ', width: '100%' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>)}
        </Container>



}