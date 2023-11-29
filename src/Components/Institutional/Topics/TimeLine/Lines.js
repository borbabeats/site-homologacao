import { Container, Row, Col, Image } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState, useRef } from 'react'
import { useTranslation } from "react-i18next";
import texture from '../../../../Config/Images/History/texture-dot.svg'
import Slider from 'react-slick'


const items = [
    {
        id: "1963",
        year: "1963",
        img: require('../../../../Config/Images/Home/firstPhoto.webp'),
    },
    {
        id: "1968",
        year: "1968",
        img: require('../../../../Config/Images/History/1968.webp'),
    },
    {
        id: "1973",
        year: "1973",
        img: require('../../../../Config/Images/History/1973.webp'), 
    },
    {
        id: "1975",
        year: "1975",
        img: require('../../../../Config/Images/History/1975.webp'), 
    },
    {
        id: "1988",
        year: "1988",
        img: require('../../../../Config/Images/History/1988.webp'), 
    },
    {
        id: "1991",
        year: "1991",
        img: require('../../../../Config/Images/History/1991.webp'), 
    },
    {
        id: "1995",
        year: "1995",
        img: require('../../../../Config/Images/History/1995.webp'), 
    },
    {
        id: "1998",
        year: "1998",
        img: require('../../../../Config/Images/History/1998.webp'),
    },
    {
        id: "2001",
        year: "2001",
        img: require('../../../../Config/Images/History/2001.webp'),
    },
    {
        id: "2003",
        year: "2003",
        img: require('../../../../Config/Images/History/2003_1.webp'),
    },
    {
        id: "2003b",
        year: "2003",
        img: require('../../../../Config/Images/History/2003_2.webp'),
    },
    {
        id: "2004",
        year: "2004",
        img: require('../../../../Config/Images/History/2004_1.webp'),
    },
    {
        id: "2004b",
        year: "2004",
        img: require('../../../../Config/Images/History/2004_2.webp'),  
    },
    {
        id: "2008",
        year: "2008",
        img: require('../../../../Config/Images/History/2008_extrusao_quente.webp'),
    },
    {
        id: "2009",
        year: "2009",
        img: require('../../../../Config/Images/History/2009_extrusao_hidraulica.webp'), 
    },
    {
        id: "2009b",
        year: "2009",
        img: require('../../../../Config/Images/History/2009b_eixo_longo_para_tratores.webp'),
    },
    {
        id: "2010",
        year: "2010",
        img: require('../../../../Config/Images/History/2010_lean_manufacturing.webp'), 
    },
    {
        id: "2011",
        year: "2011",
        img: require('../../../../Config/Images/History/2011_predio_usinagem_novo.webp'),
    },
    {
        id: "2013",
        year: "2013",
        img: require('../../../../Config/Images/History/2013_usinagem_5_eixos.webp'),
    },
    {
        id: "2014",
        year: "2014",
        img: require('../../../../Config/Images/History/2014_steering_knunckle.webp'),
    },
    {
        id: "2021",
        year: "2021",
        img: require('../../../../Config/Images/History/2021_impressora_3d.webp'),
    },

]

export default function Lines() {
    const [activeYear, setActiveYear] = useState(items[0].id)
    const intervalIdRef = useRef(null)
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const { t } = useTranslation()
   
    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            const currentIndex = items.findIndex((item) => item.id === activeYear)
            const nextIndex = (currentIndex + 1) % items.length
            setActiveYear(items[nextIndex].id)
        }, 50000)

        return () => clearInterval(intervalIdRef.current)
    })


    const handleYearClick = (event) => {
        setActiveYear(event)
    }

    const Navbar = ({ items }) => {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                },
              },
              {
                breakpoint: 820,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
                },
              },
            ],
          };

        return <nav style={{ zIndex: 90 }}>
            <Slider {...settings} className="navbar d-lg-flex d-none d-none " style={{ zIndex: 91, backgroundColor: 'transparent', maxWidth: '750px', overflow: 'hidden' }}>
                {items && items.map(({ id, year, index }) => {  
                    return <li className={`${year} nav-item  ${activeYear === id && 'active'}`} onClick={() => handleYearClick(id)} key={`nav-bar-activeYear-${index}`}>
                        <span className="year">{year}</span>
                        <span className="bullet" />
                    </li>
                })}
            </Slider>
        </nav>
    }

   


    return !isMobile
        ? <Container fluid className="vh-100">
            <Col>
                <Navbar items={items} />
            </Col>
            {/*Textura de fundo*/}
            <Image src={texture} style={{ position:'absolute', top:'50%', right: '0', width: '360px' }}  />
            {items && items.map(({ id, year, img }) => id === activeYear && <Row className="h-100">
                {/*Ano em tamanho menor*/}
                <div className='div-animate-smaller ' style={{ color: '#484848', borderRadius: 15, position: 'absolute', top: '4%', left: '4%', fontSize: '12rem' }}>{year}</div>
                {/*Ano em tamanho maior*/}
                <div className='div-animate-bigger ' style={{ color: '#484848', borderRadius: 15, position: 'absolute', top: '20%', right: '25%', fontSize: '30rem' }}>{year}</div>
                <Col lg={12} className="h-100">
                    <Row className="h-100">
                        <Col lg={6} sm={12} md={12} className="d-flex align-items-center">
                            <div className="p-4 d-none d-lg-block  mr-auto ml-auto div-animate-text fade-in text-break text-white">
                                <div style={{ borderRadius: 15, position: 'absolute', bottom: '35%', left: '20% ', width: '60%', }}>
                                    {/* Texto do evento*/}
                                    <p style={{ fontSize: '2rem' }}>{t('institucional.historico.texto.0.'+id)}</p>
                                </div>
                            </div>
                            <div className="p-5 text-white d-lg-none d-sm-block  mr-auto ml-auto div-animate-text fade-in text-break">
                                {/* Texto do evento versão tablet*/}
                                <p style={{ fontSize: '2rem' }}>{t('institucional.historico.texto.0.'+id)}</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} md={12} >
                            {/*Imagem do evento*/}
                            <Image src={img} className='d-md-lg-block div-animate-img mr-auto ml-auto' style={{ borderRadius: 0, position: 'absolute', top: '5%', right: '30% ', width: '450px' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>)}
        </Container>
        : <Container fluid style={{ display: 'block', width: '100vw', padding: 0, margin: 0 }} >
        </Container>



}


