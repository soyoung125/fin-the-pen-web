import { Switch } from "@mui/material";

interface SwitchButtonProps {
    checked: boolean,
    handleChange: () => void,
}

function SwitchButton({ checked, handleChange }: SwitchButtonProps) {
    return (
        <Switch
            size="small"
            sx={{ p: 0, borderRadius: 6 }}
            inputProps={{ 'aria-label': 'controlled' }}
            checked={checked}
            onChange={handleChange}
        />
    )
}

export default SwitchButton;
