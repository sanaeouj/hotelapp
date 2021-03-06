export type URL = `${"http://" | "https://"}${string}`;
interface CustomNavbarProps {
  background: string;
  variant: string;
  navHome: string;
  className: string;
  logo: URL | string;
  navLink: URL | string;
  href: any;
}
interface navLinks{
  href:any;
  text:string;
}
interface IStateNavbar {
  isOpen: boolean;
}