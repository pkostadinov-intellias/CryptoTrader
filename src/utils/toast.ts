import { Bounce, toast, ToastOptions } from "react-toastify";

type ToastState = "success" | "error";

const defaultToastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce
};

export const showToast = (
  message: string,
  state: ToastState,
  options?: ToastOptions
) => {
  const toastFunction = state === "success" ? toast.success : toast.error;
  toastFunction(message, { ...defaultToastOptions, ...options });
};
