import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';

const LilianaochoaPage = () => {
    const links = [
        {title: "Enlace de prueba 1", url: "#"},
        {title: "Enlace de prueba 2", url: "#"}
    ]

    return ( 
        <>  
            <CpcSeo 
                title="Liliana Ochoa - Comité Participativo Ciudadano de Chihuahua"
                description="Conoce a Liliana Ochoa, integrante del Comité Participativo Ciudadano de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/lilianaochoa`}
                imageUrl="https://cdn.sanity.io/images/o2k6bnet/production/147a6d3dd99efaca29ea9c73fe0fd757440b0cdc-800x600.jpg"
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Member 
                        title="Liliana Ochoa"
                        role="Integrante"
                        membersince="2 años"
                        photouRL="/images/lilianaochoa.svg" 
                        links={links}
                    />
                </Content>
            </Layout>
        </>
     );
}
 
export default LilianaochoaPage;