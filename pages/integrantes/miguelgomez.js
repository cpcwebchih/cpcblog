import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';


const MiguelGomezPage = () => {

    const links = [
        {title: "Enlace de prueba 1", url: "#"},
        {title: "Enlace de prueba 2", url: "#"}
    ]

    return ( 
        <>
            <CpcSeo 
                title="Miguel Gómez - Comité Participativo Ciudadano de Chihuahua"
                description="Conoce a Miguel Gómez, integrante del Comité Participativo Ciudadano de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/miguelgomez`}
                imageUrl="https://cdn.sanity.io/images/o2k6bnet/production/bd81d5d12a7104ae14fe85599510aa0859f9693c-800x600.jpg"
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Member 
                        title="Miguel Gómez"
                        role="Integrante"
                        membersince="4 años"
                        photouRL="/images/miguelgomez.svg" 
                        links={links}
                    />
                </Content>
            </Layout>
        </>
     );
}
 
export default MiguelGomezPage;