import { Divider, Flex, HStack, Icon, Img, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { TextTag } from "../TextTag";
import { FooterLink } from "./FooterLink";


import { Box, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "react-feather";
import { useConfiguration } from "@/_Contexts/ConfigurationContext";
import { useLanguage } from "@/_Contexts/LanguageContext";

export function FooterEn(){
    const {configuration} = useConfiguration();
    const isEnglish = true;

    //console.log(configuration);

    return(
        <Flex flexDir="column" w="100%" bg="#141414" color="white" px="6" borderTopRadius={"30px"} pt={["20px","20px","50px","50px"]}>
            <Stack direction={["column", "column", "row"]} spacing={["16", "14", "12"]} w="100%" maxW="1200px" m="0 auto" py="20" justifyContent="space-between" mt="50px">
                <Stack direction={"column"} spacing="16">

                    <Link href={"#"}>
                        {isEnglish ? <Img src="../images/logo-english-white.webp" filter={""} maxW={["170px","170px","auto","auto"]}/> : <Img src="./images/logoFooter.webp" maxW={["170px","170px","auto","auto"]}/>}
                    </Link>

                    <Stack>
                        {/* <Text fontSize={"16px"} fontWeight="light">Rua Sergipe, 1014 | 6º andar</Text>
                        <Text fontSize={"16px"} fontWeight="light">Bairro Savassi - Belo Horizonte, MG</Text>
                        <Text fontSize={"16px"} fontWeight="light">CEP: 30.130-171</Text> */}
                        <Text maxW={"257px"}>{configuration?.address}</Text>
                    </Stack>
                </Stack>

                <Stack direction={["row", "row", "row"]} justifyContent="space-between" spacing="3">
                    <Stack spacing="6">
                        <Text fontWeight={"normal"} fontSize={"lg"}>{isEnglish ? "Quick Access" : "Acesso Rápido"}</Text>

                        <Stack spacing="3" fontSize="sm">
                            <FooterLink fontSize={"16px"} fontWeight="medium" href="/sobre">{isEnglish ? "About Us" : "Sobre Nós"}</FooterLink>
                            <FooterLink fontSize={"16px"} fontWeight="medium" href="/eam">{isEnglish ? "EAM Solutions" : "Soluções EAM"}</FooterLink>
                            <FooterLink fontSize={"16px"} fontWeight="medium" href="/security">{isEnglish ? "Security Solutions" : "Soluções Security"}</FooterLink>
                            <FooterLink fontSize={"16px"} fontWeight="medium" href="/saw">{isEnglish ? "SAW Solutions" : "Soluções SAW"}</FooterLink>
                            <FooterLink fontSize={"16px"} fontWeight="medium" href="/servico-eam">{isEnglish ? "EAM Services" : "Serviços EAM"}</FooterLink>
                            <FooterLink fontSize={"16px"} fontWeight="medium" href="/servico-security">{isEnglish ? "Security Services" : "Serviços Security"}</FooterLink>
                            <FooterLink fontSize={"16px"} fontWeight="medium" href="/servico-soc">{isEnglish ? "SOC Services" : "Serviços SOC"}</FooterLink>
                            <FooterLink fontSize={"16px"} fontWeight="medium" href="/blog">{isEnglish ? "Content" : "Conteúdo"}</FooterLink>
                            <FooterLink fontSize={"16px"} fontWeight="medium" href="/contato">{isEnglish ? "Contact Us" : "Fale Conosco"}</FooterLink>
                            <FooterLink fontSize={"16px"} fontWeight="medium" href="/trabalhe-conosco">{isEnglish ? "Work With Us" : "Trabalhe Conosco"}</FooterLink>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction={["row", "row", "row"]} justifyContent="space-between" spacing="3">
                    <Stack spacing="6">
                        <Text fontWeight={"normal"} fontSize={"lg"}>{isEnglish ? "Contact" : "Contato"}</Text>

                        <Stack spacing="4" fontSize="sm">
                            <HStack spacing={"4"}>
                                <Phone />
                                <FooterLink fontSize={"16px"} fontWeight="medium" href={`tel:${configuration && configuration.phone.replace(/[\(\)\.\s-]+/g,'')}`}>{configuration?.phone}</FooterLink>
                            </HStack>

                            <HStack spacing={"4"}>
                                <Mail />
                                <FooterLink fontSize={"16px"} fontWeight="medium" href={`mailto:${configuration?.email}`}>{configuration?.email}</FooterLink>
                            </HStack>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction={["row", "row", "row"]} justifyContent="space-between" spacing="3">
                    <Stack spacing="6">
                        <Text fontWeight={"normal"} fontSize={"lg"}>{isEnglish ? "Social Media" : "Redes Sociais"}</Text>

                        <Stack spacing="4" fontSize="sm">
                            <HStack spacing={"4"}>
                                <Link href={configuration ? configuration.instagram : ""}><Instagram/></Link>
                                {(configuration && configuration.youtube) && <Link href={configuration.youtube}><Youtube/></Link>}
                                <Link href={configuration ? configuration.linkedin : ""}><Linkedin /></Link>
                            </HStack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            <Stack direction={["column", "column"]} spacing={["16", "14", "12"]} w="100%" maxW="1200px" m="0 auto" pb="20" justifyContent="space-between">

            <Divider borderColor="gray.600" />

            <Flex w="100%">
                <Text fontSize={"14px"}>{isEnglish ? "Data Protection Officer (DPO):" : "Encarregado dos dados pessoais da empresa:"} {configuration?.data_owner} | E-mail: {configuration?.manager_email} | {isEnglish ? "Phone:" : "Tel"}: {configuration?.phone} | {isEnglish ? "Opening Hours" : "Atendimento"}: {configuration?.service}</Text>
            </Flex>

                <Stack w="100%" direction={["column", "column", "row"]} justifyContent="space-between" spacing={"12"}>
                    <Stack direction={["column", "column", "row"]} spacing={"4"}>
                        <FooterLink href={configuration && configuration.privacyPolicies ? configuration.privacyPolicies.url : ""} textDecoration={"underline"}>{isEnglish ? "Privacy Policy" : "Política de Privacidade"}</FooterLink>
                        <FooterLink href={configuration && configuration.securityPolicies ? configuration.securityPolicies.url : ""} textDecoration={"underline"}>{isEnglish ? "Security Policy" : "Política de Segurança"}</FooterLink>
                        <FooterLink href={configuration && configuration.antiPolicies ? configuration.antiPolicies.url : ""} textDecoration={"underline"}>{isEnglish ? "Anti-Bribery and Anti-Corruption Policy" : "Política Antissuborno e Anticorrupção"}</FooterLink>
                        <FooterLink href="/etica" textDecoration={"underline"}>{isEnglish ? "Ethics Channel" : "Canal de Ética"}</FooterLink>
                    </Stack>

                    <Text>iT.eam Copyright {new Date().getFullYear()} - {isEnglish ? "All rights reserved" : "Todos os direitos reservados."} </Text>
                </Stack>
            </Stack>

        </Flex>
        
    )
}