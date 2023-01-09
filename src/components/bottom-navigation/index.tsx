import { NavigationItem } from "../navigation-item";
import {
  BiHomeAlt,
  BiBookmark,
  BiCookie,
  BiHash,
  BiUser,
} from "react-icons/bi";
import styled from "@emotion/styled";

const navigations = [
  {
    name: "홈",
    value: "home",
    path: "/",
    icon: <BiHomeAlt />,
  },
  {
    name: "레시피",
    value: "recipe",
    path: "/",
    icon: <BiCookie />,
  },
  {
    name: "발견",
    value: "discovery",
    path: "/",
    icon: <BiHash />,
  },
  {
    name: "스크랩",
    value: "scrap",
    path: "/",
    icon: <BiBookmark />,
  },
  {
    name: "내 정보",
    value: "me",
    path: "/",
    icon: <BiUser />,
  },
];

type Props = {};
export const BottomNavigation = (props: Props) => {
  return (
    <SC.Wrapper>
      {navigations.map((navigation) => (
        <NavigationItem
          key={navigation.value}
          label={navigation.name}
          icon={navigation.icon}
        />
      ))}
    </SC.Wrapper>
  );
};

const SC = {
  Wrapper: styled.div`
    background: white;
    position: sticky;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
};
