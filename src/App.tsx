import React from 'react';
import { useAuth } from './hooks/useAuth';
import { AuthButton } from './components/AuthButton';
import { Fingerprint } from 'lucide-react';

function App() {
  const { user, error, authenticate, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto pt-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Fingerprint className="w-8 h-8 text-blue-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-center">
              Authentification Biométrique
            </h1>

            {error && (
              <div className="w-full p-4 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {user ? (
              <div className="text-center">
                <p className="text-lg mb-4">
                  Bienvenue, <span className="font-semibold">{user.username}</span>
                </p>
                <p className="text-sm text-gray-600 mb-6">
                  Vous êtes connecté avec succès
                </p>
              </div>
            ) : (
              <p className="text-gray-600 text-center mb-6">
                Utilisez votre empreinte digitale pour vous connecter
              </p>
            )}

            <AuthButton
              onAuth={authenticate}
              onLogout={logout}
              isAuthenticated={!!user}
            />
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Cette démonstration utilise l'API WebAuthn pour l'authentification biométrique
        </p>
      </div>
    </div>
  );
}

export default App;