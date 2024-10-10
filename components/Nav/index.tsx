import React, {useState} from "react";
import { FiHelpCircle } from "react-icons/fi";
import Popup from "@/components/Popup"


const Nav = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const handleOnClick = () => {
    setShowPopup(prev => !prev);
  }
  return (
    <nav className="w-screen px-8 py-4 flex justify-end">
      <FiHelpCircle className="text-xl bg-transparent hover:text-blue-500" onClick={handleOnClick}/>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </nav>
  );
};

export default Nav;
