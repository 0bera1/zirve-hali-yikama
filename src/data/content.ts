import { waLink, waMessages } from '../lib/whatsapp';

export const heroStrip = ['HALI', 'KOLTUK', 'PERDE', 'YORGAN', 'SANDALYE'];
export const heroServicesWide = ['HALI', 'KOLTUK', 'STOR PERDE', 'YORGAN & BATTANİYE', 'SANDALYE & ARAÇ'];

export const homeNav = [
  { href: '/hizmetler/', label: 'Hizmetler' },
  { href: '/once-sonra/', label: 'Önce / Sonra' },
  { href: '/#surec', label: 'Süreç' },
  { href: '/#fiyat', label: 'Fiyat Al' },
  { href: '/#iletisim', label: 'İletişim' },
];

export const processSteps = [
  { title: 'Randevu alın', text: "Telefon veya WhatsApp'tan size uygun günü belirleyin." },
  { title: 'Kapınızdan alalım', text: 'Servis aracımız halılarınızı evinizden teslim alır.' },
  { title: 'Fabrikada yıkayalım', text: 'Profesyonel makinelerle yıkama, durulama ve kurutma.' },
  { title: 'Paketli teslim edelim', text: 'Tertemiz ve paketlenmiş halde evinize getiririz.' },
];

export const priceItems = [
  { label: 'Halı yıkama', href: waLink(waMessages.price('halı yıkama')) },
  { label: 'Koltuk takımı', href: waLink(waMessages.price('koltuk yıkama')) },
  { label: 'Stor perde', href: waLink(waMessages.price('stor perde yıkama')) },
  { label: 'Yorgan & battaniye', href: waLink(waMessages.price('yorgan ve battaniye yıkama')) },
];

export const carpetTypes = [
  { title: 'Makine halısı', text: 'Salon ve oda halıları' },
  { title: 'Yün halı', text: 'Hassas yıkama' },
  { title: 'Shaggy halı', text: 'Uzun tüylü halılar' },
  { title: 'Kilim', text: 'Renk korumalı' },
  { title: 'Yolluk', text: 'Koridor ve antre' },
  { title: 'Paspas', text: 'Banyo ve kapı önü' },
];

export const carpetSteps = [
  { title: 'Teslim alma', text: 'Randevu saatinde kapınızdan alırız.' },
  { title: 'Toz alma', text: 'Halının dibindeki toz ve kum çıkarılır.' },
  { title: 'Yıkama', text: 'Lekelere ön işlem, ardından türüne uygun yıkama.' },
  { title: 'Kurutma', text: 'Halı nemsiz ve kokusuz hale gelene kadar kurutulur.' },
  { title: 'Paketli teslim', text: 'Paketlenip evinize geri getirilir.' },
];

export const mobileNav = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetler/', label: 'Hizmetler' },
  { href: '/hizmetler/hali-yikama/', label: 'Halı Yıkama' },
  { href: '/once-sonra/', label: 'Önce / Sonra' },
  { href: '/#surec', label: 'Süreç' },
  { href: '/#fiyat', label: 'Fiyat Al' },
  { href: '/#iletisim', label: 'İletişim' },
];
