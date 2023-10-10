import { Button } from "@mui/material";

interface OptionButtonProps {
    option: string;
    isSelected: boolean;
    changeDetailInfo: () => void;
}
function OptionButton({ option, isSelected, changeDetailInfo }: OptionButtonProps) {
    const style = isSelected ? { borderRadius: "4px 4px 0px 0px" } : { borderRadius: "4px 4px 0px 0px", borderColor: "#A9ACB2", color: "#5B5F67" };
    return (
        <Button fullWidth variant={isSelected ? "contained" : "outlined"} sx={style} onClick={changeDetailInfo}>{option}</Button>
    )
}

export default OptionButton;
