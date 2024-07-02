import { Button, Icon, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useBreakpointValue } from "@chakra-ui/react";
import { HeaderLink } from "./HeaderLink";
import { ChevronDown } from "react-feather";

import styles from './header.module.css'
import { useLanguage } from "@/_Contexts/LanguageContext";

interface HeaderLinkListProps{
    whiteVersion?: boolean;
}

export function HeaderLinkList({whiteVersion}: HeaderLinkListProps){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const {isEnglish} = useLanguage();

    return(
        <>
            <Stack direction={isWideVersion ? "row" : "column"} spacing={isWideVersion ? "0" : "8"} color={whiteVersion ? "white" : "redmain"} justifyContent={isWideVersion ? "center" : "left"} alignItems={isWideVersion ? "center" : "left"}>
                <HeaderLink href={isEnglish ? "/en/" : "/"}>{isEnglish ? "Home" : "Home"}</HeaderLink>
                <HeaderLink href={isEnglish ? "/en/sobre" : "/sobre"}>{isEnglish ? "About Us" : "Sobre nós"}</HeaderLink>
                {/* <HeaderLink href="/solucoes">Soluções</HeaderLink> */}
                <HeaderLink fontWeight={"medium"}>
                    <Menu isLazy>
                        <MenuButton h="27px" px={isWideVersion ? "0" : "0"} as={Button}
                        {...{
                            rightIcon: 'chevron-down',
                            bg: "transparent",
                            _hover:{bg: "transparent"}, _focus:{bg: "transparent"}
                        }} _active={{bg: "transparent"}} fontSize={["20px", "20px", "16px", "18px", "18px"]} color={whiteVersion ? "white" : "redmain"} rightIcon={<Icon as={ChevronDown}/>} fontWeight={"medium"}>
                            {isEnglish ? "Solutions" : "Soluções"}
                        </MenuButton>
                        <MenuList p="0" border={"none"} color={"redmain"}>
                            {/* {
                                enterpriseList && enterpriseList.map((enterprise) => {
                                    return(
                                        <Link textDecor={"none !important"} key={`header-${enterprise.slug}`} href={`/${enterprise.slug}`}>
                                            <MenuItem _hover={{bg:"#FFCD00"}} fontWeight={"medium"} px="4" py="3">
                                                {enterprise.name}
                                            </MenuItem>
                                        </Link>

                                    )
                                })
                            } */}
                            <Link textDecor={"none !important"} href={isEnglish ? "/en/eam" : "/eam"}>
                                <MenuItem className='notranslate' h="45px" _hover={{bg:"redmain", color: "white"}} borderBottom={"1px solid"} borderColor={"#EEEEED"} fontWeight={"medium"}>EAM</MenuItem>
                            </Link>

                            <Link textDecor={"none !important"} href={isEnglish ? "/en/security" : "/security"}>
                                <MenuItem h="45px" _hover={{bg:"redmain", color: "white"}} borderBottom={"1px solid"} borderColor={"#EEEEED"} fontWeight={"medium"}>SECURITY</MenuItem>
                            </Link>

                            <Link textDecor={"none !important"} href={isEnglish ? "/en/saw" : "/saw"}>
                                <MenuItem h="45px" _hover={{bg:"redmain", color: "white"}} borderBottom={"1px solid"} borderColor={"#EEEEED"} fontWeight={"medium"}>SAW</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                            
                </HeaderLink>
                <HeaderLink fontWeight={"medium"}>

                    <Menu isLazy>
                        <MenuButton h="27px" px={isWideVersion ? "0" : "0"} as={Button}
                        {...{
                            rightIcon: 'chevron-down',
                            bg: "transparent",
                            _hover:{bg: "transparent"}, _focus:{bg: "transparent"}
                        }} textTransform={"capitalize"} fontSize={["20px", "20px", "16px", "18px", "18px"]} _active={{bg: "transparent"}} color={whiteVersion ? "white" : "redmain"} rightIcon={<Icon as={ChevronDown}/>} fontWeight={"medium"}>
                            {isEnglish ? "Services" : "Serviços"}
                        </MenuButton>
                        <MenuList p="0" border={"none"} color={"redmain"}>
                            {/* {
                                enterpriseList && enterpriseList.map((enterprise) => {
                                    return(
                                        <Link textDecor={"none !important"} key={`header-${enterprise.slug}`} href={`/${enterprise.slug}`}>
                                            <MenuItem _hover={{bg:"#FFCD00"}} fontWeight={"medium"} px="4" py="3">
                                                {enterprise.name}
                                            </MenuItem>
                                        </Link>

                                    )
                                })
                            } */}
                            <Link textDecor={"none !important"} href={isEnglish ? "/en/servico-eam" : "/servico-eam"}>
                                <MenuItem className='notranslate' h="45px" _hover={{bg:"redmain", color: "white"}} borderBottom={"1px solid"} borderColor={"#EEEEED"} fontWeight={"medium"}>EAM</MenuItem>
                            </Link>

                            <Link textDecor={"none !important"} href={isEnglish ? "/en/servico-security" : "/servico-security"}>
                                <MenuItem h="45px" _hover={{bg:"redmain", color: "white"}} borderBottom={"1px solid"} borderColor={"#EEEEED"} fontWeight={"medium"}>SECURITY</MenuItem>
                            </Link>

                            <Link textDecor={"none !important"} href={isEnglish ? "/en/servico-soc" : "/servico-soc"}>
                                <MenuItem h="45px" _hover={{bg:"redmain", color: "white"}} borderBottom={"1px solid"} borderColor={"#EEEEED"} fontWeight={"medium"}>SOC</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>

                </HeaderLink>
                {/* <HeaderLink href="/servicos">Serviços</HeaderLink> */}
                <HeaderLink href={isEnglish ? "/en/blog" : "/blog"}>Blog</HeaderLink>
                {/* <HeaderLink href="/contato">Contato</HeaderLink> */}

                <HeaderLink fontWeight={"medium"}>

                    <Menu isLazy>
                        <MenuButton h="27px" px={isWideVersion ? "0" : "0"} as={Button}
                        {...{
                            rightIcon: 'chevron-down',
                            bg: "transparent",
                            _hover:{bg: "transparent"}, _focus:{bg: "transparent"}
                        }} fontSize={["20px", "20px", "16px", "18px", "18px"]} _active={{bg: "transparent"}} color={whiteVersion ? "white" : "redmain"} rightIcon={<Icon as={ChevronDown}/>} fontWeight={"medium"}>
                            {isEnglish ? "Contact" : "Contato"}
                        </MenuButton>
                        <MenuList p="0" border={"none"} color={"redmain"}>
                            {/* {
                                enterpriseList && enterpriseList.map((enterprise) => {
                                    return(
                                        <Link textDecor={"none !important"} key={`header-${enterprise.slug}`} href={`/${enterprise.slug}`}>
                                            <MenuItem _hover={{bg:"#FFCD00"}} fontWeight={"medium"} px="4" py="3">
                                                {enterprise.name}
                                            </MenuItem>
                                        </Link>

                                    )
                                })
                            } */}
                            <Link textDecor={"none !important"} href={isEnglish ? "/en/contato" : "/contato"}>
                                <MenuItem h="45px" _hover={{bg:"redmain", color: "white"}} borderBottom={"1px solid"} borderColor={"#EEEEED"} fontWeight={"medium"}>{isEnglish ? "Contact Us" : "Fale conosco"}</MenuItem>
                            </Link>

                            <Link textDecor={"none !important"} href={isEnglish ? "/en/trabalhe-conosco" : "/trabalhe-conosco"}>
                                <MenuItem h="45px" _hover={{bg:"redmain", color: "white"}} borderBottom={"1px solid"} borderColor={"#EEEEED"} fontWeight={"medium"}>{isEnglish ? "Work with us" : "Trabalhe conosco"}</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>

                </HeaderLink>

                {/* <Button rightIcon={<Icon as={ChevronDown} />} fontWeight="regular" variant="ghost" color="gray.600" _hover={{bg: "transparent", color:"white"}}>Idioma: PT</Button>
                <OutlineButton size="lg">Iniciar Projeto</OutlineButton> */}
            </Stack>
        </>
    )
}