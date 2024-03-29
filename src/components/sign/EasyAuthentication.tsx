import { Alert, Box, Button, Dialog, Grid, Stack } from "@mui/material";
import { useState } from "react";
import LogoCircle from "../common/LogoCircle.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import {
  selectIsAuthenticated,
  setIsAuthenticatedTrue,
} from "@redux/slices/commonSlice.tsx";
import Keypad from "@components/sign/Keypad.tsx";
import BackButton from "@components/layouts/common/TopBar/buttons/BackButton.tsx";
import {
  changeViewMode,
  selectViewMode,
} from "@redux/slices/scheduleSlice.tsx";
import { VIEW_MODE } from "@constants/schedule.ts";
import { useUser } from "@app/tanstack-query/useUser.ts";

interface EasyAuthenticationProps {
  handleAuthenticate?: () => void;
}

function EasyAuthentication({ handleAuthenticate }: EasyAuthenticationProps) {
  const CHARACTER_LIMIT = 6;
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const { data: user } = useUser();
  const viewMode = useAppSelector(selectViewMode);

  const [password, setPassword] = useState<number[]>([]);

  const handleClickBack = () => {
    dispatch(changeViewMode(VIEW_MODE.schedule));
  };

  const handleClick = () => {
    if (CHARACTER_LIMIT === password.length) {
      dispatch(setIsAuthenticatedTrue());
      handleAuthenticate && handleAuthenticate();
    }
  };

  return (
    <>
      {user ? (
        <Dialog fullScreen open={!isAuthenticated}>
          <Stack
            direction="column"
            justifyContent="space-between"
            height="100%"
          >
            <Box width="100%" px={2} pt={2}>
              <BackButton
                handleClick={
                  viewMode === VIEW_MODE.asset ? handleClickBack : undefined
                }
              />
            </Box>
            <Stack justifyContent="center" alignItems="center" height="100%">
              <LogoCircle />

              <Box my={2} sx={{ typography: "h5", fontWeight: "bold" }}>
                비밀번호 입력
              </Box>

              <Box
                sx={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "primary.main",
                }}
                mb={3}
              >
                설정하신 PIN 6자리를 입력해주세요.
              </Box>

              <Box
                component="form"
                noValidate
                sx={{ maxWidth: "300px", width: "100%" }}
                px={1}
              >
                <Grid container spacing={1} mb={1}>
                  {[...Array(CHARACTER_LIMIT)].map((d, index) => (
                    <Grid item xs={2} key={index}>
                      <Box
                        sx={{
                          height: "56px",
                          border: "2px solid",
                          borderColor: "primary.main",
                          borderRadius: 1,
                          backgroundColor:
                            index < password.length
                              ? "rgba(115, 91, 242, 0.6)"
                              : "white",
                        }}
                      >
                        <Box
                          sx={{
                            color: "white",
                            fontSize: "45px",
                            textAlign: "center",
                          }}
                        >
                          *
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                {CHARACTER_LIMIT === password.length && (
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => handleClick()}
                  >
                    인증
                  </Button>
                )}
              </Box>
            </Stack>

            <Keypad
              isRandom={true}
              setPassword={setPassword}
              currentLength={password.length}
              maxLength={CHARACTER_LIMIT}
            />
          </Stack>
        </Dialog>
      ) : (
        <Alert severity="error" sx={{ m: 3 }}>
          로그인이 필요한 페이지입니다.
        </Alert>
      )}
    </>
  );
}

export default EasyAuthentication;
