type Props = {
  user: {
    id: number;
    username?: string;
    first_name?: string;
    last_name?: string;
  } | null;
};

export default function AccessGate({ user }: Props) {
  if (!user) {
    // Браузер: пользователь не из Telegram WebApp
    return (
      <>
        <img src="/logo.jpg" alt="VoltAI" className="mx-auto w-32 mb-4" />
        <h1 className="text-2xl font-bold">Ваш помощник в криптовалютном трейдинге</h1>
        <p className="text-lg">Мощный аналитический комплекс в интерфейсе приложения.
                               Опытный трейдер работающий на базе моделей ИИ. 
                               Получаю данные из надежных источников в реальном времени.</p>
        <p className="text-lg">000777000</p>
        <p className="text-lg">000888000 </p>
        <ul className="text-left text-sm mt-4 space-y-2">
          <li>🔍 Провожу глубокий технический и фундаментальный анализ.</li>
          <li>📈 Даю торговые рекомендации: вход, SL, TP.</li>
          <li>💰 Подписка на 30 дней - 3 usd</li>
        </ul>
       <a
  href="https://t.me/voltaicrypt_bot"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-lg transition duration-200"
>
  🔗 Открыть приложение
</a>
      </>
    );
  }

  // Telegram WebApp: доступен функционал
  return (
    <>
      <img src="/logo.jpg" alt="VoltAI" className="mx-auto w-24 mb-4 rounded-full" />
      <h1 className="text-2xl font-bold">Привет, {user.first_name || user.username}!</h1>
      <p>Доступ к платформе VoltAI активен.</p>
      {/* Здесь добавим аналитику, графики, подписку и т.п. */}
      <p className="mt-4 text-green-400">📊 Ваш статус: Подписка не активирована</p>
    </>
  );
}
