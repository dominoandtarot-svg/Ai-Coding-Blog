import Link from "next/link";
import * as s from "@/lib/styles";

interface NavbarProps {
  activePath: "/" | "/tools/explain";
}

export function Navbar({ activePath }: NavbarProps) {
  return (
    <header className={s.navbar}>
      <div className={s.navbarInner}>
        <Link href="/" className={s.navbarLogoLink}>
          <span className={s.navbarLogoIcon}>AI</span>
          AI 个人博客
        </Link>
        <nav className={s.navLinks}>
          <Link
            href="/"
            className={activePath === "/" ? s.navLinkActive : s.navLinkInactive}
          >
            首页
          </Link>
          <Link
            href="/tools/explain"
            className={
              activePath === "/tools/explain"
                ? s.navLinkActive
                : s.navLinkInactive
            }
          >
            工具
          </Link>
        </nav>
      </div>
    </header>
  );
}