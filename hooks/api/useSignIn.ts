import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import { useRouter } from "next/navigation";

type SignInPayload = {
  email: string;
  password: string;
  role: string; // employer | freelancer
};

type SignInResponse = {
  token: string; // access token trả về từ backend
  user: {
    id: string;
    email: string;
    fullname: string;
    phone: string;
    role: string;
  };
};

export function useSignIn() {
  const router = useRouter();

  return useMutation<SignInResponse, Error, SignInPayload>({
    mutationFn: (payload) =>
      apiFetch<SignInResponse>("/auth/signin", {
        method: "POST",
        body: payload,
      }),
    onSuccess: (data) => {
      // ⚠️ Nếu BE không set HttpOnly cookie thì FE tạm lưu ở đây
      // Cookie có hạn 7 ngày
      document.cookie = `token=${data.token}; path=/; max-age=${
        7 * 24 * 60 * 60
      }; SameSite=Lax`;

      // ✅ Chuyển hướng theo role
      if (data.user.role === "employer") {
        router.push("/employer-manage");
      } else {
        router.push("/freelancer");
      }
    },
  });
}
