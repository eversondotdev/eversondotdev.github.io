import Link from 'next/link';
import Image from 'next/image';
import Styles from './Navbar.module.css';

const menuLinks = [
  { label: 'Option 1', path: '/option1' },
  { label: 'Option 2', path: '/option2' },
  { label: 'Option 3', path: '/option3' },
  { label: 'Option 4', path: '/option4' },
  { label: 'Option 5', path: '/option5' },
];

const Navbar: React.FC = () => {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.container}>

        <Link href="/">
          <Image
            className={Styles.logo}
            src="/eversondotdev_logo.svg"
            alt="Everson.dev"
            width={180}
            height={50}
            priority
          />
        </Link>


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
