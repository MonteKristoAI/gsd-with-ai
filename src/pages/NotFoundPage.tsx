import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-extrabold text-primary mb-4">404</p>
        <h1 className="text-2xl font-bold text-foreground mb-3">This one is missing</h1>
        <p className="text-muted-foreground mb-8">
          The URL is wrong, the page was moved, or you are early to a page that has not shipped yet. Head back to the home page and we will route you from there.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
