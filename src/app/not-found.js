// app/not-found.js (App Router)
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-white text-center p-6">
      <h1 className="text-4xl font-bold text-orange mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600">
        Redirecting you to the homepage...
      </p>
    </div>
  );
}
