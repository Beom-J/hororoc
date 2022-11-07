import React from "react";
import { S } from "./style";

interface Props {
  label: string;
  icon: string;
}

const NavigationItem = (props: Props) => {
  return (
    <div>
      <S.Wrapper>{props.label}</S.Wrapper>
    </div>
  );
};

export default NavigationItem;
