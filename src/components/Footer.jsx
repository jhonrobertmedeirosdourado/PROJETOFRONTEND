import Logo from './Logo.jsx';
import FooterInfo from './FooterInfo.jsx';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons.jsx';
import './Footer.css';

const SOCIALS = [
  { name: 'Facebook', href: 'https://www.facebook.com', Icon: FacebookIcon },
  { name: 'Instagram', href: 'https://www.instagram.com', Icon: InstagramIcon },
  { name: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
];

const INFORMATIONS = [
  { text: 'Sobre a Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/jobs' },
  { text: 'Meus Pedidos', link: '/orders' },
];

const CATEGORIES = [
  { text: 'Camisetas', link: '/products' },
  { text: 'Calças', link: '/products' },
  { text: 'Bonés', link: '/products' },
  { text: 'Headphones', link: '/products' },
  { text: 'Tênis', link: '/products' },
];

const CONTACT = [
  { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161' },
  { text: '(85) 3051-3411' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo variant="white" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="footer__socials">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <FooterInfo title="Informação" informations={INFORMATIONS} />
          <FooterInfo title="Categorias" informations={CATEGORIES} />
          <FooterInfo title="Contato" informations={CONTACT} />
        </div>

        <hr className="footer__divider" />
        <p className="footer__copy">© {new Date().getFullYear()} Store</p>
      </div>
    </footer>
  );
}
