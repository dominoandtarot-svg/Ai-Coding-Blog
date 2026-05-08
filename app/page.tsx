import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Code2, ArrowRight, Globe, ExternalLink, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import * as s from "@/lib/styles";

export default function Home() {
  const tools = [
    {
      icon: <Code2 className="size-6" />,
      title: "AI 代码解释器",
      description:
        "粘贴任意代码片段，让 AI 用通俗易懂的中文解释其功能和逻辑。支持多种编程语言。",
      href: "/tools/explain",
      badge: "已上线",
    },
  ];

  return (
    <div className={s.pageLayout}>
      <Navbar activePath="/" />

      <main className={s.mainFlex}>
        {/* Hero */}
        <section className={s.heroSection}>
          <div className={s.bgLayer}>
            <div className={s.heroMainGradient} />
            <div className={s.glow("-top-40", "size-[600px]")} />
            <div className={s.heroAmberGlow} />
            <div className={s.heroBlueGlow} />
            <div className={s.dotGridBg} style={s.dotGridStyle} />
          </div>

          <div className={s.heroContent}>
            <div className={s.heroCenter}>
              <div className={s.heroBadge}>
                <Sparkles className="size-3 text-primary" />
                <span>AI 驱动 · 持续构建中</span>
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400/75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                </span>
              </div>

              <h1
                className={`max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl ${s.fadeInUpDelayed(100)}`}
              >
                <span className={s.gradientTextPrimaryAmber}>
                  用 AI 重新定义
                </span>
                <br />
                <span className={s.gradientTextPrimaryAmber}>
                  学习与创造
                </span>
              </h1>

              <p className={`${s.heroSubtitle} ${s.fadeInUpDelayed(200)}`}>
                一个融合 AI 能力的个人博客与工具箱。
                <br className="hidden sm:block" />
                从代码解释到智能问答，用前沿技术提升你的开发效率与学习体验。
              </p>

              <div className={`${s.heroCtaGroup} ${s.fadeInUpDelayed(300)}`}>
                <Link href="/tools/explain">
                  <Button size="lg" className={s.primaryCtaButton}>
                    开始使用
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                <Link href="#tools">
                  <Button variant="outline" size="lg" className={s.outlineCtaButton}>
                    浏览工具
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className={s.absoluteBottomDivider} />
        </section>

        {/* 工具卡片区 */}
        <section id="tools" className={s.toolsSection}>
          <div className={s.absoluteTopDivider} />

          <div className={s.toolsContent}>
            <div className={s.sectionHeader}>
              <span className={s.sectionLabel}>工具箱</span>
              <h2 className={s.sectionTitle}>实用 AI 工具</h2>
              <p className={s.sectionDescription}>
                精心打造的 AI 工具集，让日常开发更高效。
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool, i) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group block animate-fade-in-up"
                  style={{ animationDelay: `${i * 150}ms`, animationFillMode: "backwards" }}
                >
                  <Card className={s.toolCard}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={s.toolCardIconContainer}>
                          <span className="transition-transform duration-300 group-hover:scale-110">
                            {tool.icon}
                          </span>
                        </div>
                        {tool.badge && (
                          <span className={s.onlineBadge}>{tool.badge}</span>
                        )}
                      </div>
                      <CardTitle className="mt-4 text-lg">{tool.title}</CardTitle>
                      <CardDescription className="leading-relaxed">{tool.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className={s.toolCardFooter}>
                      立即体验
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </CardFooter>
                  </Card>
                </Link>
              ))}

              <Card className={s.placeholderCard}>
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-dashed border-border/50 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary">
                  <span className="text-2xl font-light">+</span>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">更多工具即将推出</p>
              </Card>
            </div>
          </div>
        </section>

        <Footer
          rightContent={
            <div className="flex items-center gap-5 text-muted-foreground">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialIconLink}
              >
                <ExternalLink className="size-4" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialIconLink}
              >
                <Globe className="size-4" />
              </Link>
            </div>
          }
        />
      </main>
    </div>
  );
}