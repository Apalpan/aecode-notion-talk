import type { DeckDef, SlideDef } from '../deck/Deck'
import AecodeLogo from '../deck/AecodeLogo'
import { st, Head } from '../deck/primitives'
import {
  Hub, VS, Flow, SystemOrb, ScatterSources, ChatChaos, Chaos, Growth,
  Frentes, Teams, Trace, FrentesDetail, RelWeb, Reco, Stack, TriFlow,
} from './visuals'

/* ============================== 01 · PORTADA ============================= */
function Cover() {
  return (
    <div className="nx-cover">
      <div className="cover">
        <AecodeLogo className="cover-mark up" style={st(0)} />
        <p className="cover-eyebrow up" style={st(1)}>Notion Community · AECODE</p>
        <h1 className="cover-title up" style={st(2)}>
          De información <span className="grad">dispersa</span><br />a un <span className="grad">sistema vivo</span>
        </h1>
        <p className="cover-lead up" style={st(3)}>
          Cómo AECODE rediseñó su forma de trabajar uniendo conocimiento, ejecución
          e inteligencia artificial — con el AI Construction Summit como caso real.
        </p>
        <div className="cover-sign up" style={st(4)}>
          <span className="cs-name">Erika Delgado</span>
          <span className="cs-dot" aria-hidden="true" />
          <span className="cs-role">Fundadora · equipo AECODE</span>
        </div>
        <div className="cover-hud up" style={st(5)} aria-hidden="true">
          <span className="ch-item"><b>1</b> historia de transformación</span>
          <span className="ch-sep" />
          <span className="ch-item"><b>1</b> caso: AI Construction Summit</span>
          <span className="ch-sep" />
          <span className="ch-item live"><span className="ch-dot" /> no es un tutorial de Notion</span>
        </div>
      </div>
      <SystemOrb />
    </div>
  )
}

/* ============================== 02 · ERIKA ============================== */
function ErikaSlide() {
  const creds: Array<[string, string]> = [
    ['🏗️', 'Ingeniera civil enfocada en transformación digital del sector AEC.'],
    ['🌐', 'Impulsa iniciativas de educación, comunidad e innovación desde AECODE.'],
    ['🤝', 'Conecta talento, empresas y tecnología aplicada a la construcción.'],
  ]
  return (
    <>
      <Head eyebrow="Quién presenta" title="Erika Delgado"
        lead="Conectando tecnología, comunidad y transformación digital en el sector AEC." />
      <div className="nx-profile up" style={st(1)}>
        <div className="nx-photo" style={st(1)}><span className="mono">ED</span></div>
        <div className="nx-creds" style={st(2)}>
          {creds.map((c, i) => (
            <div className={`nx-cred ${['nx-v', 'nx-b', 'nx-g'][i]}`} key={i}>
              <span className="ci">{c[0]}</span><p>{c[1]}</p>
            </div>
          ))}
          <p className="nx-quote" style={st(3)}>No vengo como «experta en Notion», sino desde la <b>operación real</b> de una comunidad y startup tecnológica en crecimiento.</p>
        </div>
      </div>
    </>
  )
}

/* ============================ 03 · EXPERIENCIA ========================= */
function ExperienceSlide() {
  const blocks: Array<[string, string, string, string]> = [
    ['nx-v', '🌐', 'Comunidad', 'Espacios, eventos, programas y conexiones entre profesionales.'],
    ['nx-b', '🎓', 'Educación', 'Experiencias de aprendizaje, sesiones, cursos y coordinación académica.'],
    ['nx-g', '⚙️', 'Tecnología aplicada', 'IA, BIM, automatización y visión por computadora para construcción.'],
  ]
  return (
    <>
      <Head eyebrow="Trayectoria" title="Entre comunidad, educación y tecnología"
        lead="La experiencia relevante no es solo técnica: es operar iniciativas donde muchas personas y áreas trabajan alineadas." />
      <div className="nx-grid nx-g3 up" style={st(1)}>
        {blocks.map((b, i) => (
          <article className={`nx-card ${b[0]}`} key={b[2]} style={st(i + 1)}>
            <span className="nx-ic">{b[1]}</span><h3>{b[2]}</h3><p>{b[3]}</p>
          </article>
        ))}
      </div>
      <p className="nx-quote up" style={st(2)}>Cuando todo crece al mismo tiempo, <b>el contexto se vuelve el activo más importante</b>.</p>
    </>
  )
}

