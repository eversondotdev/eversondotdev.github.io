import Image from 'next/image';
import Styles from './Style.module.css';

const logos = [
  { label: '1', path: 'projects_logo/1.svg' },
  { label: '2', path: 'projects_logo/2.svg' },
  { label: '3', path: 'projects_logo/3.svg' },
  { label: '4', path: 'projects_logo/4.svg' },
  { label: '5', path: 'projects_logo/5.svg' },
  { label: '6', path: 'projects_logo/6.svg' },
  { label: '7', path: 'projects_logo/7.svg' },
  { label: '8', path: 'projects_logo/8.svg' },
];

export default function Logos() {
  return (
    <div className={Styles.container}>
      <ul>
            {logos.map((item) => (
              <li key={item.path}>
                  <Image
                    src={item.path}
                    alt={item.label}
                    width={130}
                    height={40}
                    priority
                  />
              </li>
            ))}
          </ul>
    </div>
  )
}
