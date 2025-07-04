import { useEffect, useState } from 'react'
import axios from 'axios'

export default function AccessGate({ user }: { user: any }) {
  const [status, setStatus] = useState<'loading' | 'ok' | 'fail'>('loading')

  useEffect(() => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/check`, { id: user?.id })
      .then(res => {
        if (res.data?.access === true) setStatus('ok')
        else setStatus('fail')
      })
      .catch(() => setStatus('fail'))
  }, [user])

  if (status === 'loading') return <p>Проверка токенов LEO…</p>
  if (status === 'ok') return <p className="text-green-400">✅ Доступ подтверждён</p>
  return (
    <div>
      <p className="text-white">
        👋 <strong>Добро пожаловать в VoltAI CryptoAssistant!</strong><br />
        Ваш надёжный помощник в мире криптовалютного трейдинга!<br />
        🔍 Провожу глубокий технический и фундаментальный анализ криптовалют.<br />
        📈 Даю точные рекомендации: точки входа (лонг/шорт), стоп-лосс и тейк-профит.
      </p>
      <p className="text-white mt-2">
        💰 <strong>Подписка на 30 дней</strong> — всего 400 токенов LEO.<br />
        Токены LEO можно приобрести на PancakeSwap.
      </p>
      <p className="mt-2">
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0xf2740f3f2d9fe449df5613e69138fc1f389ee5c6"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400"
        >
          🔗 Купить LEO и активировать подписку
        </a>
      </p>
    </div>
  )
}