/* ============================== 04 · AECODE ============================ */
function AecodeSlide() {
  const focos: Array<[string, string, string]> = [
    ['nx-v', '🏛️', 'BIM'], ['nx-b', '🤖', 'Inteligencia Artificial'],
    ['nx-g', '⚡', 'Automatización'], ['nx-v', '💻', 'Programación'],
  ]
  return (
    <>
      <Head eyebrow="Qué es AECODE" title="Tecnología aplicada al sector AEC" />
      <p className="nx-quote up" style={st(1)}>
        AECODE es una <b>comunidad y plataforma de aprendizaje</b> que conecta tecnología, educación, empresas
        y talento para transformar la Arquitectura, Ingeniería y Construcción.
      </p>
      <div className="nx-grid nx-g4 up" style={st(2)}>
        {focos.map((f, i) => (
          <article className={`nx-card ${f[0]}`} key={f[2]} style={st(i + 1)}>
            <span className="nx-ic">{f[1]}</span><h3>{f[2]}</h3>
          </article>
        ))}
      </div>
    </>
  )
}

/* ========================= 05 · AECODE ECOSISTEMA ====================== */
function EcosystemSlide() {
  return (
    <>
      <Head eyebrow="De comunidad a ecosistema" title="Mientras más crece, más importa coordinarlo"
        lead="AECODE no opera una sola línea de trabajo: opera varias dimensiones a la vez. Eso genera oportunidades y también complejidad." />
      <Hub core="AECODE" sub="ecosistema" ac="nx-v" nodes={[
        ['Comunidad', 'profesionales y estudiantes'],
        ['Empresas', 'sponsors, aliados, proveedores'],
        ['Instituciones', 'universidades y partners'],
        ['Eventos', 'conexión y aprendizaje'],
      ]} />
    </>
  )
}

/* ===================== 06 · ¿DÓNDE VIVE EL CONOCIMIENTO? =============== */
function WhereSlide() {
  return (
    <>
      <Head eyebrow="El problema" title="¿Dónde vive realmente el conocimiento de tu empresa?"
        lead="No dónde debería vivir. Dónde vive de verdad cuando alguien lo necesita para decidir o ejecutar." />
      <ScatterSources />
    </>
  )
}

/* ===================== 07 · PROBLEMA Y COSTO ========================== */
function CostSlide() {
  return (
    <>
      <Head eyebrow="El costo" title="El problema no es falta de información. Es dispersión."
        lead="Tener información no es tener claridad. La claridad aparece cuando la información se conecta a decisiones y acciones." />
      <VS
        bad={{ pill: 'Parece que tenemos', h: 'Mucha información', items: ['Documentos', 'Chats y correos', 'Hojas de cálculo', 'Reuniones y carpetas'] }}
        good={{ pill: 'Pero falta', h: 'Lo que da claridad', items: ['Contexto y responsable', 'Estado y decisión', 'Próxima acción', 'Trazabilidad'] }}
        mid="≠"
      />
    </>
  )
}

/* ===================== 08 · PROBLEMA ESPECÍFICO ====================== */
function MicroSlide() {
  return (
    <>
      <Head eyebrow="El día a día" title="El caos aparece en detalles pequeños"
        lead="No siempre llega como una gran crisis. Llega como microfricciones repetidas todos los días." />
      <ChatChaos />
    </>
  )
}

/* ============================== 09 · CAOS ============================= */
function ChaosSlide() {
  return (
    <>
      <Head eyebrow="Operación frágil" title="Cuando todo vive en chats, la operación se rompe"
        lead="El caos no significa que el equipo sea malo. Significa que el sistema de trabajo no está diseñado." />
      <Chaos />
    </>
  )
}

