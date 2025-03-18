'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '@/lib/auth';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Verificar tokens al cargar
        const checkAuth = async () => {
            const tokens = authService.getTokens();
            if (tokens.access_token) {
                try {
                    // Intentar refrescar el token para validar la sesión
                    if (tokens.refresh_token) {
                        const response = await authService.refreshToken(tokens.refresh_token);
                        authService.setTokens(response.access_token, response.refresh_token);
                        setIsAuthenticated(true);
                    }
                } catch (error) {
                    // Si falla el refresh, limpiar tokens
                    authService.clearTokens();
                    setIsAuthenticated(false);
                }
            }
            setIsLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const response = await authService.login({ username, password });
            authService.setTokens(response.access_token, response.refresh_token);
            setIsAuthenticated(true);
            router.push('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const logout = () => {
        authService.clearTokens();
        setIsAuthenticated(false);
        router.push('/login');
    };

    // Mostrar un estado de carga mientras verificamos la autenticación
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
} 