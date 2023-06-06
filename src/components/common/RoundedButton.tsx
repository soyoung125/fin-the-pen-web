import { ToggleButton } from '@mui/material';

interface RoundedButtonProps {
  children: React.ReactNode,
  onClick: () => void,
  value: string,
}

function RoundedButton({ children, onClick, value }: RoundedButtonProps) {
  return (
    <ToggleButton value={value} sx={{ color: 'white', borderRadius: 30, borderWidth: 0 }} onClick={onClick}>
      {children}
    </ToggleButton>
  );
}
export default RoundedButton;
