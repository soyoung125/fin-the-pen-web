import { InputBase } from '@mui/material';
import React from 'react';

interface AssetInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleFocus: () => void,
  asset: string,
  modifyFunction: () => void,
}

function AssetInput({
  handleChange, handleFocus, asset, modifyFunction
}: AssetInputProps) {
  return (
    <InputBase
      onChange={handleChange}
      autoFocus
      onFocus={handleFocus}
      type="text"
      value={(+asset).toLocaleString('ko-KR')}
      sx={{
        border: '1px solid', borderRadius: 1, fontSize: '14px', height: '21px', width: '100px',
      }}
      onKeyDown={(ev) => {
        if (ev.key === 'Enter') {
          modifyFunction();
        }
      }}
      inputProps={{
        style: { textAlign: 'right' },
      }}
    />
  );
}

export default AssetInput;
