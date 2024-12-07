import React from "react";
import {
  Container,
  Flex,
  Box,
  Label,
  Input,
  Select,
  Textarea,
  Button,
  Text,
} from "theme-ui";
import {
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarker,
  FaFacebook,
} from "react-icons/fa";
import Layout from "components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>Contact Us</h1>
        <Text sx={{ color: "#717171" }}>
          Any question or remarks? Just write us a message!
        </Text>
      </Box>
      <Container sx={{ maxWidth: "1200px", py: 4 }}>
        <Flex
          sx={{
            bg: "white",
            boxShadow: "0 0 16px rgba(0, 0, 0, 0.1)",
            flexDirection: ["column", "row"],
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: ["100%", "40%"],
              bg: "#414599",
              color: "white",
              p: 4,
              borderRadius: 4,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box>
              <h2>Contact Information</h2>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <FaPhoneAlt style={{ marginRight: 6 }} />
                <Text>+44 740 712 9357</Text>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <FaEnvelope style={{ marginRight: 6 }} />
                <Text>sascohospital@mail.com</Text>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <FaMapMarker style={{ marginRight: 6 }} />
                <Text>
                  Address is 6 Akinyo Lane, Opposite So-Said Charity Home,
                  Mechanic B/Stop, Awodi-Ora, Ajegunle, Lagos
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex sx={{ mt: 3 }}>
                <Box
                  as="a"
                  href="https://web.facebook.com/profile.php?id=100092988095570/"
                  sx={{ mr: 4, color: "white" }}
                >
                  <FaFacebook size={24} />
                </Box>
                {/* <Box as="a" href="https://www.instagram.com/orismedicallab/" sx={{ mr: 4, color: 'white' }}>
                                    <FaInstagram size={24} />
                                </Box> */}
              </Flex>
            </Box>
          </Box>
          <Box
            sx={{ width: ["100%", "55%"], mt: [4, 0], p: 4, borderRadius: 4 }}
          >
            <form>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                mb={3}
                sx={{
                  borderColor: "gray",
                  "&:focus": { borderColor: "primary", outline: "none" },
                }}
              />

              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                mb={3}
                sx={{
                  borderColor: "gray",
                  "&:focus": { borderColor: "primary", outline: "none" },
                }}
              />

              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                mb={3}
                sx={{
                  borderColor: "gray",
                  "&:focus": { borderColor: "primary", outline: "none" },
                }}
              />

              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                mb={3}
                placeholder="+234 703 364 6913
"
                sx={{
                  borderColor: "gray",
                  "&:focus": { borderColor: "primary", outline: "none" },
                }}
              />

              <Label htmlFor="subject">Select Subject</Label>
              <Select
                id="subject"
                name="subject"
                mb={3}
                sx={{
                  borderColor: "gray",
                  "&:focus": { borderColor: "primary", outline: "none" },
                }}
              >
                <option>General Inquiry</option>
                <option>Feedback</option>
                <option>Support</option>
              </Select>

              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                mb={3}
                sx={{
                  borderColor: "gray",
                  "&:focus": { borderColor: "primary", outline: "none" },
                }}
              />

              <Button
                type="submit"
                sx={{
                  bg: "#414599",
                  color: "background",
                  "&:hover": { bg: "#414599" },
                  cursor: "pointer",
                }}
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Contact;