/* ============================ 10 · CRECIMIENTO ======================= */
function GrowthSlide() {
  return (
    <>
      <Head eyebrow="Escala" title="Cuando una organización crece, el contexto se rompe"
        lead="Lo que funciona con 5 personas puede romperse con 20. La complejidad sube más rápido que el equipo." />
      <Growth />
    </>
  )
}

/* ============================ 11 · PUNTO DE QUIEBRE ================== */
function BreakSlide() {
  return (
    <>
      <Head eyebrow="El giro" title="No necesitábamos más herramientas. Necesitábamos arquitectura."
        lead="Sumar apps no resuelve el caos: a veces lo agrava. La solución es diseñar cómo entra, se ordena, se ejecuta y se aprende de la información." />
      <VS
        bad={{ pill: 'Más herramientas', h: 'Más lugares, más caos', items: ['Más lugares donde buscar', 'Más notificaciones', 'Más duplicidad', 'Más dependencia de memoria'] }}
        good={{ pill: 'Mejor arquitectura', h: 'Una forma de pensar', items: ['Una fuente de verdad', 'Flujos claros', 'Roles definidos', 'Información conectada a tareas'] }}
        mid="→"
      />
    </>
  )
}

/* ===================== 12 · AI CONSTRUCTION SUMMIT =================== */
function SummitSlide() {
  const kw = ['IA', 'Construcción', 'Robótica', 'BIM', 'Gemelos digitales', 'Visión por computadora', 'Sponsors', 'Speakers', 'Feria', 'Comunidad', 'App', 'Bot']
  return (
    <>
      <Head eyebrow="Caso real" title="AI Construction Summit"
        lead="Un congreso internacional para conectar inteligencia artificial, automatización, robótica, BIM, gemelos digitales, empresas, academia y comunidad." />
      <div className="nx-chips up" style={st(1)}>
        {kw.map((k, i) => <span className={`nx-chip ${['nx-v', 'nx-b', 'nx-g'][i % 3]}`} key={k}><i>◆</i>{k}</span>)}
      </div>
      <p className="nx-quote up" style={st(2)}>No es publicidad: es el <b>caso de complejidad real</b> que nos obligó a construir un sistema de operaciones.</p>
    </>
  )
}

/* ===================== 13 · COMPLEJIDAD DEL SUMMIT ================== */
function SummitOpsSlide() {
  return (
    <>
      <Head eyebrow="Complejidad" title="Un evento así no puede vivir solo en WhatsApp"
        lead="La complejidad no está en una sola tarea: está en las dependencias entre tareas." />
      <Frentes />
      <p className="nx-quote up" style={st(2)}>El problema no es coordinar una tarea. Es <b>coordinar cien tareas que dependen unas de otras</b>.</p>
    </>
  )
}

/* ===================== 14 · SISTEMA ORGANIZACIONAL ================== */
function OrgSystemSlide() {
  return (
    <>
      <Head eyebrow="La base" title="Un sistema conecta personas, procesos, objetivos, métricas y herramientas"
        lead="El sistema no es Notion. Notion es la interfaz donde el sistema se vuelve visible y operable." />
      <Hub core="Sistema" sub="organizacional" ac="nx-b" nodes={[
        ['Personas', 'quién decide y ejecuta'],
        ['Procesos', 'cómo fluye el trabajo'],
        ['Objetivos', 'qué y con qué prioridad'],
        ['Métricas', 'avance o bloqueo'],
        ['Herramientas', 'dónde vive la info'],
      ]} />
    </>
  )
}

/* ============================== 15 · EQUIPOS ========================= */
function TeamsSlide() {
  return (
    <>
      <Head eyebrow="Roles" title="Cada equipo ve lo suyo sin perder la visión global"
        lead="No todos necesitan ver todo, pero todos deben trabajar sobre una misma realidad. Un buen sistema da vistas distintas sobre los mismos datos." />
      <Teams />
    </>
  )
}

