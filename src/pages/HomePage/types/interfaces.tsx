import { PositionOfElementsInTheSection } from "./enums";

export interface IHomePageProps {};
export interface IHomeBannerProps {};
export interface IHomeLocaleProps {};
export interface IHomeServicesProps {};

export interface IHomeCardLinksProps {
};

export interface IHomeCardLinkProps {
    url: string;
    title?: string;
    description: string;
    icon: JSX.Element;

    /*style?: React.CSSProperties;*/
};


/* SECTION COMPONENT */
export interface IHomeSectionProps {
    content: JSX.Element;
    header?: IHomeSectionTitleProps;
    hasPrimaryBg?: boolean;
    positionOfElements?: PositionOfElementsInTheSection;
};

export interface IHomeSectionTitleProps {
    title:    string;
    subtitle: string;
    desc:     string;
};