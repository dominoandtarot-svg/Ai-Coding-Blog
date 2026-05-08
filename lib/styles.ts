import { cn } from "@/lib/utils";

/* ============================================================
   布局 / 容器
   ============================================================ */

export const pageLayout = "flex min-h-screen flex-col";
export const mainFlex = "flex-1";

/* ============================================================
   导航栏
   ============================================================ */

export const navbar =
  "sticky top-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50";
export const navbarInner =
  "mx-auto flex h-14 max-w-6xl items-center justify-between px-6";
export const navbarLogoLink =
  "flex items-center gap-2.5 font-semibold text-lg tracking-tight";
export const navbarLogoIcon =
  "flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold shadow-sm shadow-primary/25";
export const navLinks = "flex items-center gap-8 text-sm text-muted-foreground";

const navLinkBase =
  "relative transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-primary after:transition-transform";

export const navLinkInactive = cn(
  navLinkBase,
  "text-muted-foreground hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
);
export const navLinkActive = cn(
  navLinkBase,
  "text-foreground after:scale-x-100"
);

/* ============================================================
   页脚
   ============================================================ */

export const footer = "border-t border-border/30 bg-muted/10";
export const footerInner = "mx-auto max-w-6xl px-6 py-10";
export const footerBrand =
  "flex items-center gap-2.5 text-sm text-muted-foreground";
export const footerLogoIcon =
  "flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary text-xs font-bold";
export const footerCopyright =
  "mt-8 pt-6 border-t border-border/20 text-center text-xs text-muted-foreground";
export const socialIconLink =
  "hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted";

/* ============================================================
   渐变与装饰
   ============================================================ */

export const gradientDivider =
  "h-px bg-gradient-to-r from-transparent via-border/40 to-transparent";
export const absoluteBottomDivider = cn(
  "absolute bottom-0 left-0 right-0",
  gradientDivider
);
export const absoluteTopDivider = cn(
  "absolute top-0 left-0 right-0",
  gradientDivider
);

/** 背景层容器 — Hero 和工具页头部共用 */
export const bgLayer = "absolute inset-0 -z-10";

export const dotGridBg = "absolute inset-0 opacity-[0.03]";
export const dotGridStyle = {
  backgroundImage:
    "radial-gradient(circle, currentColor 1px, transparent 1px)",
  backgroundSize: "32px 32px",
} as const;

/** 光晕装饰：绝对定位居中圆，bg-primary/5 + blur-3xl */
export function glow(topOffset: string, size: string) {
  return `absolute ${topOffset} left-1/2 -translate-x-1/2 ${size} rounded-full bg-primary/5 blur-3xl`;
}

/* ============================================================
   卡片相关
   ============================================================ */

export const glassCard = "border-border/40 bg-card/80 backdrop-blur-sm";
export const glassCardShadow = cn(glassCard, "shadow-sm");

export const toolCard = cn(
  glassCard,
  "relative h-full cursor-pointer transition-all duration-300",
  "hover:-translate-y-1.5 hover:shadow-xl hover:shadow-foreground/5",
  "hover:border-primary/20 group-hover:ring-1 group-hover:ring-primary/10"
);
export const toolCardIconContainer =
  "flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/25";
export const toolCardFooter =
  "flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary";
export const placeholderCard =
  "flex h-full min-h-[200px] flex-col items-center justify-center border-dashed border-border/40 bg-card/40 p-8 text-center transition-all duration-300 hover:border-primary/20 hover:bg-card/60";

/* ============================================================
   标签 / 徽章
   ============================================================ */

export const sectionLabel =
  "mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary";
export const onlineBadge =
  "rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-600 dark:text-green-400 ring-1 ring-green-500/20";

/* ============================================================
   按钮
   ============================================================ */

export const primaryCtaButton =
  "gap-2 rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5";
export const outlineCtaButton =
  "rounded-full px-6 transition-all hover:-translate-y-0.5 hover:shadow-md";
export const roundedPrimaryButton =
  "gap-2 rounded-full px-5 shadow-sm shadow-primary/20 transition-all hover:shadow-md hover:shadow-primary/25";

/* ============================================================
   小图标容器
   ============================================================ */

export const iconContainerSm =
  "flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary";
export const iconContainerMd =
  "flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary";

/* ============================================================
   Hero 区域
   ============================================================ */

export const heroSection = "relative overflow-hidden";
export const heroMainGradient =
  "absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background";
export const heroAmberGlow =
  "absolute top-20 right-1/4 size-72 rounded-full bg-amber-500/5 blur-3xl";
export const heroBlueGlow =
  "absolute top-40 left-1/4 size-96 rounded-full bg-blue-500/5 blur-3xl";
export const heroContent =
  "mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-36 sm:pb-28";
export const heroCenter = "flex flex-col items-center text-center";
export const heroBadge =
  "inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-1.5 text-xs text-muted-foreground mb-10 shadow-sm";
export const gradientTextPrimaryAmber =
  "bg-gradient-to-r from-primary via-primary/80 to-amber-500 bg-clip-text text-transparent";
export const heroSubtitle =
  "mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed";
export const heroCtaGroup =
  "mt-10 flex flex-wrap items-center justify-center gap-4";

/* ============================================================
   工具区
   ============================================================ */

export const toolsSection = "relative bg-muted/20";
export const toolsContent = "mx-auto max-w-6xl px-6 py-20 sm:py-28";
export const sectionHeader = "mb-14 flex flex-col items-center text-center";
export const sectionTitle =
  "text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl";
export const sectionDescription =
  "mt-4 max-w-md text-muted-foreground leading-relaxed";

/* ============================================================
   入场动画
   ============================================================ */

export const fadeInUp = "animate-fade-in-up";

export function fadeInUpDelayed(ms: number) {
  return cn(
    fadeInUp,
    `[animation-delay:${ms}ms] [animation-fill-mode:backwards]`
  );
}

/* ============================================================
   代码解释器页面
   ============================================================ */

export const pageHeaderSection =
  "relative overflow-hidden border-b border-border/30";
export const pageHeaderGradient =
  "absolute inset-0 bg-gradient-to-b from-muted/40 to-background";
export const pageHeaderContent =
  "mx-auto max-w-3xl px-6 pb-10 pt-16 sm:pt-20";
export const backLink =
  "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6";
export const codeTextarea =
  "w-full min-h-[220px] rounded-lg border border-border/60 bg-muted/30 p-4 font-mono text-sm leading-relaxed placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-y";
export const resultContentBox =
  "rounded-lg border border-border/40 bg-muted/20 p-5";
export const errorCard =
  "animate-fade-in-up border-destructive/30 bg-destructive/5";
export const contentSpacing = "space-y-8";