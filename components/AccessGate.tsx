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
      <p className="text-red-400">❌ Недостаточно токенов LEO</p>
      <a href="https://pancakeswap.finance/swap?outputCurrency=0xf2740f3f2d9fe449df5613e69138fc1f389ee5c6" target="_blank" className="underline text-blue-400">
        Купить LEO на PancakeSwap
      </a>
    </div>
  )
}
