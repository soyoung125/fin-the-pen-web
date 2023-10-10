import { Button, Grid } from "@mui/material";
import InputGrid from "./InputGrid";

interface OrderByInputProps{
    changeDetailInfo: (state: {target: { id: string, value: string }}) => void;
}
function OrderByInput({changeDetailInfo}: OrderByInputProps) {
    return (
        <InputGrid title="정렬기준">
            <>
                <Grid xs item sx={{ paddingRight: "8px" }}>
                    <Button fullWidth variant="contained" sx={{ borderRadius: "4px 4px 0px 0px" }} onChange={(e) =>
                        changeDetailInfo({
                            target: { id: "inquiryType", value: "0" },
                        })
                    }>최신순</Button>
                </Grid>
                <Grid xs item>
                    <Button fullWidth variant="outlined" sx={{ borderRadius: "4px 4px 0px 0px", borderColor: "#A9ACB2", color: "#5B5F67" }} onChange={(e) =>
                        changeDetailInfo({
                            target: { id: "inquiryType", value: "1" },
                        })
                    }>과거순</Button>
                </Grid>
            </>
        </InputGrid>
    )
}

export default OrderByInput;
