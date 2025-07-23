type Props = {
  user: {
    id: number
    username?: string
    first_name?: string
    last_name?: string
  } | null
}

export default function TelegramWebApp({ user }: Props = { user: { id: 1, first_name: "Пользователь" } }) {
  const [activeTab, setActiveTab] = useState("home")
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const handleNavigation = (tab: string, path?: string) => {
    setActiveTab(tab)
    if (path) {
      router.push(path)
    }
    console.log(`Navigating to ${tab}`)
  }

  const handleInviteFriends = () => {
    console.log("Invite friends clicked")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Если пользователь не из Telegram WebApp
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-900 dark:to-blue-950 flex flex-col items-center justify-center text-white p-6">
        <div className="absolute top-4 right-4">
          <button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-white hover:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <img
          src="/logo.jpg"
          alt="VoltAI"
          className="mx-auto w-32 mb-6 rounded-full shadow-2xl border-4 border-white/30"
        />
        <h1 className="text-3xl font-bold mb-2 text-center drop-shadow-lg" style={{ color: "#00EEFF" }}>
          VoltAI Assistant
        </h1>
        <p className="text-xl mb-8 text-center text-slate-200 dark:text-slate-300">
          Ваш помощник в криптотрейдинге
        </p>

        <Card className="bg-white/15 dark:bg-white/10 backdrop-blur-sm border-white/30 dark:border-white/20 text-white p-6 mb-8 w-full max-w-md">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔍</span>
              <span className="text-sm leading-relaxed">
                Провожу глубокий технический и фундаментальный анализ</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <span className="text-sm leading-relaxed">
                Торговые рекомендации: направление, точка входа, стоп-лосс, тейк-профит, риск/прибыль</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <span className="text-sm leading-relaxed font-semibold">
                <span className="text-emerald-300">Подписка на 30 дней</span>
                <span className="text-gray-300 mx-1">-</span>
                <span className="text-yellow-400">3</span>
                <span className="text-green-700 ml-1">USD</span>
              </span>
            </li>
          </ul>
        </Card>

        <a
          href="https://t.me/voltaicrypt_bot"
          className="inline-block bg-emerald-400 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg text-white relative overflow-hidden"
          style={{
            boxShadow: `
              0 8px 16px rgba(52, 211, 153, 0.3),
              0 4px 8px rgba(52, 211, 153, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1)
            `,
            background: "linear-gradient(145deg, #34d399, #10b981)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative z-10">🔗 Открыть</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </a>
      </div>
    )
  }

  // Telegram WebApp интерфейс
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 dark:from-gray-900 dark:to-gray-950 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 text-white dark:text-gray-100">
        <img className="w-12 h-12 border-2 border-white/30 dark:border-gray-600">
          <img src="/placeholder.svg?height=48&width=48" alt="Profile" />
          <img className="bg-gray-700 dark:bg-gray-800 text-white dark:text-gray-200">
            {user.first_name?.[0] || user.username?.[0] || "U"}
          </img>
        </img>
        <div className="flex items-center gap-2">
          <button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-white hover:bg-white/10 dark:text-gray-200 dark:hover:bg-white/20"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 dark:text-gray-200 dark:hover:bg-white/20"
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
          <button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 dark:text-gray-200 dark:hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pb-4 flex flex-col">
        {/* Logo and Title */}
        <div className="text-center text-white dark:text-gray-100 mb-6">
          <img
            src="/logo.jpg"
            alt="VoltAI"
            className="mx-auto w-20 h-20 mb-4 rounded-full shadow-xl border-3 border-white/30 dark:border-gray-600"
          />
          <h1 className="text-xl font-bold mb-2 drop-shadow-lg" style={{ color: "#00EEFF" }}>
            Привет, {user.first_name || user.username}!
          </h1>
          <p className="text-slate-200 dark:text-slate-300 text-base font-medium">
            Ваш помощник в криптотрейдинге
          </p>
        </div>

        {/* Referal */}
        <a
          className="w-full bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-700 border-0 text-white cursor-pointer hover:from-blue-300 hover:to-blue-400 dark:hover:from-blue-500 dark:hover:to-blue-600 transition-all duration-200 mb-6 shadow-lg"
          onClick={handleInviteFriends}
        >
          <div className="p-6 flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">Пригласи друзей</h2>
              <p className="text-white/90 dark:text-gray-200 text-sm">Получай бонусы за каждого друга</p>
            </div>
            <div className="flex flex-col gap-2 ml-4">
              <div className="w-10 h-10 bg-white/20 dark:bg-white/30 rounded-full flex items-center justify-center">
                <Link className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 dark:bg-white/30 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 dark:bg-white/30 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>
        </a>

        {/* Content Description */}
        <a className="bg-white/15 dark:bg-gray-800/50 backdrop-blur-sm border-white/30 dark:border-gray-700 text-white dark:text-gray-100 mb-4 shadow-lg">
          <div className="p-5">
            <h3 className="font-semibold mb-4 text-lg text-slate-100 dark:text-slate-200">Возможности платформы:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl">🔍</span>
                <span className="text-sm leading-relaxed">Глубокий технический и фундаментальный анализ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📈</span>
                <span className="text-sm leading-relaxed">Персональные торговые рекомендации</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">⚡</span>
                <span className="text-sm leading-relaxed">Быстрые уведомления о сигналах</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📊</span>
                <span className="text-sm leading-relaxed">Детальная аналитика рынка</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-emerald-500/20 dark:bg-emerald-600/30 rounded-lg border border-emerald-400/30 dark:border-emerald-500/40">
              <p className="text-emerald-200 dark:text-emerald-300 text-sm font-medium">
                📊 Ваш статус: Подписка не активирована
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-around py-2">
          <button
            variant="ghost"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "home"
                ? "text-blue-500 dark:text-blue-400"
                : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
            onClick={() => handleNavigation("home")}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Главная</span>
          </button>

          <button
            variant="ghost"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "functional"
                ? "text-blue-500 dark:text-blue-400"
                : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
            onClick={() => handleNavigation("functional", "/functional")}
          >
            <Settings className="w-6 h-6" />
            <span className="text-xs font-medium">Функционал</span>
          </button>

          <button
            variant="default"
            className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-lg"
            onClick={() => handleNavigation("qr")}
          >
            <QrCode className="w-7 h-7" />
          </button>

          <button
            variant="ghost"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "subscription"
                ? "text-blue-500 dark:text-blue-400"
                : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
            onClick={() => handleNavigation("subscription", "/subscription")}
          >
            <CreditCard className="w-6 h-6" />
            <span className="text-xs font-medium">Подписка</span>
          </button>

          <button
            variant="ghost"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "profile"
                ? "text-blue-500 dark:text-blue-400"
                : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
            onClick={() => handleNavigation("profile", "/profile")}
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Профиль</span>
          </button>
        </div>

        {/* Bot Username */}
        <div className="text-center py-2 text-gray-500 dark:text-gray-400 text-sm">@voltaicrypt_bot</div>
      </div>
    </div>
  )
}
