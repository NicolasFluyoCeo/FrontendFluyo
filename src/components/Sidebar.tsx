'use client';

import { useState, useEffect } from 'react';
import { authService } from '@/lib/auth';

interface Organization {
    id: string;
    name: string;
    nit: string;
    is_active: boolean;
}

// Creamos un contexto para compartir la organización seleccionada
export const useSelectedOrganization = () => {
    const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);
    return { selectedOrg, setSelectedOrg };
};

export function Sidebar({ onSelectOrganization }: { onSelectOrganization: (org: Organization | null) => void }) {
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadOrganizations = async () => {
            try {
                const orgs = await authService.getOrganizations();
                setOrganizations(orgs);
                setError('');
            } catch (error) {
                console.error('Failed to load organizations:', error);
                setError('Error al cargar las organizaciones');
            }
        };

        loadOrganizations();
    }, []);

    const handleOrganizationChange = (orgId: string) => {
        const selectedOrg = organizations.find(org => org.id === orgId) || null;
        onSelectOrganization(selectedOrg);
    };

    return (
        <aside className="w-64 bg-white h-screen shadow-lg fixed left-0 top-0">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Admin Panel</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Organización
                        </label>
                        {error ? (
                            <p className="text-red-500 text-sm">{error}</p>
                        ) : (
                            <select
                                className="w-full px-3 py-2 border rounded-md"
                                onChange={(e) => handleOrganizationChange(e.target.value)}
                            >
                                <option value="">Seleccionar organización</option>
                                {organizations.map((org) => (
                                    <option 
                                        key={org.id} 
                                        value={org.id}
                                        disabled={!org.is_active}
                                    >
                                        {org.name} {!org.is_active && "(Inactiva)"}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                    

                </div>
            </div>
        </aside>
    );
} 