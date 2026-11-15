import React from 'react';
import { IconCheck, IconSparkles } from './Icons';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className="toast-msg">
          <div className="toast-icon">
            <IconCheck size={18} />
          </div>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
