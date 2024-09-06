
export class NavbarPage {
    pageName: string;
    router: string;

    constructor({ pageName = '', router = '' }: Partial<NavbarPage>) {
        this.pageName = pageName;
        this.router = router;
    };
};