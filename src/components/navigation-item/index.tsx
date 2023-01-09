import styled from "@emotion/styled";
import React, { ReactNode } from "react";

interface Props {
  label: string;
  icon: ReactNode;
}

export const NavigationItem = (props: Props) => {
  return (
    <div>
      <SC.Button>
        {props.icon}
        <br />
        {props.label}
      </SC.Button>
    </div>
  );
};

const SC = {
  Button: styled.button`
    background: white;
    border: 0;
    font-size: 15px;

    svg {
      font-size: 20px;
    }
  `,
};
