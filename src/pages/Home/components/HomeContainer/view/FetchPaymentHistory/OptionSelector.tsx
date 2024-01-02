import { Box, Grid, Stack, Typography } from "@mui/material";
import cashBook from "@assets/icons/cashbook.png";
import card from "@assets/icons/card.png";
import RoundedBorderBox from "@components/common/RoundedBorderBox.tsx";
import useHeader from "@hooks/useHeader.tsx";
import { HEADER_MODE } from "@type/common.tsx";

interface OptionSelectorProps {
  selected: string | null;
  changeOption: (option: string) => void;
}

function OptionSelector({ changeOption, selected }: OptionSelectorProps) {
  useHeader(true, HEADER_MODE.home);

  return (
    <Grid
      container
      spacing={1}
      sx={{ textAlign: "center", wordBreak: "keep-all" }}
    >
      <Grid item xs={6}>
        <Typography variant="button">카드</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="button">은행/계좌</Typography>
      </Grid>
      <Grid item xs={6} onClick={() => changeOption("card")}>
        <RoundedBorderBox greyBorder={!(selected === "card")}>
          <Stack alignItems="center" pb={1}>
            <Box my={2}>
              <img src={card} alt="" width="80px" height="80px" />
            </Box>
            <Typography variant="caption">
              보유하신 카드 결제 내역을 조회합니다.
            </Typography>
          </Stack>
        </RoundedBorderBox>
      </Grid>
      <Grid item xs={6} onClick={() => changeOption("account")}>
        <RoundedBorderBox greyBorder={!(selected === "account")}>
          <Stack alignItems="center" pb={1}>
            <Box my={3}>
              <img src={cashBook} alt="" width="64px" height="64px" />
            </Box>
            <Typography variant="caption">
              보유하신 계좌 결재 내역을 조회합니다.
            </Typography>
          </Stack>
        </RoundedBorderBox>
      </Grid>
    </Grid>
  );
}

export default OptionSelector;
