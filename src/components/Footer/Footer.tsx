import { Box, Flex, Text, Input, Button, Image, Link } from "theme-ui";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarker,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { Link as GatsbyLink } from "gatsby";
import { RiCustomerService2Fill } from "react-icons/ri";
import React from "react";
import sascoAlliedLogo from "images/newsascologo.png";

const imageStyles = {
  display: "flex",
  width: "90px",
  justifyContent: "center",

  "@media screen and (min-width: 168px)": {
    width: "90px",
    display: "flex",
    borderRadius: "15px",
    zIndex: 10,
  },
};

const Footer = () => {
  return (
    <Box as="footer" sx={{ bg: "#414599", color: "white", py: 4 }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Image src={sascoAlliedLogo} sx={imageStyles} />
      </Box>
      <Box as="hr" sx={{ borderTop: "1px solid #fff", my: 4, mx: 65 }} />
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          justifyContent: "space-between",
          px: [3, 5],
          alignItems: "center",
        }}
      >
        <Box sx={{ width: ["100%", "25%"], mb: [3, 0] }}>
          <Text as="h2" sx={{ fontSize: 3, mb: 4 }}>
            Reach us
          </Text>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <Link
              href="https://wa.me/2348035791359"
              sx={{
                color: "white",
                textDecoration: "none",
                "&:hover": {
                  color: "lightgreen",
                },
              }}
            >
              <FaWhatsapp style={{ marginRight: 6 }} />
              <Text>+234 703 364 6913</Text>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <FaPhoneAlt style={{ marginRight: 6 }} />
            <Text>+234 703 364 6913</Text>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <RiCustomerService2Fill style={{ marginRight: 6 }} />
            <Text>+44 740 712 9357</Text>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <FaEnvelope style={{ marginRight: 6 }} />
            <Text>sascohospital@mail.com</Text>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <FaMapMarker style={{ marginRight: 6 }} />
            <Text>
              Address is 6 Akinyo Lane, Opposite So-Said Charity Home, Mechanic
              B/Stop, Awodi-Ora, Ajegunle, Lagos
            </Text>
          </Box>
        </Box>

        <Box sx={{ width: ["100%", "15%"], mb: [3, 0] }}>
          <Text as="h2" sx={{ fontSize: 3, mb: 4 }}>
            Company
          </Text>
          <Text as={"p"} sx={{ mr: 1, mb: 4 }}>
            <GatsbyLink
              to="/"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Home
            </GatsbyLink>
          </Text>
          <Text as={"p"} sx={{ mr: 1 }}>
            <GatsbyLink
              to="/contact"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Contact
            </GatsbyLink>
          </Text>
        </Box>

        <Box sx={{ width: ["100%", "15%"], mb: [3, 0] }}>
          <Text as="h2" sx={{ fontSize: 3, mb: 4 }}>
            Legal
          </Text>
          <Text as={"p"} sx={{ mb: 4 }}>
            Privacy Policy
          </Text>
          <Text as={"p"} sx={{ mb: 4 }}>
            Terms & Services
          </Text>
          <Text as={"p"} sx={{ mb: 4 }}>
            Terms of Use
          </Text>
          <Text>Refund Policy</Text>
        </Box>

        <Box sx={{ width: ["100%", "15%"], mb: [3, 0] }}>
          <Text as="h2" sx={{ fontSize: 3, mb: 4 }}>
            Quick Links
          </Text>
          <Text as={"p"} sx={{ mb: 4 }}>
            Techlabz Keybox
          </Text>
          <Text as={"p"} sx={{ mb: 4 }}>
            Downloads
          </Text>
          <Text>Forum</Text>
        </Box>

        <Box
          sx={{
            width: ["100%", "25%"],
            mb: [3, 0],
            bg: "#676AAD",
            p: 3,
            borderRadius: 4,
          }}
        >
          <Text as="h2" sx={{ fontSize: 3, mb: 2 }}>
            Join Our Newsletter
          </Text>
          <Flex as="form" sx={{ flexDirection: "column" }}>
            <Input
              sx={{
                mb: 2,
                "::placeholder": {
                  color: "#676AAD",
                },
              }}
              placeholder="Your email address"
            />
            <Button sx={{ bg: "#414599" }}>Subscribe</Button>
          </Flex>
          <Text sx={{ mt: 2, fontSize: 0 }}>
            * Will send you weekly updates for your better tool management.
          </Text>
        </Box>
      </Flex>

      <Flex sx={{ mt: 4, justifyContent: "center" }}>
        <Box
          as="a"
          href="https://web.facebook.com/profile.php?id=100092988095570/"
          sx={{ mr: 4, color: "white" }}
        >
          <FaFacebook size={24} />
        </Box>
        {/* <Box as="a" href="https://www.instagram.com/orismedicallab/" sx={{ mx: 2, mr: 4, color: 'white' }}>
          <FaInstagram size={24} />
        </Box>
        <Box as="a" href="https://www.tiktok.com/@orislab?_t=8nwNNZsxOkP&_r=1/" sx={{ mx: 2, mr: 4, color: 'white' }}>
          <FaTiktok size={24} />
        </Box> */}
      </Flex>
    </Box>
  );
};

export default Footer;