/* ===================== 16 · NOTION CENTRO DE OPERACIONES ============ */
function NotionSlide() {
  return (
    <>
      <Head eyebrow="La solución" title="Notion como centro de operaciones"
        lead="«Teníamos un staff de herramientas. Necesitábamos un lugar donde todo conecte». Notion no las reemplaza: les da estructura, contexto y conexión." />
      <Hub core="Notion" sub="centro de operaciones" ac="nx-v" nodes={[
        ['Drive', 'archivos'], ['WhatsApp', 'comunicación'], ['Calendar', 'fechas'], ['Reuniones', 'acuerdos'],
        ['Documentos', 'contenido'], ['IA', 'aceleración'], ['Tareas', 'ejecución'], ['Dashboards', 'visión'],
      ]} />
    </>
  )
}

/* ============================ 17 · FUNCIONALIDADES ================== */
function FeaturesSlide() {
  const mods: Array<[string, string, string, string]> = [
    ['nx-v', '🗂️', 'Proyectos', 'iniciativas, responsables y estados'],
    ['nx-b', '✅', 'Tareas', 'acciones, fechas y prioridades'],
    ['nx-g', '📝', 'Reuniones', 'minutas, acuerdos y decisiones'],
    ['nx-v', '📊', 'Dashboards', 'avance, bloqueos y prioridades'],
    ['nx-b', '📐', 'Plantillas', 'formatos reutilizables'],
    ['nx-g', '🔀', 'Procesos', 'flujos repetibles'],
    ['nx-v', '🧭', 'Decisiones', 'criterios y acuerdos'],
    ['nx-b', '⚡', 'IA', 'resumen, clasificación, reportes'],
  ]
  return (
    <>
      <Head eyebrow="Cómo lo usamos" title="La potencia está en la conexión, no en cada módulo"
        lead="Una minuta aislada sirve poco. Conectada a tareas, responsables y seguimiento, cambia la operación." />
      <div className="nx-grid nx-g4 up" style={st(1)}>
        {mods.map((m, i) => (
          <article className={`nx-card ${m[0]}`} key={m[2]} style={st(i + 1)}>
            <span className="nx-ic">{m[1]}</span><h3>{m[2]}</h3><p>{m[3]}</p>
          </article>
        ))}
      </div>
    </>
  )
}

/* ============================ 18 · FLUJO OPERATIVO ================== */
function FlowSlide() {
  return (
    <>
      <Head eyebrow="El flujo" title="De información dispersa a acción concreta"
        lead="Toda información debe terminar en una de dos cosas: acción o aprendizaje." />
      <Flow loop="Aprender realimenta el sistema: cada ejecución mejora la siguiente" steps={[
        ['Capturar', 'reuniones, ideas, leads, solicitudes y tareas'],
        ['Ordenar', 'bases, estados, relaciones y responsables'],
        ['Ejecutar', 'acciones, fechas, prioridades y seguimiento'],
        ['Aprender', 'decisiones, plantillas y mejora continua'],
      ]} />
    </>
  )
}

/* ===================== 19 · CENTRO DE OPERACIONES =================== */
function TraceSlide() {
  return (
    <>
      <Head eyebrow="Trazabilidad" title="Un centro de operaciones responde cuatro preguntas"
        lead="La diferencia entre «creo que está avanzado» y «sé exactamente qué falta»." />
      <Trace />
    </>
  )
}

/* ===================== 20 · SISTEMA POR FRENTES ===================== */
function FrentesDetailSlide() {
  return (
    <>
      <Head eyebrow="Arquitectura por frentes" title="Cada frente opera separado, pero conectado al sistema"
        lead="Una operación grande no se controla con una página gigante, sino con frentes bien modelados que comparten los datos clave." />
      <FrentesDetail />
    </>
  )
}

/* ===================== 21 · CONEXIÓN RELACIONAL ==================== */
function RelSlide() {
  return (
    <>
      <Head eyebrow="Relaciones" title="La magia ocurre cuando las bases se conectan"
        lead="Las relaciones permiten que una misma información alimente varias vistas, sin copiar y pegar datos." />
      <RelWeb />
      <p className="nx-quote up" style={st(3)}>Una base de datos no es una tabla. Es <b>una forma de pensar el negocio</b>.</p>
    </>
  )
}

