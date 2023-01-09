import styled from "@emotion/styled";
import { SearchBar } from "../search-bar";

type Props = {};
export const Header = (props: Props) => {
  return (
    <SC.Container>
      <div className="left">{"Hororoc!"}</div>
      <div className="right">
        <SearchBar />
      </div>
    </SC.Container>
  );
};

const SC = {
  Container: styled.header`
    position: sticky;
    background: white;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    font-size: 20px;

    .left {
      font-weight: bold;
    }

    .right {
    }
  `,
};
