import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"
import SEO from "components/SEO/SEO"
import React from "react"
import { Container } from "theme-ui"

type LayoutProps = {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
    const { children } = props

    return (
        <>
            <SEO
                meta={[]}
                keywords={['Medical Diagnostics', 'Health Screening', 'Blood Banking', 'Pre-Employment Test', "Food Handler's Test", "Routine Test", "Fertility Test", "S.T.D'S", 'Serology', 'Hematology', 'Microbiology', 'Parasitology', 'Chemistry', 'Hormonal Assays', 'Scan']}

            />
            <Header />
            <Container sx={{ maxWidth: "90%", marginBottom: '50px' }} bg="muted">
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout