import { useState, useRef, useEffect } from 'react';
import { Container, Col } from "reactstrap";
import { useTranslation } from "react-i18next"
import ImageMapper from "react-img-mapper";
import { useMediaQuery } from 'react-responsive';
import ToolTip from '../../ToolTip';
const fillColor = 'rgba(0, 31, 61,0.5)'
const strokeColor = 'rgba(0,0,0,0.1)'

function AutomotiveTracking({ id, ImgSegAuto }) {
    const mapSegAutomotivo = {
        name: 'image-map-auto',
        areas: [
            {
                name: "1 - Manga de Eixo, Braço de Ligação e Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [200, 535, 211, 531, 221, 527, 233, 517, 225, 509, 213, 515, 204, 510, 211, 501, 192, 481, 182, 490, 164, 481, 155, 491, 166, 494, 176, 498, 172, 509, 182, 515, 179, 522],
                img: [require('../../../Config/Images/ImageAutomotivo/Knuckle - Tie Rod Arm - Break CamShaft_2.png')]
            }, {
                
                name: "2 - Alavanca de Levante da Cabine",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [97, 530, 89, 536, 82, 528, 85, 520, 85, 510, 95, 507, 109, 499, 111, 491, 124, 485, 132, 494, 126, 504, 119, 504, 103, 517],
                img: [require('../../../Config/Images/ImageAutomotivo/Control Lever.png')]
            }, {
                name: "3 - Sela de Mola Dianteira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [253, 554, 272, 544, 250, 532, 230, 544],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 2.png')]
            }, {
                name: "4 - Alavanca de Levante da Cabine",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [187, 585, 180, 590, 187, 593, 196, 586, 200, 578, 216, 569, 230, 569, 242, 559, 225, 549, 213, 559, 198, 565, 192, 561],
                img: [require('../../../Config/Images/ImageAutomotivo/Control Lever.png')]
            }, {
                name: "5 - Braço Pitman",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [264, 615, 266, 630, 264, 641, 270, 646, 277, 641, 274, 618, 279, 602, 272, 594, 261, 599],
                img: [require('../../../Config/Images/ImageAutomotivo/Pitman Arm.png')]
            }, {
                name: "6 - Conjunto Braço Intermediário",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [309, 591, 316, 605, 324, 610, 327, 599, 328, 586, 327, 576, 335, 562, 327, 554, 320, 568, 309, 565, 295, 578, 301, 585, 296, 598, 304, 601],
                img: [require('../../../Config/Images/ImageAutomotivo/Steering Support 1.png')]
            }, {
                name: "7 - Suporte da Transmissão",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [303, 428, 311, 444, 328, 446, 345, 439, 337, 433, 324, 435, 325, 425, 316, 417],
                img: [require('../../../Config/Images/ImageAutomotivo/Engine Support.png')]
            }, {
                name: "8 - Suporte da Transmissão",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [401, 465, 411, 476, 433, 484, 417, 495, 406, 492, 394, 495, 382, 476],
                img: [require('../../../Config/Images/ImageAutomotivo/Engine Support.png')]
            }, {
                name: "9 - Manga de Eixo, Braço de Ligação e Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [438, 402, 404, 417, 383, 405, 378, 384, 370, 376, 356, 373, 367, 360, 382, 374, 394, 365, 421, 381, 408, 391, 416, 399, 425, 393],
                img: [require('../../../Config/Images/ImageAutomotivo/Knuckle - Tie Rod Arm - Break CamShaft_2.png')]
            }, {
                name: "10 - Sela de Mola Dianteira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [474, 426, 452, 444, 432, 428, 453, 416],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 2.png')]
            }, {
                name: "11 - Flange Yoke",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [489, 417, 491, 391, 467, 380, 467, 400],
                img: [require('../../../Config/Images/ImageAutomotivo/Flange.png')]
            }, {
                name: "12 - Conjunto Braço Intermediário",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [496, 508, 487, 517, 488, 531, 496, 493, 505, 482, 512, 465, 479, 472, 453, 488, 462, 496, 453, 500, 460, 506, 469, 503, 478, 528],
                img: [require('../../../Config/Images/ImageAutomotivo/Steering Support 2.png')]
            }, {
                name: "13 - Manga de Eixo, Braço de Direção, Braço de Ligação e Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [569, 495, 595, 509, 595, 515, 585, 522, 599, 532, 612, 531, 619, 523, 631, 527, 638, 521, 628, 512, 626, 497, 616, 491, 604, 488, 595, 487, 580, 472, 573, 467, 565, 469, 573, 478, 583, 495, 569, 485],
                img: [require('../../../Config/Images/ImageAutomotivo/Knuckle - Steering Arm - Tie Rod Arm - Break CamShaft_2.png')]
            }, {
                name: "14 - Flange Yoke",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [718, 318, 721, 332, 711, 338, 700, 328, 698, 316, 699, 308, 708, 306],
                img: [require('../../../Config/Images/ImageAutomotivo/Flange.png')]
            }, {
                name: "15 - Suporte do Amortecedor",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [652, 234, 648, 241, 648, 249, 648, 256, 645, 256, 640, 234, 647, 227, 665, 225, 664, 242, 659, 245, 659, 237],
                img: [require('../../../Config/Images/ImageAutomotivo/Spring Support.png')]
            }, {
                name: "16 - Ponta de Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [665, 239, 701, 255, 702, 261, 702, 267, 699, 271, 695, 275, 688, 275, 683, 269, 673, 265, 674, 261, 654, 251],
                img: [require('../../../Config/Images/ImageAutomotivo/Axle End 1 - 2.png')]
            }, {
                name: "17 - Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [735, 261, 690, 236, 687, 239, 677, 231, 687, 224, 694, 226, 696, 233, 738, 255],
                img: [require('../../../Config/Images/ImageAutomotivo/Break CamShaft.webp')]
            }, {
                name: "18 - Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [811, 298, 856, 326, 861, 324, 869, 328, 861, 336, 853, 330, 807, 302],
                img: [require('../../../Config/Images/ImageAutomotivo/Break CamShaft.webp')]
            }, {
                name: "19 - Suporte do Eixo Traseiro",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [749, 248, 755, 254, 759, 257, 766, 257, 774, 269, 773, 273, 768, 273, 757, 275, 738, 266],
                img: [require('../../../Config/Images/ImageAutomotivo/Torque Rod Bracket.png')]
            }, {
                name: "20 - Sela de Mola Traseira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [697, 274, 703, 277, 707, 281, 715, 281, 719, 285, 721, 294, 716, 298, 706, 298, 697, 294, 694, 285, 693, 279],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 1.png')]
            }, {
                name: "21 - Sela de Mola Traseira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [719, 261, 726, 263, 732, 267, 739, 269, 745, 273, 746, 280, 744, 285, 736, 281, 726, 276, 720, 272, 718, 265, 719, 261],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 1.png')]
            }, {
                name: "22 - Ponta de Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [823, 325, 835, 333, 855, 348, 856, 354, 849, 360, 831, 354, 809, 346, 811, 331],
                img: [require('../../../Config/Images/ImageAutomotivo/Axle End 1 - 2.png')]
            }, {
                name: "23 - Sela de Mola Traseira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [772, 318, 778, 321, 782, 324, 790, 325, 792, 331, 794, 338, 790, 343, 780, 340, 769, 333, 766, 326],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 1.png')]
            }, {
                name: "24 - Suporte do Amortecedor",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [784, 314, 784, 307, 778, 309, 774, 316, 773, 323, 766, 323, 769, 313, 768, 307, 774, 300, 784, 297, 788, 300, 789, 307],
                img: [require('../../../Config/Images/ImageAutomotivo/Spring Support.png')]
            }, {
                name: "25 - Sela de Mola Traseira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [792, 313, 817, 327, 821, 319, 816, 309, 806, 305, 795, 302],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 1.png')]
            }, {
                name: "26 - Trunnion",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [752, 195, 805, 223, 812, 225, 816, 220, 815, 211, 764, 180, 756, 181, 750, 188],
                img: [require('../../../Config/Images/ImageAutomotivo/Trunnion.png')]
            }, {
                name: "27 - Trunnion",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [875, 245, 920, 270, 924, 278, 922, 284, 912, 286, 861, 258, 860, 250, 865, 242],
                img: [require('../../../Config/Images/ImageAutomotivo/Trunnion.png')]
            }, {
                name: "28 - Suporte do Amortecedor",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [804, 162, 804, 151, 800, 144, 806, 139, 811, 132, 818, 131, 824, 131, 826, 140, 826, 148, 821, 153, 818, 142, 815, 140, 811, 147, 811, 160],
                img: [require('../../../Config/Images/ImageAutomotivo/Spring Support.png')]
            }, {
                name: "29 - Ponta de Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [819, 159, 834, 168, 835, 173, 847, 181, 856, 183, 863, 176, 863, 165, 855, 160, 848, 159, 827, 149, 819, 151],
                img: [require('../../../Config/Images/ImageAutomotivo/Axle End 1 - 2.png')]
            }, {
                name: "30 - Sela de Mola Traseira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [858, 179, 864, 187, 881, 192, 881, 206, 868, 205, 853, 195, 848, 187],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 1.png')]
            }, {
                name: "31 - Suporte do Amortecedor",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [952, 207, 939, 207, 926, 218, 927, 231, 939, 217, 943, 217, 945, 223, 953, 223],
                img: [require('../../../Config/Images/ImageAutomotivo/Spring Support.png')]
            }, {
                name: "32 - Sela de Mola Traseira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [932, 225, 945, 231, 955, 236, 956, 249, 948, 249, 927, 238],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 1.png')]
            }, {
                name: "33 - Ponta de Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [985, 235, 1014, 256, 1014, 264, 1010, 269, 973, 251, 974, 240],
                img: [require('../../../Config/Images/ImageAutomotivo/Axle End 1 - 2.png')]
            }, {
                name: "34 - Sela de Mola Traseira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [953, 208, 969, 214, 977, 222, 973, 233, 961, 229, 952, 224],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 1.png')]
            }, {
                name: "35 - Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [837, 135, 845, 142, 852, 144, 895, 169, 900, 165, 848, 132],
                img: [require('../../../Config/Images/ImageAutomotivo/Break CamShaft.webp')]
            }, {
                name: "36 - Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [971, 204, 1018, 232, 1031, 237, 1024, 245, 1016, 240, 966, 209, 971, 204],
                img: [require('../../../Config/Images/ImageAutomotivo/Break CamShaft.webp')]
            }, {
                name: "37 - Suporte do Eixo Traseiro",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [931, 182, 939, 174, 923, 164, 910, 156, 903, 170, 908, 175, 914, 169, 919, 174, 914, 180, 924, 185],
                img: [require('../../../Config/Images/ImageAutomotivo/Torque Rod Bracket.png')]
            }, {
                name: "38 - Sela de Mola Traseira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [902, 192, 876, 177, 881, 166, 903, 181],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 1.png')]
            }, {
                name: "39 - Manga de Eixo, Braço de Direção, Braço de Ligação e Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [365, 598, 373, 606, 366, 614, 373, 619, 386, 627, 392, 634, 382, 645, 397, 653, 410, 653, 415, 646, 426, 648, 431, 646, 436, 642, 428, 627, 424, 612, 403, 601, 392, 606, 381, 587, 366, 580, 361, 587],
                img: [require('../../../Config/Images/ImageAutomotivo/Knuckle - Steering Arm - Tie Rod Arm - Break CamShaft_2.png')]
            }, {
                name: "40 - Sela de Mola Dianteira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [551, 471, 563, 481, 551, 493, 533, 482],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 2.png')]
            }, {
                name: "41 - Sela de Mola Dianteira",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [349, 589, 364, 599, 349, 610, 330, 603],
                img: [require('../../../Config/Images/ImageAutomotivo/Leaf Spring Saddle 2.png')]
            },

        ],
    }
    const { t } = useTranslation()
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const [divPosition, setDivPosition] = useState({ left: 0, top: 0 });
    const divImageAuto = useRef();
    const [imageWidth, SetImageWidth] = useState(0);
    const [infoPiece, SetInfoPiece] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const onMouseEnter = (area, _, event) => {
        if (!event) return
        const { clientX, clientY } = event;
        const { left, top } = event.currentTarget.getBoundingClientRect();
        const adjustedX = (area['coords'][0] > 804) ? clientX - left - 200 : clientX - left;
        const adjustedY = clientY - top;
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
        {ImgSegAuto && <Container>
            <div ref={divImageAuto} className='row mt-3'>
                <Col className="" md="15" lg="15" sm="15" >
                    <h2 className="title mt-5">{t('atuacao.automotivo.titulo')}</h2>
                    <div className='' style={{ position: 'relative' }}>
                        {isVisible && <ToolTip onMouseEnterDiv={onMouseEnterDiv} onMouseLeaveDiv={onMouseLeaveDiv} divPosition={divPosition} infoPiece={infoPiece} />}
                        <ImageMapper src={ImgSegAuto} map={mapSegAutomotivo} width={imageWidth} imgWidth={1148} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                    </div>
                </Col>
            </div>
        </Container>}
    </div>;
}

export default AutomotiveTracking;



// <map name="image-map">
//     <area target="" alt="" title="" href="" coords="200,535,211,531,221,527,233,517,225,509,213,515,204,510,211,501,192,481,182,490,164,481,155,491,166,494,176,498,172,509,182,515,179,522" shape="poly" />
//     <area target="" alt="" title="" href="" coords="97,530,89,536,82,528,85,520,85,510,95,507,109,499,111,491,124,485,132,494,126,504,119,504,103,517" shape="poly" />
//     <area target="" alt="" title="" href="" coords="253,554,272,544,250,532,230,544" shape="poly" />
//     <area target="" alt="" title="" href="" coords="187,585,180,590,187,593,196,586,200,578,216,569,230,569,242,559,225,549,213,559,198,565,192,561" shape="poly" />
//     <area target="" alt="" title="" href="" coords="264,615,266,630,264,641,270,646,277,641,274,618,279,602,272,594,261,599" shape="poly" />
//     <area target="" alt="" title="" href="" coords="309,591,316,605,324,610,327,599,328,586,327,576,335,562,327,554,320,568,309,565,295,578,301,585,296,598,304,601" shape="poly" />
//     <area target="" alt="" title="" href="" coords="303,428,311,444,328,446,345,439,337,433,324,435,325,425,316,417" shape="poly" />
//     <area target="" alt="" title="" href="" coords="401,465,411,476,433,484,417,495,406,492,394,495,382,476" shape="poly" />
//     <area target="" alt="" title="" href="" coords="438,402,404,417,383,405,378,384,370,376,356,373,367,360,382,374,394,365,421,381,408,391,416,399,425,393" shape="poly" />
//     <area target="" alt="" title="" href="" coords="474,426,452,444,432,428,453,416" shape="poly" />
//     <area target="" alt="" title="" href="" coords="489,417,491,391,467,380,467,400" shape="poly" />
//     <area target="" alt="" title="" href="" coords="496,508,487,517,488,531,496,493,505,482,512,465,479,472,453,488,462,496,453,500,460,506,469,503,478,528" shape="poly" />
//     <area target="" alt="" title="" href="" coords="569,495,595,509,595,515,585,522,599,532,612,531,619,523,631,527,638,521,628,512,626,497,616,491,604,488,595,487,580,472,573,467,565,469,573,478,583,495,569,485" shape="poly" />
//     <area target="" alt="" title="" href="" coords="718,318,721,332,711,338,700,328,698,316,699,308,708,306" shape="poly" />
//     <area target="" alt="" title="" href="" coords="652,234,648,241,648,249,648,256,645,256,640,234,647,227,665,225,664,242,659,245,659,237" shape="poly" />
//     <area target="" alt="" title="" href="" coords="665,239,701,255,702,261,702,267,699,271,695,275,688,275,683,269,673,265,674,261,654,251" shape="poly" />
//     <area target="" alt="" title="" href="" coords="735,261,690,236,687,239,677,231,687,224,694,226,696,233,738,255" shape="poly" />
//     <area target="" alt="" title="" href="" coords="811,298,856,326,861,324,869,328,861,336,853,330,807,302" shape="poly" />
//     <area target="" alt="" title="" href="" coords="749,248,755,254,759,257,766,257,774,269,773,273,768,273,757,275,738,266" shape="poly" />
//     <area target="" alt="" title="" href="" coords="697,274,703,277,707,281,715,281,719,285,721,294,716,298,706,298,697,294,694,285,693,279" shape="poly" />
//     <area target="" alt="" title="" href="" coords="719,261,726,263,732,267,739,269,745,273,746,280,744,285,736,281,726,276,720,272,718,265,719,261" shape="poly" />
//     <area target="" alt="" title="" href="" coords="823,325,835,333,855,348,856,354,849,360,831,354,809,346,811,331" shape="poly" />
//     <area target="" alt="" title="" href="" coords="772,318,778,321,782,324,790,325,792,331,794,338,790,343,780,340,769,333,766,326" shape="poly" />
//     <area target="" alt="" title="" href="" coords="784,314,784,307,778,309,774,316,773,323,766,323,769,313,768,307,774,300,784,297,788,300,789,307" shape="poly" />
//     <area target="" alt="" title="" href="" coords="792,313,817,327,821,319,816,309,806,305,795,302" shape="poly" />
//     <area target="" alt="" title="" href="" coords="752,195,805,223,812,225,816,220,815,211,764,180,756,181,750,188" shape="poly" />
//     <area target="" alt="" title="" href="" coords="875,245,920,270,924,278,922,284,912,286,861,258,860,250,865,242" shape="poly" />
//     <area target="" alt="" title="" href="" coords="804,162,804,151,800,144,806,139,811,132,818,131,824,131,826,140,826,148,821,153,818,142,815,140,811,147,811,160" shape="poly" />
//     <area target="" alt="" title="" href="" coords="819,159,834,168,835,173,847,181,856,183,863,176,863,165,855,160,848,159,827,149,819,151" shape="poly" />
//     <area target="" alt="" title="" href="" coords="858,179,864,187,881,192,881,206,868,205,853,195,848,187" shape="poly" />
//     <area target="" alt="" title="" href="" coords="952,207,939,207,926,218,927,231,939,217,943,217,945,223,953,223" shape="poly" />
//     <area target="" alt="" title="" href="" coords="932,225,945,231,955,236,956,249,948,249,927,238" shape="poly" />
//     <area target="" alt="" title="" href="" coords="985,235,1014,256,1014,264,1010,269,973,251,974,240" shape="poly" />
//     <area target="" alt="" title="" href="" coords="953,208,969,214,977,222,973,233,961,229,952,224" shape="poly" />
//     <area target="" alt="" title="" href="" coords="837,135,845,142,852,144,895,169,900,165,848,132" shape="poly" />
//     <area target="" alt="" title="" href="" coords="971,204,1018,232,1031,237,1024,245,1016,240,966,209,971,204" shape="poly" />
//     <area target="" alt="" title="" href="" coords="931,182,939,174,923,164,910,156,903,170,908,175,914,169,919,174,914,180,924,185" shape="poly" />
//     <area target="" alt="" title="" href="" coords="902,192,876,177,881,166,903,181" shape="poly" />
//     <area target="" alt="" title="" href="" coords="365,598,373,606,366,614,373,619,386,627,392,634,382,645,397,653,410,653,415,646,426,648,431,646,436,642,428,627,424,612,403,601,392,606,381,587,366,580,361,587" shape="poly" />
// </map>






































