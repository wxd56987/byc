import { FC } from "react";
import "../../styles/index.scss"

const RoadmapItem: FC = () => {

  return (
    <div className='roadmap-item'>
      <div className="left">
        <div className="tip">6月4日 🚴🏻 梅岭南路</div>
      </div>
      <div className="right">
        <div className="img-box">
          <img src="https://i.postimg.cc/C5Z43HHP/IMG-8202.jpg" alt="" />
        </div>
        <div className="img-box">
          <img src="https://i.postimg.cc/C5Z43HHP/IMG-8202.jpg" alt="" />
        </div>
        <div className="img-box">
          <img src="https://i.postimg.cc/C5Z43HHP/IMG-8202.jpg" alt="" />
        </div>
        <div className="img-box">
          <img src="https://i.postimg.cc/C5Z43HHP/IMG-8202.jpg" alt="" />
        </div>


      </div>
    </div>
  );
};

export default RoadmapItem;