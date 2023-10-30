import { Container, Row, Col, Image, DropdownToggle, DropdownButton, DropdownMenu, DropdownItem } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react'
import texture from '../../../../Config/Images/History/texture-dot.svg'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { useTranslation } from 'react-i18next';

const items = [
    {
        id: 1,
		decade: "1960",
		yearsOfDecade: [
				{     id: '1963',
				      year: "1963",
        			img: require('../../../../Config/Images/Home/firstPhoto.webp'),
        			text: 'institucional.historico.1963'
                },
				{     id: '1968',
        			year: "1968",
        			img: require('../../../../Config/Images/History/1968.webp'),
        			text: 'institucional.historico.1968'
                }		
			]
	},
    {
        id: 2,
		decade: "1970",
		yearsOfDecade: [
				  {
            id: '1973',
				    year: "1973",
				    img: require('../../../../Config/Images/History/1973.webp'),
        		text: 'institucional.historico.1973'
                },
				  {
                id: '1975',
        			  year: "1975",
        			  img: require('../../../../Config/Images/History/1975.webp'),
        			  text: 'institucional.historico.1975'
                }
            ]
	},
    {   
        id: 3,
		decade: "1980",
		yearsOfDecade: [
            {
                id: '1988',
                year: "1988",
                img: require('../../../../Config/Images/History/1988.webp'),
                text: 'institucional.historico.1988'
            },
            ]
	},
    {   
        id: 4,
		decade: "1990",
		yearsOfDecade: [
            {
                id: '1991',
                year: "1991",
                img: require('../../../../Config/Images/History/1991.webp'),
                text: 'institucional.historico.1991'
            },
            {
                id: '1995',
                year: "1995",
                img: require('../../../../Config/Images/History/1995.webp'),
                text: 'institucional.historico.1995'
            },
            {
                id: '1998',
                year: "1998",
                img: require('../../../../Config/Images/History/1998.webp'),
                text: 'institucional.historico.1998'
            },
        ]   
	},
    {
        id: 5,
		decade: "2000",
		yearsOfDecade: [
            {
                id: '2001',
                year: "2001",
                img: require('../../../../Config/Images/History/2001.webp'),
                text: 'institucional.historico.2001'
            },
            { 
                id: '2003',
                year: "2003",
                img: require('../../../../Config/Images/History/2003_1.webp'),
                text: 'institucional.historico.2003'
            },
            {   
                id: '2003b',
                year: "2003",
                img: require('../../../../Config/Images/History/2003_2.webp'),
                text: 'institucional.historico.2003b'
            },
            {
                id: '2004',
                year: "2004",
                img: require('../../../../Config/Images/History/2004_1.webp'),
                text: 'institucional.historico.2004'
            },
            {
                id: '2004b',
                year: "2004",
                img: require('../../../../Config/Images/History/2004_2.webp'),
                text: 'institucional.historico.2004b'
            },
            {
                id: '2008',
                year: "2008",
                img: require('../../../../Config/Images/History/2004_2.webp'),
                text: 'institucional.historico.2008'
            },
            {
                id: '2009',
                year: "2009",
                img: require('../../../../Config/Images/History/2004_2.webp'),
                text: 'institucional.historico.2009'
            },
            {
                id: '2009b',
                year: "2009",
                img: require('../../../../Config/Images/History/2004_2.webp'),
                text: 'institucional.historico.2009b'
      },
        ]
	},
  {
    id: 6,
decade: "2010",
yearsOfDecade: [
        {
            id: '2010',
            year: "2010",
            img: require('../../../../Config/Images/History/2001.webp'),
            text: 'institucional.historico.2010'
        },
        { 
            id: '2011',
            year: "2011",
            img: require('../../../../Config/Images/History/2003_1.webp'),
            text: 'institucional.historico.2011'
        },
        {   
            id: '2013',
            year: "2013",
            img: require('../../../../Config/Images/History/2003_2.webp'),
            text: 'institucional.historico.2013'
        },
        {
            id: '2014',
            year: "2014",
            img: require('../../../../Config/Images/History/2004_1.webp'),
            text: 'institucional.historico.2014'
        },
        
    ]
},
{
  id: 7,
decade: "2020",
yearsOfDecade: [
      {
          id: '2021',
          year: "2021",
          img: require('../../../../Config/Images/History/2004_2.webp'),
          text: 'institucional.historico.2021'
      },
  ]
},
];

