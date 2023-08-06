import DangerousIcon from '@mui/icons-material/Dangerous';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { IconStatus } from '../types';
import { memo } from 'react';

const Cell = ({ onClick = () => {}, status = 'VACANT' }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {status == 'VACANT' ? <RadioButtonUncheckedIcon /> : <DangerousIcon />}
    </button>
  );
};

type Props = {
  onClick: () => void;
  status: IconStatus;
};

export default memo(Cell);
