import { FormControl, InputBase } from "@mui/material";

interface inputProps {
  id: string;
  value: number;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange: (e: React.FocusEvent<HTMLInputElement>) => void;
  min?: number;
  max: number;
}

function Input({ id, value, handleBlur, handleChange, min, max }: inputProps) {
  return (
    <FormControl>
      <InputBase
        id={id}
        sx={{
          py: 1,
          px: "10px",
          width: "50px",
          backgroundColor: "rgba(115, 91, 242, 0.10)",
        }}
        placeholder="DD"
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        inputProps={{
          style: { textAlign: "center" },
          min: min ?? 1,
          max: max,
        }}
      />
    </FormControl>
  );
}

export default Input;
