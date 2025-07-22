import { useEffect, useState } from "react";
import AccessGate from "../components/AccessGate";

type TgUser = {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
};

export default function Home() {
  const [tgUser, setTgUser] = useState<TgUser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp?.initDataUnsafe?.user) {
      setTgUser(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="text-center space-y-4 max-w-xl">
        <h1 className="text-3xl font-bold">VoltAI Assistant</h1>

        {tgUser ? (
          <AccessGate user={tgUser} />
        ) : (
          <>
            <p>Ваш надёжный помощник в мире криптовалютного трейдинга.</p>
            <p>🔍 Глубокий технический и фундаментальный анализ</p>
            <p>📈 Точные сигналы: вход (лонг/шорт), SL, TP</p>
            <p>💰 Подписка на 30 дней — 400 токенов LEO</p>

            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0xf2740f3f2d9fe449df5613e69138fc1f389ee5c6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg mt-4"
            >
              🔗 Перейти на PancakeSwap
            </a>
          </>
        )}
      </div>
    </main>
  );
}
