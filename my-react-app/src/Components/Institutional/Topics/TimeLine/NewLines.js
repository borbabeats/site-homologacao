import { Container, Row, Col, Image, DropdownToggle, DropdownButton, DropdownMenu, DropdownItem } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react'
import texture from '../../../../Config/Images/History/texture-dot.svg'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

const items = [
    {
        id: 1,
		decade: "1960",
		yearsOfDecade: [
				{     id: 'a',
				      year: "1963",
        			img: require('../../../../Config/Images/Home/firstPhoto.webp'),
        			text: "Constituição da CIME - Companhia Industrial de Materiais Elétricos com a finalidade de produzir eletroferragem galvanizada para rede de energia elétrica"
                },
				{     id: 'b',
        			year: "1968",
        			img: require('../../../../Config/Images/History/1968.webp'),
        			text: "Início da gestão da Família Veit"
                }		
			]
	},
    {
        id: 2,
		decade: "1970",
		yearsOfDecade: [
				{
            id: 'c',
				    year: "1973",
				    img: require('../../../../Config/Images/History/1973.webp'),
        		text: "A empresa se transfere para o atual endereço, em terreno de 26000m² e área construída de 1600m². Inaugurada a Forjaria I, com Martelo Banning de 25kj"
                },
				{
              id: 'd',
        			year: "1975",
        			img: require('../../../../Config/Images/History/1975.webp'),
        			text: "Entra em operação Martelo Banning de 50 kj."
                }
            ]
	},
    {   
        id: 3,
		decade: "1980",
		yearsOfDecade: [
            {
                id: 'e',
                year: "1988",
                img: require('../../../../Config/Images/History/1988.webp'),
                text: "Inaugurada a Forjaria II com prensa Smeral de 4.000 t. "
            },
            ]
	},
    {   
        id: 4,
		decade: "1990",
		yearsOfDecade: [
            {
                id: 'f',
                year: "1991",
                img: require('../../../../Config/Images/History/1991.webp'),
                text: "Iniciada a produção de peças usinadas de precisão com tornos, retíficas e geradora de engrenagens CNC"
            },
            {
                id: 'g',
                year: "1995",
                img: require('../../../../Config/Images/History/1995.webp'),
                text: "Iniciada a produção de braços de direção para caminhões"
            },
            {
                id: 'h',
                year: "1998",
                img: require('../../../../Config/Images/History/1998.webp'),
                text: "Implantada a unidade para produção de componentes do sistema de 3º Ponto de Tratores Agrícolas"
            },
        ]   
	},
    {
        id: 5,
		decade: "2000",
		yearsOfDecade: [
            {
                id: 'i',
                year: "2001",
                img: require('../../../../Config/Images/History/2001.webp'),
                text: "Empresa passa a utilizar o software Solid Edge para CAD e o Unigraphics para aplicações CAD/CAM"
            },
            { 
                id: 'j',
                year: "2003",
                img: require('../../../../Config/Images/History/2003_1.webp'),
                text: "Empresa lança novo produto no segmento agrícola: Gancho de engate rápido"
            },
            {   
                id: 'k',
                year: "2003",
                img: require('../../../../Config/Images/History/2003_2.webp'),
                text: "High Speed Machining: Empresa investe na aquisição de nova tecnologia para matrizaria"
            },
            {
                id: 'l',
                year: "2004",
                img: require('../../../../Config/Images/History/2004_1.webp'),
                text: "Implantado o Laboratório de Teste e Ensaios Mecânicos, com instalação de uma máquina de tração Kratos, capacidade 50 ton com software completo para definição das curvas força x deformação."
            },
            {
                id: 'm',
                year: "2004",
                img: require('../../../../Config/Images/History/2004_2.webp'),
                text: "Maxiforja inicia operações com seu primeiro robô para soldagem. Robô KR 15/2 KUKA de seis eixos, um mesa posicionadora de dois eixos, uma fonte sinérgica de 400A, além de acessórios como o sistema automático para o corte do arame e sistema de limpeza da tocha"
            },
            {
              id: 'n',
              year: "2008",
              img: require('../../../../Config/Images/History/2004_2.webp'),
              text: "Implementada nova linha de extrusão a quente, focado na produção de pontas do eixo traseiro."
          },
          {
            id: 'o',
            year: "2009",
            img: require('../../../../Config/Images/History/2004_2.webp'),
            text: "Também conhecidas como spindles, axle end ou extensões de carcaça, as pontas de eixo são fabricadas com tecnologia inédita na América Latina, a extrusão hidráulica a quente."
        },
        {
          id: 'p',
          year: "2009",
          img: require('../../../../Config/Images/History/2004_2.webp'),
          text: "Tecnologia como diferencial. A Maxiforja passará a produzir, a partir do final deste ano, um novo eixo longo para tratores. Usados em veículos com rodados traseiros duplos, as peças serão destinadas à planta de Curitiba da CNH, empresa do grupo Fiat - um dos líderes do segmento de máquinas e equipamentos agrícolas, com mais de 11 mil distribuidores em 160 países"
      },
        ]
	},
  {
    id: 6,
decade: "2010",
yearsOfDecade: [
        {
            id: 'q',
            year: "2010",
            img: require('../../../../Config/Images/History/2001.webp'),
            text: "Implantação do Lean Manufacturing, sistema criado pela empresa japonesa Toyota que ganhou espaço entre companhias do mundo inteiro"
        },
        { 
            id: 'r',
            year: "2011",
            img: require('../../../../Config/Images/History/2003_1.webp'),
            text: "MAIS DO QUE UMA CONSTRUÇÃO. Novo prédio da Usinagem da Maxiforja foi projetado a partir de um conceito mais moderno e eficaz de produção."
        },
        {   
            id: 's',
            year: "2013",
            img: require('../../../../Config/Images/History/2003_2.webp'),
            text: "Ferramentaria estreia em usinagem 5 eixos. A Maxiforja agora conta com um novo recurso de usinagem que vai per mitir mais agilidade na produção."
        },
        {
            id: 't',
            year: "2014",
            img: require('../../../../Config/Images/History/2004_1.webp'),
            text: "Desenvolvimento e à produção da sua primeira ponta de eixo dianteira (steering kunckle), uma peça de elevada complexidade e amplamente utilizada nos sistemas de direção de ônibus e caminhões. "
        },
        
    ]
},
{
  id: 7,
decade: "2020",
yearsOfDecade: [
      {
          id: 'u',
          year: "2021",
          img: require('../../../../Config/Images/History/2004_2.webp'),
          text: "Aquisição instação da primeira máquina de impressão 3D, o que permite a confecção interna de vários acessórios, como suportes, calibres, dispositivos. Além do ganho de agilidade de desenvolvimento para produtos próprios com a impressão prévia para análise e programas de medição."
      },
  ]
},
];

