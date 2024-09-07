import { Box } from "@mui/material";
import { IHomeCardLinkProps, IHomeCardLinksProps, IHomeSectionTitleProps } from "../../types/interfaces";
import { Section } from "../HomeSection";

import HomeCardLinkComponent from "./components/CardLink";
import { WIDTH_SCREEN } from "../../../../utils/ScreenUtils/screen-measurements-data";
import { PositionOfElementsInTheSection } from "../../types/enums";
import { useState } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

import "./index.scss"

const headerDetails: IHomeSectionTitleProps = {
    title: "informações",
    subtitle: "mais detalhes aqui",
    desc: "Que tal escolher o show da próxima semana ou, quem sabe, entrar em contato conosco?"
};

const cardLinkList: IHomeCardLinkProps[] = [
    { url: "/shows/selecao", title: "Realizar Votação", description: "Realizar minha votação", icon: <SendIcon className="sendIcon"/> },
    { url: "/contato", title: "Fale Conosco", description: "Entrar em contato com Paramazon", icon: <MailOutlineIcon/> },
    { url: "/login", title: "Criar uma conta", description: "Criar minha conta", icon: <PersonOutlineOutlinedIcon/> },
    { url: "#", title: "Seus cantores/bandas", description: "Definir minhas preferencias", icon: <ReportProblemOutlinedIcon/> },
];

export const HomeCardLinks: React.FC<IHomeCardLinksProps> = ({ }: IHomeCardLinksProps): JSX.Element => {
    const [isMobileScreen] = useState<boolean>(WIDTH_SCREEN <= 1000);

    return (
        <Section
            header={headerDetails}
            positionOfElements={isMobileScreen ? PositionOfElementsInTheSection.VERTICAL : PositionOfElementsInTheSection.HORIZONTAL}
            content={
                <Box className='home-card-links'>
                    {cardLinkList.map((card, index) => <HomeCardLinkComponent key={index} url={card.url} title={card.title} description={card.description} icon={card.icon} />)}
                </Box>}
        />
    );
}