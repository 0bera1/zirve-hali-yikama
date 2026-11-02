import type { ImageMetadata } from 'astro';
import type { IconName } from '../lib/icons';
import { waLink, waMessages } from '../lib/whatsapp';
import araclar from '../assets/arac-halilar.jpg';
import koltukYikama from '../assets/koltuk-yikama.jpg';
import koltukTemiz from '../assets/koltuk-takimi-temiz.jpg';
import sonraSandalye from '../assets/sonra-sandalye.jpg';

export interface Service {
  id: string;
  title: string;
  /** Hizmetler sayfası H2 başlığı */
  pageTitle: string;
  icon: IconName;
  summary: string;
  description: string;
  features: string[];
  image?: ImageMetadata;
  imageAlt?: string;
  /** Fotoğrafı olmayan hizmetlerde yer tutucu yazısı */
  placeholder?: string;
  links: { label: string; href: string; primary?: boolean }[];
}

export const services: Service[] = [
  {
    id: 'hali',
    title: 'Halı Yıkama',
    pageTitle: 'Halı Yıkama',
    icon: 'rug',
    summary: 'Makine, yün ve shaggy halılar fabrikada yıkanır ve paketlenir.',
    description:
      'Makine, yün ve shaggy halılar kapınızdan alınır, fabrikamızda yıkanıp kurutulur ve paketlenerek teslim edilir.',
    features: [
      'Tozdan arındırma ve lekeye özel ön işlem',
      'Yıkama, durulama ve kurutma',
      'Paketli, kapıya teslim',
    ],
    image: araclar,
    imageAlt: 'Servis aracında paketlenmiş halılar',
    links: [
      { label: 'Detaylı bilgi →', href: '/hizmetler/hali-yikama/', primary: true },
      { label: 'Fiyat sor →', href: waLink(waMessages.price('halı yıkama')) },
    ],
  },
  {
    id: 'koltuk',
    title: 'Koltuk Yıkama',
    pageTitle: 'Koltuk Yıkama',
    icon: 'sofa',
    summary: 'Kumaşın derinindeki kir ve lekeler profesyonel makinelerle çıkarılır.',
    description:
      'Kumaşın derinindeki kir, ter ve lekeler profesyonel makinelerle çıkarılır. Koltuklarınız evinizde, yerinden kalkmadan temizlenir.',
    features: ['Kumaş türüne uygun temizlik', 'Leke ve koku giderme', 'Köşe, L ve tekli koltuklar'],
    image: koltukYikama,
    imageAlt: 'Makineyle koltuk yıkama',
    links: [{ label: 'Fiyat sor →', href: waLink(waMessages.price('koltuk yıkama')), primary: true }],
  },
  {
    id: 'perde',
    title: 'Stor Perde',
    pageTitle: 'Stor Perde Yıkama',
    icon: 'blind',
    summary: 'Biriken toz ve lekeler giderilir, ilk günkü haline döner.',
    description:
      'Zamanla biriken toz, is ve lekeler giderilir. Perdeleriniz rengini ve formunu kaybetmeden ilk günkü haline döner.',
    features: ['Toz ve is temizliği', 'Kumaşa uygun yıkama'],
    // TODO: stor perde fotoğrafı işletmeden alınacak
    placeholder: '[Stor perde fotoğrafı]',
    links: [{ label: 'Fiyat sor →', href: waLink(waMessages.price('stor perde yıkama')), primary: true }],
  },
  {
    id: 'yorgan',
    title: 'Yorgan & Battaniye',
    pageTitle: 'Yorgan & Battaniye',
    icon: 'quilt',
    summary: 'Hijyenik yıkama ile ferah ve temiz kokulu yataklar.',
    description:
      'Evde yıkaması zor olan yorgan ve battaniyeler hijyenik şekilde yıkanır, kurutulur ve paketlenir.',
    features: ['Elyaf, yün ve pamuk yorgan', 'Ferah ve temiz koku'],
    // TODO: yorgan / battaniye fotoğrafı işletmeden alınacak
    placeholder: '[Yorgan / battaniye fotoğrafı]',
    links: [
      { label: 'Fiyat sor →', href: waLink(waMessages.price('yorgan ve battaniye yıkama')), primary: true },
    ],
  },
  {
    id: 'yerinde',
    title: 'Yerinde Temizlik',
    pageTitle: 'Yerinde Temizlik',
    icon: 'home',
    summary: 'Koltuk ve sandalyeleriniz evinizde temizlenir.',
    description:
      'Taşınması zor ürünler için ekibimiz ekipmanıyla evinize gelir. Koltuk ve sandalyeleriniz yerinde temizlenir.',
    features: [],
    image: koltukTemiz,
    imageAlt: 'Evde temizlenmiş koltuk takımı',
    links: [{ label: 'Randevu al →', href: waLink(waMessages.onSite), primary: true }],
  },
  {
    id: 'sandalye',
    title: 'Sandalye & Araç Koltuğu',
    pageTitle: 'Sandalye & Araç Koltuğu',
    icon: 'chair',
    summary: 'Kumaş sandalyeler ve araç döşemeleri derinlemesine temizlenir.',
    description:
      'Kumaş yemek sandalyeleri ve araç döşemeleri derinlemesine temizlenir; yemek ve içecek lekeleri çıkarılır.',
    features: [],
    image: sonraSandalye,
    imageAlt: 'Temizlenmiş kumaş sandalye',
    links: [{ label: 'Fiyat sor →', href: waLink(waMessages.chairPrice), primary: true }],
  },
];
