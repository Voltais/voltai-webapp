export function parseInitData() {
  if (typeof window === 'undefined') return null;
  const tg = (window as any).Telegram;
  return tg?.WebApp?.initDataUnsafe || null;
}
