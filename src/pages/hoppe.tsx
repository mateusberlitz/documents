import { Section } from "@/components/Section";
import { Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";



export default function Hoppe() {
  return (
    <>
        <Head>
            <title>Política de privacidade Hoppe Advocacia</title>
            <meta name="description" content="Política de privacidade Hoppe Advocacia" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Section py="20">
            <Stack spacing="8">
                <Heading>Política de Privacidade – Hoppe Advocacia</Heading>

                <Stack spacing="5">
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>1. Introdução</Text>
                    <Text>
                        A Hoppe Advocacia respeita a privacidade de todos os indivíduos que interagem com nossos serviços. Esta Política de Privacidade descreve as práticas de coleta, uso, armazenamento, compartilhamento e proteção de suas informações pessoais. Ela se aplica às informações coletadas através do nosso formulário no Facebook.
                    </Text>
                </Stack>

                <Stack spacing="5">
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>2. Informações Coletadas </Text>
                    <Text>
                        Ao preencher o formulário no Facebook, você poderá ser solicitado a fornecer, voluntariamente, as seguintes informações pessoais:
                    </Text>
                </Stack>

                <Stack spacing="5">
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>3. Uso das Informações</Text>
                    <Text>
                        As informações coletadas serão utilizadas exclusivamente para os seguintes propósitos:
                    </Text>
                    <Text>
                        <ul>
                            <li>Entrar em contato com você para fornecer informações sobre nossos serviços jurídicos</li>
                            <li>Agendar consultas</li>
                            <li>Enviar comunicações e atualizações sobre a área jurídica de seu interesse</li>
                            <li>Melhorar nossos serviços e comunicações</li>
                        </ul>
                    </Text>
                </Stack>

                <Stack spacing="5">
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>4. Compartilhamento das Informações </Text>
                    <Text>
                    A Hoppe Advocacia compromete-se a não compartilhar suas informações pessoais com terceiros, exceto conforme necessário para cumprir obrigações legais ou com o seu consentimento explícito.
                    </Text>
                </Stack>

                <Stack spacing="5">
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>5. Segurança das Informações </Text>
                    <Text>
                        Empregamos medidas técnicas e organizacionais para proteger suas informações pessoais contra acesso, uso ou divulgação não autorizados. Contudo, nenhum sistema de segurança é infalível e não podemos garantir a segurança absoluta de suas informações.
                    </Text>
                </Stack>

                <Stack spacing="5">
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>6. Acesso e Controle das Suas </Text>
                    <Text>
                        Você tem direito a solicitar acesso, correção ou exclusão de suas informações pessoais em nossa posse a qualquer momento. Para fazer isso, entre em contato conosco através do e-mail [inserir e-mail].
                    </Text>
                </Stack>

                <Stack spacing="5">
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>7. Alterações na Política de Privacidade  </Text>
                    <Text>
                        Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nas nossas práticas de privacidade. Publicaremos a versão atualizada no mesmo link em que esta política foi disponibilizada.
                    </Text>
                </Stack>

                <Stack spacing="5">
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>8. Contato </Text>
                    <Text>
                    Se tiver dúvidas ou preocupações sobre nossa Política de Privacidade ou práticas de dados, por favor, contate-nos através de: E-mail: hoppe@hoppeadvocacia.com.br Telefone: 51 3094-3022
                    </Text>
                </Stack>

                <Stack spacing="5">
                    <Text fontWeight={"semibold"}>
                    Data da última atualização: 02/07/2024
                    </Text>
                </Stack>
            </Stack>
        </Section>
    </>
  );
}
