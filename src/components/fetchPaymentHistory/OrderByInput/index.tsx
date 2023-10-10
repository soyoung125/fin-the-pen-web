import { Grid } from "@mui/material";
import InputGrid from "../InputGrid";
import OptionButton from "./OptionButton";

interface OrderByInputProps {
    changeDetailInfo: (state: { target: { id: string, value: string } }) => void;
    selected: string;
}
function OrderByInput({ changeDetailInfo, selected }: OrderByInputProps) {
    console.log(selected);
    return (
        <InputGrid title="정렬기준">
            <>
                <Grid xs item sx={{ paddingRight: "8px" }}>
                    <OptionButton
                        option="최신순" isSelected={selected === "0"}
                        changeDetailInfo={() => changeDetailInfo({
                            target: { id: "orderBy", value: "0" }
                        })}
                    />
                </Grid>
                <Grid xs item>
                    <OptionButton
                        option="과거순" isSelected={selected === "1"}
                        changeDetailInfo={() => changeDetailInfo({
                            target: { id: "orderBy", value: "1" }
                        })}
                    />
                </Grid>
            </>
        </InputGrid>
    )
}

export default OrderByInput;
