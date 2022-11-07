// @flow
import * as React from "react";
import NavigationItem from "../navigation-item";
import * as S from "./style";

const navigations = [
  {
    name: "홈",
    value: "home",
    path: "/",
    icon: "",
  },
  {
    name: "레시피",
    value: "recipe",
    path: "/",
    icon: "",
  },
  {
    name: "발견",
    value: "discovery",
    path: "/",
    icon: "",
  },
  {
    name: "스크랩",
    value: "scrap",
    path: "/",
    icon: "",
  },
  {
    name: "내 정보",
    value: "me",
    path: "/",
    icon: "",
  },
];

type Props = {};
export const BottomNavigation = (props: Props) => {
  return (
    <S.Wrapper>
      {navigations.map((navigation) => (
        <NavigationItem
          key={navigation.value}
          label={navigation.name}
          icon={navigation.icon}
        />
      ))}
    </S.Wrapper>
  );
};
