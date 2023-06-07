import Link from 'next/link';
import Image from 'next/image';
import Styles from './Navbar.module.css';

const menuLinks = [
  { label: 'Development', path: '#dev' },
  { label: 'Analytics', path: '#analytics' },
  { label: 'SEO', path: '#seo' },
  { label: 'Portfolio', path: '#portfolio' },
  { label: 'About', path: '#about' },
  { label: 'Contact', path: '#contact' },
];

const Navbar: React.FC = () => {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.container}>

          <Image
            className={Styles.logo}
            src="/eversondotdev_logo.svg"
            alt="Everson.dev"
            width={288}
            height={40}
            priority
          />

        <div className={Styles.menuWeb}>
          <ul>
            {menuLinks.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
