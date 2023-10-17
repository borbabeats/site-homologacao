import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, } from 'reactstrap';

import React, { useState } from 'react';


export default function CarouselComponent() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

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


    const items = [
        {
            id: 1,
            altText: 'Slide 1',
            caption: 'Slide 1',
        },
        {
            id: 2,
            altText: 'Slide 2',
            caption: 'Slide 2',
        },
        {
            id: 3,
            altText: 'Slide 3',
            caption: 'Slide 3',
        },
    ];

    // const slides = () => {
    //     return items.map(({ year, img, text }) => (
    //         <CarouselItem className="custom-tag items-center" tag="div" key={1} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}>
    //             <div className="page-header">
    //                 <div className="motto filter text-center" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    //                     <img src={img} style={{ objectFit: 'cover', objectPosition: 'center', height: '100vh', width: '100vw' }} alt="" />
    //                     <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    //                         <h1>{year}</h1>
    //                         <h4>{text}</h4>
    //                     </div>
    //                 </div>
    //             </div>
    //             <CarouselCaption captionText={''} />
    //         </CarouselItem>
    //     ));
    // };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <CarouselCaption
                    className="text-danger"
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return <div style={{ backgroundColor: 'black',  width : '100vw', padding : 0 }}>
       <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {/* <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        /> */}
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
}

