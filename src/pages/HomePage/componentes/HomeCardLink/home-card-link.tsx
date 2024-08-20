import { WIDTH_SCREEN } from "../../../../utils/ScreenUtils/screen-measurements-data";
import { Section } from "../HomeSection/home-section";
import { SectionTitle } from "../HomeSectionTitle/home-section-title";
import HomeCardLinkComponent from "./components/CardLink/home-card-link-component";
import "./home-card-link.css"

const HomeCardLinks = () => {
    return (
        <Section
            content={(
                <>
                    <SectionTitle
                        title='informações'
                        subtitle='mais detalhes aqui'
                        desc='Que tal escolher o show da próxima semana ou, quem sabe, entrar em contato conosco?'
                    />

                    <div className='home-card-links'>
                        <HomeCardLinkComponent
                            url={"/shows/selecao"}
                            title={""}
                            linkDescription={WIDTH_SCREEN <= 700 ? "Realizar minha votação" : "Fazer votação"}
                            tagIcone={<i className="bi bi-envelope home-card-link-icon" style={{ top: "6px" }}></i>}
                        />

                        <HomeCardLinkComponent
                            url={"/contato"}
                            title={""}
                            linkDescription={WIDTH_SCREEN <= 700 ? "Entrar em contato com Paramazon" : "Entrar em contato"}
                            tagIcone={<i className="bi bi-chat-left-dots home-card-link-icon"></i>}
                        />

                        {(WIDTH_SCREEN >= 1000) ? (<>
                            <HomeCardLinkComponent
                                url={"/login"}
                                title={"Fazer Login"}
                                linkDescription={"Criar minha conta"}
                                tagIcone={<i className="bi bi-person home-card-link-icon" style={{ top: "4px", left: "8.7px", fontSize: '23px' }}></i>}
                            />

                            <HomeCardLinkComponent
                                url={"#"}
                                title={"Cantores/shows"}
                                linkDescription={"Receber alertas"}
                                tagIcone={<i className="bi bi-exclamation-triangle home-card-link-icon" style={{ top: "6px", left: "10.5px", fontSize: '18px' }}></i>}
                            />
                        </>) : (<></>)}
                    </div>

                    <div style={{padding: `20px`}}/>
                </>
            )}
        />
    );
};

export default HomeCardLinks;

/*

        <div className='home-card-links'>
            <HomeCardLinkComponent
                url={"/shows/selecao"}
                title={WIDTH_SCREEN <= 700 ? "Que tal escolher o show da próxima semana?" : "Decidir Show"}
                linkDescription={WIDTH_SCREEN <= 700 ? "Realizar minha votação" : "Fazer votação"}
                tagIcone={<i className="bi bi-envelope home-card-link-icon" style={{top: "6px"}}></i>}
            />

            <HomeCardLinkComponent
                url={"/contato"}
                title={WIDTH_SCREEN <= 700 ? "Precisando falar conosco?" : "Falar Conosco"}
                linkDescription={WIDTH_SCREEN <= 700 ? "Entrar em contato com Paramazon" : "Entrar em contato"}
                tagIcone={<i className="bi bi-chat-left-dots home-card-link-icon"></i>}
            />

            {(WIDTH_SCREEN >= 1000) ? (<>
                <HomeCardLinkComponent
                    url={"/login"}
                    title={"Fazer Login"}
                    linkDescription={"Criar minha conta"}
                    tagIcone={<i className="bi bi-person home-card-link-icon" style={{top: "4px", left: "8.7px", fontSize: '23px'}}></i>}
                />

                <HomeCardLinkComponent
                    url={"#"}
                    title={"Cantores/shows"}
                    linkDescription={"Receber alertas"}
                    tagIcone={<i className="bi bi-exclamation-triangle home-card-link-icon" style={{top: "6px", left: "10.5px", fontSize: '18px'}}></i>}
                />
            </>) : (<></>)}
        </div>

        <Section
            content={(
                <>
                    <SectionTitle
                        title='Localização'
                        subtitle='Legenda da etapa de localização'
                        desc='Aqui é só você, a galera e aquela resenha no estilo mais desenrolado que você já viu.'
                    />

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7968.416736759924!2d-59.929871!3d-3.038726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1c06286089d9%3A0x3c4c80c69709385!2sBoteco%20Paramazon!5e0!3m2!1spt-BR!2sbr!4v1723672758225!5m2!1spt-BR!2sbr"
                        width="100%"
                        allowFullScreen
                        loading="lazy"
                        id='map'
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </>
            )}
        />

*/