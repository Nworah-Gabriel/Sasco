import React from "react";
import Layout from "components/Layout/Layout";
import { Box, Flex, Heading, Text, Button, Image, Input } from 'theme-ui';
import { Link } from "gatsby";
import medicalDiagnostics from "images/medicalDiagnostics.jpg"
import medicalDiagnostics2 from "images/medicalDiagnostics2.jpg"
import healthScreening from "images/healthScreening.jpg"
import bloodBanking from "images/bloodBanking.jpg"
import homeBackgroundImage from "images/homeBackgroundImage.jpg"
import SvgImage from "components/SvgImage/SvgImage";
import SEO from "components/SEO/SEO";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        meta={[
          {
            name: 'author',
            content: 'Oris Medical Laboratory'
          },
          {
            name: 'robots',
            content: 'index,follow'
          }
        ]}
        keywords={['Medical Diagnostics', 'Health Screening', 'Blood Banking', 'Pre-Employment Test', "Food Handler's Test", "Routine Test", "Fertility Test", "S.T.D'S", 'Serology', 'Hematology', 'Microbiology', 'Parasitology', 'Chemistry', 'Hormonal Assays', 'Scan']}
      />
      <Helmet>
        <meta
          name="OrisMedLab"
          content="Oris Medical Laboratory provides quality, affordable, and accessible diagnostic services across Nigeria"
        />
      </Helmet>

      {/* Banner */}
      <Flex sx={{ marginBottom: '5rem', flexDirection: ['column', "column", "row"] }}>
        <Box as="section"
          sx={{
            py: 5,
            flex: '1',
            backgroundImage: `url(${homeBackgroundImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Heading
            sx={{
              mb: 4,
              fontSize: [4, 5, 6],
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #0048FF, #D6008D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Providing Affordable Diagnostics
          </Heading>
          <Text as="p" sx={{ color: 'text', mb: 4, width: ['100%', '100%', '583px'], lineHeight: '36px', fontWeight: 'medium' }}>
            Oris Medical Laboratory provides quality, affordable, and accessible diagnostic services across Nigeria.
            We are committed to leveraging the latest technology to ensure accurate and timely results.
            Our dedicated team of professionals is always ready to provide exceptional customer service and support.
            With a network of laboratories nationwide, we aim to bring reliable healthcare closer to every community.
            Trust Oris Medical Laboratory for your diagnostic needs, where precision and care come first.
          </Text>
        </Box>

        <Box sx={{ flex: '1', mt: [4, 4, 0], display: "flex", justifyContent: 'center' }}>
          <Image src={medicalDiagnostics} sx={{ borderRadius: 20, width: ['100%', '100%', 'auto'] }} />
        </Box>

      </Flex>

      {/* About */}
      <Box as="section"
        sx={{
          bg: '#EDF7FF',
          py: [4, 5],
          px: [3, 4],
          borderRadius: ['30px', '200px'],
          overflow: 'hidden',
          position: 'relative',
          mb: '5rem'
        }}>
        {/* <Image src={backgroundImage} alt="Background Shape" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1, zIndex: 0 }} /> */}
        <Flex sx={{ flexDirection: ['column', 'row'], alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <Box sx={{
            flex: '1',
            pr: 4,
            width: ['100%', '400px'],
            height: ['auto', '400px'],
            backgroundColor: 'white',
            borderTopLeftRadius: '200px',
            borderBottomLeftRadius: '200px',
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
            // borderRadius: ['30px', '200px'],
            border: '2px solid #EDF7FF',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: [0, '5rem'],
            mb: ['2rem', 0]
          }}>
            <Heading as="h2" sx={{ color: '#0048FF', fontSize: ['28px', '40px'], mb: 3, textAlign: 'center', fontWeight: 'bold', width: '100%', maxWidth: '400px' }}>
              About Company
            </Heading>
          </Box>

          <Box sx={{ flex: '1' }}>
            <Text as="p" sx={{ color: '#333', fontSize: [1, 2], lineHeight: ['28px', '36px'], fontWeight: 'medium', maxWidth: '100%' }}>
              The Sasco Hospital is a Private hospital, located at  Awodi Ora, Ajeromi/Ifelodun Local Government, Lagos State.  It was  established on 1/1/2013, and operates on 24hrs basis.
              It is Licensed hospital by the Nigeria Ministry of Health, with facility code 24/02/1/2/2/0041 and registered as Primary Health Care Centre.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Our Services */}
      <Heading
        as="h2"
        sx={{
          color: '#0048FF',
          mb: 4,
          textAlign: 'center',
          fontSize: ['20px', '40px']
        }}>
        Our Services
      </Heading>

      {/* Medical Diagnostics */}
      <Box as="section"
        sx={{
          bg: '#FFF5FF',
          py: [4, 5],
          px: [3, 4],
          mb: '5rem',
          // borderRadius: ['30px', '200px'],
          borderTopRightRadius: ['30px', '200px'],
          borderBottomRightRadius: ['30px', '200px'],
          borderTopLeftRadius: ['30px', 0],
          borderBottomLeftRadius: ['30px', 0],
          overflow: 'hidden',
          position: 'relative'
        }}>
        <Flex
          sx={{
            flexDirection: ['column', 'column', 'row'],
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}>
          <Box>
            <Heading as="h3"
              sx={{
                color: '#002B9A',
                mb: 3,
                fontSize: ['20px', '30px'],
                lineHeight: 'auto'
              }}>
              Medical Services
            </Heading>
            <Text as="p"
              sx={{
                mb: 3,
                width: ['100%', '100%', '583px'],
                lineHeight: '36px',
                fontWeight: 'medium'
              }}>
              Focuses on diagnosing and treating a range of health conditions, including infectious diseases and general family medicine. These services ensure personalized care for individuals and families. (Available).
            </Text>
          </Box>

          <Box sx={{ flex: '1', mt: [4, 4, 0], display: "flex", justifyContent: 'center' }}>
            <Image src={medicalDiagnostics2} sx={{ borderRadius: 20, width: ['100%', '100%', '374.03px'] }} />
          </Box>
        </Flex>
      </Box>

      {/* Health Screening */}
      <Box as="section"
        sx={{
          bg: '#F5F8FF',
          py: [4, 5],
          px: [3, 4],
          mb: '5rem',
          // borderRadius: ['30px', '200px'],
          borderTopLeftRadius: ['30px', '200px'],
          borderBottomLeftRadius: ['30px', '200px'],
          borderTopRightRadius: ['30px', 0],
          borderBottomRightRadius: ['30px', 0],
          overflow: 'hidden',
          position: 'relative'
        }}>
        <Flex
          sx={{
            flexDirection: ['column', 'column', 'row'],
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}>
          <Box>
            <Heading as="h3"
              sx={{
                color: '#002B9A',
                mb: 3,
                fontSize: ['20px', '30px'],
                lineHeight: 'auto'
              }}>
              Surgical Services
            </Heading>
            <Text as="p"
              sx={{
                mb: 3,
                width: ['100%', '100%', '583px'],
                lineHeight: '36px',
                fontWeight: 'medium'
              }}>
              Offers general surgical procedures to address a variety of health issues requiring operative intervention. (Available).
            </Text>
          </Box>

          <Box sx={{ flex: '1', mt: [4, 4, 0], display: "flex", justifyContent: 'center' }}>
            <Image src={healthScreening} sx={{ borderRadius: 20, width: ['100%', '100%', '374.03px'] }} />
          </Box>
        </Flex>

      </Box>

      {/* Blood Banking */}
      <Box as="section"
        sx={{
          bg: '#FFF5FF',
          py: [4, 5],
          px: [3, 4],
          mb: '5rem',
          // borderRadius: ['30px', '200px'],
          borderTopRightRadius: ['30px', '200px'],
          borderBottomRightRadius: ['30px', '200px'],
          borderTopLeftRadius: ['30px', 0],
          borderBottomLeftRadius: ['30px', 0],
          overflow: 'hidden',
          position: 'relative'
        }}>
        <Flex
          sx={{
            flexDirection: ['column', 'column', 'row'],
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}>
          <Box>
            <Heading as="h3"
              sx={{
                color: '#002B9A',
                mb: 3,
                fontSize: ['20px', '30px'],
                lineHeight: 'auto'
              }}>
              Special Clinical Services
            </Heading>
            <Text as="p"
              sx={{
                mb: 3,
                width: ['100%', '100%', '583px'],
                lineHeight: '36px',
                fontWeight: 'medium'
              }}>
              A comprehensive suite of specialized care, including antenatal care (ANC), immunizations, management of tuberculosis, non-communicable diseases, family planning, hepatitis treatment, emergency care, nutrition, health education, and maternal and newborn care. These services cater to both preventive and acute health needs. (Available)
            </Text>
          </Box>

          <Box sx={{ flex: '1', mt: [4, 4, 0], display: "flex", justifyContent: 'center' }}>
            <Image src={bloodBanking} sx={{ borderRadius: 20, width: ['100%', '100%', '374.03px'] }} />
          </Box>
        </Flex>


      </Box>
      {/* <Link
        to={'/services'}
        style={{
          // color: 'background',
          // '&:hover': { bg: '#414599' },
          cursor: 'pointer',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          textDecoration: 'none',

        }}
      >
        View more
      </Link> */}
    </Layout>
  );
};

export default Home;