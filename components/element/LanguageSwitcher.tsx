"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/locale/routing";


export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;

        // Nếu đang ở /dashboard -> chuyển thành /[locale]/dashboard
        router.push(`/${nextLocale}${pathname}`);
    };

    return (
        <div className="flex items-center gap-2">
            <select
                value={locale}
                onChange={handleChange}
                className="border rounded px-2 py-1 text-sm"
            >
                {routing.locales.map((loc) => (
                    <option key={loc} value={loc}>
                        {loc.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
}
