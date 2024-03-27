import { Icon } from "semantic-ui-react";
import "./MenuCard.scss";

function MenuCard({ icon, title, desc, isBlur, svg, onClick, link }: any) {
  return (
    <div className={`${isBlur ? "blur-card" : "card"} flex flex-column flex-justify-center flex-align-center width-15 height-50`} onClick={onClick}>
      <div className="flex flex-column flex-justify-between flex-align-center height-60">
        {icon ? <Icon name={icon} size="big" /> : <img src={svg} alt="" />}
        <div className="flex flex-column flex-align-center ">
          <span className="card-title flex">{title}</span>
          {/* <a className="card-title flex" href={link}>{title}</a> */}
          <span className="card-text flex">{desc}</span>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
