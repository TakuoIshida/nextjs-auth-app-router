'use client';

import Toast from 'components/ui/toast/toast';
import React from 'react';

interface ToastContextType {
  isToastOpen: boolean;
  setToastClose: () => void;
  handleToastOpen: (title: string, description: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined
);

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [isToastOpen, setToastOpen] = React.useState(false);
  const [toastContent, setToastContent] = React.useState({
    title: '',
    description: '',
  });

  const handleToastOpen = (title: string, description: string) => {
    setToastOpen(false);
    setTimeout(() => {
      setToastOpen(true);
      setToastContent({ title, description });
    }, 100);
  };

  const setToastClose = () => setToastOpen(false);

  if (
    isToastOpen &&
    toastContent.title === '' &&
    toastContent.description === ''
  ) {
    throw new Error('ToastProvider: title and description must be set');
  }
  return (
    <ToastContext.Provider
      value={{ isToastOpen, handleToastOpen, setToastClose }}
    >
      {children}
      <Toast
        open={isToastOpen}
        title={toastContent.title}
        description={toastContent.description}
      />
    </ToastContext.Provider>
  );
}
