# Sunset Boulevard 405 — copy en español (página de venta)

Traducción de `COPY-EN.md`, sección por sección. Mismo orden, mismos ids, mismos nombres de archivo. Las notas para el equipo van en inglés para que nadie tenga que traducirlas de vuelta.

**Conventions used in this file (translator's decisions)**
- **Price format: `US$375.000`** everywhere in visible Spanish copy. Reason: a bare `$` means pesos in Mexico, Colombia and Chile, so `US$` removes the doubt; the period as thousands separator is the Costa Rican convention. JSON-LD keeps the raw number `375000` + `USD`.
- **Area: `74 m² (797 pies²)`.** Spanish leads with m²; the sq ft figure stays as in English.
- **Register: `usted`** throughout. Neutral Latin American Spanish with Costa Rican vocabulary where it is simply the right word (*lapas rojas*, *alquiler*, *cuota de condominio*).
- **Rental income:** the fixed line is **"Cifras de ingresos por alquiler disponibles a solicitud."** No figures, ever.
- Phone: +506 6144 8011. WhatsApp link: `https://wa.me/50661448011?text=...` (Spanish prefilled text below).

**Glossary (use these everywhere so the page stays consistent)**
| English | Español | Why |
|---|---|---|
| condo (the unit) | apartamento | What buyers in CR and most of LatAm call the unit. *Condominio* = the building/regime; used for SEO in meta and intro. |
| ocean view | con vista al mar | Accurate. **Not** *frente al mar* (see flag 1). |
| South Beach Jacó | Jacó Sur | Natural Spanish name of the area; `South Beach` kept once in the hero tag for buyers who know the English name. |
| for sale by owner | venta directa del dueño | *Dueño* is the everyday word in CR; *propietario* used where the tone is formal (legal line). |
| no agency fees | sin comisión de corredor | In CR an agent is a *corredor de bienes raíces*. |
| owner financing | financiamiento directo del dueño | *Financiamiento* (LatAm), not *financiación* (Spain). |
| HOA | cuota de condominio | The term used in CR condominium law and listings. |
| rooftop terrace | terraza en la azotea | *Azotea* is understood everywhere; *rooftop* avoided as an anglicism. |
| bedroom | habitación | Neutral; avoids MX *recámara* and AR *dormitorio*. |
| twin beds / king bed | camas individuales / cama king | *King* is the standard retail term in LatAm. |
| walk-in rain shower | ducha amplia tipo lluvia | *Walk-in* has no clean equivalent; this says what it is. |
| scarlet macaw | lapa roja | Costa Rican name. *Guacamaya roja* elsewhere; see flag 4. |
| vacation rental | alquiler vacacional | *Alquiler* (CR), not *renta* (MX). |
| Enquire | Consultar | Short enough for the nav button. |

---

## 1. Bloque SEO

### Title tag (58 caracteres)
`Apartamento con vista al mar en venta en Jacó | Sunset 405`

Alternativa corta (41): `Apartamento en venta en Jacó | Sunset 405`

### Meta description (153 caracteres)
`Apartamento con vista al mar en Jacó Sur, a 50 m de la playa. 2 habitaciones, 2 baños, amueblado, piscina y azotea. US$375.000. Financiamiento del dueño.`

### Open Graph / redes sociales
- `og:title`: `Sunset Boulevard 405 — Apartamento con vista al mar en venta en Jacó`
- `og:description`: `Un apartamento tranquilo de 2 habitaciones en el 4.º piso, a 50 m de Playa Jacó. Totalmente amueblado. US$375.000. Sin comisión de corredor. Financiamiento directo del dueño.`
- `og:type`: `website`
- `og:locale`: `es_CR` (with `og:locale:alternate` = `en_US` on both pages, if Leo builds both)
- `og:image`: `img/jaco-ocean-view-condo-living-room-sunset.jpg` (same file as English)
- `og:image:alt`: `Sala de un apartamento con vista al mar en Jacó, abierta a un balcón al atardecer`
- `twitter:card`: `summary_large_image` (mismo título, descripción e imagen)

### JSON-LD (para la página en español; Leo lo revisa)
Only the text fields change. Numbers, URLs, units and schema types stay identical to the English block.
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "inLanguage": "es",
  "name": "Sunset Boulevard 405 — Apartamento con vista al mar en venta en Jacó, Costa Rica",
  "description": "Apartamento totalmente amueblado de 2 habitaciones y 2 baños en el 4.º piso, con vista al mar, a unos 50 m de Playa Jacó, en Jacó Sur. Piscina, terraza en la azotea y parqueo techado. Venta directa del dueño, sin comisión de corredor, con financiamiento directo del dueño.",
  "url": "https://sunset-blvd-405.pages.dev/",
  "image": [
    "https://sunset-blvd-405.pages.dev/img/jaco-ocean-view-condo-living-room-sunset.jpg",
    "https://sunset-blvd-405.pages.dev/img/jaco-condo-rooftop-terrace-ocean-sunset.jpg",
    "https://sunset-blvd-405.pages.dev/img/jaco-condo-pool-stone-waterfall-wall.jpg"
  ],
  "offers": {
    "@type": "Offer",
    "price": 375000,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Person", "name": "Propietario" }
  },
  "about": {
    "@type": "Apartment",
    "name": "Sunset Boulevard, apartamento 405",
    "numberOfRooms": 2,
    "numberOfBedrooms": 2,
    "numberOfBathroomsTotal": 2,
    "occupancy": { "@type": "QuantitativeValue", "maxValue": 4 },
    "floorLevel": "4",
    "floorSize": { "@type": "QuantitativeValue", "value": 74, "unitCode": "MTK" },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Vista al mar", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Piscina", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Terraza en la azotea", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Parqueo techado", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Ascensor", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Aire acondicionado", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Lavadora y secadora", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Amueblado", "value": true }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jacó",
      "addressRegion": "Puntarenas",
      "addressCountry": "CR"
    }
  }
}
```
Notes for Leo: if the Spanish page lives at its own URL (e.g. `/es/`), change `url` to that and add `hreflang` pairs. The `geo` and domain notes from the English file apply here too.

### Mapa de palabras clave (solo uso natural)
| Frase | Dónde aparece |
|---|---|
| apartamento con vista al mar en venta Jacó | Title, H1, og:title |
| apartamento en venta Jacó Costa Rica | Title corto, intro de "Los datos" |
| condominio de playa en venta Costa Rica | Intro de "Los datos", JSON-LD |
| Jacó Sur / sur de Playa Jacó | Etiqueta del hero, H2 de Ubicación, meta |
| Playa Jacó | Datos, Ubicación |
| venta directa del dueño / financiamiento del dueño | Línea de precio del hero, sección Compra |

---

## 2. Navegación

| Posición | Texto |
|---|---|
| Logo / inicio | Sunset Boulevard · 405 |
| Enlace 1 | Los datos |
| Enlace 2 | El apartamento |
| Enlace 3 | El edificio |
| Enlace 4 | Ubicación |
| Enlace 5 | Compra |
| Botón (WhatsApp) | Consultar |

Móvil: solo se muestran el logo y el botón "Consultar".

Mensaje prellenado de WhatsApp (codificar en la URL):
`Hola, me interesa comprar el apartamento 405 de Sunset Boulevard en Jacó.`

---

## 3. Hero

- **Etiqueta:** Jacó Sur (South Beach) · Costa Rica · Apartamento 405
- **H1:** Apartamento con vista al mar en venta en Jacó
  - Alternativa de diseño (si Sofia usa el estilo itálico en dos líneas): `Un hogar tranquilo` / `*sobre el Pacífico*`. En ese caso la frase SEO debe ir en una línea visible justo debajo. Recomendado: mantener el H1 simple.
- **Subtítulo:** Dos habitaciones en el 4.º piso, frente al mar. Totalmente amueblado, en un edificio pequeño y tranquilo a 50 m de la playa.
- **Precio:** US$375.000
- **Línea de precio:** Sin comisión de corredor · Venta directa del dueño · Financiamiento directo del dueño
- **CTA principal (WhatsApp):** Consultar por WhatsApp
- **CTA secundario (ancla a #facts):** Ver los datos
- **Indicador de scroll:** Deslice

**Imagen:** `jaco-ocean-view-condo-living-room-sunset.jpg`

Variantes de longitud para Sofia / Rhea:
- H1 corto (320 px): `Vista al mar, Jacó`
- Subtítulo corto: `Dos habitaciones con vista al mar. A 50 m de la playa.`
- Línea de precio corta (una por línea en móvil): `Sin comisión` / `Venta directa del dueño` / `Financiamiento del dueño`

Note: in the sub-line, *frente al mar* means "facing the sea" (orientation), which is what the English says. It is the only place it appears, and it is followed immediately by "a 50 m de la playa", so it cannot be read as beachfront. If Sofia prefers zero risk: `Dos habitaciones en el 4.º piso, con vista al mar.`

---

## 4. Datos principales — "de un vistazo" (id `facts`)

- **Etiqueta de sección:** De un vistazo
- **H2:** Los datos
- **Intro (una línea):** Un condominio de playa en Costa Rica, listo para vivir o alquilar.

**Números grandes**
| Número | Etiqueta |
|---|---|
| 2 | Habitaciones |
| 2 | Baños |
| 4.º | Piso, con vista al mar |
| 74 | m² (797 pies²) |

**Lista de datos clave**
| Etiqueta | Valor |
|---|---|
| Precio | US$375.000 |
| Comisión | Sin comisión de corredor. Venta directa del dueño. |
| Financiamiento | Financiamiento directo del dueño |
| Playa | A unos 50 m de Playa Jacó |
| Zona | Jacó Sur, el extremo tranquilo de la bahía |
| Amueblado | Totalmente amueblado. Capacidad para 4 personas. |
| Parqueo | Un espacio techado propio |
| Edificio | Piscina, terraza en la azotea, ascensor |
| Cuota de condominio | US$495 al mes |
| Ingresos | Alquiler vacacional activo en Airbnb. Cifras de ingresos por alquiler disponibles a solicitud. |
| Aeropuerto | A unos 90 minutos del aeropuerto Juan Santamaría (SJO) |

---

## 5. La vista (id `view`)

- **Etiqueta de sección:** La vista
- **H2:** El mar, en cada espacio que más usa
- **Texto 1:** La sala se abre a una terraza privada a través de una pared de puertas corredizas de vidrio. Primero palmeras, luego el mar, luego el cielo.
- **Texto 2:** Desde el sillón se ven las olas. Al atardecer la luz se vuelve dorada, luego rosada, y toda la sala toma ese color.

Variante corta del H2: `El mar, desde el sillón`

**Imágenes:** `jaco-condo-ocean-sunset-palm-trees-view.jpg` (panel lateral); banda a todo lo ancho después de la sección: `jaco-condo-living-room-ocean-view-day.jpg`.

---

## 6. Sala y cocina (id `home`)

- **Etiqueta de sección:** Sala y cocina
- **H2:** Un solo espacio, de la cocina al mar
- **Texto:** Un espacio abierto va de la cocina a la terraza. Una isla de cuarzo con lugar para cuatro. Electrodomésticos de acero inoxidable y un salpicadero de azulejos pintados a mano. Lavadora y secadora apiladas, en su propio rincón.
- **Línea corta bajo la galería (pie de foto opcional):** Totalmente amueblado. Solo traiga la maleta.

Variante corta del H2: `Espacio abierto, frente al mar`

**Imágenes (galería, 1 grande + 4 pequeñas):** mismos archivos que en inglés.
- Grande: `jaco-condo-kitchen-island-ocean-view.jpg`
- `jaco-condo-dining-island-sunset-view.jpg`
- `jaco-condo-quartz-island-kitchen.jpg`
- `jaco-condo-kitchen-tile-backsplash.jpg`
- `jaco-condo-kitchen-washer-dryer.jpg`
- Opcional: `jaco-condo-living-room-sofa-artwork.jpg`

`[TODO: confirm with owner]` — same as English: if "seats four" is dropped, delete "con lugar para cuatro" and write `Una isla de cuarzo.`

---

## 7. Habitaciones y baños (id `rooms`)

- **Etiqueta de sección:** Habitaciones y baños
- **H2:** Dos habitaciones, dos baños completos
- **Intro:** Una habitación mira al mar y la otra a las colinas verdes. Las dos son tranquilas, frescas y se entregan listas para usar.

**Tarjeta 1**
- Etiqueta: Habitación principal
- H3: Cama king, vista al mar
- Texto: Despierte frente al mar, tras una puerta corrediza de piso a techo. La puerta da directo a la terraza.
- Imagen: `jaco-condo-master-bedroom-king-bed-ocean-view.jpg`

**Tarjeta 2**
- Etiqueta: Segunda habitación
- H3: Dos camas individuales, vista al bosque
- Texto: Dos camas individuales y un escritorio, con vista a los árboles. Ideal para niños, invitados o una oficina en casa.
- Imagen: `jaco-condo-second-bedroom-twin-beds.jpg`

**Tarjeta 3**
- Etiqueta: Baños
- H3: Dos baños completos
- Texto: Duchas amplias tipo lluvia y acabados limpios y sencillos. De la playa, directo a una buena ducha.
- Imagen: `jaco-condo-bathroom-walk-in-shower.jpg`

Imágenes extra (franja opcional bajo las tarjetas): `jaco-condo-master-bedroom-teal-wall.jpg`, `jaco-condo-master-bedroom-evening-view.jpg`, `jaco-condo-second-bathroom.jpg`.

---

## 8. Banda del balcón (imagen a todo lo ancho con texto)

- **Etiqueta de sección:** Terraza privada
- **H2:** En primera fila frente al Pacífico
- **Línea:** Café por la mañana, luz dorada por la tarde. Casi todos los días pasan volando las lapas rojas.

Variante corta del H2: `Primera fila al Pacífico`

**Imagen:** `jaco-condo-private-balcony-ocean-sunset.jpg`
**Imágenes de apoyo:** `jaco-condo-balcony-dining-ocean-view.jpg`, `jaco-condo-balcony-glass-railing-jungle.jpg`, `jaco-condo-balcony-table-living-room.jpg`, `jaco-condo-balcony-living-room-dusk.jpg`.

---

## 9. El edificio (id `building`)

- **Etiqueta de sección:** El edificio
- **H2:** Un edificio pequeño y sereno
- **Texto:** Sunset Boulevard es un condominio pequeño, con pocos apartamentos. Tiene piscina con una pared de piedra en cascada, una sala techada junto a ella, ascensor y parqueo techado. Las áreas comunes se mantienen tranquilas y bien cuidadas.

`[TODO: confirm with owner]` — número exacto de apartamentos. Si se conoce, cambiar "con pocos apartamentos" por la cifra (p. ej. "con solo 12 apartamentos").

Variante corta del H2: `Pequeño y sereno`

**Franja de amenidades (opcional, 4 elementos bajo el texto)**
| Nombre | Detalle |
|---|---|
| Piscina | Pared de piedra en cascada |
| Sala exterior | Techada, junto a la piscina |
| Parqueo | Techado, un espacio propio |
| Ascensor | A todos los pisos |

**Imágenes:** mismos archivos que en inglés (`jaco-condo-pool-stone-waterfall-wall.jpg`, `jaco-condo-swimming-pool-jungle.jpg`, `jaco-condo-covered-pool-lounge.jpg`, `jaco-condo-covered-lounge-garden-view.jpg`, `jaco-condo-covered-parking.jpg`, `jaco-condo-building-walkway-ocean-air.jpg`).

---

## 10. Banda de la azotea (imagen a todo lo ancho con texto)

- **Etiqueta de sección:** Terraza en la azotea
- **H2:** El atardecer, desde la azotea
- **Línea:** La azotea común mira sobre toda la bahía. Suba con algo de tomar y quédese hasta que oscurezca.

Variante larga del H2: `Toda la bahía, desde la azotea`

**Imagen principal:** `jaco-condo-rooftop-terrace-ocean-sunset.jpg`
**De apoyo:** `jaco-condo-rooftop-lounge-chairs-sunset.jpg`, `jaco-condo-rooftop-deck-bay-view.jpg`, `jaco-condo-rooftop-chairs-ocean-view-day.jpg`, `jaco-condo-rooftop-view-jungle-sunset.jpg`.

---

## 11. Qué incluye (cuadrícula de amenidades)

- **Etiqueta de sección:** Qué incluye
- **H2:** Amueblado y listo
- **Intro:** Todo lo siguiente se queda con el apartamento.

| Nombre | Detalle |
|---|---|
| Vista al mar | Desde la sala, la habitación principal y la terraza |
| Terraza privada | Baranda de vidrio, juego de comedor |
| Aire acondicionado | En todos los espacios |
| Smart TV | Sala y habitación principal |
| Cocina completa | Isla de cuarzo, electrodomésticos de acero inoxidable |
| Lavadora y secadora | Dentro del apartamento |
| Cerradura inteligente | Entrada sin llave |
| Dos baños | Duchas amplias |
| Amueblado | Camas, ropa de cama, utensilios de cocina |
| Parqueo techado | Un espacio propio |
| Piscina y azotea | Compartidas en un edificio pequeño |
| Fauna | Lapas rojas desde la terraza |

`[TODO: confirm with owner]` — igual que en inglés: inventario de muebles y si el juego de comedor y los televisores se incluyen en la venta.

Note: "Aire acondicionado — en todos los espacios" mirrors "in every room". If the bathrooms or hallway have no A/C, write `En la sala y las dos habitaciones` (more exact, and the English has the same issue).

---

## 12. Ubicación (id `location`)

- **Etiqueta de sección:** Ubicación
- **H2:** Jacó Sur: tranquilo y cerca de todo
- **Texto 1:** El apartamento está en el extremo sur de Playa Jacó, donde la playa se curva y forma una bahía. Aquí el agua es más calmada. La calle es tranquila.
- **Texto 2:** El centro de Jacó, con sus restaurantes y tiendas, queda a pocos minutos en carro o a una caminata larga. El ruido de la zona de bares no llega hasta aquí.

Variante corta del H2: `Jacó Sur`

`[TODO: confirm with owner]` — tiempo real a pie o en carro al centro. Reemplazar "a pocos minutos en carro o a una caminata larga" por la cifra.

**Puntos de ubicación**
| Nombre | Detalle |
|---|---|
| Playa Jacó | A unos 50 m, un minuto a pie |
| Centro de Jacó | Restaurantes, tiendas, supermercado `[TODO: minutes]` |
| Playa Hermosa | Playa de surf, a unos 10 min en carro |
| Manuel Antonio | Parque nacional, a cerca de 1 hora al sur |
| Aeropuerto SJO | A unos 90 minutos en carro |

**Imagen:** `jaco-condo-view-jungle-to-ocean.jpg`

---

## 13. Ingresos por alquiler

- **Etiqueta de sección:** Ingresos por alquiler
- **H2:** Ya funciona como alquiler vacacional
- **Texto:** El apartamento 405 se alquila hoy en Airbnb y tiene un historial de reseñas de huéspedes. Puede mantenerlo como propiedad de renta, vivir en él, o las dos cosas.
- **Línea fija (negrita):** Cifras de ingresos por alquiler disponibles a solicitud.
- **Enlace (a Airbnb, abre en pestaña nueva):** Ver el anuncio en Airbnb y las reseñas de huéspedes

Variante corta del H2: `Un alquiler vacacional activo`

---

## 14. Compra (id `contact`) — CTA de cierre

- **Etiqueta de sección:** Venta directa del dueño
- **H2:** Hable directamente con el dueño
- **Texto:** US$375.000. Sin comisión de corredor. Financiamiento directo del dueño. Escriba para hacer preguntas, coordinar una visita o pedir las cifras de alquiler.
- **Botón principal (WhatsApp):** Escribir al dueño por WhatsApp
- **Botón secundario (Airbnb):** Véalo como lo ve un huésped
- **Letra pequeña bajo los botones:** WhatsApp +506 6144 8011 · Respuestas en español e inglés

`[TODO: confirm with owner]` — "Respuestas en español e inglés". Eliminar si no es cierto. On the Spanish page this line matters more: if the owner does not reply in Spanish, a Spanish-speaking buyer needs to know before writing.

Variantes cortas (móvil): `WhatsApp al dueño` / `Verlo en Airbnb`

---

## 15. Pie de página

- Línea 1: Sunset Boulevard · Apartamento 405 · Jacó Sur, Costa Rica
- Línea 2: Venta directa del dueño · US$375.000
- Línea 3 (enlace): WhatsApp +506 6144 8011
- Línea legal opcional: Información proporcionada de buena fe por el propietario. Verifique los detalles antes de comprar.

---

## 16. Textos funcionales (Danny)

| Posición | Texto |
|---|---|
| aria-label del botón de navegación | Consultar por WhatsApp sobre Sunset Boulevard 405 |
| Sufijo aria de enlaces a WhatsApp (pestaña nueva) | (abre WhatsApp) |
| Sufijo aria del enlace a Airbnb | (abre Airbnb en una pestaña nueva) |
| Lightbox: cerrar | Cerrar |
| Lightbox: siguiente / anterior | Foto siguiente / Foto anterior |
| Lightbox: contador | Foto {n} de {total} |
| Imagen que no carga | Foto no disponible |
| Enlace para saltar | Saltar al contenido |
| Volver arriba | Volver arriba |

`{n}` and `{total}` are tokens and stay verbatim. Set `<html lang="es">` on the Spanish page.

---

## 17. Notas sobre enlaces y texto alternativo (Priya)

- Cada enlace se entiende por sí solo: "Escribir al dueño por WhatsApp", "Ver el anuncio en Airbnb y las reseñas de huéspedes". Nunca "haga clic aquí" ni un "Ver" suelto.
- Los dos botones de WhatsApp (navegación y cierre) llevan a lo mismo; ambos textos nombran WhatsApp para que quien usa lector de pantalla sepa el destino.
- El texto alternativo describe lo que hay en la foto, sin lenguaje de venta. Ni precio ni "en venta" en el alt.

---

## 18. Mapa de fotos (alt en español)

Nombres de archivo idénticos a los del inglés. No se traducen.

| # | Archivo | Alt (ES) | Sección |
|---|---|---|---|
| 1 | jaco-ocean-view-condo-living-room-sunset.jpg | Sala de un apartamento con vista al mar en Jacó, abierta a un balcón al atardecer | Hero |
| 2 | jaco-condo-ocean-sunset-palm-trees-view.jpg | El océano Pacífico al atardecer, visto entre palmeras desde el apartamento | La vista |
| 3 | jaco-condo-living-room-ocean-view-day.jpg | Sala luminosa con sillón, televisor y puerta corrediza con vista al mar | La vista (banda) |
| 4 | jaco-condo-kitchen-island-ocean-view.jpg | Isla de cocina de cuarzo blanco con bancos azules y el mar por la ventana | Sala y cocina |
| 5 | jaco-condo-dining-island-sunset-view.jpg | Isla de cocina y sala con un atardecer rosado sobre el mar | Sala y cocina |
| 6 | jaco-condo-quartz-island-kitchen.jpg | Cocina abierta con isla de cuarzo, cocina de acero inoxidable y microondas | Sala y cocina |
| 7 | jaco-condo-kitchen-tile-backsplash.jpg | Salpicadero de azulejos con diseño sobre una encimera blanca | Sala y cocina |
| 8 | jaco-condo-kitchen-washer-dryer.jpg | Lavadora y secadora apiladas junto a la cocina | Sala y cocina |
| 9 | jaco-condo-living-room-sofa-artwork.jpg | Sillón de la sala con cuadros de colores y la cocina al fondo | Sala y cocina (opcional) |
| 10 | jaco-condo-master-bedroom-king-bed-ocean-view.jpg | Cama king en la habitación principal, con vista al mar a través de puertas de vidrio | Habitaciones |
| 11 | jaco-condo-master-bedroom-teal-wall.jpg | Habitación principal con una pared color turquesa y cuadros de olas | Habitaciones (extra) |
| 12 | jaco-condo-master-bedroom-evening-view.jpg | Habitación principal al anochecer, con vista hacia la terraza | Habitaciones (extra) |
| 13 | jaco-condo-second-bedroom-twin-beds.jpg | Segunda habitación con dos camas individuales, escritorio y ventana hacia los árboles | Habitaciones |
| 14 | jaco-condo-bathroom-walk-in-shower.jpg | Baño con ducha amplia tipo lluvia y mampara de vidrio | Habitaciones |
| 15 | jaco-condo-second-bathroom.jpg | Segundo baño con ducha amplia y espejo enmarcado | Habitaciones (extra) |
| 16 | jaco-condo-private-balcony-ocean-sunset.jpg | Balcón privado con baranda de vidrio, sobre los árboles y un cielo de atardecer | Banda del balcón |
| 17 | jaco-condo-balcony-dining-ocean-view.jpg | Mesa de comedor en el balcón, con vista sobre colinas verdes hasta el mar | Balcón |
| 18 | jaco-condo-balcony-glass-railing-jungle.jpg | Balcón con baranda de vidrio y una palmera en maceta junto a los árboles tropicales | Balcón |
| 19 | jaco-condo-balcony-table-living-room.jpg | Mesa del balcón frente a la sala, con árboles y el mar al fondo | Balcón |
| 20 | jaco-condo-balcony-living-room-dusk.jpg | Balcón y sala al anochecer, con las luces encendidas adentro | Balcón |
| 21 | jaco-condo-pool-stone-waterfall-wall.jpg | Piscina del edificio con una pared de piedra en cascada y vegetación arriba | El edificio |
| 22 | jaco-condo-swimming-pool-jungle.jpg | Piscina alargada junto a la pared de piedra, vista desde la terraza | El edificio |
| 23 | jaco-condo-covered-pool-lounge.jpg | Sala techada junto a la piscina, con sillones y tumbonas | El edificio |
| 24 | jaco-condo-covered-lounge-garden-view.jpg | Sala techada con mesa de comedor, abierta al jardín | El edificio |
| 25 | jaco-condo-covered-parking.jpg | Parqueo techado en la planta baja del edificio | El edificio |
| 26 | jaco-condo-building-walkway-ocean-air.jpg | Pasillo exterior hacia las puertas de los apartamentos, con árboles a un lado | El edificio |
| 27 | jaco-condo-rooftop-terrace-ocean-sunset.jpg | Terraza en la azotea con baranda de vidrio, sobre Playa Jacó al atardecer | Banda de la azotea |
| 28 | jaco-condo-rooftop-lounge-chairs-sunset.jpg | Tumbonas en la azotea frente a la bahía al atardecer | Azotea |
| 29 | jaco-condo-rooftop-deck-bay-view.jpg | Amplia terraza en la azotea con sillas y vista sobre la bahía | Azotea |
| 30 | jaco-condo-rooftop-chairs-ocean-view-day.jpg | Sillas y plantas en la azotea, con el mar de día | Azotea |
| 31 | jaco-condo-rooftop-view-jungle-sunset.jpg | Vista desde la azotea sobre las copas de los árboles hasta el mar al anochecer | Azotea |
| 32 | jaco-condo-view-jungle-to-ocean.jpg | Vista sobre las copas de los árboles de Jacó Sur hasta el mar | Ubicación |
| 33 | jaco-condo-living-room-sofa-sunset.jpg | Sillón de la sala frente al balcón y un cielo de tarde | La vista (opcional) |

Note: *cocina* means both "kitchen" and "stove". In alt #6 the order "cocina abierta ... cocina de acero inoxidable" reads cleanly in context; if Priya wants zero ambiguity, use `estufa de acero inoxidable` (clear in MX/CO, slightly less natural in CR).

---

## 19. Pendientes

Los mismos seis `[TODO]` del archivo en inglés. Cuando el dueño responda, se corrige primero el inglés y luego estas líneas:
1. Número de apartamentos del edificio (sección 9).
2. Tiempo a pie o en carro al centro de Jacó (sección 12).
3. Muebles y electrónicos incluidos en la venta (sección 11).
4. Si el dueño responde en español además de inglés (sección 14).
5. Si se mantiene "con lugar para cuatro" en la isla (sección 6).
6. Coordenadas exactas para `geo` y dominio final (sección 1).
