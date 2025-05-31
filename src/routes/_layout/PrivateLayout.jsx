import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../../components/Header";

export default function PrivateLayout() {
  return (
    <div className="app">
      <Header />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="text-center py-4">© 2025 My App</footer>
    </div>
  );
}
