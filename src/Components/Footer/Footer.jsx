import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Test Anno: ${year}`}</footer>;
  };
  
  export default Footer;