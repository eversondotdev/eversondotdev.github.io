import Logos from '../logos/Index';
import Styles from './Style.module.css';

export default function Hero() {
  return (
    <>
    <header className={Styles.header}>
        <h1>Development & Analytics for</h1>
        <button>Discover how to empower your bussiness</button>
    </header>
    <Logos />
    </>
  )
}
