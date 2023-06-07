import Image from 'next/image';
import Styles from './Styles.module.css';

export default function Services() {
  return (
    <main className={Styles.services}>
        <div className={Styles.container}>
          <h2>Services</h2>
          <section id="web" className={Styles.section}>
            <article>
            <h4>Web Development</h4>
            <h3>Boost your digital presence with a website and engaging features</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laudantium accusamus a, quos odit non, expedita assumenda, dignissimos eos nemo labore praesentium nobis vel perferendis alias autem rem libero ab.
            </p>
            </article>
            <Image
                src="/analytics.svg"
                alt="Everson.dev"
                width={500}
                height={500}
                priority
              />
          </section>
        </div>
    </main>
  )
}
