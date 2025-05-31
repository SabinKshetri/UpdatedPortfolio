import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        <div className="pt-6">
          <div className="text-center space-y-6">
            {/* 404 Number */}
            <div className="space-y-2">
              <h1 className="text-6xl font-bold text-primary">404</h1>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            {/* Error Message */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Page Not Found
              </h2>
              <p className="text-muted-foreground">
                Sorry, we couldn't find the page you're looking for. It might
                have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
