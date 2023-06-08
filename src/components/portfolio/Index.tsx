import Link from 'next/link';
import Styles from './Style.module.css';

const menuLinks = [
  {title:"title", tags:"#tags #tags #tags", link:"#", image:"/analytics.svg"},
  {title:"title", tags:"#tags #tags #tags", link:"#", image:"/analytics.svg"},
  {title:"title", tags:"#tags #tags #tags", link:"#", image:"/analytics.svg"},
  {title:"title", tags:"#tags #tags #tags", link:"#", image:"/analytics.svg"},
  {title:"title", tags:"#tags #tags #tags", link:"#", image:"/analytics.svg"},
  {title:"title", tags:"#tags #tags #tags", link:"#", image:"/analytics.svg"},
  {title:"title", tags:"#tags #tags #tags", link:"#", image:"/analytics.svg"},
  {title:"title", tags:"#tags #tags #tags", link:"#", image:"/analytics.svg"},
];

export default function Portoflio() {
  return (
    <div className={Styles.gridContainer}>
      <div className={Styles.title}>
        <div>
          <h2>Portfolio</h2>
          <span> #typesOfProjects </span>
        </div>
      </div>
      {menuLinks.map((item) => (
          <Link key={item.title} href={item.link} style={{backgroundImage:`url(${item.image})`}}>
            <article>
              <div>
                <h5>{item.title}</h5>
                <span> {item.tags} </span>
              </div>
            </article>
          </Link>
      ))}
    </div>
  )
}
