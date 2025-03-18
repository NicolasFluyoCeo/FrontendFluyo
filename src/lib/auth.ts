import axios from 'axios';

interface LoginResponse {
    access_token: string;
    refresh_token: string;
    token_type: string;
}

interface LoginCredentials {
    username: string;
    password: string;
}

interface User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    full_name: string;
    is_active: boolean;
    is_email_verified: boolean;
    is_superuser: boolean;
    created_at: string;
    updated_at: string;
}

interface Organization {
    id: string;
    name: string;
    nit: string;
    is_active: boolean;
}

const API_URL = 'http://localhost:8000/api';

export const authService = {
    async login(credentials: LoginCredentials): Promise<LoginResponse> {
        const formData = new URLSearchParams();
        formData.append('grant_type', 'password');
        formData.append('username', credentials.username);
        formData.append('password', credentials.password);
        formData.append('scope', '');
        formData.append('client_id', 'string');
        formData.append('client_secret', 'string');

        const response = await axios.post<LoginResponse>(
            `${API_URL}/auth/login`,
            formData,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );
        return response.data;
    },

    async refreshToken(refresh_token: string): Promise<LoginResponse> {
        try {
            const response = await axios.post<LoginResponse>(
                `${API_URL}/auth/refresh`,
                { refresh_token },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;
        } catch (error) {
            // Si falla el refresh, limpiar tokens
            this.clearTokens();
            throw error;
        }
    },

    setTokens(access_token: string, refresh_token: string) {
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
    },

    getTokens() {
        return {
            access_token: localStorage.getItem('access_token'),
            refresh_token: localStorage.getItem('refresh_token'),
        };
    },

    clearTokens() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    },

    isAuthenticated(): boolean {
        return !!localStorage.getItem('access_token');
    },

    async getCurrentUser(): Promise<User> {
        const { access_token } = this.getTokens();
        const response = await axios.get<User>(
            `${API_URL}/users/me`,
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                },
            }
        );
        return response.data;
    },

    async getOrganizations(): Promise<Organization[]> {
        const { access_token } = this.getTokens();
        const response = await axios.get<Organization[]>(
            `${API_URL}/organizations?skip=0&limit=100`,
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                },
            }
        );
        return response.data;
    }
}; 