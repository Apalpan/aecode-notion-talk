# De información dispersa a sistemas vivos · AECODE × Notion

Deck interactivo para una **charla de 20 minutos en un evento de la comunidad de Notion**, presentada por **Erika Delgado (AECODE)**.

> Tesis: *“Notion nos ayudó a pasar de operar con información dispersa a construir un sistema vivo de conocimiento, ejecución e inteligencia artificial.”*

No es un tutorial de Notion: es una historia real de transformación operativa en AECODE, usando el **AI Construction Summit** como caso concreto (sponsors, speakers, marketing, agenda, registro, app + bot de IA, comunidad, alianzas y post-evento).

## Stack y diseño

- **Vite + React + TypeScript**, sin dependencias de UI.
- Motor de presentación AECODE (estética *Jarvis-light*: lienzo casi blanco + acento verde OKLCH `hue 152` + grafito, capa HUD).
- Una sola perilla `--hue` re-tematiza todo (ver `src/styles/tokens.css`).
- Tipografías variables: Space Grotesk (display) + Inter (texto).

## Cómo se presenta

| Tecla | Acción |
|-------|--------|
| `→` / `Espacio` / `←` | Avanzar / retroceder |
| `G` u `O` | Índice de diapositivas (overview) |
| `F` | Pantalla completa |
| **`N`** | **Modo presentador**: teleprompter con el guion + cronómetro de 20 min |
| `Home` / `End` | Primera / última diapositiva |
| swipe | Navegación táctil en móvil |

El **modo presentador** muestra, por diapositiva, el guion condensado y la franja de tiempo objetivo (el cronómetro avisa al acercarse y al pasar los 20 min).

## 13 diapositivas

1. Portada — *De información dispersa a sistemas vivos*
2. ¿Dónde vive realmente el conocimiento de tu empresa?
3. No falta información: está fragmentada (la empresa paga ×2)
4. AECODE: comunidad, educación, tecnología e IA
5. El reto: no más herramientas, sino una arquitectura
6. Notion como centro de operaciones (no otra carpeta)
7. Caso real: AI Construction Summit — los frentes
8. Sponsors: de conversaciones a un CRM operativo (board)
9. Reuniones → decisiones · tareas · responsables
10. Notion (sistema) + IA (acelerador) + equipo (criterio)
11. Lecciones aprendidas
12. Invitación al AI Construction Summit
13. Cierre — la información convertida en acción

## Desarrollo

```bash
npm install
npm run dev        # servidor local
npm run typecheck  # tsc --noEmit
npm run build      # producción → dist/
```

## Despliegue

GitHub Pages vía Actions (`.github/workflows/deploy.yml`). `base` en `vite.config.ts` apunta a `/aecode-notion-talk/`.
URL prevista: `https://apalpan.github.io/aecode-notion-talk/`.

## Notas para Erika antes de presentar

- El guion dice **“seguimos mejorando”**, no “el sistema es perfecto”: suena más creíble.
- La **demo en vivo** ideal son 3 cosas como máximo: dashboard general, CRM de sponsors y minuta convertida en tareas. Más se vuelve disperso.
- Los **beneficios de Notion/Replit** se mencionan como “beneficios, experiencias y sorpresas” hasta confirmarlos; no prometer cuentas/regalos cerrados.
- El cierre vende el Summit sin sonar a pitch: *si te interesa Notion, IA y sistemas, este evento amplía la conversación hacia industria real.*

---

AECODE / GEN+ · `apalpan@genplusdesign.com`
