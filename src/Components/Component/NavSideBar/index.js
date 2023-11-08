import React from 'react';
import { useTranslation } from "react-i18next"
import { Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react';

function NavSideBar({ ItemsNavLink }) {
    const { t } = useTranslation()
    const [paddingBottom, SetPaddingBottom] = useState(0)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset
            const sections = document.querySelectorAll('section')
            const sectionTops = Array.from(sections).map(section => ({
                id: section.id,
                top: section.offsetTop,
                bottom: section.offsetTop + section.offsetHeight
            }))

            for (let i = 0; i < sectionTops.length; i++) {
                if (currentScrollPos >= sectionTops[i].top && currentScrollPos <= sectionTops[i].bottom) {
                    setActiveSection(sectionTops[i].id)
                    break;
                }
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById("footer");
            var footerOffsetTop = footer.offsetTop;
            var windowHeight = window.innerHeight;
            var scrollY = window.scrollY;

            if ((scrollY + windowHeight) >= footerOffsetTop)
                SetPaddingBottom((scrollY + windowHeight) - footerOffsetTop)
            else
                SetPaddingBottom(0)
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return <Nav
        className="navbar-sidebar text-dark flex-column"
        style={{
            fontSize: '1.1em !important',
            top: 0,
            left: 0,
            bottom: 0,
            paddingTop: '10%',
            paddingLeft: '.4%',
            cursor: 'pointer',
            paddingBottom: paddingBottom,
            backgroundColor: 'transparent',
        }} >
        {ItemsNavLink.map(({ id, menu, href }) => <Nav.Link
            spy
            smooth
            key={id}
            as={Link}
            to={href}
            offset={-70}
            duration={500}
            activeClass='selected'
            className={`text-white`}
            active={activeSection === href}
            style={{ height: '60px'/*`${100 / ItemsNavLink.length}%`*/, width: '100%' }}
        >
            <p className='text-change-size =' style={{width: '100%'}}>{t(menu)}</p>
        </Nav.Link>)
        }
    </Nav>;
}

export default NavSideBar;