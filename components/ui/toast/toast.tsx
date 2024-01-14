import * as RadixToast from '@radix-ui/react-toast';
import { useToast } from 'components/providers/toast-provider';
import CloseIcon from 'components/ui/close-icon';

import './styles.css';

type RadixToastProps = {
  open: boolean;
  title?: string;
  description: string;
};

const Toast = ({ open, title, description }: RadixToastProps) => {
  const { setToastClose } = useToast();

  return (
    <RadixToast.Provider>
      <RadixToast.Root className="ToastRoot" open={open}>
        <RadixToast.Title className="ToastTitle">{title}</RadixToast.Title>
        <RadixToast.Description className="ToastDescription">
          {description}
        </RadixToast.Description>
        <RadixToast.Close>
          <CloseIcon onClick={() => setToastClose()} />
        </RadixToast.Close>
      </RadixToast.Root>
      <RadixToast.Viewport className="ToastViewport" />
    </RadixToast.Provider>
  );
};

export default Toast;
