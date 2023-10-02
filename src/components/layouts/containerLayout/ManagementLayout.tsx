/* eslint-disable max-len */
import { Box, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import assetManagements from "../../../constants/managements";
import SwitchingHeader from "../../common/SwitchingHeader";
import EasyAuthentication from "../../../containers/sign/EasyAuthentication";
import { useRecoilValue } from "recoil";
import { isAuthenticatedState } from "@recoil/isAuthenticated.ts";
import { HEADER_MODE, headerRepository } from "@recoil/header.ts";
import useHeader from "@hooks/useHeader.tsx";

function ManagementLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  const { changeBackAction, changeHeaderTitle } = useRecoilValue(headerRepository);
  const [management, setManagement] = useState(0);

  useHeader(true, HEADER_MODE.assetManagement);

  useEffect(() => {
    setManagement(
      assetManagements.findIndex((s) => s.path === location.pathname)
    );
    changeBackAction(() => () => navigate(-1));
    changeHeaderTitle("");
  }, []);

  const handleMovement = (type: "+" | "-") => {
    console.log(assetManagements[management].title);
    if (type === "-" && management !== 0) {
      setManagement(management - 1);
      navigate(assetManagements[management - 1].path, { replace: true });
    } else if (type === "+" && management !== 3) {
      setManagement(management + 1);
      navigate(assetManagements[management + 1].path, { replace: true });
    }
  };

  return (
    <>
      <EasyAuthentication />
      {isAuthenticated && (
        <Box sx={{ pt: 3, px: 2 }}>
          <SwitchingHeader
            justifyContent="space-between"
            handleClickLeftArrow={() => handleMovement("-")}
            handleClickRightArrow={() => handleMovement("+")}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {assetManagements[management].title}
            </Typography>
          </SwitchingHeader>

          <Box sx={{ my: 3, wordBreak: "keep-all", fontWeight: "bold" }}>
            <Outlet />
          </Box>
        </Box>
      )}
    </>
  );
}

export default ManagementLayout;
