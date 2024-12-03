import React from 'react';
import { Fingerprint, LogOut } from 'lucide-react';

interface AuthButtonProps {
  onAuth: () => void;
  onLogout: () => void;
  isAuthenticated: boolean;
  isLoading?: boolean;
}

export function AuthButton({ onAuth, onLogout, isAuthenticated, isLoading = false }: AuthButtonProps) {
  if (isAuthenticated) {
    return (
      <button
        onClick={onLogout}
        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        <LogOut size={20} />
        Déconnexion
      </button>
    );
  }

  return (
    <button
      onClick={onAuth}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
    >
      <Fingerprint size={20} />
      {isLoading ? 'Authentification...' : 'Authentification biométrique'}
    </button>
  );
}