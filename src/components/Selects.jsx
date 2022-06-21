import React from "react";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import KeyWest from "../assets/keywest.jpg";
import SelectCards from "./SelectCards"

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SelectCards bg={BoraBora} text="Bora Bora"/>
        <SelectCards bg={BoraBora2} text="Bora Bora2"/>
        <SelectCards bg={KeyWest} text="KeyWest"/>
        <SelectCards bg={Maldives} text="Maldives"/>
        <SelectCards bg={Maldives2} text="Maldives2"/>
        <SelectCards bg={Maldives3} text="Maldives3"/>
    </div>
  );
};

export default Selects;
