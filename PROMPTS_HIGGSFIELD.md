# Промпты для Higgsfield — фото для портфолио

Сайт свёрстан под 4 изображения. Сгенерируйте их и положите в `assets/img/`
с точными именами файлов — сайт подхватит их автоматически (пока файлов нет,
показываются стильные плейсхолдеры).

Палитра сайта, под которую подобраны промпты: лавандово-белый фон `#F5F2FC`,
фиолетовый `#6C4DF6`, тёмно-чернильный `#191324`, лаймовый акцент `#E3FF4F`.

---

## 1. `hero.jpg` — главный портрет (вертикальный, 4:5, минимум 1200×1500)

Фото обрезается в форму арки со скруглённым верхом, поверх фиолетового
«блоба» — нужен запас воздуха над головой и однотонный фон.

```
Editorial portrait of a confident professional woman, product manager, sitting relaxed on a low designer chair, slightly leaning forward, looking straight into the camera with a calm smart smile. Wearing an elegant minimalist outfit: ivory oversized blazer over a simple top. Clean seamless pastel lavender studio background (#EDE8FA). Soft diffused studio lighting, gentle shadows, high-end fashion magazine photography style, shot on medium format camera, 85mm lens, sharp focus on eyes, natural skin texture, muted colors, lots of negative space above the head, vertical 4:5 composition
```

Вариант с телефоном в руке (перекликается с референсом Dynamic Concept):

```
Editorial studio portrait of a stylish professional woman holding a smartphone in one hand, glancing at the camera confidently, seated cross-legged on the floor. Minimalist ivory sweatshirt, dark tailored trousers, white sneakers. Seamless pale lavender studio backdrop, soft even lighting, subtle film grain, contemporary tech-brand campaign aesthetic, vertical 4:5 framing, generous headroom
```

## 2. `about.jpg` — рабочий кадр (вертикальный, 4:5, минимум 1000×1250)

Живая сцена «за работой / на воркшопе», станет карточкой в разделе «Обо мне».

```
Candid documentary-style photo of a professional woman leading a workshop, standing by a glass whiteboard covered with colorful sticky notes and diagrams, gesturing mid-explanation, genuine engaged expression. Modern bright office space with soft daylight from large windows, blurred laptops and attendees in the foreground, shallow depth of field, warm natural tones with subtle violet accents in the interior, reportage photography, 35mm lens, vertical 4:5 composition
```

Альтернатива — спокойная сцена с ноутбуком:

```
Candid photo of a focused professional woman working on a laptop in a stylish minimal workspace, warm side light, a small notebook and coffee cup nearby, purple-toned poster blurred on the wall behind, authentic working moment, editorial lifestyle photography, shallow depth of field, vertical 4:5 crop
```

## 3. `avatar.jpg` — аватар телеграм-канала (квадрат, минимум 800×800)

Показывается в маленьком круге (52px) в карточке канала «AI с Ксенией».

```
Close-up headshot portrait of a friendly professional woman, warm confident smile, looking at camera, soft studio light, clean solid violet background (#6C4DF6), modern minimal style, crisp details, square 1:1 composition, head and shoulders framing
```

## 4. `og.jpg` — превью для соцсетей (горизонтальный, 1200×630)

Подставляется в мета-тег `og:image`: это картинка, которую видно при
отправке ссылки на сайт в Telegram и соцсети.

```
Wide editorial banner photo of a professional woman speaking on a conference stage, holding a clicker, large blurred presentation screen with abstract violet gradient visuals behind her, dark auditorium with soft purple stage lighting, confident posture mid-talk, cinematic color grading, horizontal 1200x630 composition with empty space on the left side for text overlay
```

---

## Советы для Higgsfield

- Генерируйте с вашим личным аватаром (Higgsfield Soul / персонаж по вашим
  фото), чтобы на всех четырёх кадрах был один человек — вы.
- Просите «natural skin texture, subtle film grain» — это убирает
  «пластиковый AI-вид».
- Для `hero.jpg` важно: однотонный фон без предметов и запас сверху —
  фото кадрируется аркой.
- Если фон получился не лавандовым — не страшно: подойдёт любой светлый
  нейтральный, фиолетовую подложку даёт сам сайт.
- Форматы: можно `.jpg` или `.webp` (тогда поменяйте расширения в
  `index.html`), вес желательно до 300–400 КБ на файл.