/* ============================ 22 · RECOMENDACIONES ================= */
function RecoSlide() {
  return (
    <>
      <Head eyebrow="Lo que aprendimos" title="Un buen sistema no es el más bonito. Es el que se usa."
        lead="La adopción depende de simplicidad, claridad y utilidad diaria." />
      <Reco />
      <p className="nx-quote up" style={st(2)}>Si el sistema exige demasiado, <b>el equipo vuelve al caos conocido</b>.</p>
    </>
  )
}

/* ============================ 23 · STACK =========================== */
function StackSlide() {
  return (
    <>
      <Head eyebrow="Stack" title="El valor no está en una herramienta. Está en la integración."
        lead="Cada herramienta debe tener un rol claro. La IA no decide sola: acelera tareas con contexto." />
      <Stack />
    </>
  )
}

/* ===================== 24 · CIERRE CONCEPTUAL ===================== */
function ConceptCloseSlide() {
  return (
    <>
      <Head eyebrow="Visión" title="El futuro del trabajo no será tener más apps"
        lead="Será construir mejores sistemas para convertir información en decisiones, decisiones en acciones y acciones en aprendizaje." />
      <TriFlow />
    </>
  )
}

/* ============================== 25 · CTA ========================== */
function CtaSlide() {
  const ctas: Array<[string, string, string]> = [
    ['🔗', 'Conecta con Erika', 'LinkedIn y redes — hablemos de sistemas y transformación digital.'],
    ['🟢', 'Sigue a AECODE', 'Comunidad, programas, eventos y contenido sobre IA en construcción.'],
    ['🚀', 'AI Construction Summit', 'Vive IA, tecnología y construcción desde casos reales, empresas y networking.'],
  ]
  return (
    <div className="closing">
      <p className="closing-eyebrow up" style={st(0)}>Sigamos construyendo</p>
      <p className="bigquote-text up" style={st(1)}>Sigamos construyendo <span className="hl">sistemas vivos</span></p>
      <div className="nx-ctas up" style={st(2)}>
        {ctas.map((c, i) => (
          <div className="nx-cta" key={c[1]}>
            <span className="ci">{c[0]}</span><h3>{c[1]}</h3><p>{c[2]}</p>
          </div>
        ))}
      </div>
      <div className="nx-qr up" style={st(3)}>
        <span className="qbox" aria-hidden="true">QR</span>
        <span className="qt">
          <b>Si te interesa cómo la IA y los sistemas cambian la construcción…</b>
          <p>nos vemos en el AI Construction Summit · <a href="mailto:apalpan@genplusdesign.com">apalpan@genplusdesign.com</a></p>
        </span>
      </div>
    </div>
  )
}

/* ============================== DECK DEF ============================== */
const S = (id: string, num: string, title: string, node: JSX.Element): SlideDef => ({ id, num, title, node })

