import Layout from '../../components/layout'
import Header from '../../components/header'
import Content from '../../components/content';
import Member from '../../components/member'
import CpcSeo from '../../components/cpcseo';


const CarmenAlvarezPage = () => {

    const links = [
       {title: "Enlace de prueba 1", url: "#"},
        {title: "Enlace de prueba 2", url: "#"}
    ]

    return ( 
        <>
            <CpcSeo 
                title="Carmen Álvarez - Comité Participativo Ciudadano de Chihuahua"
                description="Conoce a Carmen Álvarez, integrante del Comité Participativo Ciudadano de Chihuahua"
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/integrantes/carmenalvarez`}
                imageUrl="https://cdn.sanity.io/images/o2k6bnet/production/f97a7bc67276ca81e00244bbe8c1155cff186cf9-800x600.jpg"
            />
            <Layout>
                <Header position="fixed"/>
                <Content>
                    <Member 
                        title="Carmen Álvarez"
                        role="Integrante"
                        membersince="5 años"
                        photouRL="/images/carmenalvarez.svg" 
                        links={links}
                    />
                </Content>
            </Layout>
        </>
     );
}
 
export default CarmenAlvarezPage;