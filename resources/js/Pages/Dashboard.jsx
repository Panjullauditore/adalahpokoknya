import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import { motion } from 'framer-motion';

export default function Dashboard({ menfesses, receivedMenfesses }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        recipient_username: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('send.message'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="glow-text text-2xl font-bold leading-tight text-purple-200">
                    🌌 Mission Control Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
                    {/* Send Message Form */}
                    <motion.div
                        className="glass-effect-strong overflow-hidden rounded-2xl border border-purple-400/30 shadow-2xl shadow-purple-500/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="p-8">
                            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-purple-200">
                                <span className="text-3xl">💌</span>
                                <span className="glow-text">Kirim Pesan Rahasia ke Luar Angkasa</span>
                            </h3>
                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <InputLabel htmlFor="recipient_username" value="Tujuan Astronot" />
                                    <TextInput
                                        id="recipient_username"
                                        type="text"
                                        name="recipient_username"
                                        value={data.recipient_username}
                                        className="mt-2 block w-full"
                                        placeholder="Masukkan username astronot tujuan... 🧑‍🚀"
                                        onChange={(e) => setData('recipient_username', e.target.value)}
                                        required
                                    />
                                    {errors.recipient_username && <p className="mt-2 text-sm text-red-400">⚠️ {errors.recipient_username}</p>}
                                </div>
                                <div>
                                    <InputLabel htmlFor="message" value="Pesan Rahasia" />
                                    <motion.textarea
                                        id="message"
                                        name="message"
                                        value={data.message}
                                        className="glass-effect mt-2 block w-full rounded-lg border border-purple-400/30 bg-purple-900/20 px-4 py-3 text-white placeholder-purple-300/50 shadow-sm transition-all duration-300 focus:border-purple-400 focus:bg-purple-900/30 focus:shadow-lg focus:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                        rows="4"
                                        placeholder="Tulis pesanmu di sini... Akan dikirim melalui gelombang kosmik 🌠"
                                        onChange={(e) => setData('message', e.target.value)}
                                        required
                                        whileFocus={{ scale: 1.01 }}
                                    />
                                    {errors.message && <p className="mt-2 text-sm text-red-400">⚠️ {errors.message}</p>}
                                </div>
                                <PrimaryButton disabled={processing}>
                                    {processing ? 'Mengirim ke Orbit...' : 'Kirim Pesan'}
                                </PrimaryButton>
                            </form>
                        </div>
                    </motion.div>

                    {/* Sent Messages History */}
                    <motion.div
                        className="glass-effect-strong overflow-hidden rounded-2xl border border-purple-400/30 shadow-2xl shadow-purple-500/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="p-8">
                            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-purple-200">
                                <span className="text-3xl">📡</span>
                                <span className="glow-text">Transmisi Terkirim</span>
                            </h3>
                            {menfesses.length > 0 ? (
                                <div className="space-y-4">
                                    {menfesses.map((menfess, index) => (
                                        <motion.div
                                            key={menfess.id}
                                            className="glass-effect rounded-xl border border-purple-500/30 p-5 transition-all duration-300 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            whileHover={{ scale: 1.02, x: 5 }}
                                        >
                                            <p className="flex items-center gap-2 text-sm text-purple-300">
                                                <span>🎯</span>
                                                Ke: <span className="font-semibold text-purple-200">{menfess.recipient_username}</span>
                                            </p>
                                            <p className="mt-3 italic text-purple-100">"{menfess.message}"</p>
                                            <p className="mt-3 flex items-center gap-2 text-xs text-purple-400">
                                                <span>📅</span> {new Date(menfess.created_at).toLocaleString()} |
                                                Status: <span className={`font-semibold ${menfess.status === 'sent' ? 'text-green-400' : 'text-cyan-400'}`}>
                                                    {menfess.status === 'sent' ? '✓ Terkirim' : '📮 ' + menfess.status}
                                                </span>
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <motion.p
                                    className="flex items-center gap-2 italic text-purple-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <span>🛰️</span> Belum ada transmisi terkirim. Mulai kirim pesan pertamamu ke luar angkasa!
                                </motion.p>
                            )}
                        </div>
                    </motion.div>

                    {/* Received Messages */}
                    <motion.div
                        className="glass-effect-strong overflow-hidden rounded-2xl border border-purple-400/30 shadow-2xl shadow-purple-500/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="p-8">
                            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-purple-200">
                                <span className="text-3xl">📬</span>
                                <span className="glow-text">Sinyal dari Galaksi Lain</span>
                            </h3>
                            {receivedMenfesses && receivedMenfesses.length > 0 ? (
                                <div className="space-y-4">
                                    {receivedMenfesses.map((menfess, index) => (
                                        <motion.div
                                            key={menfess.id}
                                            className="glass-effect rounded-xl border border-purple-500/30 p-5 transition-all duration-300 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            whileHover={{ scale: 1.02, x: -5 }}
                                        >
                                            <p className="italic text-purple-100">"{menfess.message}"</p>
                                            <p className="mt-3 flex items-center gap-2 text-xs text-purple-400">
                                                <span>📅</span> {new Date(menfess.created_at).toLocaleString()} |
                                                <span className="text-purple-300">👽 Dari Anonim</span>
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <motion.p
                                    className="flex items-center gap-2 italic text-purple-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <span>📡</span> Belum ada sinyal masuk. Menunggu pesan dari galaksi lain...
                                </motion.p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

