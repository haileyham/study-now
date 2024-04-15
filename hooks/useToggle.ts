import { useState } from 'react';

type ToggleReturnType = [boolean, () => void];

export default function useToggle(
  initialValue: boolean = false,
): ToggleReturnType {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}
