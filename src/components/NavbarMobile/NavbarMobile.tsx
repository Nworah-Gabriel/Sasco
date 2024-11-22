import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import { Box } from 'theme-ui';
import { keyframes } from '@emotion/react';

type NavbarMobileProps = {
    active: boolean;
    setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const fadeInRight = keyframes({
    '0%': {
        opacity: 0,
        left: '20%',
    },
    '100%': {
        opacity: 1,
        left: 0,
    },
});

const NavbarMobile = ({ active, setShowDrawer }: NavbarMobileProps) => {
    const data = useStaticQuery(graphql`
        query MenuMobileQuery {
            site {
                siteMetadata {
                    menuLinks {
                        name
                        link
                    }
                }
            }
        }
    `);

    const { menuLinks } = data.site.siteMetadata;

    return (
        <>
            {active && (
                <Box
                    sx={{
                        zIndex: 10,
                        height: '100vh',
                        width: '100%',
                        opacity: 0.9,
                        visibility: 'visible',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 0,
                        transition: 'opacity .35s, visibility .35s, height .35s',
                        position: 'fixed',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Add background color for better visibility
                    }}
                >
                    <ul
                        style={{
                            fontSize: '2rem',
                            textAlign: 'center',
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            flex: 0,
                        }}
                    >
                        {menuLinks.map((link: { name: string, link: string }, index: number) => (
                            <li
                                key={link.name}
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    // opacity: 0,
                                    animation: `${fadeInRight} .5s ease forwards`,
                                    animationDelay: `${0.35 + index * 0.05}s`,
                                }}
                            >
                                <Link
                                    style={{
                                        display: 'block',
                                        position: 'relative',
                                        textDecoration: 'none',
                                        overflow: 'hidden',
                                        color: '#191b4b',
                                        marginTop: '1rem'
                                    }}
                                    to={link.link}
                                    activeClassName="active-link"
                                    onClick={() => setShowDrawer(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Box>
            )}
        </>
    );
};

export default NavbarMobile;
