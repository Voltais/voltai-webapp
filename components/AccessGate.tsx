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
    // Пользователь зашёл через браузер, а не из Telegram WebApp
    return (
      <div className="text-center px-6 py-8 bg-gray-900 text-white rounded-xl shadow-lg max-w-2xl mx-auto">
        <img src="/logo.jpg" alt="VoltAI" className="mx-auto w-24 mb-6 rounded-full shadow-md"/>

        <h1 className="text-3xl font-extrabold mb-4 text-green-400">
          Ваш помощник в криптотрейдинге</h1>

        <p className="text-lg text-gray-200 mb-6 leading-relaxed">
          ⚙️ Мощный аналитический комбайн на базе моделей ИИ.</p>      
        <p className="text-lg text-gray-200 mb-6 leading-relaxed">
          🧠 Опытный трейдер работающий в реальном времени.</p>
   
        <ul className="text-left text-sm text-gray-300 mb-6 space-y-2">
          <li>🔍 Глубокий технический и фундаментальный анализ</li>
          <li>📈 Торговые рекомендации: Точка входа, Тейк, Стоп</li>
          <li>💰 Подписка на 30 дней - 3 usd</li>
        </ul>

        <a
          href="https://t.me/voltaicrypt_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-base px-6 py-3 rounded-lg shadow-lg transition duration-200"
        >
          <li>Открыть приложение</li>
        </a>
        
        <ul className="text-left text-sm text-gray-300 mb-6 space-y-2">
          <li>Новости. Поддержка в канале ...</li>
          <li>Актуальные торговые стратегии...</li>
          <li>Оформить подписку....</li>
        </ul>
      </div>
    );
  }

  // Пользователь внутри Telegram WebApp
  return (
    <div className="text-center px-6 py-8 bg-gray-900 text-white rounded-xl shadow-lg max-w-2xl mx-auto">
      <img
        src="/logo.jpg"
        alt="VoltAI"
        className="mx-auto w-24 mb-4 rounded-full"
      />
      <h1 className="text-2xl font-bold">
        Привет, {user.first_name || user.username}!
      </h1>
      <p className="text-gray-300 mt-2">Доступ к платформе VoltAI активен.</p>

      {/* Здесь появятся графики, сигналы, подписка и аналитика */}
      <p className="mt-4 text-green-400 font-semibold">
        📊 Ваш статус: Подписка не активирована
      </p>
    </div>
  );
}
