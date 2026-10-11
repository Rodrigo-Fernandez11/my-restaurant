# 🍽 My Restaurant

Directorio de restaurantes con búsqueda, filtros y favoritos. Construido con Next.js 14 App Router y desplegado en Vercel.

**Demo en vivo**: https://my-restaurant-five-sigma.vercel.app

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript 5 (modo strict)
- **Estilos**: Tailwind CSS 3 — paleta Ember & Charcoal
- **Fuente**: Inter (next/font)
- **Notificaciones**: Sonner
- **Deploy**: Vercel

---

## Funcionalidades

- Listado de restaurantes con imagen, score, precio y dirección
- Búsqueda en tiempo real por nombre o descripción
- Filtro por categoría (italiana, japonesa, mexicana, etc.)
- Filtro por rango de precio ($–$$$$)
- Página de favoritos (guardados en localStorage)
- Modo oscuro / claro con persistencia
- Imágenes optimizadas con `next/image`
- Página de detalle con rating en estrellas
- Compartir imagen OG del restaurante al portapapeles

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Rodrigo-Fernandez11/my-restaurant.git
cd my-restaurant

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local y completar REVALIDATE_SECRET

# Correr en desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

---

## Variables de entorno

| Variable | Requerida | Descripción |
|---|---|---|
| `REVALIDATE_SECRET` | Sí | Token Bearer para el endpoint de revalidación manual |
| `NEXT_PUBLIC_BASE_URL` | No | URL base del sitio (por defecto usa la URL de Vercel) |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── [id]/           # Página de detalle del restaurante
│   ├── api/revalidate/ # Endpoint de revalidación (protegido)
│   ├── favorites/      # Página de favoritos
│   ├── layout.tsx      # Layout raíz con Header, Footer y tema
│   └── page.tsx        # Home con búsqueda y filtros
├── components/
│   ├── CategoryFilter  # Chips de filtro por categoría
│   ├── PriceFilter     # Chips de filtro por precio
│   ├── RestaurantCard  # Tarjeta de restaurante
│   ├── SearchBox       # Input de búsqueda con URL params
│   ├── SkeletonCard    # Placeholder animado de carga
│   ├── StarRating      # Visualización de score con estrellas
│   ├── ThemeToggle     # Botón dark/light mode
│   ├── Header / Footer
│   └── CopyLink        # Botón para compartir imagen OG
├── data/
│   └── restaurants.ts  # Datos estáticos de los 12 restaurantes
├── lib/
│   ├── env.ts          # Lectura segura de variables de entorno
│   ├── favorites.ts    # Helpers de localStorage para favoritos
│   └── filters.ts      # Función pura de filtrado del catálogo
└── types/
    └── restaurant.ts   # Tipos: Restaurant, PriceRange, RestaurantCategory
```

---

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # ESLint
```

---

## Revalidación manual

Para refrescar el caché del home desde un sistema externo:

```bash
curl -X POST https://tu-dominio.vercel.app/api/revalidate \
  -H "Authorization: Bearer TU_REVALIDATE_SECRET"
```
