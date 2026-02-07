import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ menfesses }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Admin Dashboard
                </h2>
            }
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-gradient-to-r from-purple-900 to-black shadow-2xl sm:rounded-lg border border-purple-500">
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-purple-300 mb-4 flex items-center">
                                <span className="mr-2">🔍</span> Semua Pesan Rahasia (Admin Only)
                            </h3>
                            {menfesses.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-purple-600">
                                        <thead className="bg-purple-800">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-bold text-purple-200 uppercase tracking-wider">Pesan</th>
                                                <th className="px-6 py-3 text-left text-xs font-bold text-purple-200 uppercase tracking-wider">Tujuan</th>
                                                <th className="px-6 py-3 text-left text-xs font-bold text-purple-200 uppercase tracking-wider">Status</th>
                                                <th className="px-6 py-3 text-left text-xs font-bold text-purple-200 uppercase tracking-wider">Pengirim Asli 👀</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-gray-900 divide-y divide-purple-600">
                                            {menfesses.map((menfess) => (
                                                <tr key={menfess.id} className="hover:bg-purple-900 transition">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 italic">"{menfess.message}"</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-300 font-semibold">{menfess.recipient_username} 👤</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${menfess.status === 'sent' ? 'bg-green-800 text-green-200' : 'bg-blue-800 text-blue-200'}`}>
                                                            {menfess.status} 📤
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-pink-300 font-bold">{menfess.sender.username} 🕵️‍♂️</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <p className="text-gray-400 italic flex items-center">
                                    <span className="mr-2">📭</span> Belum ada pesan rahasia yang dikirim oleh pengguna.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}