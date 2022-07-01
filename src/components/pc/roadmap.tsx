import { FC, ReactNode } from "react";
import "../../styles/index.scss"

type Props = {
  children: ReactNode
};

const Roadmap: FC<Props> = ({ children }) => {

  return (
    <div className='roadmap'>
      <div className="line"></div>
      {children}
    </div>
  );
};

export default Roadmap;