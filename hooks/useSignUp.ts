import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";

type SignUpPayload = {
  fullname: string;
  phone: string;
  email: string;
  password: string;
  role: string;
};

type SignUpResponse = {
  message: string;
  user: {
    id: string;
    email: string;
    fullname: string;
    phone: string;
  };
};

export function useSignUp() {
  return useMutation<SignUpResponse, Error, SignUpPayload>({
    mutationFn: (payload) =>
      apiFetch<SignUpResponse>("/auth/signup", {
        method: "POST",
        body: payload,
      }),
  });
}
