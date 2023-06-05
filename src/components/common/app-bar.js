import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import "../../assets/css/common/app_bar.css";

function AppBar({ appBarName, navigateTo }) {
  const navigate = useNavigate();
  const handleBackArrowClick = () => navigate(navigateTo);
  return (
    <div className="app_bar">
      <IoIosArrowBack
        size="1.8rem"
        className="arrow-icon"
        style={{ cursor: "pointer" }}
        onClick={handleBackArrowClick}
      />

      <div>{appBarName}</div>
    </div>
  );
}
export default AppBar;
