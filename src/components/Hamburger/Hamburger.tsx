import React from "react";
import { Box, css } from "theme-ui"

const buttonStyles = {
    display: 'block',
    zIndex: 10,
    '@media screen and (min-width: 768px)': {
        display: 'none',
    },
};

type HamburgerProps = {
    showDrawer: boolean
    setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const Hamburger = ({ showDrawer, setShowDrawer }: HamburgerProps) => {

    return (
        <Box sx={buttonStyles}>
            {

                !showDrawer
                    ? (
                        <img style={{ zIndex: 10, height: '40px', marginTop: '30px', cursor: 'pointer', outline: 'none' }} width="32" height="19" src="https://img.icons8.com/ios/50/menu--v7.png" alt="menu--v7" onClick={() => setShowDrawer(true)} />
                    ) :
                    (<img style={{ zIndex: 10, marginTop: '30px', cursor: 'pointer', outline: 'none', display: 'inline-block' }} width="40" height="32" src="https://img.icons8.com/fluency-systems-regular/48/x.png" alt="multiply" onClick={() => setShowDrawer(false)} />)
            }
        </Box>
    )
}

export default Hamburger