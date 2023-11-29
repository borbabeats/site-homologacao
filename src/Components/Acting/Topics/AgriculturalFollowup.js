
import { Fade, Container, Col } from "reactstrap";
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next"
import ImageMapper from "react-img-mapper";
import { useMediaQuery } from 'react-responsive';
import ToolTip from '../../ToolTip';

const fillColor = 'rgba(0, 31, 61,0.5)'
const strokeColor = 'rgba(0,0,0,0.1)'

export default function AgriculturalFollowup({ id, ImgSegAgri }) {
    const mapSegAgri = {
        name: 'image-map-agri',
        areas: [
            {
                // 
                name: "1 - Conjunto Terceiro Ponto",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [133, 511, 116, 511, 107, 522, 114, 530, 126, 521, 141, 519, 153, 517, 173, 514, 192, 510, 219, 503, 244, 503, 247, 487, 231, 485, 221, 492, 192, 498, 174, 503, 151, 508],
                img: [require('../../../Config/Images/ImagensTrator/Center Link.webp')]
            }, {
                name: "2 - Eixo Longo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [358, 560, 404, 585, 411, 586, 422, 592, 482, 623, 484, 632, 479, 637, 466, 637, 406, 605, 349, 576, 349, 567],
                img: [require('../../../Config/Images/ImagensTrator/Rear Bar Axle.webp')]
            }, {
                name: "3 - Eixo Longo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [144, 473, 269, 534, 278, 520, 153, 456, 144, 464],
                img: [require('../../../Config/Images/ImagensTrator/Rear Bar Axle.webp')]
            }, {
                name: "4 - Eixo de Elevação Hidráulico",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [238, 463, 239, 454, 246, 452, 321, 491, 320, 498, 316, 501],
                img: [require('../../../Config/Images/ImagensTrator/Hydraulic Lift Shaft.png')]
            }, {
                name: "5 - Eixo Suporte da Barra",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [224, 583, 235, 579, 310, 624, 304, 631],
                img: [require('../../../Config/Images/ImagensTrator/Load Control Shaft.png')]
            }, {
                name: "6 - Conjunto Barra Inferior",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [156, 686, 153, 697, 161, 704, 173, 699, 181, 697, 219, 674, 289, 633, 301, 630, 311, 628, 300, 610, 280, 615, 251, 633, 216, 656, 174, 681],
                img: [require('../../../Config/Images/ImagensTrator/Lower Link.png')]
            }, {
                name: "7 - Conjunto Barra Inferior",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [75, 643, 60, 650, 50, 648, 50, 636, 62, 627, 73, 623, 221, 586, 240, 584, 233, 602],
                img: [require('../../../Config/Images/ImagensTrator/Lower Link.png')]
            }, {
                name: "8 - Conjunto Nivelador",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [193, 458, 208, 469, 203, 478, 171, 559, 159, 622, 142, 621, 158, 559, 166, 553],
                img: [require('../../../Config/Images/ImagensTrator/Lift Rod.png')]
            }, {
                name: "9 - Conjunto Estabilizador",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [244, 660, 331, 642, 340, 637, 350, 642, 347, 651, 326, 651, 226, 671],
                img: [require('../../../Config/Images/ImagensTrator/Stabilizer.webp')]
            }, {
                name: "10 - Pino Mestre Superior",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [819, 433, 21],
                img: [require('../../../Config/Images/ImagensTrator/King Pin Up.png')]
            }, {
                name: "11 - Pino Mestre Superior",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [654, 349, 22],
                img: [require('../../../Config/Images/ImagensTrator/King Pin Up.png')]
            }, {
                name: "12 - Flange",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [685, 410, 13],
                img: [require('../../../Config/Images/ImagensTrator/Flange.png')]
            }, {
                name: "13 - Hook",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [640, 426, 629, 433, 632, 442, 638, 447, 651, 450, 651, 459, 639, 464, 640, 471, 645, 476, 657, 476, 664, 473, 665, 465, 676, 462, 678, 454, 676, 440, 675, 431, 669, 431, 665, 444, 661, 426, 650, 423],
                img: [require('../../../Config/Images/ImagensTrator/Hook.webp')]
            }, {
                name: "14 - Flange Yoke",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [605, 439, 14],
                img: [require('../../../Config/Images/ImagensTrator/Yoke.png')]
            }, {
                name: "15 - Pino Mestre Inferior",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [820, 476, 17],
                img: [require('../../../Config/Images/ImagensTrator/King Pin Down.png')]
            }, {
                name: "16 - Pino Mestre Inferior",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [649, 389, 15],
                img: [require('../../../Config/Images/ImagensTrator/King Pin Down.png')]
            }, {
                name: "17 - Conjunto Barra de Tração",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [168, 652, 157, 655, 149, 649, 166, 637, 177, 642, 182, 649, 187, 645, 193, 638, 289, 597, 301, 607, 208, 644, 200, 655, 155, 673, 147, 664, 162, 659],
                img: [require('../../../Config/Images/ImagensTrator/Draw Bar.png')]
            }, {
                name: "18 - Conjunto Nivelador",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [255, 496, 275, 498, 274, 506, 263, 529, 259, 535, 261, 542, 257, 556, 251, 604, 254, 609, 250, 621, 246, 626, 240, 649, 237, 662, 218, 657, 228, 638, 241, 587, 250, 543, 253, 530],
                img: [require('../../../Config/Images/ImagensTrator/Lift Rod.png')]
            }, {
                name: "19 - Conjunto Estabilizador",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [193, 560, 196, 568, 172, 582],
                img: [require('../../../Config/Images/ImagensTrator/Stabilizer.webp')]
            },
        ],
    };
    
    const [divPosition, setDivPosition] = useState({ left: 0, top: 0 })
    const isDesktop = useMediaQuery({ minWidth: 992 })
    const [isVisible, setIsVisible] = useState(false)
    const [infoPiece, SetInfoPiece] = useState(null)
    const [imageWidth, SetImageWidth] = useState(0)
    const { t } = useTranslation()
    const divImageAgri = useRef()

    const onMouseEnter = (area, ind, event) => {
        if (!event) return
        const { clientX, clientY } = event;
        const { left, top } = event.currentTarget.getBoundingClientRect();
        const adjustedX = (area['coords'][0] > 804) ? clientX - left - 200 : clientX - left;
        const adjustedY = clientY - top
        setDivPosition({ left: adjustedX, top: adjustedY })
        SetInfoPiece(area);
        setIsVisible(true);
    }

    const onMouseLeave = () => {
        setIsVisible(false);
    }

    const onMouseEnterDiv = () => {
        setIsVisible(true);
    }

    const onMouseLeaveDiv = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        if (!divImageAgri.current) return
        SetImageWidth(divImageAgri.current.offsetWidth);

        const handleResize = () => {
            if (!divImageAgri.current) return
            SetImageWidth(divImageAgri.current.offsetWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return <div style={{ padding: (isDesktop ? '5rem 0 2rem 0' : '5rem 15px 2rem 15px') }} className={`bg-white`} id={id}>
        {ImgSegAgri && <Container >
            <div ref={divImageAgri} className='row' style={{maxWidth: '798px'}}>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col md="15" lg="15" sm="15" >
                        <h2 className="title mt-5">{t('atuacao.agricola.titulo')}</h2>
                        <div className='img-product agricultural'>
                            {isVisible && <ToolTip onMouseEnterDiv={onMouseEnterDiv} onMouseLeaveDiv={onMouseLeaveDiv} divPosition={divPosition} infoPiece={infoPiece} />}
                            <ImageMapper src={ImgSegAgri} map={mapSegAgri} width={imageWidth} imgWidth={1007} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                        </div>
                    </Col>
                </Fade>
            </div>
        </Container>}
    </div>
}


