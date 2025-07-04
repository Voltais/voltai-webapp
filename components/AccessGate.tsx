import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface TgUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

interface AccessGateProps {
  user: TgUser;
}

export default function AccessGate({ user }: AccessGateProps) {
  const [leoBalance, setLeoBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const minRequired = 400;

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`/api/balance/${user.id}`);
        setLeoBalance(response.data.balance);
      } catch (error) {
        console.error('Ошибка при получении баланса:', error);
        setLeoBalance(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [user.id]);

  return (
    <div className="p-6 max-w-xl mx-auto text-left bg-gray-800 rounded-2xl shadow-xl space-y-4">
      <h2 className="text-xl font-semibold">👋 Добро пожаловать!</h2>
      <p>Ваш надёжный помощник в мире криптовалютного трейдинга.</p>
      <ul className="list-disc list-inside space-y-1">
        <li>🔍 Глубокий технический и фундаментальный анализ</li>
        <li>📈 Точные сигналы: вход (лонг/шорт), SL, TP</li>
      </ul>

      <div className="pt-2">
        <p className="font-medium">💰 Подписка на 30 дней — <span className="text-green-400 font-bold">400 токенов LEO</span></p>
        <p className="text-sm text-gray-300">Купить токены и активировать подписку:</p>
      </div>

      <a
        href="https://pancakeswap.finance/swap?outputCurrency=0xf2740f3f2d9fe449df5613e69138fc1f389ee5c6"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl transition"
      >
        🔗 - Перейти на PancakeSwap
      </a>

      <div className="pt-4">
        {loading ? (
          <p>Проверка баланса LEO...</p>
        ) : leoBalance !== null ? (
          leoBalance >= minRequired ? (
            <p className="text-green-400 font-semibold">✅ Подписка активна — {leoBalance} LEO</p>
          ) : (
            <p className="text-red-400 font-semibold">🚫 Недостаточно токенов LEO ({leoBalance} / {minRequired})</p>
          )
        ) : (
          <p className="text-red-400">-------</p>
        )}
      </div>
    </div>
  );
}
