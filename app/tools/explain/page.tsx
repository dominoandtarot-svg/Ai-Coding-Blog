"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Code2,
  ArrowLeft,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Copy,
  Trash2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import * as s from "@/lib/styles";

export default function ExplainCode() {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const handleExplain = async () => {
    if (!code.trim()) {
      setError("请先输入需要解释的代码");
      return;
    }

    setLoading(true);
    setError("");
    setExplanation("");

    try {
      const response = await fetch("/api/explain-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          typeof data.error === "string"
            ? data.error
            : JSON.stringify(data.error, null, 2)
        );
        return;
      }

      setExplanation(
        typeof data.explanation === "string"
          ? data.explanation
          : JSON.stringify(data.explanation, null, 2)
      );
    } catch {
      setError("网络错误，请检查连接后重试");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!explanation) return;
    await navigator.clipboard.writeText(explanation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setCode("");
    setExplanation("");
    setError("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleExplain();
    }
  };

  return (
    <div className={s.pageLayout}>
      <Navbar activePath="/tools/explain" />

      <main className={s.mainFlex}>
        {/* 页面头部 */}
        <section className={s.pageHeaderSection}>
          <div className={s.bgLayer}>
            <div className={s.pageHeaderGradient} />
            <div className={s.glow("-top-32", "size-[400px]")} />
            <div className={s.dotGridBg} style={s.dotGridStyle} />
          </div>

          <div className={s.pageHeaderContent}>
            <Link href="/" className={s.backLink}>
              <ArrowLeft className="size-3.5" />
              返回首页
            </Link>

            <div className="flex items-center gap-3 mb-3">
              <div className={s.iconContainerMd}>
                <Code2 className="size-5" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                AI 代码解释器
              </h1>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              粘贴任意代码片段，AI 会用通俗易懂的中文解释其功能与逻辑。支持多种编程语言。
            </p>
          </div>
        </section>

        {/* 主体内容区 */}
        <section className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
          <div className={s.contentSpacing}>
            {/* 输入卡片 */}
            <Card className={s.fadeInUp + " " + s.glassCardShadow}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={s.iconContainerSm}>
                      <Code2 className="size-3.5" />
                    </div>
                    <CardTitle className="text-base">代码输入</CardTitle>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {code.length} 字符
                  </span>
                </div>
                <CardDescription>
                  将需要解释的代码粘贴到下方编辑器中
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <textarea
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      if (error) setError("");
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder={`// 在此粘贴代码...\n// 示例：\nfunction fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\n// 按 Ctrl+Enter 快速提交`}
                    className={s.codeTextarea}
                    spellCheck={false}
                  />
                  {code.length > 0 && (
                    <button
                      onClick={handleClear}
                      className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      title="清空"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  Ctrl + Enter 快速提交
                </p>
                <Button
                  onClick={handleExplain}
                  disabled={loading || !code.trim()}
                  className={s.roundedPrimaryButton}
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      正在解释...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      解释代码
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>

            {/* 错误提示 */}
            {error && (
              <Card className={s.errorCard}>
                <CardContent className="flex items-start gap-3 py-4">
                  <AlertCircle className="size-5 shrink-0 text-destructive mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-destructive">
                      解释失败
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground break-all leading-relaxed">
                      {error}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 结果展示 */}
            {explanation && (
              <Card
                className={
                  s.fadeInUp +
                  " " +
                  s.glassCardShadow +
                  " " +
                  s.fadeInUpDelayed(100)
                }
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex size-7 items-center justify-center rounded-md bg-green-500/10 text-green-600 dark:text-green-400">
                        <CheckCircle2 className="size-3.5" />
                      </div>
                      <CardTitle className="text-base">AI 解释结果</CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy}
                      className="h-7 gap-1.5 text-xs rounded-md"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="size-3" />
                          已复制
                        </>
                      ) : (
                        <>
                          <Copy className="size-3" />
                          复制
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={s.resultContentBox}>
                    <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none">
                      <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {explanation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        <Footer
          rightContent={
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                首页
              </Link>
              <span>/</span>
              <span className="text-foreground/80">AI 代码解释器</span>
            </div>
          }
        />
      </main>
    </div>
  );
}