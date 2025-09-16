"use client";

import Breadcrumb from "@/components/element/Breadcrumb";
import { useSignUp } from "@/hooks/api/useSignUp";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";

type SignUpForm = {
    fullname: string;
    phone: string;
    email: string;
    password: string;
    remember: boolean;
};

export default function SignUp() {
    const { role } = useParams<{ role: string }>();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpForm>();

    const signUpMutation = useSignUp();

    const onSubmit = (data: SignUpForm) => {
        signUpMutation.mutate(
            { ...data, role: role || "freelancer" },
            {
                onSuccess: (res) => {
                    console.log("✅ User created:", res);
                    alert("Sign up successful!");
                },
                onError: (err) => {
                    console.error("❌ Sign up error:", err.message);
                    alert(err.message);
                },
            }
        );
    };

    return (
        <>
            <Breadcrumb />
            <section className="py-110 bg-offWhite">
                <div className="container">
                    {/* Switch Role */}
                    <div className="mb-5">
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <div className="d-flex align-items-center gap-3">
                                    <Link
                                        href="/signup/freelancer"
                                        className={clsx({
                                            "w-form-btn-outline": role !== "freelancer",
                                            "active w-form-btn": role === "freelancer",
                                        })}
                                    >
                                        Freelancer
                                    </Link>
                                    <Link
                                        href="/signup/employer"
                                        className={clsx({
                                            "w-form-btn-outline": role !== "employer",
                                            "active w-form-btn": role === "employer",
                                        })}
                                    >
                                        Employer
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3 p-3">
                        <div className="row g-4">
                            <div className="col-lg-6 p-3 p-lg-5">
                                <div className="mb-40">
                                    <h2 className="section-title mb-2">Sign up {role}</h2>
                                    <p className="section-desc">Welcome to Work Zone</p>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-container d-flex flex-column gap-4">
                                        {/* Fullname */}
                                        <div className="form-input">
                                            <label htmlFor="fullname" className="form-label">
                                                Full Name <span className="text-lime-300">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="fullname"
                                                placeholder="John Doe"
                                                className="form-control shadow-none"
                                                {...register("fullname", {
                                                    required: "Full name is required",
                                                    minLength: {
                                                        value: 2,
                                                        message: "Full name must be at least 2 characters",
                                                    },
                                                })}
                                            />
                                            {errors.fullname && (
                                                <p className="text-danger text-sm">
                                                    {errors.fullname.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Phone */}
                                        <div className="form-input">
                                            <label htmlFor="phone" className="form-label">
                                                Phone <span className="text-lime-300">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                placeholder="0123456789"
                                                className="form-control shadow-none"
                                                {...register("phone", {
                                                    required: "Phone is required",
                                                    pattern: {
                                                        value: /^[0-9]{9,15}$/,
                                                        message: "Phone must be 9–15 digits",
                                                    },
                                                })}
                                            />
                                            {errors.phone && (
                                                <p className="text-danger text-sm">
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div className="form-input">
                                            <label htmlFor="email" className="form-label">
                                                Email <span className="text-lime-300">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="example@gmail.com"
                                                className="form-control shadow-none"
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: "Invalid email format",
                                                    },
                                                })}
                                            />
                                            {errors.email && (
                                                <p className="text-danger text-sm">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Password */}
                                        <div className="form-input">
                                            <label htmlFor="password" className="form-label">
                                                Password <span className="text-lime-300">*</span>
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                placeholder="********"
                                                className="form-control shadow-none"
                                                {...register("password", {
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 12,
                                                        message: "Password must be at least 12 characters",
                                                    },
                                                })}
                                            />
                                            {errors.password && (
                                                <p className="text-danger text-sm">
                                                    {errors.password.message}
                                                </p>
                                            )}
                                        </div>



                                        {/* Submit */}
                                        <div className="d-grid">
                                            <button type="submit" className="w-btn-secondary-lg">
                                                Sign Up
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                {/* Social */}
                                <div className="py-5">
                                    <div className="form-divider d-flex justify-content-center align-items-center">
                                        <span className="form-divider-text">OR</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 justify-content-center align-items-center social-login">
                                    <button
                                        type="button"
                                        className="social-login-item"
                                        onClick={() => console.log("Sign in with Google")}
                                    >
                                        Google
                                    </button>
                                </div>

                                <div className="mt-4">
                                    <p className="text-center form-text">
                                        Already have an account?
                                        <Link href={"/signin/" + role}> Log In </Link>
                                    </p>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="col-lg-6">
                                <div className="login-img">
                                    <img
                                        src="/assets/img/others/1.png"
                                        className="img-fluid w-100"
                                        alt="login illustration"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
