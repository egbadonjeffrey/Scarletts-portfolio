import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../context/ContextWrapper";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const NavItems = [
  {
    span: "01.",
    name: "About",
    link: "#about",
  },
  {
    span: "02.",
    name: "Works",
    link: "#work",
  },
  {
    span: "03.",
    name: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const { theme, menu, width, toggleTheme, toggleMenu } =
    useContext(DarkModeContext);

  useEffect(() => {
    if (width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);

  console.log("theme:", theme);

  return (
    <Container>
      <MobileMenu menu={menu}>
        <CancelMenu onClick={toggleMenu}> [x] </CancelMenu>
        <MobileNavLink href="#about" onClick={toggleMenu}>
          <MobileSpan>01.</MobileSpan> About
        </MobileNavLink>
        <MobileNavLink href="#work" onClick={toggleMenu}>
          <MobileSpan>02.</MobileSpan> Works
        </MobileNavLink>
        <MobileNavLink href="#contact" onClick={toggleMenu}>
          <MobileSpan>03.</MobileSpan> Contact
        </MobileNavLink>

        <Button>
          <ButtonLink
            href="https://egbadonjeffrey.github.io/resume/"
            target="blank"
          >
            Resume
          </ButtonLink>
        </Button>
      </MobileMenu>

      <ListParent>
        <Logo>Sc.</Logo>

        {mobile ? (
          ""
        ) : (
          <Menu>
            {NavItems.map((navItem, index) => (
              <NavLink
                key={index}
                href={navItem.link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.5,
                }}
              >
                <Span>{navItem.span}</Span> {navItem.name}
              </NavLink>
            ))}
          </Menu>
        )}

        <DarkMenu>
          {mobile ? <MenuButton onClick={toggleMenu} /> : ""}
          <ThemeController onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
          </ThemeController>
        </DarkMenu>
      </ListParent>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  position: relative;
  width: 100%;
  margin: 0;
  padding-bottom: 0;
  border-bottom: 0.5px solid #cacaca;
`;

const CancelMenu = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.darkShade};
`;

const MobileMenu = styled.div`
  position: absolute;
  left: ${(props) => (props.menu ? "0" : "-500px")};
  background: ${({ theme }) => theme.background};
  width: 100%;
  height: 120vh;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transition: all 300ms ease;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  width: 50%;
  height: 3.5rem;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.lightShade};
  border-radius: 10px;
  background: transparent;
  color: ${({ theme }) => theme.lightShade};

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const ButtonLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ListParent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.darkShade};
  margin: 0;

  @media screen and (min-width: 2000px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 400px) and (max-width: 1999px) {
    font-size: 3.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

const MobileNavLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  font-size: 3rem;
  text-decoration: none;
  color: ${({ theme }) => theme.darkShade};
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  color: ${({ theme }) => theme.darkShade};
  font-size: 1rem;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }
`;

const MobileSpan = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.lightShade};
`;

const Span = styled.span`
  font-family: "Fira Code", monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.lightShade};

  @media screen and (min-width: 2000px) {
    font-size: 25px;
  }
`;

const MenuButton = styled(RxHamburgerMenu)`
  height: 2rem;
  width: 2rem;
  color: ${({ theme }) => theme.darkShade};
`;

const DarkMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const ThemeController = styled.div`
  background: ${({ theme }) => theme.ThemeControllerBackground};
  color: ${({ theme }) => theme.darkShade};
  height: auto;
  width: auto;
  padding: 0.7rem;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.darkShade};
  transition: all 300ms ease;

  @media screen and (min-width: 2000px) {
    padding: 1.5rem;
    border-radius: 15px;
  }
`;

const Sun = styled(BsSun)`
  color: ${({ theme }) => theme.darkShade};

  @media screen and (min-width: 2000px) {
    width: 2rem;
    height: 2rem;
  }
`;

const Moon = styled(BsMoonStars)`
  color: ${({ theme }) => theme.darkShade};

  @media screen and (min-width: 2000px) {
    width: 2rem;
    height: 2rem;
  }
`;
