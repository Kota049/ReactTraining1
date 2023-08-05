const useIcon = (): [IconStatus, () => void] => {
  return ['VACANT', () => {}];
};
export default useIcon;
type IconStatus = 'VACANT' | 'FULL';
