#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re, html, datetime, uuid, sys, os

NOVEL = "/home/user/-1/novel"

ORDER = [
    "Глава 01.md", "Глава 02.md", "Глава 03.md", "Глава 04.md",
    "Глава 05.md", "Глава 06.md", "Глава 07.md", "Глава 08.md",
    "Глава 09.md", "Интерлюдия II — Хроника.md",
    "Глава 10.md", "Глава 11.md",
]

def esc(s):
    return html.escape(s, quote=False)

def inline(s):
    # сначала экранируем спецсимволы, потом расставляем emphasis
    s = esc(s)
    s = re.sub(r"\*([^*]+)\*", r"<emphasis>\1</emphasis>", s)
    return s

def convert_section(path):
    with open(path, encoding="utf-8") as f:
        lines = f.read().split("\n")
    title = None
    body = []
    for raw in lines:
        line = raw.rstrip()
        if not line.strip():
            continue
        if line.startswith("#"):
            if title is None:
                title = line.lstrip("#").strip()
            continue
        if re.fullmatch(r"-{3,}", line.strip()) or re.fullmatch(r"\*\s*\*\s*\*", line.strip()):
            body.append('<subtitle>* * *</subtitle>')
            continue
        body.append("<p>" + inline(line.strip()) + "</p>")
    out = ["<section>"]
    if title:
        out.append("<title><p>" + esc(title) + "</p></title>")
    out.extend(body)
    out.append("</section>")
    return "\n".join(out)

sections = []
for name in ORDER:
    p = os.path.join(NOVEL, name)
    if not os.path.exists(p):
        print("MISSING:", name, file=sys.stderr); sys.exit(1)
    sections.append(convert_section(p))

book_id = str(uuid.uuid4())
today = datetime.date.today().isoformat()

annotation = (
    "<p>Магпанк-город Гравен живёт дыханием спящего под ним существа — эфиром. "
    "Люди здесь пропадают по одному, из кварталов, которые город затем списывает "
    "в туман, и никто их не ищет. Картограф Тея Марлоу ищет: полгода назад пропал "
    "её брат. Поиски сводят её с тем, на кого город привык вешать все исчезновения, — "
    "с исконным, нечеловеком из тумана. Случайный обрыв чужого следа сплавляет их "
    "судьбы в неразрывный сросток.</p>"
    "<p>Романтическое фэнтези с детективной интригой. Часть I и начало части II.</p>"
)

fb2 = f'''<?xml version="1.0" encoding="UTF-8"?>
<FictionBook xmlns="http://www.gribuser.ru/xml/fictionbook/2.0" xmlns:l="http://www.w3.org/1999/xlink">
<description>
<title-info>
<genre>sf_fantasy</genre>
<genre>love_sf</genre>
<author><first-name>Мария</first-name><last-name>Суржевская</last-name></author>
<book-title>Город, который забирает</book-title>
<annotation>{annotation}</annotation>
<lang>ru</lang>
<sequence name="Гравен" number="1"/>
</title-info>
<document-info>
<author><nickname>—</nickname></author>
<date value="{today}">{today}</date>
<id>{book_id}</id>
<version>0.10</version>
</document-info>
</description>
<body>
<title><p>Город, который забирает</p><empty-line/><p>Книга первая</p></title>
{chr(10).join(sections)}
</body>
</FictionBook>
'''

outpath = os.path.join(NOVEL, "Город, который забирает.fb2")
with open(outpath, "w", encoding="utf-8") as f:
    f.write(fb2)
print("WROTE", outpath, len(fb2), "bytes")
