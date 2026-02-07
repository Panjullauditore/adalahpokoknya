import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="GibahAlus - Pesan Rahasia" />
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white">
                <div className="relative flex min-h-screen flex-col items-center justify-center">
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                GibahAlus
                            </h1>
                            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                                Platform pesan rahasia anonim. Kirim pesan tanpa takut diketahui identitasmu! 🤫
                            </p>
                            <div className="flex justify-center space-x-4 text-4xl">
                                <span>🕵️‍♂️</span>
                                <span>💌</span>
                                <span>🔒</span>
                                <span>🚀</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {auth.user ? (
                                <div className="space-y-4">
                                    <Link
                                        href={route('dashboard')}
                                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
                                    >
                                        Masuk ke Dashboard 📱
                                    </Link>
                                    {auth.user.role === 'admin' && (
                                        <div>
                                            <Link
                                                href={route('admin.dashboard')}
                                                className="inline-block bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 text-sm"
                                            >
                                                Admin Panel 🔍
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="space-x-4">
                                    <Link
                                        href={route('login')}
                                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
                                    >
                                        Masuk 🔑
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
                                    >
                                        Daftar 📝
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="text-purple-300 text-sm space-y-2">
                            <p>✨ Kirim pesan anonim ke teman-temanmu</p>
                            <p>🛡️ Identitasmu aman dan rahasia</p>
                            <p>👀 Hanya admin yang bisa melihat pengirim asli</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

