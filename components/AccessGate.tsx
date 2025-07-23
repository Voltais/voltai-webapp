"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

type Props = {
  user: {
    id: number
    username?: string
    first_name?: string
    last_name?: string
  } | null
}

export default function AccessGate({ user }: Props) {
  const [activeTab, setActiveTab] = useState("home")
  const router = useRouter()

  const handleNavigation = (tab: string, path?: string) => {
    setActiveTab(tab)
    if (path) router.push(path)
  }

  // --- Если не из Telegram WebApp (открыто в браузере)
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-10">
        <img src="/logo.jpg" alt="VoltAI" className="w-24 h-24 mb-4 rounded-full shadow-md" />
        <h1 className="text-2xl font-bold text-green-400 mb-2">VoltAI Assistant</h1>
        <p className="text-center text-gray-300 mb-6">
          🔍 Глубокий технический и фундаментальный анализ. <br />
          📈 Точные сигналы: вход (лонг/шорт), SL, TP. <br />
          💰 Подписка на 30 дней — 400 LEO токенов.
        </p>
        <a
          href="https://t.me/voltaicrypt_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
        >
          🔗 Открыть приложение в Telegram
        </a>
      </div>
    )
  }

  // --- Интерфейс внутри Telegram WebApp
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6 flex flex-col items-center">
      <img src="/logo.jpg" alt="VoltAI" className="w-20 h-20 mb-4 rounded-full border border-white/20 shadow" />
      <h1 className="text-xl font-semibold mb-2 text-teal-400">
        Привет, {user.first_name || user.username}!
      </h1>
      <p className="text-gray-300 text-center mb-6">Добро пожаловать в VoltAI — ваш трейдинг-ассистент.</p>

      <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 w-full max-w-md shadow">
        <ul className="space-y-3 text-sm">
          <li>🔍 Глубокий технический и фундаментальный анализ</li>
          <li>📈 Торговые рекомендации с TP, SL и уверенностью</li>
          <li>💡 Анализ графиков, уровней, объёмов и паттернов</li>
        </ul>
        <p className="mt-4 text-emerald-400 font-medium">📊 Подписка не активирована</p>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => handleNavigation("subscription", "/subscription")}
          className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition`}
        >
          💳 Подписка
        </button>
        <button
          onClick={() => handleNavigation("profile", "/profile")}
          className={`px-4 py-2 rounded bg-gray-700 hover:bg-gray-800 transition`}
        >
          👤 Профиль
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-500">@voltaicrypt_bot</p>
    </div>
  )
}
