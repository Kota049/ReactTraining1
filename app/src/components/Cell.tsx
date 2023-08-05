import DangerousIcon from '@mui/icons-material/Dangerous';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import useIcon from '../hooks/useIcon';
import { memo } from 'react';

const Cell = ({ onClick = () => {} }) => {
  const [icon, updateIcon] = useIcon();
  return (
    <button
      onClick={() => {
        updateIcon();
        onClick();
      }}
    >
      {icon == 'VACANT' ? <RadioButtonUncheckedIcon /> : <DangerousIcon />}
    </button>
  );
};

export default memo(Cell);
