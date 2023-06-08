import Image from 'next/image';
import Styles from './Style.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <div className={Styles.gridContainer}>
        <section>
            <article>
            <h2>About me</h2>
            <p>
                Software Developer and Data Specialist, graduated in Systems Analysis and Development, and currently pursuing postgraduate degree in database administration (DBA). I have a proficient English level of communication and hold certifications from Google and DataCamp, specializing in Big Data. With over ten years of experience, my goal is to apply my expertise to help companies develop and improve their performance in sectors such as Big Data, Software, Digital Products and E-commerce.
            </p>
            <p>
                To get to know me better feel free to connect with me o <Link href="https://www.linkedin.com/in/eversondotdev/">LinkedIn</Link>
            </p>
            </article>

            <Image
                src="/eversondotdev_me.svg"
                alt="Everson.dev"
                width={500}
                height={500}
                priority
            />
        </section>
    </div>
  )
}
