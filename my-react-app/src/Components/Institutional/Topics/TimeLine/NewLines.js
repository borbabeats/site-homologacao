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
];

export default function NewLines() {
  const [activeYear, setActiveYear] = useState(items[0].id);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleYearClick = (yearId) => {
    setActiveYear(yearId);
  };

  return (
    <div>
      <Navbar items={items} activeYear={activeYear} handleYearClick={handleYearClick} />
    </div>
  );
}

const Navbar = ({ items, activeYear, handleYearClick }) => {
  return (
    <nav style={{ zIndex: 90, margin: 0 }}>
      <ul className="navbar d-sm-inline-flex d-flex">
        {items.map((decadeItem, id) => (
          <DropdownButton className={`${decadeItem} nav-item  ${activeYear === id && 'active'}` } key={decadeItem.id} title={decadeItem.decade}>
            <DropdownMenu>
              {decadeItem.yearsOfDecade.map((yearItem) => (
                <DropdownItem
                  key={yearItem.year}
                  onClick={() => handleYearClick(yearItem.id)}
                  active={activeYear === yearItem.id}
                >
                  {yearItem.year}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </DropdownButton>
        ))}
      </ul>
    </nav>
  );


};
