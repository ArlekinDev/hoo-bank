import React from "react";
import styles from "./style";
import {
  NavBar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Testmonials,
} from "./components";
import Anchor from "./components/Anchor";

const App = () => (
  // header
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    {/* hero section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

{/* all main sections */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testmonials/>
        <Clients />
        <CTA />
        <Footer />
        <Anchor/>
      </div>
    </div>
  </div>
);

export default App;
