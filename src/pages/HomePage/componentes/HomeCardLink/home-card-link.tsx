import { WIDTH_SCREEN } from "../../../../utils/ScreenUtils/screen-measurements-data";
import HomeCardLinkComponent from "./components/CardLink/home-card-link-component";
import "./home-card-link.css"

const HomeCardLinks = () => {
    return (
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
                linkDescription={WIDTH_SCREEN <= 700 ? "Entrar em contato com [empresa]" : "Entrar em contato"}
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
    );
};

export default HomeCardLinks;