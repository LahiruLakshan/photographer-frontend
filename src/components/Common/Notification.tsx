import { Snackbar, Alert } from '@mui/material';
import { useState, createContext, useContext } from 'react';

type NotificationType = {
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
};

const NotificationContext = createContext<{
  showNotification: (notification: NotificationType) => void;
}>(null!);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notification, setNotification] = useState<NotificationType | null>(null);
  const [open, setOpen] = useState(false);

  const showNotification = (notification: NotificationType) => {
    setNotification(notification);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity={notification?.severity}
          sx={{ width: '100%' }}
        >
          {notification?.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};