import { Container, Row, Col, Image } from 'react-bootstrap'
import texture from '../../../../Config/Images/History/texture-dot.svg'
import { Chrono } from "react-chrono";
import { useMediaQuery } from 'react-responsive';



const items = [
    {
        title: "1963",
        cardSubtitle: "1963",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/Home/firstPhoto.webp')
            },
        },   
        cardDetailedText: `Constituição da CIME - Companhia Industrial de Materiais Elétricos com a finalidade de produzir eletroferragem galvanizada para rede de energia elétrica.`
    },
    {
        title: "1968",
        cardSubtitle: "1968",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/1968.webp')
            },
        },
        cardDetailedText: `Início da gestão da Família Veit.`
    },
    {
        title: "1973",
        cardSubtitle: "1973",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/1973.webp')
            },
        },
        cardDetailedText: `A empresa se transfere para o atual endereço, em terreno de 26000m² e área construída de 1600m². Inaugurada a Forjaria I, com Martelo Banning de 25kj.`
    },
    {
        title: "1975",
        cardSubtitle: "1975",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/1975.webp')
            },
        },
        cardDetailedText: `Entra em operação Martelo Banning de 50 kj.`
    },
    {
        title: "1988",
        cardSubtitle: "1988",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/1988.webp')
            },
        },
        cardDetailedText: `Inaugurada a Forjaria II com prensa Smeral de 4.000 t.`
    },
    {
        title: "1991",
        cardSubtitle: "1991",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/1991.webp')
            },
        },
        cardDetailedText: `Iniciada a produção de peças usinadas de precisão com tornos, retíficas e geradora de engrenagens CNC.`
    },
    {
        title: "1995",
        cardSubtitle: "1995",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/1995.webp')
            },
        },
        cardDetailedText: `Iniciada a produção de braços de direção para caminhões.`
    },
    {
        title: "1998",
        cardSubtitle: "1998",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/1998.webp')
            }, 
        },
        cardDetailedText: `Implantada a unidade para produção de componentes do sistema de 3º Ponto de Tratores Agrícolas.`
    },
    {
        title: "2001",
        cardSubtitle: "2001",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2001.webp')
            }, 
        },
        cardDetailedText: `Empresa passa a utilizar o software Solid Edge para CAD e o Unigraphics para aplicações CAD/CAM.`
    },
    {
        title: "2003",
        cardSubtitle: "2003",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2003_1.webp')
            },
        },
        cardDetailedText: `Empresa lança novo produto no segmento agrícola: Gancho de engate rápido.`
    },
    {
        title: "2003",
        cardSubtitle: "2003",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2003_2.webp')
            },
        },
        cardDetailedText: `High Speed Machining: Empresa investe na aquisição de nova tecnologia para matrizaria.`
    },
    {
        title: "2004",
        cardTitle: "2004",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2004_1.webp')
            },
        },
        cardDetailedText: `Implantado o Laboratório de Teste e Ensaios Mecânicos, com instalação de uma máquina de tração Kratos, capacidade 50 ton com software completo para definição das curvas força x deformação.`
    },
    {
        title: "2004",
        cardSubtitle: "2004",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2004_2.webp')
            }, 
        },
        cardDetailedText: `Maxiforja inicia operações com seu primeiro robô para soldagem. Robô KR 15/2 KUKA de seis eixos, um mesa posicionadora de dois eixos, uma fonte sinérgica de 400A, além de acessórios como o sistema automático para o corte do arame e sistema de limpeza da tocha.`
    },
    {
        title: "2008",
        cardSubtitle: "2008",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2008_extrusao_quente.webp')
            },
        },
        cardDetailedText: `Implementada nova linha de extrusão a quente, focado na produção de pontas do eixo traseiro.`
    },
    {
        title: "2009",
        cardSubtitle: "2009",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2009_extrusao_hidraulica.webp')
            },
        },
        cardDetailedText: `Também conhecidas como spindles, axle end ou extensões de carcaça, as pontas de eixo são fabricadas com tecnologia inédita na América Latina, a extrusão hidráulica a quente.`
    },
    {
        title: "2009",
        cardSubtitle: "2009",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2009b_eixo_longo_para_tratores.webp')
            }, 
        },
        cardDetailedText: `Tecnologia como diferencial. A Maxiforja passará a produzir, a partir do final deste ano, um novo eixo longo para tratores. Usados em veículos com rodados traseiros duplos, as peças serão destinadas à planta de Curitiba da CNH, empresa do grupo Fiat - um dos líderes do segmento de máquinas e equipamentos agrícolas, com mais de 11 mil distribuidores em 160 países.`
    },
    {
        title: "2010",
        cardSubtitle: "2010",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2010_lean_manufacturing.webp')
            }, 
        },
        cardDetailedText: `Implantação do Lean Manufacturing, sistema criado pela empresa japonesa Toyota que ganhou espaço entre companhias do mundo inteiro.`
    },
    {
        title: "2011",
        cardSubtitle: "2011",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2011_predio_usinagem_novo.webp')
            },
        },
        cardDetailedText: `MAIS DO QUE UMA CONSTRUÇÃO. Novo prédio da Usinagem da Maxiforja foi projetado a partir de um conceito mais moderno e eficaz de produção.`
    },
    {
        title: "2013",
        cardSubtitle: "2013",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2013_usinagem_5_eixos.webp')
            }, 
        },
        cardDetailedText: `Ferramentaria estreia usinagem 5 em eixos (GROB). A Maxiforja agora conta com um novo recurso de usinagem que vai permitir mais agilidade na produção.`
    },
    {
        title: "2014",
        cardSubtitle: "2014",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2014_steering_knunckle.webp')
            },
        },
        cardDetailedText: `Desenvolvimento e produção da sua primeira ponta de eixo dianteira (steering kunckle), uma peça de elevada complexidade e amplamente utilizada nos sistemas de direção de ônibus e caminhões.`
    },
    {
        title: "2021",
        cardSubtitle: "2021",
        media: {
            type: "IMAGE",
            source: {
            url: require('../../../../Config/Images/History/2021_impressora_3d.webp')
            }, 
        },
        cardDetailedText: `Aquisição instalação da primeira máquina de impressão 3D, o que permite a confecção interna de vários acessórios, como suportes, calibres, dispositivos. Além do ganho de agilidade de desenvolvimento para produtos próprios com a impressão prévia para análise e programas de medição.`
    },
]


export default function Lines() {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM

    return !isMobile ? ( <>
        <Image src={texture} style={{ position:'absolute', top:'50%', right: '0', width: '360px' }}  />
        <span className="year" style={{ position:'absolute', top:'50%', right: '0', width: '360px' }} ></span>
        
        
      <Chrono
        items={items}
        slideItemDuration={6000}
        slideShow
        cardHeight={550}
        reaMore={true}
        cardWidth={650}
        showAllCardsHorizontal
        contentDetailHeight={100}
        textOverlay
        mode="VERTICAL_ALTERNATING"
        theme={{
            cardBgColor: "transparent",
            cardForeColor: "violet",
            titleColor: "white",
            titleColorActive: "#f25500",
          }} />
          
    </>
        ) 
        : <Chrono 
            items={items}
            slideItemDuration={4000}
            slideShow
            cardHeight={550}
            readMore={true}
            cardWidth={340}
            showAllCardsHorizontal
            contentDetailHeight={50}
            textOverlay
            mode="HORIZONTAL"
            theme={{
                cardBgColor: "transparent",
                cardForeColor: "violet",
                titleColor: "white",
                titleColorActive: "#f25500",
              }}
        />
    }


    


