import { Box } from "@mui/material";
import { IHomeCardLinkProps, IHomeCardLinksProps, IHomeSectionTitleProps } from "../../types/interfaces";
import { Section } from "../HomeSection";

import HomeCardLinkComponent from "./components/CardLink";
import { WIDTH_SCREEN } from "../../../../utils/ScreenUtils/screen-measurements-data";
import { PositionOfElementsInTheSection } from "../../types/enums";
import { useState } from "react";

import "./index.scss"

const headerDetails: IHomeSectionTitleProps = {
    title: "informações",
    subtitle: "mais detalhes aqui",
    desc: "Que tal escolher o show da próxima semana ou, quem sabe, entrar em contato conosco?"
};

const cardLinkList: IHomeCardLinkProps[] = [
    { url: "/shows/selecao", description: "Realizar minha votação", icon: <i className="bi bi-envelope home-card-link-icon" style={{ top: "6px" }}></i> },
    { url: "/contato", description: "Entrar em contato com Paramazon", icon: <i className="bi bi-chat-left-dots home-card-link-icon"></i> },
    { url: "/login", description: "Criar minha conta", icon: <i className="bi bi-person home-card-link-icon" style={{ top: "4px", left: "8.7px", fontSize: '23px' }}></i> },
    { url: "#", description: "Receber alertas", icon: <i className="bi bi-exclamation-triangle home-card-link-icon" style={{ top: "6px", left: "10.5px", fontSize: '18px' }}></i> },
];

export const HomeCardLinks: React.FC<IHomeCardLinksProps> = ({ }: IHomeCardLinksProps): JSX.Element => {
    const [isMobileScreen] = useState<boolean>(WIDTH_SCREEN <= 1000);

    return (
        <Section
            header={headerDetails}
            positionOfElements={isMobileScreen ? PositionOfElementsInTheSection.VERTICAL : PositionOfElementsInTheSection.HORIZONTAL}
            content={
                <Box className='home-card-links'>
                    { cardLinkList.map(card => <HomeCardLinkComponent url={card.url} title={card.title} description={card.description} icon={card.icon}/>) }
                </Box>}
        />
    );
}