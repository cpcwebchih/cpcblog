import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import Section from '../components/section';
import { useRouter} from 'next/router'
import {useState} from 'react';
import CpcSeo from '../components/cpcseo'
import customtheme from '../customtheme.js'
import { Flex, Text, Box, Image, PseudoBox, Input, Textarea, Button, FormControl} from '@chakra-ui/core';
import Link from 'next/link'
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Contact() {
    const {colors} = customtheme
    const router = useRouter()
    const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath
    
    const { handleSubmit, register } = useForm();
    const [isLoading, setIsloading] = useState(false);
    const [isOk, setIsOk] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = async values => {
        setIsloading(true)
        try {
            await axios.post("https://formspree.io/f/xwkwbgpd", values)
            setIsOk(true)
        } catch (error) {
            error(true)
        }
        setIsloading(false)
    }

    return (
        <>
            <CpcSeo 
                title="Contacto CPC - Comité de Participación Ciudadana de Chihuahua"
                description="Contacta a las personas que integran el Comité de Participación Ciudadana del Sistema Estatal Anticorrupción de Chihuahua"
                url={path}
                imageUrl={process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_URL}
            /> 
            <Layout >
                <Header position="fixed"/>
                <Content>
                    <Section bg="cpc.red" color="cpc.white">
                        <Text fontSize={["1.25em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                            <b>Contáctanos!</b>
                        </Text>
                        <Text lineheight="1em" px={5} display={{xs: "none", md: "inherit"}} textAlign="center">Llena el formulario para contactarnos o si prefieres da click en el integrante de tu preferencia.</Text>
                    </Section> 


                    <Flex justify="center" alignItems="center" p={2} my={["1em", "2em", "3em", "3em"]} lineHeight="2em">
                       {isOk ? (
                            <Text fontSize={["2em"]}color="cpc.red" fontFamily="cpc.gothamCondensed" textAlign="center">Tu mensaje ha sido recibido <br/>Gracias por contactarnos!</Text>
                       ): 
                       
                        error ? (
                            <Text fontSize={["2em"]}color="cpc.red" fontFamily="cpc.gothamCondensed" textAlign="center">Lo sentimos, ha ocurrido un error recibiendo tu mensaje.</Text>
                        )
                        : 
                        (
                                <Flex width={["100%", "80%", "80%", "600px"]} direction="column" textAlign="center">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Text fontSize={["2em"]}color="cpc.red" fontFamily="cpc.gothamCondensed">Contáctanos llenando el formulario</Text>
                                        <FormControl isRequired>
                                            <Input size="lg" my={3} type="email" placeholder="Email" name="email" ref={register()}/>
                                        </FormControl>
                                        <FormControl isRequired>
                                            <Textarea size="lg" my={2} placeholder="Escribe tu mensaje" name="message" ref={register()}/>
                                        </FormControl>
                                        <Button type="submit" bg="cpc.red" color="cpc.white" width="100%" _hover={{bg: "cpc.red"}} mt={3} isLoading={isLoading}>Enviar</Button>
                                    </form>
                                </Flex>
                        )
                       
                       }
                    </Flex>

                    {/* //Faces  */}
                    <Section bg="#fcd46f" color="#3d3d3d">
                    <Text fontSize={["2em"]} fontFamily="cpc.gothamCondensed" textAlign="center" lineHeight="1.18em">
                            Da click en la persona integrante de la que quieras conocer más información
                        </Text>
                    <Flex justify="space-around" alignItems="top"  direction={["column", "column", "row", "row"]} width="100%" mt={["2em", "2em", "0em", "0em"]}>
                         <Flex  direction="column" justify="center" alignItems="center" width="100%" py={2}>
                            <Box>
                                <Link href="/integrantes/renemoreno">
                                    <a>
                                        <Image src="/images/cpc_profile_rene.svg" alt="René Moreno" mt={[3]} width={["10em", "10em", "10em", "10em"]} />            
                                    </a>
                                </Link>
                            </Box>
                        </Flex>
                         <Flex  direction="column" justify="center" alignItems="center" width="100%" py={2}>
                            <Box>
                                 <Link href="/integrantes/miguelgomez">
                                     <a>
                                        <Image src="/images/cpc_profile_miguel.svg" alt="Miguel Gómez" mt={[3]} width={["10em", "10em", "10em", "10em"]} />            
                                     </a>
                                </Link>
                            </Box>
                        </Flex>
                         <Flex direction="column" justify="center" alignItems="center" width="100%" py={2}>
                            <Box>
                                 <Link href="/integrantes/carmenalvarez">
                                     <a>
                                        <Image src="/images/cpc_profile_carmen.svg" alt="Carmen Álvarez" mt={[3]} width={["10em", "10em", "10em", "10em"]} />            
                                     </a>
                                </Link>
                            </Box>
                        </Flex>
                         <Flex direction="column" justify="center" alignItems="center" width="100%" py={2}>
                            <Box>
                                 <Link href="/integrantes/jesusabbud">
                                     <a>
                                        <Image src="/images/cpc_profile_jesus.svg" alt="Jesús Abbud" mt={[3]} width={["10em", "10em", "10em", "10em"]} />            
                                     </a>
                                </Link>
                            </Box>
                        </Flex>
                        <Flex  direction="column" justify="center" alignItems="center" width="100%" py={2}>
                            <Box>
                                <Link href="/integrantes/giselarodriguez">
                                    <a>
                                        <Image src="/images/cpc_profile_gisela.svg" alt="Gisela Rodríguez" mt={[3]} width={["10em", "10em", "10em", "10em"]} />            
                                    </a>
                                </Link>
                            </Box>
                        </Flex>
                    </Flex>
                </Section>
                </Content>
            </Layout>
        </>
    )
}