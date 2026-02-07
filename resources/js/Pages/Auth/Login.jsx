import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <motion.div
                    className="mb-4 rounded-lg border border-green-400/30 bg-green-900/20 p-3 text-sm font-medium text-green-300"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    ✓ {status}
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <h2 className="glow-text mb-6 text-center text-2xl font-bold text-purple-200">
                    🚀 Login ke Mission Control
                </h2>

                <form onSubmit={submit} className="space-y-5">
                    <div>
                        <InputLabel htmlFor="email" value="Email Astronot" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-2 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            placeholder="astronot@space.com"
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-2 block w-full"
                            autoComplete="current-password"
                            placeholder="••••••••"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block">
                        <label className="flex items-center gap-2">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                            />
                            <span className="text-sm text-purple-200">
                                Ingat saya di galaksi ini
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="rounded-md text-sm text-purple-300 underline transition hover:text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900"
                            >
                                Lupa password? 🤔
                            </Link>
                        )}

                        <PrimaryButton disabled={processing}>
                            {processing ? 'Launching...' : 'Login'}
                        </PrimaryButton>
                    </div>

                    <div className="mt-4 text-center">
                        <Link
                            href={route('register')}
                            className="text-sm text-purple-300 transition hover:text-purple-100"
                        >
                            Belum punya akun? <span className="underline">Daftar sebagai Astronot</span> 🧑‍🚀
                        </Link>
                    </div>
                </form>
            </motion.div>
        </GuestLayout>
    );
}

