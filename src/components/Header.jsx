import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-serif font-semibold tracking-tight text-foreground hover:opacity-80 transition"
        >
          My Blog
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            Posts
          </NavLink>

          <NavLink
            to="/auth/login"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            Login
          </NavLink>
        </nav>

      </div>
    </header>
  );
}
