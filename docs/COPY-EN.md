# Sunset Boulevard 405 — English copy (for-sale page)

Source of truth for all English strings on the one-page sale site. The Spanish translation works from this file.

**Rules for anyone editing this file**
- Facts come only from the confirmed list in the brief. No income, nightly-rate or occupancy numbers, ever. The fixed line is "Rental income figures available on request."
- Short sentences. One idea each. No "paradise", "hidden gem", "nestled", "stunning", "breathtaking".
- Units: write "797 sq ft (74 m²)" in English. Spanish can lead with m².
- Phone: +506 6144 8011. WhatsApp link: `https://wa.me/50661448011?text=...` (prefilled text below).

---

## 1. SEO block

### Title tag (58 chars)
`Ocean View Condo for Sale in Jacó, Costa Rica | Sunset Blvd 405`

Shorter fallback (45): `Ocean View Condo for Sale, Jacó | Sunset 405`

### Meta description (154 chars)
`2-bed, 2-bath ocean view condo in South Beach Jacó, 50 m from the sand. Fully furnished, pool, rooftop. $375,000, sold by owner. Owner financing available.`

### Open Graph / social
- `og:title`: `Sunset Boulevard 405 — Ocean View Condo for Sale in Jacó`
- `og:description`: `A quiet 2-bedroom condo on the 4th floor, 50 m from Playa Jacó. Fully furnished. $375,000. No agency fees. Owner financing available.`
- `og:type`: `website`
- `og:image`: `img/jaco-ocean-view-condo-living-room-sunset.jpg` (hero; use the full URL once the domain is final)
- `og:image:alt`: `Living room of an ocean view condo in Jacó, open to a balcony at sunset`
- `twitter:card`: `summary_large_image` (same title, description, image)

