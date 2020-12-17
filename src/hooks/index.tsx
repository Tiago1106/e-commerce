import React from 'react';

import { ToastProvider } from './toast';
import { CartProvider } from './cart';

const AppProvider: React.FC = ({ children }) => (
  <CartProvider>
    <ToastProvider>{children}</ToastProvider>
  </CartProvider>
);

export default AppProvider;
