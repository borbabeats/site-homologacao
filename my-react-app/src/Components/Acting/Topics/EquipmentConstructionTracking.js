import { useState, useRef, useEffect } from 'react';
import { Container, Col} from "reactstrap";
import { useTranslation } from "react-i18next"
import ImageMapper from "react-img-mapper";
import { useMediaQuery } from 'react-responsive';
import ToolTip from '../../ToolTip';

const fillColor = 'rgba(0, 31, 61,0.5)'
const strokeColor = 'rgba(0,0,0,0.1)'

export default function EquipmentConstructionTracking({ id, retro }) {
    const mapRetro = {
        name: 'image-map-retro',
        areas: [
            {
                name: "1 - Retentor",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [145, 243, 13],
                img: [require('../../../Config/Images/ImagesConstruction/Retainer.webp')]
            },
            {
                name: "2 - Capa",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [961, 586, 19],
                img: [require('../../../Config/Images/ImagesConstruction/Cap.webp')]
            },
            // {
            //     name: "3 - Capa",
            //     shape: 'circle',
            //     fillColor: fillColor,
            //     strokeColor: strokeColor,
            //     coords: [780, 471, 12],
            //     img: [require('../../../Config/Images/ImagesConstruction/Cap 1.png')]
            // },
            // {
            //     name: "4 - Capa",
            //     shape: 'circle',
            //     fillColor: fillColor,
            //     strokeColor: strokeColor,
            //     coords: [627, 531, 11],
            //     img: [require('../../../Config/Images/ImagesConstruction/Cap 1.png')]
            // },
            {
                name: "5 - Garfo do Yoke e Capa do Yoke",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [613, 397, 30],
                img: [require('../../../Config/Images/ImagesConstruction/Lift Cylinder Yoke + Yoke Cap.png')]
            },
            {
                name: "6 - Garfo do Yoke e Capa do Yoke",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [759, 337, 28],
                img: [require('../../../Config/Images/ImagesConstruction/Lift Cylinder Yoke + Yoke Cap.png')]
            },
            {
                name: "7 - Capa01",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [779, 469, 13],
                img: [require('../../../Config/Images/ImagesConstruction/Cap 1.png')]
            },
            {
                name: "8 - Capa01",
                shape: 'circle',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [628, 532, 14],
                img: [require('../../../Config/Images/ImagesConstruction/Cap 1.png')]
            },
        ],
    }

    const [divPosition, setDivPosition] = useState({ left: 0, top: 0 })
    const isDesktop = useMediaQuery({ minWidth: 992 })
    const [isVisible, setIsVisible] = useState(false)
    const [infoPiece, SetInfoPiece] = useState(null)
    const [imageWidth, SetImageWidth] = useState(0)
    const { t } = useTranslation()
    const divImageAuto = useRef()

    const onMouseEnter = (area, _, event) => {
        if (!event) return
        const { clientX, clientY } = event;
        const { left, top } = event.currentTarget.getBoundingClientRect();
        const adjustedX = (area['coords'][0] > 183) ? clientX - left - 150 : clientX - left;
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

    const onMouseLeaveDiv = () => setIsVisible(false);

    useEffect(() => {
        const handleResize = () => {
            if (!divImageAuto.current) return
            SetImageWidth(divImageAuto.current.offsetWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!divImageAuto.current) return
        SetImageWidth(divImageAuto.current.offsetWidth);
    }, [])

    return <div style={{ padding: (isDesktop ? '5rem 0 2rem 0' : '5rem 15px 2rem 15px') }} className={`bg-white`} id={id}>
        {retro && <Container>
            <div ref={divImageAuto} className='row mt-3'>
                <h2 className="title mt-5">{t('atuacao.MEC.titulo')}</h2>
                <Col className="" md="15" lg="15" sm="15" >
                    <div className='' style={{ position: 'relative' }}>
                        {isVisible && <ToolTip onMouseEnterDiv={onMouseEnterDiv} onMouseLeaveDiv={onMouseLeaveDiv} divPosition={divPosition} infoPiece={infoPiece} />}
                        <ImageMapper src={retro} map={mapRetro} width={imageWidth} imgWidth={1280} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                    </div>
                </Col>
            </div>
        </Container>}
    </div>
}