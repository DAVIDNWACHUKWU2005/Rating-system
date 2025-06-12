import { FaStar } from "react-icons/fa";
import "../css/index.css";

function Star({ selected = false, onClick }) {
  return (
    <FaStar
      className={`star ${selected ? "selected" : ""}`} 
      onClick={onClick}
    />
  );
}

export default Star;