export default function NewLines() {
  const [activeYear, setActiveYear] = useState(items[0].id);
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedText, setSelectedText] = useState('');
  const [selectedYear, setSelectedYear] = useState('')
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleYearClick = (yearId) => {
    setActiveYear(yearId);
    const selectedYear = items.find((decadeItem) => 
    decadeItem.yearsOfDecade.find((yearItem) => yearItem.id === yearId))

    if (selectedYear) {
      setSelectedImage(selectedYear.yearsOfDecade.find((yearItem) => yearItem.id === yearId).img)
      setSelectedText(selectedYear.yearsOfDecade.find((yearItem) => yearItem.id === yearId).text)
      setSelectedYear(selectedYear.yearsOfDecade.find((yearItem) => yearItem.id === yearId).year)
    }
  };

  /*Elemento do Navbar*/
  const Navbar = ({ items, activeYear, handleYearClick }) => {
    return (
      <nav style={{ zIndex: 90, margin: 0 }}>
        <ul className="navbar d-sm-inline-flex d-flex" style={{ zIndex: 91, backgroundColor: 'transparent' }}>
        {items.map((decadeItem, id) => (
        
          <DropdownButton className= "dropdownbutton" key={decadeItem.id} title={decadeItem.decade}>
            <DropdownToggle className={`${decadeItem} dropdowntoggle`} >
            {decadeItem.yearsOfDecade.map((yearItem) => (
                <DropdownItem
                  className='dropdown-item-years'
                  key={yearItem.id}
                  onClick={() => handleYearClick(yearItem.id)}
                  active={activeYear === yearItem.id}
                >
                  {yearItem.year}
                </DropdownItem>
                
              ))}
            </DropdownToggle>
                <DropdownMenu>
              
              </DropdownMenu>
            </DropdownButton>
          ))}
        </ul>
      </nav>
  );
};

