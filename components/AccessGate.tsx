"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Settings, QrCode, CreditCard, User, Link, Users, MoreHorizontal, X, Sun, Moon } from 'lucide-react'
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

type Props = {
  user: {
    id: number
    username?: string
    first_name?: string
  } | null
}

export default function TelegramWebApp({ user }: Props) {
  const [activeTab, setActiveTab] = useState("home")
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const handleNavigation = (tab: string, path?: string) => {
    setActiveTab(tab)
    if (path) {
      router.push(path)
    }
  }

  const handleInviteFriends = () => {}

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-900 dark:to-blue-950 flex flex-col items-center justify-center text-white p-6">
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-white hover:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>

        <img src="/logo.jpg" alt="VoltAI" className="mx-auto w-32 mb-6 rounded-full shadow-2xl border-4 border-white/30" />
        <h1 className="text-3xl font-bold mb-2 text-center drop-shadow-lg text-cyan-300">VoltAI Assistant</h1>
        <p className="text-xl mb-8 text-center text-slate-200 dark:text-slate-300">
          Ваш помощник в криптовалютном трейдинге
        </p>

        <Card className="bg-white/15 dark:bg-white/10 backdrop-blur-sm border-white/30 dark:border-white/20 text-white p-6 mb-8 w-full max-w-md">
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><span className="text-2xl">🔍</span><span className="text-sm">Глубокий технический и фундаментальный анализ</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl">📈</span><span className="text-sm">Торговые рекомендации: направление, вход, SL, TP</span></li>
            <li className="flex items-start gap-3"><span className="text-2xl">💰</span><span className="text-sm font-semibold">Подписка на 30 дней — <span className="text-yellow-400">3 USD</span></span></li>
          </ul>
        </Card>

        <a
          href="https://t.me/voltaicrypt_bot"
          className="group inline-block bg-emerald-400 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-lg text-white relative overflow-hidden"
          style={{
            boxShadow: "0 8px 16px rgba(52, 211, 153, 0.3), 0 4px 8px rgba(52, 211, 153, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
            background: "linear-gradient(145deg, #34d399, #10b981)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative z-10">🔗 Открыть приложение Telegram</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </a>
      </div>
    )
  }

  const displayName = user.first_name || user.username || "Пользователь"

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 dark:from-gray-900 dark:to-gray-950 flex flex-col">
      <div className="flex items-center justify-between p-4 text-white dark:text-gray-100">
        <Avatar className="w-12 h-12 border-2 border-white/30 dark:border-gray-600">
          <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Profile" />
          <AvatarFallback>{displayName[0]}</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-white dark:text-gray-200">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button variant="ghost" size="icon"><MoreHorizontal className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon"><X className="w-5 h-5" /></Button>
        </div>
      </div>

      <div className="flex-1 px-4 pb-4 flex flex-col">
        <div className="text-center text-white dark:text-gray-100 mb-6">
          <img src="/logo.jpg" alt="VoltAI" className="mx-auto w-20 h-20 mb-4 rounded-full shadow-xl border-3 border-white/30 dark:border-gray-600" />
          <h1 className="text-xl font-bold mb-2 text-cyan-300">Привет, {displayName}!</h1>
          <p className="text-slate-200 text-base">Ваш помощник в криптовалютном трейдинге</p>
        </div>

        <Card className="w-full bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-700 border-0 text-white mb-6 shadow-lg cursor-pointer" onClick={handleInviteFriends}>
          <div className="p-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Пригласи друзей</h2>
              <p className="text-sm">Получай бонусы за каждого приглашённого</p>
            </div>
            <div className="flex flex-col gap-2 ml-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><Link className="w-5 h-5" /></div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><Users className="w-5 h-5" /></div>
            </div>
          </div>
        </Card>

        <Card className="bg-white/15 dark:bg-gray-800/50 backdrop-blur-sm border-white/30 dark:border-gray-700 text-white mb-4 shadow-lg">
          <div className="p-5">
            <h3 className="font-semibold mb-4 text-lg">Возможности платформы:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><span className="text-xl">🔍</span><span className="text-sm">Тех. и фундаментальный анализ</span></li>
              <li className="flex items-start gap-3"><span className="text-xl">📈</span><span className="text-sm">Рекомендации и сигналы</span></li>
              <li className="flex items-start gap-3"><span className="text-xl">⚡</span><span className="text-sm">Уведомления о возможностях</span></li>
              <li className="flex items-start gap-3"><span className="text-xl">📊</span><span className="text-sm">Аналитика по ключевым уровням</span></li>
            </ul>
            <div className="mt-4 p-3 bg-emerald-500/20 dark:bg-emerald-600/30 rounded-lg border border-emerald-400/30 dark:border-emerald-500/40">
              <p className="text-emerald-200 text-sm font-medium">📊 Ваш статус: Подписка не активирована</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-around py-2">
          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 ${activeTab === "home" ? "text-blue-500 font-semibold scale-105" : "text-gray-600 dark:text-gray-400"}`}
            onClick={() => handleNavigation("home")}
          >
            <Home className="w-6 h-6" /><span className="text-xs">Главная</span>
          </Button>
          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 ${activeTab === "functional" ? "text-blue-500 font-semibold scale-105" : "text-gray-600 dark:text-gray-400"}`}
            onClick={() => handleNavigation("functional", "/functional")}
          >
            <Settings className="w-6 h-6" /><span className="text-xs">Функции</span>
          </Button>
          <Button variant="default" className="w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg"><QrCode className="w-7 h-7" /></Button>
          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 ${activeTab === "subscription" ? "text-blue-500 font-semibold scale-105" : "text-gray-600 dark:text-gray-400"}`}
            onClick={() => handleNavigation("subscription", "/subscription")}
          >
            <CreditCard className="w-6 h-6" /><span className="text-xs">Подписка</span>
          </Button>
          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 ${activeTab === "profile" ? "text-blue-500 font-semibold scale-105" : "text-gray-600 dark:text-gray-400"}`}
            onClick={() => handleNavigation("profile", "/profile")}
          >
            <User className="w-6 h-6" /><span className="text-xs">Профиль</span>
          </Button>
        </div>
        <div className="text-center py-2 text-gray-500 dark:text-gray-400 text-sm">@voltaicrypt_bot</div>
      </div>
    </div>
  )
}
