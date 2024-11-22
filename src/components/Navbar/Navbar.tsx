import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Box, NavLink, } from "theme-ui"

type NavbarProps = {
    active: boolean
}

const Navbar = ({ active }: NavbarProps) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }`)

    const { menuLinks } = data.site.siteMetadata || { menulinks: [] }

    return (
        <>
            {
                !active && (
                    <Box style={{display: "flex" }}>
                            {
                                menuLinks.map((link: MenuLinks) => (
                                    <Box
                                        p={2}
                                        sx={{
                                            display: "none",
                                            "@media screen and (min-width: 168px)": {
                                                width: "auto",
                                                display: "block",
                                                borderRadius: "15px",
                                                paddingTop: "30px",
                                            },
                                        }}
                                    >
                                        <Link style={{ display: "flex", color: " #191B4B", textDecoration: 'none' }} to={link.link} activeClassName={link.name}>
                                            {link.name}
                                        </Link>
                                    </Box>
                                ))
                            }
                    </Box>
                )
            }
        </>

    )
}

export default Navbar