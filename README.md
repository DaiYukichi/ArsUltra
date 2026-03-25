    # ArsUltra: Orbital Precision Web Experience

A high-end, modern aerospace engineering website built with **Vite**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run development server:**
    ```bash
    npm run dev
    ```
3.  **Build for production:**
    ```bash
    npm run build
    ```

## 📄 Managing Datasheets (PDFs)
To provide technical downloads for products:

1.  **Upload the PDF:** Place your file in the `public/datasheets/` directory.
2.  **Update the Data:** Open `src/data/systems.ts`.
3.  **Link the File:** Find the corresponding product and update the `datasheetUrl` property.
    ```typescript
    {
        id: "freedom-f1",
        name: "FREEDOM F1 Spacecraft",
        // ...
        datasheetUrl: "/datasheets/freedom-f1-v2.pdf" // Path relative to public/
    }
    ```
The system will automatically enable the "Datasheet ->" button on the technical catalog page.

---

## 📚 Code Documentation
The codebase is documented using **JSDoc** for key modules:
-   `src/core/translations.ts`: Explains the multi-language logic.
-   `src/components/navbar.ts`: Details on the dynamic URL generation.
-   `src/data/systems.ts`: Instructions for data management.
-   `src/components/ui.ts`: Blueprint for all modular HTML components.

---

## 🏗 Project Architecture

### 🌍 Multi-Language System (EN / ES)
The site uses a folder-based approach for Spanish content (`/es/`).
-   **Translations:** Managed centrally in `src/translations.ts`.
-   **Routing:** Root `/` is English; `/es/` is Spanish. Logic files in `src/` automatically detect the language from the URL.

### 📁 Directory Structure
-   `/public/`: Static assets (images, PDFs, maps).
-   `/src/`: TypeScript logic and components.
-   `/es/`: Spanish HTML entry points.
-   `index.html`: Main English entry point.

---

## 🖼 How to Add Images
I've left placeholders for high-resolution mission imagery and system blueprints.

1.  **Place the image** in the `public/` directory (e.g., `public/images/mission-heritage.jpg`).
2.  **Update the logic:**
    -   For **Home Page** products: Update `src/main.ts`.
    -   For **Company** page: Update `src/company-logic.ts`.
    -   For **Systems**: Update `src/systems-logic.ts`.
3.  **Example Change:**
    In `src/company-logic.ts`, find the `#identity-section` rendering and replace the placeholder `div` with an `img` tag:
    ```typescript
    // Replace:
    <div class="bg-slate-900/50 rounded-lg aspect-video flex items-center justify-center border border-white/5">
        <span class="mono text-slate-600 uppercase text-[10px] tracking-widest">Heritage Visual Archive</span>
    </div>

    // With:
    <img src="/images/mission-heritage.jpg" class="rounded-lg shadow-2xl opacity-80 hover:opacity-100 transition duration-700">
    ```

---

## 📑 How to Add Datasheets (Downloads)
1.  **Place the PDF** in the `public/datasheets/` directory.
2.  **Update the Product data:**
    In `src/systems-logic.ts` (and `src/main.ts` for featured products), add a `datasheetUrl` property to the product object.
3.  **Update the Link:**
    In the `renderProducts()` function, update the button to an `<a>` tag:
    ```typescript
    // Replace:
    <button class="text-[9px] font-black uppercase tracking-[0.25em] text-white hover:text-orange-500 transition">Datasheet -></button>

    // With:
    <a href="${p.datasheetUrl || '#'}" download class="text-[9px] font-black uppercase tracking-[0.25em] text-white hover:text-orange-500 transition">Datasheet -></a>
    ```

---

## 🔧 Modification Guide

### Adding New Products
Add a new object to the `products` array in `src/systems-logic.ts`.
```typescript
{
    id: "new-system",
    name: "System Name",
    category: lang === 'es' ? "Categoría" : "Category",
    radHardRating: "100 krad",
    description: "System description...",
    specs: ["Spec 1", "Spec 2"]
}
```

### Changing Translations
All global text (titles, taglines, buttons) is located in `src/translations.ts`. Simply update the `en` or `es` value for the corresponding key.

---

## 🎨 Design System: "Orbital Precision"
-   **Main Colors:** Space Black (`#020617`), High-Vis Orange (`#f97316`), Slate Gray.
-   **Typography:** Inter (900/Black) for headlines, Roboto Mono for data.
-   **Visual Language:** Grid overlays, glassmorphism (`backdrop-blur-xl`), and subtle glows.
