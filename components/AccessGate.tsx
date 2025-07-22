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
  <div className="text-center px-6 py-10 bg-gray-950 rounded-xl shadow-xl max-w-2xl mx-auto">
    <img src="/logo.jpg" alt="VoltAI" className="mx-auto w-28 mb-6 rounded-lg shadow-md" />

    <h1 className="text-3xl font-bold text-white mb-4 tracking-wide">
      Ваш помощник в криптовалютном трейдинге</h1>

    <p className="text-lg text-gray-300 mb-4">
      ⚙️ Мощный аналитический комплекс в интерфейсе приложения.</p>
    <p className="text-base text-gray-400 mb-2">
      🤖 Опытный трейдер на базе ИИ получаю данные в реальном времени.</p>

    <ul className="text-left text-gray-300 text-base mb-6 space-y-2">
      <li>🔍 Провожу глубокий технический и фундаментальный анализ</li>
      <li>📈 Даю торговые рекомендации: вход, SL, TP</li>
      <li>💰 Подписка: 30 дней - 3 usd</li>
    </ul>

    <a
      href="https://t.me/voltaicrypt_bot"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-3 rounded-xl shadow-lg transition duration-300"
    >
      🔗 Открыть в Telegram
    </a>
  </div>
);

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
