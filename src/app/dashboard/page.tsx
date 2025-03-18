'use client';

import { useState } from 'react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/Sidebar';

interface Organization {
    id: string;
    name: string;
    nit: string;
    is_active: boolean;
}

export default function DashboardPage() {
    const { logout } = useAuth();
    const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);

    return (
        <ProtectedRoute>
            <div className="min-h-screen flex">
                <Sidebar onSelectOrganization={setSelectedOrg} />
                
                <main className="flex-1 ml-64 bg-gray-50">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h1 className="text-3xl font-bold">
                                    {selectedOrg ? (
                                        <>
                                            {selectedOrg.name}
                                            <span className="text-gray-500 text-lg ml-2">
                                                NIT: {selectedOrg.nit}
                                            </span>
                                        </>
                                    ) : (
                                        'Dashboard'
                                    )}
                                </h1>
                            </div>
                            <Button onClick={logout} variant="outline">
                                Logout
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
                                <p className="text-gray-600">
                                    Resumen de tus actividades y métricas principales.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4">Licitaciones Activas</h2>
                                <p className="text-gray-600">
                                    Lista de licitaciones en las que estás participando.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4">Notificaciones</h2>
                                <p className="text-gray-600">
                                    Actualizaciones y alertas importantes.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </ProtectedRoute>
    );
} 