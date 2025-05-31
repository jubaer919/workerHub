import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function PublicLayout() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
