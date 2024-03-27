import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import MenuCard from "../../components/MenuCard/MenuCard";
import Header from "../../components/Header/Header";
import { cardDetails } from "../../utils/cardDetails";

function Dashboard() {
  const navigate = useNavigate();

  const renderCell = ({ icon, title, desc, svg, link }: any, index: any) => {
    if (index > 5) {
      return <MenuCard icon={icon} title={title} desc={desc} isBlur={true} />;
    } else if (index === 0) {
      return <MenuCard title={title} desc={desc} onClick={() => navigate("/chat?t=document")} svg={svg} />;
    } else if (index === 1) {
      return <MenuCard title={title} desc={desc} onClick={() => navigate("/chat?t=database")} svg={svg} />;
    } else if (index === 2) {
      return <MenuCard title={title} desc={desc} onClick={() => navigate("/chat?t=legal")} svg={svg} />;
    } else if (index === 3) {
      return <MenuCard title={title} desc={desc} svg={svg} onClick={() => window.open(link, "_self")} />;
    } else if (index === 4) {
      return <MenuCard title={title} desc={desc} svg={svg} onClick={() => window.open(link, "_self")} />;
    } else if (index === 5) {
      return <MenuCard title={title} desc={desc} onClick={() => navigate("/sentiment")} svg={svg} />;
    }
    return <MenuCard title={title} desc={desc} svg={svg} />;
  };

  return (
    <div className="flex flex-column flex-align-center height-99 overflow-auto">
      <Header />
      <div className="dashboard-cards flex flex-justify-center flex-wrap">{cardDetails.map(renderCell)}</div>
    </div>
  );
}

export default Dashboard;
