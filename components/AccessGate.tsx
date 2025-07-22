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
    return (
      <div className="text-center px-6 py-10 bg-gray-900 text-white rounded-xl shadow-xl max-w-2xl mx-auto">
        <img
          src="/logo.jpg"
          alt="VoltAI"
          className="mx-auto w-24 mb-6 rounded-full shadow-md"
        />
        <h1 className="text-2xl font-extrabold mb-4 text-green-400">
          VoltAI Crypto Assistant
        </h1>

        <p className="text-base text-gray-300 mb-4 leading-relaxed">
          ⚙️ Мощный трейдерский интеллект, работающий 24/7.  
          Анализирует рынки, находит сигналы, показывает уровни, объёмы и точки входа.
        </p>

        <a
          href="https://t.me/voltaicrypt_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-br from-green-500 to-emerald-600 hover:scale-105 text-white font-semibold text-base px-6 py-3 rounded-xl shadow-lg transition duration-300"
        >
          🔗 Открыть в Telegram
        </a>
      </div>
    );
  }

  return (
    <div className="text-center px-6 py-10 bg-gray-900 text-white rounded-xl shadow-xl max-w-2xl mx-auto">
      <img
        src="/logo.jpg"
        alt="VoltAI"
        className="mx-auto w-24 mb-6 rounded-full shadow-md"
      />

      <h1 className="text-2xl font-extrabold mb-2 text-green-400">
        Привет, {user.first_name || user.username}!
      </h1>
      <p className="text-gray-300 mb-4">
        Добро пожаловать в платформу VoltAI.
      </p>

      <div className="text-sm text-left text-gray-300 space-y-1 mb-6">
        <p>✅ Подключение к Web3 — готово</p>
        <p>📊 Подписка: <span className="text-red-400">не активирована</span></p>
        <p>📈 Доступные функции: RSI, EMA, объёмы, сигналы</p>
      </div>

      <button
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
        onClick={() => alert("🔜 Скоро появится!")}
      >
        Перейти к аналитике
      </button>
    </div>
  );
}
