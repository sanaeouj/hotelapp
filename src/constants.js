export const customNavbarProps = {
    default: {
      background: "primary",
      variant: "dark",
      navHome: "#home",
      className: "me-auto",
      logo: "My web site",
      navLink: [{ keyLink:"key5", link: "#home", text: "Homed" }],
    },
    dark: {
      background: "dark",
      variant: "dark",
      navHome: "#home",
      className: "me-auto",
    },
    light: {
      background: "light",
      variant: "light",
      navHome: "#home",
      className: "me-auto",
    },
  };
  export const logoProps = {
    url: "https://static.vecteezy.com/system/resources/thumbnails/002/229/196/small_2x/beauty-lotus-flowers-design-logo-template-icon-free-vector.jpg",
  
    default: {
      width: "50px",
      height: "50px",
    },
    smartphone: {
      width: "25px",
      height: "25px",
    },
    tablette: {
      width: "30px",
      height: "30px",
    },
  };
  export const navLinks = [
    { keyLink: "key1", link: "#home", text: "Home" },
    { keyLink: "key2", link: "#about", text: "About" },
    { keyLink: "key3", link: "#hfeatures", text: "Features" },
  ];