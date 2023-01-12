import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I met her by chance I said, "I really like your pants" I know you got a
        man Gimme your hand (Fuck it) Teen romance Gimme this dance Yeah, I took
        a Xan (Yeah) I hope you understand (She don't) Let me guide you To a
        place where No one hurts you You are safe here with me
      </p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card"  className="w-full h-full"/>
    </div>
  </section>
);

export default CardDeal;
