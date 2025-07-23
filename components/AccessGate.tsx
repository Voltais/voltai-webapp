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

  const handleNavigation = (tab: string, path?: string) => {
    setActiveTab(tab)
    if (path) {
      router.push(path)
    }
    console.log(`Navigating to ${tab}`)
  }

  const handleInviteFriends = () => {
    console.log("Invite friends clicked")
    // Здесь будет логика приглашения друзей
  }

  // Если пользователь не из Telegram WebApp
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 flex flex-col items-center justify-center text-white p-6">
        <img src="/logo.jpg" alt="VoltAI" className="mx-auto w-32 mb-6 rounded-full shadow-lg" />
        <h1 className="text-3xl font-bold mb-2">VoltAI Assistant</h1>
        <p className="text-xl mb-6 text-center">Ваш помощник в криптовалютном трейдинге</p>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6 mb-6">
          <ul className="text-left text-sm space-y-3">
            <li className="flex items-start gap-2">
              <span>🔍</span>
              <span>Провожу глубокий технический и фундаментальный анализ</span>
            </li>
            <li className="flex items-start gap-2">
              <span>📈</span>
              <span>
                Торговые рекомендации: направление, точка входа, стоп-лосс, тейк-профит, риск/прибыль
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span>💰</span>
              <span>Подписка на 30 дней - 3 USD</span>
            </li>
          </ul>
        </Card>

        <a
          href="https://t.me/voltaicrypt_bot"
          className="inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Открыть
        </a>
      </div>
    )
  }

  // Telegram WebApp интерфейс
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 text-white">
        <Avatar className="w-12 h-12 border-2 border-white/20">
          <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Profile" />
          <AvatarFallback className="bg-gray-700 text-white">
            {user.first_name?.[0] || user.username?.[0] || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pb-4 flex flex-col">
        {/* Logo and Title */}
        <div className="text-center text-white mb-6">
          <img
            src="/logo.jpg"
            alt="VoltAI"
            className="mx-auto w-20 h-20 mb-4 rounded-full shadow-lg border-2 border-white/20"
          />
          <h1 className="text-xl font-bold mb-2">Привет, {user.first_name || user.username}!</h1>
          <p className="text-white/90">Ваш личный помощник в криптотрейдинге</p>
        </div>

        {/* Invite Friends Card */}
        <Card
          className="w-full bg-gradient-to-r from-blue-400 to-blue-500 border-0 text-white cursor-pointer hover:from-blue-300 hover:to-blue-400 transition-all duration-200 mb-6"
          onClick={handleInviteFriends}
        >
          <div className="p-6 flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">Пригласи своих друзей</h2>
              <p className="text-white/80 text-sm">Получай бонусы за каждого друга</p>
            </div>
            <div className="flex flex-col gap-2 ml-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Link className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>
        </Card>

        {/* Content Description */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white mb-4">
          <div className="p-4">
            <h3 className="font-semibold mb-3">Возможности платформы:</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span>🔍</span>
                <span>Глубокий технический и фундаментальный анализ</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📈</span>
                <span>Персональные торговые рекомендации</span>
              </li>
              <li className="flex items-start gap-2">
                <span>⚡</span>
                <span>Быстрые уведомления о сигналах</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📊</span>
                <span>Детальная аналитика рынка</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-green-500/20 rounded-lg">
              <p className="text-green-300 text-sm">📊 Ваш статус: Подписка не активирована</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200">
        <div className="flex items-center justify-around py-2">
          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "home" ? "text-blue-500" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleNavigation("home")}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Главная</span>
          </Button>

          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "functional" ? "text-blue-500" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleNavigation("functional", "/functional")}
          >
            <Settings className="w-6 h-6" />
            <span className="text-xs font-medium">Функции</span>
          </Button>

          <Button
            variant="default"
            className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
            onClick={() => handleNavigation("qr")}
          >
            <QrCode className="w-7 h-7" />
          </Button>

          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "subscription" ? "text-blue-500" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleNavigation("subscription", "/subscription")}
          >
            <CreditCard className="w-6 h-6" />
            <span className="text-xs font-medium">Подписка</span>
          </Button>

          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              activeTab === "profile" ? "text-blue-500" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleNavigation("profile", "/profile")}
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Профиль</span>
          </Button>
        </div>

        {/* Bot Username */}
        <div className="text-center py-2 text-gray-500 text-sm">@voltaicrypt_bot</div>
      </div>
    </div>
  )
}
