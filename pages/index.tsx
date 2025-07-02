import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import AccessGate from '../components/AccessGate';

type TgUser = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
};

export default function Home() {
  const [tgUser, setTgUser] = useState<TgUser | null>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
      setTgUser(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  return (
    <>
      <Head>
        <title>VoltAI WebApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script src="https://telegram.org/js/telegram-web-app.js" />
      <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">VoltAI Assistant</h1>
          {tgUser ? (
            <AccessGate user={tgUser} />
          ) : (
            <p>Ожидание Telegram WebApp...</p>
          )}
        </div>
      </main>
    </>
  );
}
