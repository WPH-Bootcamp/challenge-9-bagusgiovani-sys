// ==========================================
// features/auth/components/AuthHeader.tsx
// ==========================================
export function AuthHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full" />
        </div>
        <h1 className="text-2xl font-bold">Foody</h1>
      </div>
      <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
      <p className="text-gray-600 text-sm">Good to see you again! Let's eat</p>
    </div>
  );
}


