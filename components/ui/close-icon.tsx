import { Cross2Icon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

type CloseIconProps = {
  onClick: () => void;
};

const CloseIcon = ({ onClick }: CloseIconProps) => {
  return (
    <IconButton onClick={() => onClick()} color="gray" radius="full" size="1">
      <Cross2Icon />
    </IconButton>
  );
};

export default CloseIcon;
