import { useEffect, useState } from "react";
import AccessGate from "../components/AccessGate";

type TgUser = {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
};

export default function Home() {
  const [tgUser, setTgUser] = useState<TgUser | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.Telegram?.WebApp?.initDataUnsafe?.user
    ) {
      setTgUser(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="text-center space-y-4 max-w-xl">
        <AccessGate user={tgUser} />
      </div>
    </main>
  );
}
