
export interface IHomePageProps {};
export interface IHomeBannerProps {};
export interface IHomeCardLinkProps {};
export interface IHomeLocaleProps {};
export interface IHomeServicesProps {};

/* SECTION COMPONENT */
export interface IHomeSectionProps {
    content: JSX.Element;
    hasPrimaryBg?: boolean;
};

export interface IHomeSectionTitleProps {
    title:    string;
    subtitle: string;
    desc:     string;
};