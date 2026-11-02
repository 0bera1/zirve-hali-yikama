export const site = {
  name: 'Zirve Halı & Koltuk Yıkama',
  shortName: 'Zirve',
  slogan: 'Temizlikte Zirvedeyiz, Sizleri de Bekleriz…',
  phoneDisplay: '0541 817 82 19',
  phoneE164: '+905418178219',
  whatsapp: '905418178219',
  instagram: 'https://www.instagram.com/zirvehaliyikamatire',
  instagramHandle: '@zirvehaliyikamatire',
  address: 'Merkez, Tire / İzmir',
  city: 'Tire',
  region: 'İzmir',
  country: 'TR',
  serviceArea: 'Tire ve çevresi',
  designer: { name: 'Bera', url: 'https://beraekimci.com.tr' },
  // TODO: çalışma saatleri işletmeden alınacak
  openingHours: null as string | null,
  // TODO: kampanyanın güncel olup olmadığı işletmeden teyit edilecek
  campaign: {
    active: true,
    text: 'Halı yıkatan müşterilerimize koltuk takımı yıkama',
    shortText: 'Halı yıkatana koltuk takımı',
    price: '2.500₺',
    oldPrice: '3.500₺',
  },
};

export const phoneHref = `tel:${site.phoneE164}`;

export const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetler/', label: 'Hizmetler' },
  { href: '/hizmetler/hali-yikama/', label: 'Halı Yıkama' },
  { href: '/once-sonra/', label: 'Önce / Sonra' },
] as const;
