export interface Faq {
  question: string;
  answer: string;
}

// TODO: [X] ve [...] alanları işletmeden alınacak bilgilerle doldurulacak
export const haliFaqs: Faq[] = [
  {
    question: 'Halılarım kaç günde teslim edilir?',
    answer: 'Yoğunluğa göre değişmekle birlikte genellikle [X] iş günü içinde teslim ediyoruz.',
  },
  {
    question: 'Servis ücretli mi?',
    answer: 'Kapıdan alım ve teslim hizmeti için [servis ücreti bilgisi].',
  },
  {
    question: 'Hangi bölgelere hizmet veriyorsunuz?',
    answer:
      'Tire ve çevresine hizmet veriyoruz. Adresinizi yazın, bölgenize ulaşıp ulaşamadığımızı hemen söyleyelim.',
  },
  {
    question: 'Her leke çıkar mı?',
    answer:
      'Lekelerin çoğu çıkar; ancak eskimiş veya kumaşa işlemiş bazı lekelerin tamamen gideceği garanti edilemez. Halınızı teslim alırken lekeleri inceler, beklentiyi baştan net şekilde paylaşırız.',
  },
];
