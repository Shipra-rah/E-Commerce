import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        setError("");
        alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
    };

    return (
        <div className="min-h-screen  flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Login
                </h2>

                {error && (
                    <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="accent-black" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600 text-sm">
                    Don't have an account?{" "}
                    <Link to="register" className="text-black font-medium hover:underline">
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>
    );
}