export const notionTalk: DeckDef = {
  slug: 'notion-talk',
  tag: 'AECODE × Notion',
  title: 'De información dispersa a un sistema vivo',
  subtitle: 'Cómo AECODE une conocimiento, ejecución e IA usando Notion como centro de operaciones — caso AI Construction Summit.',
  date: 'Notion Community · 2026',
  targetSeconds: 1080,
  slides: [
    S('cover', '', 'Portada', <Cover />),
    S('erika', '00', 'Erika Delgado', <ErikaSlide />),
    S('experiencia', '00', 'Experiencia', <ExperienceSlide />),
    S('aecode', '00', 'AECODE', <AecodeSlide />),
    S('ecosistema', '00', 'Ecosistema AECODE', <EcosystemSlide />),
    S('donde', '00', '¿Dónde vive el conocimiento?', <WhereSlide />),
    S('costo', '00', 'Dispersión y costo', <CostSlide />),
    S('micro', '00', 'El caos en lo pequeño', <MicroSlide />),
    S('caos', '00', 'Operación frágil', <ChaosSlide />),
    S('crecimiento', '00', 'Crecimiento rompe contexto', <GrowthSlide />),
    S('quiebre', '00', 'Arquitectura, no más apps', <BreakSlide />),
    S('summit', '00', 'AI Construction Summit', <SummitSlide />),
    S('summit-ops', '00', 'Complejidad del Summit', <SummitOpsSlide />),
    S('sistema', '00', 'Sistema organizacional', <OrgSystemSlide />),
    S('equipos', '00', 'Equipos conectados', <TeamsSlide />),
    S('notion', '00', 'Notion · centro de operaciones', <NotionSlide />),
    S('funcionalidades', '00', 'Funcionalidades', <FeaturesSlide />),
    S('flujo', '00', 'Flujo operativo', <FlowSlide />),
    S('trazabilidad', '00', 'Trazabilidad', <TraceSlide />),
    S('frentes', '00', 'Sistema por frentes', <FrentesDetailSlide />),
    S('relacional', '00', 'Bases conectadas', <RelSlide />),
    S('recomendaciones', '00', 'Recomendaciones', <RecoSlide />),
    S('stack', '00', 'Stack tecnológico', <StackSlide />),
    S('cierre', '00', 'Cierre conceptual', <ConceptCloseSlide />),
    S('cta', '', 'Sigamos construyendo', <CtaSlide />),
  ],
  times: [
    '0:00–0:40', '0:40–1:20', '1:20–2:00', '2:00–2:40', '2:40–3:20',
    '3:20–4:10', '4:10–5:00', '5:00–5:45', '5:45–6:30', '6:30–7:20',
    '7:20–8:10', '8:10–8:55', '8:55–9:50', '9:50–10:40', '10:40–11:25',
    '11:25–12:20', '12:20–13:10', '13:10–14:00', '14:00–14:50', '14:50–15:40',
    '15:40–16:25', '16:25–17:05', '17:05–17:35', '17:35–17:50', '17:50–18:00',
  ],
  notes: [
    'Buenos días y gracias por estar aquí. Soy Erika Delgado, de AECODE. Hoy no vengo a dar un tutorial de Notion: vengo a contar una historia real de transformación operativa. Todos los equipos tienen información; pocos tienen un sistema para convertirla en acción.',
    'Una palabra sobre mí: soy ingeniera civil enfocada en transformación digital del sector construcción. Desde AECODE impulso educación, comunidad e innovación, y conecto talento, empresas y tecnología. No les hablo como experta en Notion, sino desde la operación real de una organización que crece.',
    'Mi experiencia mezcla tres mundos: comunidad, educación y tecnología aplicada —IA, BIM, automatización. Y cuando todo crece al mismo tiempo, aprendí que el contexto se vuelve el activo más importante.',
    'AECODE es una comunidad y plataforma de aprendizaje que conecta tecnología, educación, empresas y talento para transformar la Arquitectura, Ingeniería y Construcción. Cuatro focos: BIM, inteligencia artificial, automatización y programación.',
    'Pero AECODE no es solo una comunidad: es un ecosistema. Comunidad, eventos, empresas e instituciones moviéndose a la vez. Y mientras más crece el ecosistema, más importante se vuelve tener sistemas para coordinarlo.',
    'Empiezo con una pregunta: ¿dónde vive realmente el conocimiento de tu empresa? No dónde debería; dónde vive de verdad. Decimos «está en Drive», pero el contexto está repartido entre WhatsApp, correos, llamadas, audios, capturas y la memoria de alguien.',
    'El problema no es falta de información: es dispersión. Tenemos documentos, chats, hojas, reuniones… pero falta lo importante: contexto, responsable, estado, decisión, próxima acción y trazabilidad. Tener información no es tener claridad.',
    'Y el caos no llega como una gran crisis: llega en detalles pequeños. ¿Dónde está el link de Zoom? ¿La última versión del PPT? ¿Quién confirmó al instructor? ¿Llegó el logo del sponsor? Demasiadas preguntas repetidas son la señal de un sistema débil.',
    'Cuando todo vive en chats, la operación se vuelve frágil: decisiones que se pierden, pendientes sin dueño, versiones duplicadas, procesos que dependen de una sola persona. No es culpa del equipo: las personas compensan con esfuerzo un sistema que no está diseñado.',
    'Y el crecimiento agrava esto. Lo que funciona con cinco personas puede romperse con veinte. A más áreas, proyectos y dependencias, más rápido sube la complejidad respecto al tamaño del equipo. El contexto se fragmenta.',
    'Ahí está el giro: no necesitábamos más herramientas, necesitábamos arquitectura. Sumar apps no resuelve el caos, a veces lo agrava. La solución es diseñar cómo entra, se ordena, se ejecuta y se aprende de la información.',
    'Lo aterrizo en nuestro caso más grande: el AI Construction Summit. Un congreso que conecta IA, robótica, BIM, gemelos digitales y construcción con empresas, academia y comunidad. No lo presento como publicidad: es el caso de complejidad real que nos obligó a construir el sistema.',
    'Un evento así no puede vivir solo en WhatsApp: sponsors, speakers, agenda, marketing, registro, app, bot, feria, videos, logos, moderadores, post-evento. El problema no es coordinar una tarea, sino cien tareas que dependen unas de otras.',
    'Entonces, ¿qué es un sistema? Conecta personas, procesos, objetivos, métricas y herramientas. Esto es clave: el sistema no es Notion. Notion es la interfaz donde el sistema se vuelve visible y operable. Si el proceso está mal diseñado, la herramienta solo lo hace más visible.',
    'Cada equipo necesita ver lo suyo sin perder la visión global: dirección ve decisiones, marketing calendario, comercial pipeline, operaciones bloqueos. No todos ven todo, pero todos trabajan sobre una sola fuente de verdad.',
    'Así llegamos a Notion como centro de operaciones. Teníamos un staff de herramientas; necesitábamos un lugar donde todo conecte. Notion no reemplaza WhatsApp, Drive o Calendar: les da estructura y contexto. WhatsApp comunica rápido; Notion evita que esa comunicación se pierda.',
    'Lo usamos con proyectos, tareas, reuniones, dashboards, plantillas, procesos, decisiones e IA. La potencia no está en cada módulo aislado, sino en su conexión. Una minuta conectada a tareas y seguimiento cambia la operación.',
    'El flujo es simple: capturar, ordenar, ejecutar y aprender. Toda información debe terminar en acción o en aprendizaje. Si una reunión produce ideas pero no tareas, se pierde ejecución. Si una tarea se repite pero no se vuelve proceso, se pierde aprendizaje.',
    'Un centro de operaciones responde cuatro preguntas: ¿cuál es el estado? ¿quién es responsable? ¿qué se decidió? ¿cuál es la próxima acción? Esa trazabilidad es la diferencia entre «creo que está avanzado» y «sé exactamente qué falta».',
    'Una operación grande no se controla con una página gigante, sino con frentes bien modelados y conectados: sponsors, speakers, marketing, logística, registro, comunidad y post-evento. Cada uno con su tablero, pero compartiendo los datos clave.',
    'Y la magia ocurre cuando las bases se conectan: una reunión crea tareas, una tarea actualiza el estado, un sponsor confirmado activa marketing, una decisión queda registrada, el dashboard resume todo. Una base de datos no es una tabla: es una forma de pensar el negocio.',
    'Cinco recomendaciones: menos páginas y más sistema; cada dato con dueño; estados simples; vistas por rol; y la IA después del proceso, nunca antes. No automatices caos. Y recuerda: un buen sistema no es el más bonito, es el que se usa. Si exige demasiado, el equipo vuelve al caos conocido.',
    'Sobre el stack: el valor no está en una herramienta, sino en la integración. Notion organiza, Drive guarda archivos pesados, WhatsApp comunica, Calendar agenda, la IA acelera con contexto, los dashboards dan visión. Cada herramienta con un rol claro.',
    'Cierro con la idea de fondo: el futuro del trabajo no será tener más apps. Será construir mejores sistemas para convertir información en decisiones, decisiones en acciones y acciones en aprendizaje. Menos fricción entre saber, decidir y ejecutar.',
    'Si esto les resonó, sigamos construyendo sistemas vivos. Conecten conmigo, sigan a AECODE y los esperamos en el AI Construction Summit, donde la IA, la tecnología y la construcción se viven desde casos reales, empresas y comunidad. Muchas gracias.',
  ],
}
