import * as React from 'react';
import './ConfirmationPanel.scss';

interface ConfirmationPanelProps {
  onAccept?: () => void;
  onCancel?: () => void;
  acceptText?: string;
  cancelText?: string;
}

export const ConfirmationPanelMessages = {
  ACCEPT: 'Yes',
  CANCEL: 'Cancel'
};

export const ConfirmationPanel: React.FC<ConfirmationPanelProps> = ({
  onAccept,
  onCancel,
  acceptText= ConfirmationPanelMessages.ACCEPT,
  cancelText= ConfirmationPanelMessages.CANCEL,
  children
}) => (
  <div className="ConfirmationPanel">
      {children}
      <button onClick={onAccept}>{acceptText}</button>
      <button onClick={onCancel}>{cancelText}</button>
  </div>
);

ConfirmationPanel.displayName = 'ConfirmationPanel';
