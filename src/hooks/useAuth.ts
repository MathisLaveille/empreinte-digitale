import { useState, useCallback } from 'react';
import { startAuthentication } from '@simplewebauthn/browser';
import type { User } from '../types/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const authenticate = useCallback(async () => {
    try {
      setError(null);
      
      // Vérifier si l'authentification biométrique est disponible
      if (!window.PublicKeyCredential) {
        throw new Error("L'authentification biométrique n'est pas supportée sur cet appareil");
      }

      // Simuler une réponse du serveur avec les options d'authentification
      const options = {
        challenge: new Uint8Array(32),
        timeout: 60000,
        userVerification: "preferred",
        rpId: window.location.hostname,
      };

      const authResult = await startAuthentication(options);
      
      // Dans un cas réel, vous enverriez authResult au serveur pour validation
      // Ici, nous simulons une authentification réussie
      setUser({
        id: '1',
        username: 'Utilisateur',
        isAuthenticated: true
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setError(null);
  }, []);

  return { user, error, authenticate, logout };
}