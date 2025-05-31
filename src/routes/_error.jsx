import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state?.error;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-700 mb-4">
          {error?.message || "An unexpected error occurred."}
        </p>
        <pre className="text-xs text-gray-500 overflow-x-auto max-h-60">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    </div>
  );
}
