import { ToggleButton } from '@mui/material';

function RoundedButton({ children, onClick }) {
  return (
    <ToggleButton sx={{ color: 'white', borderRadius: 30, borderWidth: 0 }} onClick={onClick}>
      {children}
    </ToggleButton>
  );
}
export default RoundedButton;
