import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
      <p className="text-xl md:text-2xl text-[#777] mb-2">Page Not Found</p>
      <p className="text-[#555] mb-10 max-w-md">
        Looks like this page got lost in the monorepo.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-[#ea580c] text-white rounded-full font-medium hover:bg-orange-600 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