const wasClicked = activeYear;


return !isMobile ? 
 <Container fluid className='vh-100'>
    {/* Botoes de navegação*/}
    <div>
      <Navbar items={items} activeYear={activeYear} handleYearClick={handleYearClick} />
    </div>

    {/*Textura de fundo*/}
    <Image src={texture} style={{ position:'absolute', top:'50%', right: '0', width: '360px' }}  />
    <div className='div-animate-smaller' style={{ color: '#484848', position:'absolute', top: '9%', left: '4%', fontSize: '12rem' }}>{selectedYear}</div>
    <Col lg={12} className='h-100'>
      <Row className='h-100'> 
        <Col lg={6} sm={12} md={12} className='d-flex align-items-center'>
          {/*texto desktop*/}
          <div className='p-4 d-none d-lg-block mr-auto ml-auto div-animate-text fade-in text-break text-white'>
            <div style={{ position: 'absolute', bottom: '35%', left: '20%', width: '60%' }}>
              {wasClicked !== 1
              ? <p style={{ fontSize: '2rem' }}>{selectedText}</p>
              : <p>Escolha uma década e um ano para iniciar.</p>
              }  
              {/*Arrows para troca de anos*/}
              <MdKeyboardArrowLeft/>  
              <MdKeyboardArrowRight/>            
            </div>
          </div> {/*texto tablet*/}
          <div className='p-5 text-white d-lg-none d-sm-block mr-auto ml-auto div-animate-text fade-in text-break'>
            {wasClicked !== 1
            ? <p style={{ fontSize: '2rem' }}>{selectedText}</p>
            : <p>Escolha uma década e um ano para iniciar.</p>
            }
            {/*Arrows para troca de anos*/}
            <MdKeyboardArrowLeft/>  
            <MdKeyboardArrowRight/> 
          </div>
        </Col>
        <Col lg={6} sm={12} md={12}>
            <Image src={selectedImage} className='d-none d-md-block div-animate-img mr-auto ml-auto imgHistoric' style={{ position: 'absolute', bottom: '40%', right: '20%', width: '60%', maxHeight: '520px' }}/>
        </Col>
      </Row>
    </Col>
  </Container>

   /*is Mobile*/
   : <Container fluid>
   {/* Botoes de navegação*/}
   <div style={{position: 'absolute', top: '0', left: '0'}}>
     <Navbar items={items} activeYear={activeYear} handleYearClick={handleYearClick} />
   </div>
    {/*Textura de fundo*/}
    <Image src={texture} style={{ position:'absolute', top:'50%', right: '0', width: '240px' }}  />
    {/*Ano selecionado*/}
    <div className='div-animate-smaller ' style={{ color: '#484848', position:'absolute', top: '9%', fontSize: '9.5rem', left: '-2%' }}>{selectedYear}</div>
     <Col sm={6} className='h-100'>
       <Row className='h-100'>
         <Col sm={12} className='d-flex align-items-center'>
          {/*Texto selecionado*/}
         <div className='p-3 text-white d-lg-none d-sm-block mr-auto ml-auto div-animate-text fade-in text-break'>
            {wasClicked !== 1
            ? <p style={{ fontSize: '1.5rem' }}>{selectedText}</p>
            : <p>Escolha uma década e um ano para iniciar.</p>
            }
            {/*Arrows para troca de anos*/}
            <MdKeyboardArrowLeft/>  
            <MdKeyboardArrowRight/> 
          </div>
         </Col>
         {/*Imagem selecionada*/}
         <Col sm={6}>
            <Image src={selectedImage} className='d-flex d-sm-block div-animate-img mr-auto ml-auto imgHistoric' style={{ position: 'absolute', top: '0', right: '20%', width: '60%', maxHeight: '320px' }}/>
        </Col>
       </Row>
     </Col>
 </Container>

}
