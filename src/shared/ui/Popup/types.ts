export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  autoCloseDelay?: number;
}
