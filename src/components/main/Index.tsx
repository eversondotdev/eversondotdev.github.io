import Image from 'next/image';
import Styles from './Styles.module.css';

export default function Services() {
  return (
    <main className={Styles.services}>
        <div className={Styles.container}>
          <h2>Services</h2>

          <section id="web" className={Styles.section}>
            <article>
            <h4>Analytics</h4>
            <h3>Track KPIs and gain insights across multiple sources</h3>
            <ul>
              <li>Dashboards and Reports</li>
              <li>Google Analytics (GA4) </li>
              <li>Tag implementation through Google Tag Manager (GTM)</li>
              <li>Conversion Rate Optimization (CRO)</li>
              <li>Competitor and Market Analysis</li>
            </ul>
            </article>
            <Image
                src="/analytics.svg"
                alt="Everson.dev"
                width={500}
                height={500}
                priority
              />
          </section>

          <section id="web" className={Styles.section}>
            <article>
            <h4>Web Development</h4>
            <h3>Boost your digital presence with a website and engaging features</h3>
            <ul>
              <li>E-commerce</li>
              <li>Web Application</li>
              <li>Landing page</li>
              <li>Blog</li>
            </ul>
            </article>
            <Image
                src="/analytics.svg"
                alt="Everson.dev"
                width={500}
                height={500}
                priority
              />
          </section>

          <section id="web" className={Styles.section}>
            <article>
            <h4>Data Management</h4>
            <h3>Ensure that your data is secure, reliable, and accessible</h3>
            <ul>
              <li>Deployment of SQL and NoSQL databases</li>
              <li>Design and implementation of data pipelines</li>
              <li>Development of ETL/ELT processes</li>
              <li>RESTful API services</li>
            </ul>
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
