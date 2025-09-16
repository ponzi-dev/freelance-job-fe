"use client";

import Breadcrumb from "@/components/element/Breadcrumb";
import { useSignIn } from "@/hooks/api/useSignIn";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";

type SignInForm = {
    email: string;
    password: string;
    remember: boolean;
};

export default function SignIn() {
    const { role } = useParams<{ role: string }>();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInForm>();

    const signInMutation = useSignIn();

    const onSubmit = (data: SignInForm) => {
        // gọi API login
        signInMutation.mutate({
            email: data.email,
            password: data.password,
            role: role ?? "freelancer", // fallback
        });
    };

    return (
        <>
            <Breadcrumb />
            <section className="py-110 bg-offWhite">
                <div className="container">
                    <div className="mb-5">
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <div className="d-flex align-items-center gap-3">
                                    <Link href="/signin/freelancer" className={clsx({
                                        "w-form-btn-outline": role !== "freelancer",
                                        "active w-form-btn": role === "freelancer",
                                    })}>
                                        Freelancer
                                    </Link>
                                    <Link href="/signin/employer" className={clsx({
                                        "w-form-btn-outline": role !== "employer",
                                        "active w-form-btn": role === "employer",
                                    })}>
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
                                    <h2 className="section-title mb-2">Log in as {role}</h2>
                                    <p className="section-desc">Welcome to Work Zone</p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-container d-flex flex-column gap-4">
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
                                                {...register("email", { required: "Email is required" })}
                                            />
                                            {errors.email && (
                                                <p className="text-danger text-sm">{errors.email.message}</p>
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
                                                {...register("password", { required: "Password is required" })}
                                            />
                                            {errors.password && (
                                                <p className="text-danger text-sm">{errors.password.message}</p>
                                            )}
                                        </div>

                                        {/* Remember + Forget */}
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center gap-2 form-input">
                                                <input
                                                    type="checkbox"
                                                    id="remember"
                                                    className="form-check"
                                                    {...register("remember")}
                                                />
                                                <label htmlFor="remember" className="form-check-label">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <div>
                                                <a href="#" className="form-forget-pass">
                                                    Forget Password
                                                </a>
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <div className="d-grid">
                                            <button type="submit" className="w-btn-secondary-lg">
                                                Log In
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
                                    <button className="social-login-item">Google</button>

                                </div>

                                <div className="mt-4">
                                    <p className="text-center form-text">
                                        Don’t have an account?
                                        <Link href={"/signup/" + role}> Create Account </Link>
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
