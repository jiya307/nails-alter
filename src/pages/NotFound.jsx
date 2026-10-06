import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found · Arsh Atelier";
  }, []);

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-md">
          <p className="text-xs tracking-widest uppercase text-gold mb-4">404</p>
          <h1 className="serif text-5xl md:text-6xl mb-6">Page not found</h1>
          <p className="text-brown/70 mb-10 leading-relaxed">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/">Back to Home</Button>
            <Button to="/portfolio" variant="secondary">View Portfolio</Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
