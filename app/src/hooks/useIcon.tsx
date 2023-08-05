import { useState } from 'react';

const useIcon = (): [IconStatus, () => void] => {
  const [icon, setIcon] = useState<IconStatus>('VACANT');
  const togle = () => {
    setIcon('FULL');
  };
  return [icon, togle];
};
export default useIcon;
type IconStatus = 'VACANT' | 'FULL';