### JSON-LD draft (Leo to check; place in `<head>`)
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Sunset Boulevard 405 — Ocean View Condo for Sale in Jacó, Costa Rica",
  "description": "Fully furnished 2-bedroom, 2-bathroom condo on the 4th floor, facing the ocean, about 50 m from Playa Jacó in South Beach Jacó. Pool, rooftop terrace, covered parking. Sold by owner, no agency fees, owner financing available.",
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
    "seller": { "@type": "Person", "name": "Owner" }
  },
  "about": {
    "@type": "Apartment",
    "name": "Sunset Boulevard, Unit 405",
    "numberOfRooms": 2,
    "numberOfBedrooms": 2,
    "numberOfBathroomsTotal": 2,
    "occupancy": { "@type": "QuantitativeValue", "maxValue": 4 },
    "floorLevel": "4",
    "floorSize": { "@type": "QuantitativeValue", "value": 74, "unitCode": "MTK" },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Ocean view", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Swimming pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Rooftop terrace", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Covered parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Elevator", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Washer and dryer", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Furnished", "value": true }
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
Notes for Leo: add `geo` (lat/long) only once the owner confirms the exact pin. Swap the URL if the site moves to its own domain. `seller.name` stays generic on purpose.

### Keyword map (natural use only)
| Phrase | Where it lives |
|---|---|
| ocean view condo for sale Jacó | Title, H1, meta |
| Costa Rica beach condo for sale | Hero sub-line, H2 "The facts" intro |
| South Beach Jacó | Hero tag, Location H2, meta |
| Playa Jacó | Highlights, Location |
| owner financing / for sale by owner | Hero price line, Buying section |

---

## 2. Navigation

| Slot | Label |
|---|---|
| Logo / home | Sunset Boulevard · 405 |
| Link 1 | The facts |
| Link 2 | The home |
| Link 3 | The building |
| Link 4 | Location |
| Link 5 | Buying |
| Button (WhatsApp) | Enquire |

Mobile: only the logo and the "Enquire" button show.

WhatsApp prefilled message (URL-encode in the link):
`Hi, I'm interested in buying Sunset Boulevard 405 in Jacó.`

---

## 3. Hero

- **Tag:** South Beach Jacó · Costa Rica · Unit 405
- **H1:** Ocean view condo for sale in Jacó
  - Design alternative (if Sofia wants the two-line italic style): `A quiet home` / `*above the Pacific*` — but then the SEO phrase must sit in a visible line directly below. Recommended: keep the plain H1 above.
- **Sub-line:** Two bedrooms on the 4th floor, facing the sea. Fully furnished, in a small, quiet building 50 m from the beach.
- **Price:** $375,000
- **Price line:** No agency fees · For sale by owner · Owner financing available
- **Primary CTA (WhatsApp):** Enquire on WhatsApp
- **Secondary CTA (anchor to #facts):** See the facts
- **Scroll hint:** Scroll

**Image:** `jaco-ocean-view-condo-living-room-sunset.jpg` (was sb405-05)

Length variants for Sofia / Rhea:
- H1 short (320 px): `Ocean view condo, Jacó`
- Sub-line short: `Two bedrooms, facing the sea. 50 m from the beach.`
- Price line short (stack on mobile, one per line): `No agency fees` / `Sold by owner` / `Owner financing`

---

## 4. Highlights — "at a glance" (id `facts`)

Replaces the old 4-item stats strip. Show the first four as big numbers; the rest as a two-column list below.

- **Section tag:** At a glance
- **H2:** The facts
- **Intro (one line):** A Costa Rica beach condo, ready to live in or rent out.

**Big numbers**
| Number | Label |
|---|---|
| 2 | Bedrooms |
| 2 | Bathrooms |
| 4th | Floor, ocean-facing |
| 797 | sq ft (74 m²) |

**Key facts list**
| Label | Value |
|---|---|
| Price | $375,000 |
| Fees | No agency fees. Sold by owner. |
| Financing | Owner financing available |
| Beach | About 50 m to Playa Jacó |
| Area | South Beach Jacó, the quiet end of the bay |
| Furnished | Fully furnished. Sleeps 4. |
| Parking | One dedicated covered space |
| Building | Pool, rooftop terrace, elevator |
| HOA | $495 per month |
| Income | Active vacation rental on Airbnb. Rental income figures available on request. |
| Airport | About 90 minutes from SJO |

---

## 5. The view (id `view`)

- **Section tag:** The view
- **H2:** The sea is in every room you use most
- **Body 1:** The living room opens through a wall of sliding glass to a private terrace. Palms, then water, then sky.
- **Body 2:** You see the waves from the sofa. In the evening the light turns gold, then pink, and the whole room takes on the colour.

Short H2 variant: `The sea, from the sofa`

**Images:** `jaco-condo-ocean-sunset-palm-trees-view.jpg` (side panel, was sb405-37); full-width band after the section: `jaco-condo-living-room-ocean-view-day.jpg` (was sb405-00).

---

## 6. Living & kitchen (id `home`)

- **Section tag:** Living & kitchen
- **H2:** Open plan, from the stove to the sea
- **Body:** One open space runs from the kitchen to the terrace. A quartz island seats four. Stainless steel appliances and a hand-painted tile backsplash. A stacked washer and dryer sit in their own corner.
- **Short line under the gallery (optional caption):** Fully furnished. Bring a suitcase.

Short H2 variant: `Open plan, facing the sea`

**Images (gallery, 1 large + 4 small):**
- Large: `jaco-condo-kitchen-island-ocean-view.jpg` (sb405-0)
- `jaco-condo-dining-island-sunset-view.jpg` (sb405-36)
- `jaco-condo-quartz-island-kitchen.jpg` (sb405-2)
- `jaco-condo-kitchen-tile-backsplash.jpg` (sb405-8)
- `jaco-condo-kitchen-washer-dryer.jpg` (sb405-7)
- Optional extra: `jaco-condo-living-room-sofa-artwork.jpg` (sb405-11)

Note for Marcus/Sofia: the current site says the island "seats four" only by the photos (four stools visible). If the owner prefers, drop "seats four". `[TODO: confirm with owner]`

---

## 7. Bedrooms & bathrooms (id `rooms`)

- **Section tag:** Bedrooms & bathrooms
- **H2:** Two bedrooms, two full baths
- **Intro:** One bedroom faces the ocean, one faces the green hills. Both are quiet, cool and fully made up.

**Card 1**
- Label: Main bedroom
- H3: King bed, ocean view
- Text: Wake to the sea through a full-height sliding door. The door opens straight onto the terrace.
- Image: `jaco-condo-master-bedroom-king-bed-ocean-view.jpg` (sb405-41)

**Card 2**
- Label: Second bedroom
- H3: Two twin beds, jungle view
- Text: Two twin beds and a desk, with a view into the trees. Good for children, friends or a home office.
- Image: `jaco-condo-second-bedroom-twin-beds.jpg` (sb405-22)

**Card 3**
- Label: Bathrooms
- H3: Two full bathrooms
- Text: Walk-in rain showers and clean, simple finishes. Straight from the beach to a proper rinse.
- Image: `jaco-condo-bathroom-walk-in-shower.jpg` (sb405-23)

Extra images (optional strip under the cards): `jaco-condo-master-bedroom-teal-wall.jpg` (sb405-18), `jaco-condo-master-bedroom-evening-view.jpg` (sb405-43), `jaco-condo-second-bathroom.jpg` (sb405-42).

---

## 8. Balcony band (full-width image with overlay)

- **Section tag:** Private terrace
- **H2:** A front-row seat on the Pacific
- **Line:** Morning coffee, evening light. Scarlet macaws fly past most days.

Short H2 variant: `Front row on the Pacific`

**Image:** `jaco-condo-private-balcony-ocean-sunset.jpg` (sb405-35)
**Supporting images (if Marcus adds a small grid):** `jaco-condo-balcony-dining-ocean-view.jpg` (sb405-12), `jaco-condo-balcony-glass-railing-jungle.jpg` (sb405-15), `jaco-condo-balcony-table-living-room.jpg` (sb405-02), `jaco-condo-balcony-living-room-dusk.jpg` (sb405-45).

---

## 9. The building (id `building`)

- **Section tag:** The building
- **H2:** A small building, kept calm
- **Body:** Sunset Boulevard is an intimate condominium with only a few homes. There is a pool with a stone waterfall wall, a covered lounge beside it, an elevator and covered parking. Shared spaces stay quiet and well kept.

`[TODO: confirm with owner]` — exact number of units in the building. If known, replace "only a few homes" with the number (e.g. "only 12 homes").

Short H2 variant: `Small and calm`

**Amenity strip (optional, 4 items under the body)**
| Name | Detail |
|---|---|
| Pool | Stone waterfall wall |
| Lounge | Covered, beside the pool |
| Parking | Covered, one dedicated space |
| Elevator | To every floor |

**Images:**
- `jaco-condo-pool-stone-waterfall-wall.jpg` (sb405-30)
- `jaco-condo-swimming-pool-jungle.jpg` (sb405-31)
- `jaco-condo-covered-pool-lounge.jpg` (sb405-29)
- `jaco-condo-covered-lounge-garden-view.jpg` (sb405-04)
- `jaco-condo-covered-parking.jpg` (sb405-32)
- `jaco-condo-building-walkway-ocean-air.jpg` (sb405-24)

---

## 10. Rooftop band (full-width image with overlay)

- **Section tag:** Rooftop terrace
- **H2:** Sunset, from the roof
- **Line:** The shared rooftop looks over the whole bay. Bring a drink and stay until dark.

Longer H2 variant: `The whole bay, from the roof`

**Main image:** `jaco-condo-rooftop-terrace-ocean-sunset.jpg` (sb405-46)
**Supporting:** `jaco-condo-rooftop-lounge-chairs-sunset.jpg` (sb405-47), `jaco-condo-rooftop-deck-bay-view.jpg` (sb405-48), `jaco-condo-rooftop-chairs-ocean-view-day.jpg` (sb405-26), `jaco-condo-rooftop-view-jungle-sunset.jpg` (sb405-49).

---

## 11. Inside the home — what's included (amenities grid)

- **Section tag:** What's included
- **H2:** Furnished and ready
- **Intro:** Everything below stays with the home.

| Name | Detail |
|---|---|
| Ocean view | From the living room, main bedroom and terrace |
| Private terrace | Glass railing, dining set |
| Air conditioning | In every room |
| Smart TVs | Living room and main bedroom |
| Full kitchen | Quartz island, stainless steel appliances |
| Washer & dryer | In the unit |
| Smart lock | Keyless entry |
| Two bathrooms | Walk-in showers |
| Furnished | Beds, linens, kitchenware |
| Covered parking | One dedicated space |
| Pool & rooftop | Shared with a small building |
| Wildlife | Scarlet macaws from the terrace |

`[TODO: confirm with owner]` — the furniture inventory ("beds, linens, kitchenware") and that the dining set and TVs are included in the sale.

Note for Sofia: the current site uses emoji icons. Recommend simple line icons or none; emoji render differently on every device.

---

## 12. Location (id `location`)

- **Section tag:** Location
- **H2:** South Beach Jacó: quiet, and close to everything
- **Body 1:** The condo sits at the south end of Playa Jacó, where the beach curves into a bay. The water is calmer here. The street is quiet.
- **Body 2:** The centre of Jacó, with its restaurants and shops, is a short drive or a long walk away. The bar strip stays out of earshot.

Short H2 variant: `South Beach Jacó`

`[TODO: confirm with owner]` — the walking or driving time to the centre of Jacó. Replace "a short drive or a long walk" with the real figure.

**Location points**
| Name | Detail |
|---|---|
| Playa Jacó | About 50 m, a one-minute walk |
| Jacó centre | Restaurants, shops, supermarket `[TODO: minutes]` |
| Playa Hermosa | Surf beach, about 10 min by car |
| Manuel Antonio | National park, about 1 hour south |
| SJO airport | About 90 minutes by car |

**Image:** `jaco-condo-view-jungle-to-ocean.jpg` (sb405-03)

---

## 13. Rental income

Small section or a callout box; can sit just before Buying.

- **Section tag:** Rental income
- **H2:** Already working as a vacation rental
- **Body:** Unit 405 rents on Airbnb today, with a record of guest reviews. Keep it as an income property, live in it, or both.
- **Fixed line (bold):** Rental income figures available on request.
- **Link (to Airbnb, opens new tab):** See the Airbnb listing and guest reviews

Short H2 variant: `A working vacation rental`

---

## 14. Buying (id `contact`) — closing CTA

- **Section tag:** For sale by owner
- **H2:** Talk to the owner directly
- **Body:** $375,000. No agency fees. Owner financing available. Send a message to ask questions, book a viewing or request the rental figures.
- **Primary button (WhatsApp):** Message the owner on WhatsApp
- **Secondary button (Airbnb):** See it as a guest sees it
- **Small print under the buttons:** WhatsApp +506 6144 8011 · Replies in English and Spanish

`[TODO: confirm with owner]` — "Replies in English and Spanish". Drop if not true.

Short button variants (mobile): `WhatsApp the owner` / `Guest view on Airbnb`

---

## 15. Footer

- Line 1: Sunset Boulevard · Unit 405 · South Beach Jacó, Costa Rica
- Line 2: For sale by owner · $375,000
- Line 3 (link): WhatsApp +506 6144 8011
- Optional legal line: Information provided by the owner in good faith. Please verify details before purchase.

---

## 16. Functional strings (Danny)

| Slot | Text |
|---|---|
| Nav button aria-label | Enquire about Sunset Boulevard 405 on WhatsApp |
| WhatsApp links (new tab) aria suffix | (opens WhatsApp) |
| Airbnb link aria suffix | (opens Airbnb in a new tab) |
| Lightbox: close | Close |
| Lightbox: next / previous | Next photo / Previous photo |
| Lightbox: counter | Photo {n} of {total} |
| Image failed to load | Photo unavailable |
| Skip link | Skip to content |
| Back to top | Back to top |

---

## 17. Link and alt-text notes (Priya)

- Every link reads on its own: "Message the owner on WhatsApp", "See the Airbnb listing and guest reviews". Never "click here" or a bare "View".
- Two buttons both open WhatsApp (nav + closing). Same destination, same intent: keep both labels starting with WhatsApp-related verbs so screen-reader users hear the destination.
- Alt text describes what is in the frame, not selling language. Decorative duplicates in a lightbox can reuse the same alt.
- Do not put the price or "for sale" in alt text.

---

## 18. Photo map

Chosen: 33 of 56. Near-duplicates and weaker angles were dropped; the exact set is in the "Not used" list below the table.

| # | Current file | New SEO filename | Alt text (EN) | Section |
|---|---|---|---|---|
| 1 | sb405-05.jpg | jaco-ocean-view-condo-living-room-sunset.jpg | Living room of an ocean view condo in Jacó, open to a balcony at sunset | Hero |
| 2 | sb405-37.jpg | jaco-condo-ocean-sunset-palm-trees-view.jpg | Pacific Ocean at sunset seen past palm trees from the condo | The view |
| 3 | sb405-00.jpg | jaco-condo-living-room-ocean-view-day.jpg | Bright living room with sofa, TV and a sliding door to the sea view | The view (full-width band) |
| 4 | sb405-0.jpg | jaco-condo-kitchen-island-ocean-view.jpg | White quartz kitchen island with blue stools and the ocean through the window | Living & kitchen |
| 5 | sb405-36.jpg | jaco-condo-dining-island-sunset-view.jpg | Kitchen island and living room with a pink sunset over the sea | Living & kitchen |
| 6 | sb405-2.jpg | jaco-condo-quartz-island-kitchen.jpg | Open kitchen with quartz island, stainless steel stove and microwave | Living & kitchen |
| 7 | sb405-8.jpg | jaco-condo-kitchen-tile-backsplash.jpg | Patterned tile backsplash above a white kitchen counter | Living & kitchen |
| 8 | sb405-7.jpg | jaco-condo-kitchen-washer-dryer.jpg | Stacked washer and dryer beside the kitchen | Living & kitchen |
| 9 | sb405-11.jpg | jaco-condo-living-room-sofa-artwork.jpg | Living room sofa with colourful artwork and the kitchen behind | Living & kitchen (optional) |
| 10 | sb405-41.jpg | jaco-condo-master-bedroom-king-bed-ocean-view.jpg | King bed in the main bedroom with an ocean view through glass doors | Bedrooms |
| 11 | sb405-18.jpg | jaco-condo-master-bedroom-teal-wall.jpg | Main bedroom with a teal accent wall and wave prints | Bedrooms (extra) |
| 12 | sb405-43.jpg | jaco-condo-master-bedroom-evening-view.jpg | Main bedroom at dusk with a view out to the terrace | Bedrooms (extra) |
| 13 | sb405-22.jpg | jaco-condo-second-bedroom-twin-beds.jpg | Second bedroom with two twin beds, a desk and a window to the trees | Bedrooms |
| 14 | sb405-23.jpg | jaco-condo-bathroom-walk-in-shower.jpg | Bathroom with a glass walk-in rain shower | Bedrooms |
| 15 | sb405-42.jpg | jaco-condo-second-bathroom.jpg | Second bathroom with a walk-in shower and framed mirror | Bedrooms (extra) |
| 16 | sb405-35.jpg | jaco-condo-private-balcony-ocean-sunset.jpg | Private balcony with glass railing, looking over trees to a sunset sky | Balcony band |
| 17 | sb405-12.jpg | jaco-condo-balcony-dining-ocean-view.jpg | Balcony dining table with a view over green hills to the sea | Balcony |
| 18 | sb405-15.jpg | jaco-condo-balcony-glass-railing-jungle.jpg | Balcony with glass railing and potted palm beside the tropical trees | Balcony |
| 19 | sb405-02.jpg | jaco-condo-balcony-table-living-room.jpg | Balcony table outside the living room, with trees and sea beyond | Balcony |
| 20 | sb405-45.jpg | jaco-condo-balcony-living-room-dusk.jpg | Balcony and living room at dusk, lights on inside | Balcony |
| 21 | sb405-30.jpg | jaco-condo-pool-stone-waterfall-wall.jpg | Building pool with a stone waterfall wall and jungle above | The building |
| 22 | sb405-31.jpg | jaco-condo-swimming-pool-jungle.jpg | Long swimming pool beside the stone wall, seen from the deck | The building |
| 23 | sb405-29.jpg | jaco-condo-covered-pool-lounge.jpg | Covered lounge by the pool with sofas and sun loungers | The building |
| 24 | sb405-04.jpg | jaco-condo-covered-lounge-garden-view.jpg | Covered lounge with a dining table, open to the garden | The building |
| 25 | sb405-32.jpg | jaco-condo-covered-parking.jpg | Covered parking area on the ground floor of the building | The building |
| 26 | sb405-24.jpg | jaco-condo-building-walkway-ocean-air.jpg | Open-air walkway to the unit doors, with trees alongside | The building |
| 27 | sb405-46.jpg | jaco-condo-rooftop-terrace-ocean-sunset.jpg | Rooftop terrace with glass railing above Playa Jacó at sunset | Rooftop band |
| 28 | sb405-47.jpg | jaco-condo-rooftop-lounge-chairs-sunset.jpg | Lounge chairs on the rooftop facing the bay at sunset | Rooftop |
| 29 | sb405-48.jpg | jaco-condo-rooftop-deck-bay-view.jpg | Wide rooftop deck with chairs and a view over the bay | Rooftop |
| 30 | sb405-26.jpg | jaco-condo-rooftop-chairs-ocean-view-day.jpg | Rooftop chairs and plants with the ocean in daylight | Rooftop |
| 31 | sb405-49.jpg | jaco-condo-rooftop-view-jungle-sunset.jpg | View from the rooftop over green treetops to the sea at dusk | Rooftop |
| 32 | sb405-03.jpg | jaco-condo-view-jungle-to-ocean.jpg | View over the treetops of South Beach Jacó to the ocean | Location |
| 33 | sb405-39.jpg | jaco-condo-living-room-sofa-sunset.jpg | Living room sofa facing the balcony and an evening sky | The view (optional second image) |

**Not used (23):** sb405-3, -4, -5, -6, -9, -14, -16, -17, -19, -20, -21, -25, -27, -28, -33, -34, -38, -40, -44, -50, -51, -u, -01.
Reasons: near-duplicate kitchen/island angles (-3, -4, -5, -6, -9, -51, -u, -01), repeated balcony and bedroom angles (-14, -16, -17, -19, -20, -21, -38, -40, -44), interior hallway and lobby (-25, -33), rooftop daytime repeats (-27, -28, -50), portrait living shot that crops badly (-34).

Photo identification note: the contact sheet labels overlap, so filenames were matched by sheet position and spot-checked by opening sb405-0, -2, -05, -8, -36, -46 and -u. Before renaming, open each kept file once to confirm the alt text matches the frame.

---

## 19. Open items (all `[TODO]` markers in one place)

1. Number of homes in the building (section 9).
2. Walking or driving time to Jacó centre (section 12).
3. What furniture and electronics are included in the sale (section 11).
4. Whether the owner replies in Spanish as well as English (section 14).
5. Whether the island "seats four" stays (section 6).
6. Exact map pin for JSON-LD `geo`, and the final domain for all URLs (section 1).
