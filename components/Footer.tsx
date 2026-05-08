import { type ReactNode } from "react";
import * as s from "@/lib/styles";

interface FooterProps {
  rightContent?: ReactNode;
}

export function Footer({ rightContent }: FooterProps) {
  return (
    <footer className={s.footer}>
      <div className={s.footerInner}>
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <div className={s.footerBrand}>
            <span className={s.footerLogoIcon}>AI</span>
            AI 个人博客
          </div>
          {rightContent}
        </div>
        <div className={s.footerCopyright}>
          &copy; {new Date().getFullYear()} AI 个人博客. Built with Next.js
          &amp; shadcn/ui.
        </div>
      </div>
    </footer>
  );
}