import styled from "@emotion/styled";
type Props = {};
export const BodyContainer = (props: Props) => {
  return (
    <SC.Wraper>
      <span>body!</span>
    </SC.Wraper>
  );
};

const SC = {
  Wraper: styled.div`
    background: green;
    height: 84vh;
  `,
};