export default function NewLines() {
  const [activeYear, setActiveYear] = useState(items[0].id);
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedText, setSelectedText] = useState('');
  const [selectedYear, setSelectedYear] = useState('')
  const { t } = useTranslation()
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleYearClick = (yearId) => {
    setActiveYear(yearId);
    const selectedYear = items.find((decadeItem) => 
    decadeItem.yearsOfDecade.find((yearItem) => yearItem.id === yearId))

    if (selectedYear) {
      setSelectedImage(selectedYear.yearsOfDecade.find((yearItem) => yearItem.id === yearId).img)
      
      /*setSelectedText(selectedYear.yearsOfDecade.find((yearItem) => yearItem.id === yearId).text)*/
      setSelectedYear(selectedYear.yearsOfDecade.find((yearItem) => yearItem.id === yearId).year)
    }
  };

  // Select next year
  const selectNextYear = () => {
    const currentIndex = items.findIndex(
      (decadeItem) => decadeItem.yearsOfDecade.some((yearItem) => yearItem.id === activeYear)
    ) 
      
      if (currentIndex !== -1) {
        const currentDecade = items[currentIndex]
        const yearIndex = currentDecade.yearsOfDecade.findIndex((yearItem) => yearItem.id === activeYear)
        
        if (yearIndex !== -1 && yearIndex < currentDecade.yearsOfDecade.length -1) {
          const nextYearId = currentDecade.yearsOfDecade[yearIndex + 1].id
         
          setActiveYear(nextYearId)
          
        } else if (currentIndex < items.length -1) {
          const nextDecade = items[currentIndex + 1]
          console.log(currentDecade)
          setActiveYear(nextDecade.yearsOfDecade[0].id)
          
        }
      }
  }

  //Select previous year

  

  /*Elemento do Navbar*/
  const Navbar = ({ items, activeYear, handleYearClick }) => {
    return (
      <nav style={{ zIndex: 90, margin: '0 14px 0 0' }}>
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
        <Col lg={6} sm={12} md={12} className='d-flex align-items-center' >
          {/*texto desktop*/}
          <div className='p-4 d-none d-lg-block mr-auto ml-auto div-animate-text fade-in text-break text-white' >
            <div className='contentTimeLine' style={{ position: 'absolute', bottom: '35%', left: '20%', width: '60%' }}>
              {wasClicked !== 1
              ? <p style={{ fontSize: '2rem' }}>{t(selectedText)}</p>
              : <p>Escolha uma década e um ano para iniciar.</p>
              }  
              {/*Arrows para troca de anos*/}
              <MdKeyboardArrowLeft style={{ cursor: 'pointer' }}/>  
              <MdKeyboardArrowRight onClick={selectNextYear} style={{ cursor: 'pointer'}}/>            
            </div>
          </div> {/*texto tablet*/}
          <div className='p-5 text-white d-lg-none d-sm-block mr-auto ml-auto div-animate-text fade-in text-break contentTimeLine'>
            {wasClicked !== 1
            ? <p style={{ fontSize: '2rem' }}>{selectedText}</p>
            : <p>Escolha uma década e um ano para iniciar.</p>
            }
            {/*Arrows para troca de anos*/}
            <MdKeyboardArrowLeft style={{ cursor: 'pointer' }}/>  
            <MdKeyboardArrowRight onClick={selectNextYear} style={{ cursor: 'pointer'}}/> 
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
   <div style={{ position: 'absolute', top: '0', left: '0' }}>
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
         <div className='p-3 text-white d-lg-none d-sm-block mr-auto ml-auto div-animate-text fade-in text-break contentTimeLine'>
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
