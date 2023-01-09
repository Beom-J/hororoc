import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};
export const SearchBar = (props: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isShowSearchInput, setIsShowSearchInput] = useState(false);

  const handleBiSearchClick = () => {
    setIsShowSearchInput((isShow) => !isShow);
  };

  useEffect(() => {
    if (isShowSearchInput) {
      searchInputRef.current?.focus();
    }
  }, [isShowSearchInput]);

  return (
    <SC.Button>
      <BiSearch onClick={handleBiSearchClick} />
      {isShowSearchInput && (
        <SC.Search
          ref={searchInputRef}
          onBlur={() => setIsShowSearchInput(false)}
        />
      )}
    </SC.Button>
  );
};

const SC = {
  Button: styled.button`
    background: white;
    border: 0;
    display: flex;
    align-items: center;

    svg {
      font-size: 20px;
    }
  `,
  Search: styled.input`
    background: lightgray;
    border: 0;
  `,
};
