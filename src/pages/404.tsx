import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div>
      <h1>Custom NotFound</h1>
      <p>You will be redirected to the homepage in a few seconds...</p>
    </div>
  );
}
