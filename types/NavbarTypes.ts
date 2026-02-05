export interface NavbarItemTypes {
  label: string;
  href: string;
  extra?:{
    enabled:boolean;
    items:{
        label:string;
        href:string;
    }[]
  }
}
