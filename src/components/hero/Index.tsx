import Logos from '../logos/Index';
import Styles from './Style.module.css';

import React from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['E-commerce', 'Websites'],
      typeSpeed: 50,
      fadeOut: true,
      loop: true,
      showCursor: false
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  
  return (
    <>
    <header className={Styles.header}>
        <div className={Styles.container}>
          <h1>Development & Analytics for</h1>
          <span className={Styles.el} ref={el} />
          <button className={Styles.cta}>Discover how to empower your bussiness</button>
          <div className={Styles.imgFeature}>
          </div>
        </div>
    </header>
    <Logos />
    </>
  )
}
