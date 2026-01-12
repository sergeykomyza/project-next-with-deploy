/* 
- `NextResponse` — это **встроенный инструмент Next.js**, который помогает **создавать ответы от сервера**.
- С помощью него можно вернуть `JSON`, установить статус ответа и так далее.*/
import { NextResponse } from "next/server";

/* Импортируем класс PrismaClient, который создаёт соединение с базой данных.
Этот клиент знает, какие у тебя есть таблицы (на основе schema.prisma), и позволяет выполнять SQL-запросы через удобный TypeScript-интерфейс.*/
import { PrismaClient } from "@prisma/client";

/*создаём *экземпляр Prisma-клиента.
Теперь можно писать запросы к базе: `prisma.product.findMany()` и т.д.*/
const prisma = new PrismaClient();