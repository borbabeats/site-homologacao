
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import usinadoPontaEixo from "../../../Config/Images/Carousel/usinadoPontaEixo.webp";
import ItemsCarousel from "./ItemsCarousel/ItemsCarousel";
import pageHome from "../../../Config/Images/Carousel/pageHome.webp";
import Fornada from "../../../Config/Images/Carousel/Fornada.webp";
import Forno from "../../../Config/Images/Carousel/forno.webp";
import robo from "../../../Config/Images/Carousel/robo.webp";
import { useTranslation } from "react-i18next";
import { useState } from 'react';

export default function CarouselComponent(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const { t } = useTranslation()
    const items = [
        {
            src: Fornada,
            altText: 'home.topicos1',
            caption: 'home.subtopicos1',
            key: 1,
        },
        {
            src: Forno,
            altText: 'home.topicos2',
            caption: 'home.subtopicos2',
            key: 2,
        },
        {
            src: pageHome,
            altText: 'home.topicos4',
            caption: 'home.subtopicos4',
            key: 3,
        },
        {
            src: usinadoPontaEixo,
            altText: 'home.topicos3',
            caption: 'home.subtopicos3',
            key: 4,
        },
        {
            src: robo,
            altText: 'home.topicos5',
            caption: 'home.subtopicos5',
            key: 5,
        },
    ];
    
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem className="custom-tag items-center" tag="div" key={item.key} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} >
                <div className="page-header">
                    <div className="motto filter text-center" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <img src={item.src} style={{ objectFit: 'cover', objectPosition: 'center', height: '100vh', width: '100vw', backgroundColor: '#000' }} alt="Item do Carrossel" />
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex : 999, color : '#fff' }}>
                            <h1>{t(item.altText)}</h1>
                            <p>{t(item.caption)}</p>
                        </div>
                    </div>
                </div>
            </CarouselItem>
        );
    });

    return (
        <div style={{ backgroundColor: 'black', height: '100vh' }}>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText=" " title='Anterior' onClickHandler={previous} />
                <CarouselControl direction="next" directionText=" " title="Próximo" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

