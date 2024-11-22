import { Link } from "gatsby"
import React, { useState } from "react"
import { Box, Flex, Image } from "theme-ui"
import sascoAlliedLogo from "images/sascoAlliedLogo.jpeg"
import Navbar from "components/Navbar/Navbar";
import NavbarMobile from "components/NavbarMobile/NavbarMobile";
import Hamburger from "components/Hamburger/Hamburger";

const imageStyles = {
    display: 'block',
    width: '90px',

    '@media screen and (min-width: 168px)': {
        width: '90px',
        display: 'block',
        borderRadius: '15px',
        zIndex: 10,
    },
}

const navbarStyles = {
    display: 'none',
    '@media screen and (min-width: 768px)': {
        display: 'block',
    },
}

const Header = () => {
    const [showDrawer, setShowDrawer] = useState<boolean>(false)

    return (
        <Flex as={"nav"} style={{ backgroundColor: '#F9F9F9', marginBottom: '5rem' }}>
            <Box p={2} sx={{ flex: "1 1 auto" }}>
                <Link to="/">
                    <Image
                        src={sascoAlliedLogo}
                        sx={imageStyles}
                    />
                </Link>
            </Box>

            <NavbarMobile active={showDrawer} setShowDrawer={setShowDrawer} />

            <Box sx={navbarStyles}>
                <Navbar active={showDrawer} />
            </Box>

            <Hamburger showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        </Flex>
    )
}

export default Header
