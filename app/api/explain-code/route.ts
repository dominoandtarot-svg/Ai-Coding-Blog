import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json({ error: '请提供代码' }, { status: 400 });
    }

    // ！！！只有这种结构是对的！！！
    const response = await axios.post(
      'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation',
      {
        model: 'qwen-turbo', //qwen-turbo, qwen-plus
        input: {
          messages: [
            {
              role: 'user',
              content: `请用中文简明扼要地解释以下代码的功能：\n\n${code}`,
            }
          ]
        },
        parameters: {
          temperature: 0.7,
          max_tokens: 500
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.DASHSCOPE_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    const explanation =
      response.data?.output?.text || '无法解释';

    return NextResponse.json({ explanation, status: 'success' });
  } catch (error: any) {
    console.error('API Error:', error?.response?.data || error?.message || error);
    return NextResponse.json(
      { error: error?.response?.data?.message || error?.message || '未知错误' },
      { status: 500 }
    );
  }
}