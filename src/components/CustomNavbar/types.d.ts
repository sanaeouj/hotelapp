export type URL = `${"http://" | "https://"}${string}`;
interface CustomNavbarProps {
  background: string;
  variant?: any;
  navHome: string;
  className: string;
  logo: URL | string;
  navLink: URL | string;
  href: string;
}
