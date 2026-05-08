'use client';

import { useState } from 'react';

export default function ExplainCode() {
  const [code, setCode] = useState('');
  const [explanation, setExplanation] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleExplain = async () => {
    if (!code.trim()) {
      setError('请输入代码');
      return;
    }

    setLoading(true);
    setError('');
    setExplanation('');

    try {
      const response = await fetch('/api/explain-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (!response.ok) {
        // 只显示字符串，否则转json，再给前端回显
        setError(typeof data.error === 'string' ? data.error : JSON.stringify(data.error, null, 2));
        return;
      }

      setExplanation(typeof data.explanation === 'string'
        ? data.explanation
        : JSON.stringify(data.explanation, null, 2));
    } catch (err: any) {
      setError('网络错误，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🤖 AI 代码解释器</h1>
      <p>粘贴你的代码，让 AI 帮你解释</p>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="在这里粘贴你的代码..."
        style={{
          width: '100%',
          height: '200px',
          padding: '10px',
          fontFamily: 'monospace',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />

      <button
        onClick={handleExplain}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '20px',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        {loading ? '⏳ 正在解释...' : '📝 解释代码'}
      </button>

      {error && (
        <div
          style={{
            color: 'red',
            marginBottom: '10px',
            padding: '10px',
            backgroundColor: '#ffe0e0',
            borderRadius: '4px',
            wordBreak: 'break-all',
          }}
        >
          ❌ {error}
        </div>
      )}

      {explanation && (
        <div
          style={{
            backgroundColor: '#f5f5f5',
            padding: '15px',
            borderRadius: '4px',
            lineHeight: '1.6',
            border: '1px solid #ddd',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
          }}
        >
          <h3>✨ AI 的解释：</h3>
          <p>
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
}