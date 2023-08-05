import DangerousIcon from '@mui/icons-material/Dangerous';

const Cell = ({ onClick = () => {} }) => {
  return (
    <button onClick={onClick}>
      <DangerousIcon />
    </button>
  );
};

export default Cell;
