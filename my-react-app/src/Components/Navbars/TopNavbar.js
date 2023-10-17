import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from "reactstrap";
import iconMaxi from '../../Config/Images/Logo/logomaxihorizontal.svg';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Popover from "../Component/Popover";
import classnames from "classnames";

export default function TopNavbar() {
    const [navbarColor, setNavbarColor] = useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = useState(false);
    const { t } = useTranslation()
    const location = useLocation();

    useEffect(() => {
        setNavbarColor(window.location.pathname === '/' ? 'navbar-transparent' : '');
    }, [location]);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    useEffect(() => {
        const updateNavbarColor = () => {
            if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299)
                setNavbarColor("");
            else if ((document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) && window.location.pathname === '/')
                setNavbarColor("navbar-transparent");
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });

    const ClickInNavLinkOrNavbarBrand = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Navbar className={`${classnames("fixed-top", navbarColor)}`} color-on-scroll=" 300" expand="lg" id="navbar"  >
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand to="/" title="Maxiforja" onClick={ClickInNavLinkOrNavbarBrand} tag={Link} className="px-0">
                        <img src={iconMaxi} alt="Logo Maxiforja" style={{ width:"250px", padding: 0 }} />
                    </NavbarBrand>
                    <button aria-expanded={navbarCollapse} className={classnames("navbar-toggler navbar-toggler", { toggled: navbarCollapse })} onClick={toggleNavbarCollapse} >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse className="justify-content-end" navbar isOpen={navbarCollapse} >
                    <Nav navbar>
                        {t('nav-bar.menus', { returnObjects: true }).map(({ menu, href }, index) => {
                            return <NavItem key={index}>
                                <NavLink to={href} tag={Link} onClick={ClickInNavLinkOrNavbarBrand} 
                                className="color-secondary p-1">
                                    {menu}
                                </NavLink>
                            </NavItem>
                        })}
                        <NavItem >
                            <Popover />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}