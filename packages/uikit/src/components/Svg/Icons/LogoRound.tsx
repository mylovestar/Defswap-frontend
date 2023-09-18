import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <img src="../../images/deflogo.png" width="35px"></img>
  );
};

export default Icon;
