import { logoProps } from "../../constants";
import {CustomNavbarProps} from "./types";
const Logo = ({ url=logoProps.url, size=logoProps.default }) => (
  <img src={url} width={size.width} height={size.height} alt=""/>
);

export default Logo;