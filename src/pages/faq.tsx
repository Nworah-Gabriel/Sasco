import Layout from 'components/Layout/Layout';
import React, { useState } from 'react';
import { Box, Container, Heading, Text } from 'theme-ui';

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Which Local Government is Sasco Hospital located?",
            answer: "The Sasco Hospital is located in Ajeromi/Ifelodun Local Government Area of Lagos State, Nigeria"
        },
        {
            question: "How many beds are in Sasco Hospital?",
            answer: "Sasco Hospital has 6 beds."
        },
        {
            question: "What is the address of Sasco Hospital?",
            answer: "The Sasco Hospital is situated at Awodi Ora Ajeromi/Ifelodun, Lagos, Nigeria"
        },
        {
            question: "What is the open hour of Sasco Hospital?",
            answer: "The clinic is open on Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday and operates on 24hrs basis."
        },
        {
            question: "Which hospital is the oldest in Nigeria?",
            answer: "General Hospital, Lagos Island, Lagos is the oldest hospital in Nigeria. It was established in 1893 as a British military hospital."
        },
        {
            question: "How many General Hospitals are in Nigeria?",
            answer: "Statistics show that health institutions rendering health care in Nigeria are 33,303 general hospitals, 20,278 primary health centers and posts, and 59 teaching hospitals and federal medical centers."
        },
        {
            question: "Who appoints Chief Medical Directors in Nigerian Hospitals?",
            answer: "In government-owned hospitals, either the federal or state government appoints the CMD, depending on who owns the facility. However, in private hospitals, CMD appointment is a sole decision made by the owner or the constituted board."
        },
        {
            question: "How many Private Hospitals are in Nigeria?",
            answer: "According to the Nigerian Health Registry, there are 39,469 hospitals in Nigeria, 10,464 of them are private hospitals, while 29,005 other health care centres belong to either the Local, State or Federal Government"
        }
    ];

    return (
        <Layout>
            <Container
                sx={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: 'background',
                    color: 'text'
                }}
            >
                <Heading
                    as="h1"
                    sx={{
                        textAlign: 'center',
                        marginBottom: '30px',
                        color: 'primary'
                    }}
                >
                    Sasco Hospital - Frequently Asked Questions
                </Heading>

                <Box>
                    {faqs.map((faq, index) => (
                        <Box
                            key={index}
                            sx={{
                                borderBottom: '1px solid',
                                borderColor: 'muted'
                            }}
                        >
                            <Box
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                sx={{
                                    padding: '15px',
                                    cursor: 'pointer',
                                    backgroundColor: 'background',
                                    ':hover': {
                                        backgroundColor: 'muted'
                                    }
                                }}
                            >
                                <Text
                                    as="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'primary'
                                    }}
                                >
                                    {faq.question}
                                </Text>
                            </Box>
                            {activeIndex === index && (
                                <Box
                                    sx={{
                                        padding: '15px',
                                        backgroundColor: 'background',
                                        color: 'text'
                                    }}
                                >
                                    <Text>{faq.answer}</Text>
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Layout>
    );
};

export default FAQPage;