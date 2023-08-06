import { useState } from 'react';

const useIcon = (): [IconStatus, () => void] => {
  const [icon, setIcon] = useState<IconStatus>('VACANT');
  const toggle = () => {
    setIcon('VACANT' === icon ? 'FULL' : 'VACANT');
  };
  return [icon, toggle];
};
export default useIcon;
export type IconStatus = 'VACANT' | 'FULL';
