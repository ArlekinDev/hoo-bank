import React from 'react';
import { arrowUp } from "../assets";
import styles from "../style";

const Anchor = () => (
    <a href="#home" className="lg:w-[100px] md:h-[100px] w-[70px] h-[70px] bg-secondary fixed bottom-[50px] right-[50px] rounded-full shadow-[0_0_80px_10px_#00f6ff] flex justify-center items-center">
        <img src={arrowUp} alt="" className="w-[40px] h-[40px] rotate-[-50deg]"/>
    </a>
)

export default Anchor