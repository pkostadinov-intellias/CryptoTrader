import React, { createContext, useContext, useState } from "react";
import { Crypto } from "../types/crypto";

interface DialogContextType {
  isOpen: boolean;
  selectedCoin: Crypto | null;
  openDialog: (coin: Crypto) => void;
  closeDialog: () => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<Crypto | null>(null);

  const openDialog = (coin: Crypto) => {
    setSelectedCoin(coin);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedCoin(null);
  };

  return (
    <DialogContext.Provider
      value={{ isOpen, selectedCoin, openDialog, closeDialog }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
