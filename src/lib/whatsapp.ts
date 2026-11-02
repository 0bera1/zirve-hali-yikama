import { site } from '../data/site';

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

/** Hazır WhatsApp mesajları */
export const waMessages = {
  general: 'Merhaba, randevu almak istiyorum',
  fab: 'Merhaba, bilgi almak istiyorum',
  campaign: 'Merhaba, koltuk kampanyasından yararlanmak istiyorum',
  carpetSize: 'Merhaba, halımın ölçüsü: ',
  carpetAppointment: 'Merhaba, halı yıkama için randevu almak istiyorum',
  anyPrice: 'Merhaba, fiyat almak istiyorum',
  price: (service: string) => `Merhaba, ${service} fiyatı almak istiyorum`,
  onSite: 'Merhaba, yerinde temizlik için bilgi almak istiyorum',
  chairPrice: 'Merhaba, sandalye / araç koltuğu temizliği için fiyat almak istiyorum',
};
