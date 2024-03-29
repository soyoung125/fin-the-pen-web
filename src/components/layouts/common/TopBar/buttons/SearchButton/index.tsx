import { Box, Popover } from "@mui/material";
import React, { useRef, useState } from "react";
import RoundedButton from "../../../../../common/RoundedButton.tsx";
import OptionList from "./popover/OptionList.tsx";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path.ts";
import { useUser } from "@app/tanstack-query/useUser.ts";
import search from "@assets/icons/header/search.svg";

function SearchButton() {
  const { data: user } = useUser();

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const searchBtn = useRef(null);

  const handleClick = () => {
    setAnchorEl(searchBtn.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openSearchPage = () => {
    if (user) {
      setAnchorEl(null);
      navigate(PATH.searchSchedule);
    }
  };

  const openFetchPage = () => {
    if (user) {
      setAnchorEl(null);
      navigate(PATH.fetchPaymentHistory);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box ref={searchBtn}>
        <RoundedButton value="user" onClick={handleClick}>
          <img src={search} alt="search" />
        </RoundedButton>
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <OptionList
          openSearchPage={openSearchPage}
          openFetchPage={openFetchPage}
        />
      </Popover>
    </>
  );
}

export default SearchButton;
