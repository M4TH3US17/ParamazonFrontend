
export class NavbarPage {
    pageName: string;
    pageSubtitle: string;
    router: string;
    icon: JSX.Element;

    constructor({ pageName = '', pageSubtitle = '', router = '', icon = <></>}: Partial<NavbarPage>) {
        this.pageName = pageName;
        this.router = router;
        this.pageSubtitle = pageSubtitle;
        this.icon = icon;
    };
};