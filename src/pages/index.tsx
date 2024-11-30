import React from "react";
import Layout from "components/Layout/Layout";
import { Box, Flex, Heading, Text, Button, Image, Input } from 'theme-ui';
import { Link } from "gatsby";
import medicalDiagnostics from "images/bigdoctor.jpg"
import healthHome from "images/healthHome.jpg"
import medicalDiagnostics2 from "images/malenurse.jpg"
import healthScreening from "images/femaledoc.jpg"
import bloodBanking from "images/femalenurse.jpg"
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
        keywords={['Outpatient Services', 'General Consultations', 'Preventive Health Services', 'Chronic Disease Management', "Medical Diagnostics", "In-patient Services", "Surgical Admissions", "Special Clinical Services", 'Serology', 'Hematology', 'Microbiology', 'Parasitology', 'Chemistry', 'Hormonal Assays', 'Scan']}
      />
      <Helmet>
        <meta
          name="sasco Allied"
          content="At Sasco Hospital Life First, we believe everyone deserves to live their best life, starting with their health"
        />
      </Helmet>

      {/* Banner */}
      <Flex sx={{ marginBottom: '5rem', flexDirection: ['column', "column", "row"], justifyContent: 'space-between' }}>


        <Box sx={{ flex: '1', mt: [4, 4, 0], display: "flex", justifyContent: 'center' }}>
          <Image src={healthHome} sx={{
            borderRadius: 20,
            width: ['auto', '40%', 'auto'],
            maxWidth: ['300px', '650px', '750px']
          }} />
        </Box>
        <Box as="section"
        sx={{
          width: ['100%','50%']
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
            Your health, our priority—start your wellness journey with us today!
          </Heading>
          <Text as="p" sx={{ color: 'text', mb: 4, width: ['100%', '100%', '583px'], lineHeight: '36px', fontWeight: 'medium' }}>
            At Sasco Hospital Life First, we believe everyone deserves to live their best life, starting with their health. Navigating wellness can be overwhelming with fads and conflicting advice, so we provide clear, reliable information, expert guidance, comprehensive diagnosis and treatment.
            <br /><br />
            Our team of health professionals, including doctors, nutritionists, pharmacists, nurses etc, is dedicated to providing top notch medical care for your well-being.
            We’re your trusted partner in health. Whether you are in need of medical care and treatment, comprehensive diagnosis, revamping your wellness routine, or supporting your family, we’re here to meet your health needs.
          </Text>
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
              The Sasco Hospital Life First is a private hospital located at Awodi Ora, Ajeromi Ifelodun Local Government, Lagos State. It was registered on 17th of June 2019. It is a licensed hospital by the Nigeria Ministry of Health, with facility code 24/02/1/2/2/0041 and registered as Primary Health Care Centre.
              <br /><br />
              Some of our services include general medical services relating to the treatment of infectious diseases, tuberculosis, non-communicable diseases, family medicine, hepatitis, general minor surgeries, Antenatal Care (ANC), immunization, etc. Other services relate to family planning, nutrition, gynecological and pediatric services, health education and community mobilization, maternal and newborn care, onsite laboratory and onsite pharmacy.
              <br /><br />
              We are open 24hrs every day of the week, with experienced nurses and doctors ready to serve you.
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

      {/* Outpatient Services */}
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
              Outpatient Services
            </Heading>
            <Text as="p"
              sx={{
                mb: 3,
                width: ['100%', '100%', '583px'],
                lineHeight: '36px',
                fontWeight: 'medium'
              }}>
              <b>General Consultations:</b> Without being admitted, patients can come to the hospital to speak with doctors about their diagnoses, treatment options, and aftercare.<br />
              <b>Preventive Health Services:</b> These include routine check-ups, vaccines, health examinations (e.g., blood pressure checks, cholesterol, cancer tests), and wellness programs meant to avoid the beginning of ailments.<br />
              <b>Chronic Disease Management:</b> Continuous care and observation of long-term illnesses such as diabetes, high blood pressure, asthma, arthritis, etc.<br />
              <b>Medical Diagnostics:</b> In order to guarantee precise evaluation and treatment planning for our patients, we provide thorough medical tests. Our cutting-edge diagnostic services include a range of methods and processes intended to offer comprehensive understanding of your medical condition.
            </Text>
          </Box>

          <Box sx={{ flex: '1', mt: [4, 4, 0], display: "flex", justifyContent: 'center' }}>
            <Image src={medicalDiagnostics2} sx={{ borderRadius: 20, width: ['100%', '100%', '374.03px'] }} />
          </Box>
        </Flex>
      </Box>

      {/* In-patient Services */}
      <Box as="section"
        sx={{
          bg: '#F5F8FF',
          py: [4, 5],
          px: [3, 4],
          mb: '5rem',
          // borderRadius: ['30px', '200px'],
          borderTopLeftRadius: ['30px', '100px'],
          borderBottomLeftRadius: ['30px', '100px'],
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
              In-patient Services
            </Heading>
            <Text as="p"
              sx={{
                mb: 3,
                width: ['100%', '100%', '583px'],
                lineHeight: '36px',
                fontWeight: 'medium'
              }}>
              <b>General Medicine Wards:</b> Patients are frequently admitted to a general medicine ward when they require medical treatment. Internal medicine specialists and nurses provide care for them here.<br />
              <b>Surgical Admissions:</b> Our hospital offers preoperative and after care to patients having planned surgeries, whether they are urgent or elective.
            </Text>
          </Box>

          <Box sx={{ flex: '1', mt: [4, 4, 0], display: "flex", justifyContent: 'center' }}>
            <Image src={healthScreening} sx={{ borderRadius: 20, width: ['100%', '100%', '374.03px'] }} />
          </Box>
        </Flex>

      </Box>

      {/* Special Clinical Services */}
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