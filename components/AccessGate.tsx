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
        <h1 className="text-2xl font-bold">📈  Ваш помощник в криптовалютном трейдинге</h1>
        <p className="text-lg">Полноценный мощный аналитический комбайн в интерфейсе приложения.</p>
        <p className="text-lg">Опытный трейдер работающий в комплексе AI моделей.</p>
        <p className="text-lg">Не просто аналитик, а компаратор, получающий данные из надежных источников в реальном времени.</p>
        <ul className="text-left text-sm mt-4 space-y-2">
          <li>🔍 Провожу глубокий технический и фундаментальный анализ.</li>
          <li>📈 Торговые рекомендации: Точка входа, Стоп-лосс, Тейк-профит, Риск/прибыль.</li>
          <li>💰 Подписка на 30 дней - 3 usd</li>
        </ul>
        <a
          href="https://t.me/voltaicrypt_bot"
          className="inline-block bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg mt-6"
          target="_blank"
          rel="noopener noreferrer"
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
