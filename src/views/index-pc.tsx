import { FC } from "react";
import Roadmap from "../components/pc/roadmap";
import RoadmapItem from '../components/pc/roadmap-item'

import "../styles/index.scss"

const PC: FC = () => {

  return (
    <div className='PC'>
      <div className="title">风林火山骑行团</div>
      <Roadmap>
        <RoadmapItem />
        <RoadmapItem />
        <RoadmapItem />
        <RoadmapItem />
      </Roadmap>
    </div>
  );
};

export default PC;