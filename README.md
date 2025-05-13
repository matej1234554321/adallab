# TikTok Reklamy Analyzer

Aplikácia na analýzu produktových obrázkov a hľadanie viralných TikTok reklám.

## Funkcie
- Analýza nahratého obrázka produktu
- Nájdenie podobných viralných reklám
- Prémiový režim: Automatické nahrávanie 60 reklám počas 2 mesiacov

## Inštalácia
1. Naklonujte repozitár
2. Nainštalujte závislosti: `npm install`
3. Spustite server: `node server.js`

## API Endpoints
- POST `/api/analyze` - Analýza obrázka
- POST `/auth/login` - Prihlásenie používateľa
- POST `/auth/connect-tiktok` - Prepojenie s TikTok účtom