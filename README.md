# Zirve Halı & Koltuk Yıkama

Tire / İzmir'de hizmet veren Zirve Halı & Koltuk Yıkama için mobil öncelikli, statik tanıtım sitesi.
Astro 5 + TypeScript (strict) + Tailwind CSS v4. Fontlar self-host, sayfalarda neredeyse hiç JS yok.

## Kurulum

Node.js 20.3 veya üzeri (tercihen 22 LTS) gerekir.

```bash
npm install
```

## Geliştirme

```bash
npm run dev      # http://localhost:4321
npm run check    # TypeScript / Astro tip kontrolü
```

## Build

```bash
npm run build    # çıktı: dist/
npm run preview  # build çıktısını yerelde dene
```

## Yayın

Cloudflare Pages veya Netlify ile uyumlu:

- Build komutu: `npm run build`
- Çıktı klasörü: `dist`
- Node sürümü: 20.3+ (22 önerilir)

Alan adı alındığında `astro.config.mjs` içindeki `site` ve `public/robots.txt` içindeki sitemap adresini güncelleyin.

## İçerik güncelleme

Tüm metin, telefon ve fiyat bilgileri `src/data/` altından gelir; bileşenlere sabit yazılmamıştır.

| Dosya | İçerik |
|---|---|
| `src/data/site.ts` | İşletme bilgileri, telefon, WhatsApp, Instagram, çalışma saatleri, kampanya (`campaign.active` ile aç/kapat) |
| `src/data/services.ts` | 6 hizmet: başlık, açıklama, madde listesi, görsel, bağlantılar |
| `src/data/gallery.ts` | Önce/sonra galerisi ve ana sayfadaki "Son işlerimiz" |
| `src/data/faqs.ts` | Halı yıkama sayfası SSS (JSON-LD otomatik üretilir) |
| `src/data/content.ts` | Süreç adımları, fiyat listesi, halı türleri, menü bağlantıları |
| `src/lib/whatsapp.ts` | Hazır WhatsApp mesajları (`waMessages`) ve `waLink()` |

Görselleri `src/assets/` altına koyup ilgili veri dosyasında içe aktarın; AVIF/WebP ve boyutlar otomatik üretilir.
Paylaşım görselini (`public/og-image.jpg`) yenilemek için: `node scripts/og-image.mjs`.

## Yayından önce tamamlanacaklar

- [ ] Çalışma saatleri (`site.openingHours`; sitede şu an `[Çalışma saatleri]` görünüyor, JSON-LD'ye de eklenecek)
- [ ] Teslim süresi (SSS: "[X] iş günü" — `src/data/faqs.ts`)
- [ ] Servis ücreti (SSS: "[servis ücreti bilgisi]" — `src/data/faqs.ts`)
- [ ] Açık adres / Google Haritalar konumu (`src/data/site.ts`, iletişim kartı)
- [ ] Stor perde ve yorgan/battaniye fotoğrafları (`src/data/services.ts`; şu an yer tutucu)
- [ ] Gerçek alan adı (`astro.config.mjs`, `public/robots.txt`)
- [ ] `hero-hali.jpg` stok/AI görselinin lisansını doğrula veya işletmenin kendi fotoğrafıyla değiştir
- [ ] Kampanyanın güncel olup olmadığını teyit et (`site.campaign.active`)
- [ ] "Her leke çıkar mı?" ve "Hangi bölgelere hizmet veriyorsunuz?" SSS cevaplarını işletmeyle gözden geçir
