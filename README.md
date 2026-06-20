# De información dispersa a un sistema vivo · AECODE × Notion

Deck interactivo para una **charla de ~18 minutos en la comunidad de Notion**, presentada por **Erika Delgado (AECODE)**.

🔗 **Live:** https://apalpan.github.io/aecode-notion-talk/

> Eje: *cómo AECODE pasó de operar con conocimiento fragmentado (chats, correos, carpetas, memoria humana) a un **centro de operaciones** donde la información se convierte en decisiones, tareas, seguimiento, aprendizaje e IA.*

No es un tutorial de Notion: es una **historia real de transformación operativa**, con el **AI Construction Summit** como caso concreto de complejidad.

## Stack y diseño

- **Vite + React + TypeScript**, sin dependencias de UI.
- Motor de presentación AECODE adaptado a un solo deck.
- **Tema oscuro premium por defecto** (OKLCH tri-acento: violeta `300` · azul `255` · verde `152`), aurora animada de fondo, títulos con shimmer tri-color y un sistema de componentes de cristal (`nx-*`). Toggle a claro (AECODE Jarvis-light) disponible.
- Tipografías variables: Space Grotesk (display) + Inter (texto).

## Cómo se presenta

| Tecla | Acción |
|-------|--------|
| `→` / `Espacio` / `←` | Avanzar / retroceder |
| `G` u `O` | Índice de diapositivas (overview) |
| `F` | Pantalla completa |
| **`N`** | **Modo presentador**: teleprompter con el guion + cronómetro de 18 min |
| `Home` / `End` | Primera / última diapositiva |
| swipe | Navegación táctil en móvil |

El **modo presentador** muestra el guion condensado por diapositiva y la franja de tiempo objetivo (el cronómetro avisa al acercarse y al pasar los 18 min).

## 25 diapositivas

1. Carátula — *De información dispersa a un sistema vivo*
2. Erika Delgado
3. Experiencia (comunidad · educación · tecnología)
4. AECODE
5. AECODE como ecosistema
6. ¿Dónde vive el conocimiento?
7. Problema y costo (dispersión)
8. El caos en lo pequeño (chat)
9. Operación frágil
10. Crecimiento rompe el contexto
11. Punto de quiebre: arquitectura
12. AI Construction Summit
13. Complejidad operativa del Summit
14. Sistema organizacional
15. Equipos conectados
16. Notion como centro de operaciones
17. Funcionalidades
18. Flujo operativo (capturar → ordenar → ejecutar → aprender)
19. Centro de operaciones y trazabilidad
20. Sistema por frentes
21. Bases conectadas (relacional)
22. Recomendaciones
23. Stack tecnológico
24. Cierre conceptual
25. CTA — sigamos construyendo sistemas vivos

## Desarrollo

```bash
npm install
npm run dev        # servidor local
npm run typecheck  # tsc --noEmit
npm run build      # producción → dist/
```

## Despliegue

GitHub Pages vía Actions (`.github/workflows/deploy.yml`); cada push a `main` redepliega. `base` en `vite.config.ts` = `/aecode-notion-talk/`.

## Notas para Erika antes de presentar

- **Foto:** el slide 2 usa un monograma «ED» como placeholder premium. Para una foto real, edita `ErikaSlide` en `src/slides/slides.tsx` y reemplaza `<span className="mono">ED</span>` por `<img src="…" alt="Erika Delgado" />`.
- **QR (slide 25):** es un placeholder decorativo (`.nx-qr .qbox`); sustitúyelo por una imagen de QR real cuando tengas el enlace final.
- El guion dice **«seguimos mejorando»**, no «sistema perfecto»: suena más creíble.
- La **demo en vivo** ideal son 3 cosas como máximo: dashboard general, CRM de sponsors y minuta convertida en tareas.
- Los **beneficios de Notion/Replit** se mencionan como recursos para la comunidad hasta confirmarlos; no prometer cuentas/regalos cerrados.

---

AECODE / GEN+ · `apalpan@genplusdesign.com`
