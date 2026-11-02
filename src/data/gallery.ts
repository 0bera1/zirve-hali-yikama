import type { ImageMetadata } from 'astro';
import onceKoltuk from '../assets/once-koltuk.jpg';
import sonraKoltuk from '../assets/sonra-koltuk.jpg';
import onceSandalye from '../assets/once-sandalye.jpg';
import sonraSandalye from '../assets/sonra-sandalye.jpg';
import koltukTakimi from '../assets/koltuk-takimi-temiz.jpg';
import koltukYikama from '../assets/koltuk-yikama.jpg';
import beyazKoltuk from '../assets/beyaz-koltuk.jpg';
import aracHalilar from '../assets/arac-halilar.jpg';

export type GalleryCategory = 'koltuk' | 'sandalye' | 'hali';

export interface Pair {
  before: ImageMetadata;
  beforeAlt: string;
  after: ImageMetadata;
  afterAlt: string;
}

export interface GalleryItem {
  category: GalleryCategory;
  title: string;
  caption: string;
  pair?: Pair;
  image?: ImageMetadata;
  alt?: string;
}

export const galleryFilters: { value: 'all' | GalleryCategory; label: string }[] = [
  { value: 'all', label: 'Tümü' },
  { value: 'koltuk', label: 'Koltuk' },
  { value: 'sandalye', label: 'Sandalye' },
  { value: 'hali', label: 'Halı' },
];

/** Ana sayfa "Önce / Sonra" bölümü ve galeri için ortak çiftler */
export const beforeAfterPairs = {
  koltuk: {
    before: onceKoltuk,
    beforeAlt: 'Lekeli beyaz koltuk, yıkama öncesi',
    after: sonraKoltuk,
    afterAlt: 'Temiz beyaz koltuk, yıkama sonrası',
  },
  sandalye: {
    before: onceSandalye,
    beforeAlt: 'Lekeli kumaş sandalye, yıkama öncesi',
    after: sonraSandalye,
    afterAlt: 'Temiz kumaş sandalye, yıkama sonrası',
  },
} satisfies Record<string, Pair>;

export const gallery: GalleryItem[] = [
  { category: 'koltuk', title: 'Beyaz köşe koltuk', caption: 'Leke temizliği', pair: beforeAfterPairs.koltuk },
  { category: 'sandalye', title: 'Kumaş yemek sandalyesi', caption: 'Yerinde temizlik', pair: beforeAfterPairs.sandalye },
  { category: 'koltuk', title: 'Koltuk takımı', caption: 'Müge Hanım · 1 takım', image: koltukTakimi, alt: 'Yıkanmış koltuk takımı' },
  { category: 'koltuk', title: 'Derin koltuk temizliği', caption: 'Ayşe Hanım · 2 takım', image: koltukYikama, alt: 'Koltuk yıkama makinesiyle temizlik' },
  { category: 'hali', title: 'Teslime hazır halılar', caption: 'Paketlenmiş, serviste', image: aracHalilar, alt: 'Servis aracında paketlenmiş, teslime hazır halılar' },
];

export const recentWorks = [
  { title: 'Koltuk takımı', caption: 'Müge Hanım · 1 takım', image: koltukTakimi, alt: 'Yıkanmış koltuk takımı' },
  { title: 'Derin koltuk temizliği', caption: 'Ayşe Hanım · 2 takım', image: koltukYikama, alt: 'Koltuk yıkama makinesiyle temizlik' },
  { title: 'Beyaz köşe koltuk', caption: 'Lekeler tamamen çıkarıldı', image: beyazKoltuk, alt: 'Temizlenmiş beyaz köşe koltuk' },
];
