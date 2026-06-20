import type { DeckDef, SlideDef } from '../deck/Deck'
import AecodeLogo from '../deck/AecodeLogo'
import { st, Head, Plain } from '../deck/primitives'
import { ScatterSources, DoubleCost, NotionHub, Frentes, SponsorBoard, Triad, Lessons } from './visuals'

/* ============================== 01 · PORTADA ============================= */

function Cover() {
  return (
    <div className="cover">
      <AecodeLogo className="cover-mark up" style={st(0)} />
      <p className="cover-eyebrow up" style={st(1)}>Comunidad Notion · Charla · 20 min</p>
      <h1 className="cover-title up" style={st(2)}>
        De información <span className="grad">dispersa</span><br />a <span className="grad">sistemas vivos</span>
      </h1>
      <p className="cover-lead up" style={st(3)}>
        Cómo usamos Notion en AECODE para ordenar conocimiento, ejecución e inteligencia artificial —
        con el AI Construction Summit como caso real de transformación operativa.
      </p>
      <div className="cover-sign up" style={st(4)}>
        <span className="cs-name">Erika Delgado</span>
        <span className="cs-dot" aria-hidden="true" />
        <span className="cs-role">AECODE · comunidad y startup de IA en construcción</span>
      </div>
      <div className="cover-hud up" style={st(5)} aria-hidden="true">
        <span className="ch-item"><b>1</b> historia real de transformación</span>
        <span className="ch-sep" />
        <span className="ch-item"><b>1</b> caso: AI Construction Summit</span>
        <span className="ch-sep" />
        <span className="ch-item"><b>3</b> capas: sistema · IA · criterio</span>
        <span className="ch-sep" />
        <span className="ch-item live"><span className="ch-dot" /> Notion como sistema operativo</span>
      </div>
    </div>
  )
}

/* ======================= 02 · ¿DÓNDE VIVE EL CONOCIMIENTO? =============== */

function WhereSlide() {
  return (
    <>
      <Head eyebrow="La pregunta incómoda" title="¿Dónde vive realmente el conocimiento de tu empresa?"
        lead="No dónde debería vivir. Dónde vive de verdad. Casi siempre la respuesta no es «en el Drive»: está repartido en todas partes." />
      <ScatterSources />
    </>
  )
}

/* ======================= 03 · DISPERSIÓN = FRICCIÓN ===================== */

function ProblemSlide() {
  return (
    <>
      <Head eyebrow="El problema" title="No falta información: está fragmentada"
        lead="Cuando la información está dispersa, el equipo opera con fricción. Y cada vez que alguien pregunta algo que ya se decidió…" />
      <DoubleCost />
    </>
  )
}

/* ============================ 04 · AECODE ============================== */

function AecodeSlide() {
  const areas: Array<[string, string, string]> = [
    ['comunidad', 'Comunidad', 'Conectamos academia, industria, startups y profesionales de AEC.'],
    ['educación', 'Educación', 'Formación en tecnología e IA aplicada a arquitectura, ingeniería y construcción.'],
    ['eventos', 'Eventos & alianzas', 'Congresos, demos y experiencias que acercan el futuro al sector.'],
    ['ia', 'Tecnología e IA', 'Automatización, agentes y datos aplicados a problemas reales de obra y diseño.'],
  ]
  return (
    <>
      <Head eyebrow="Quiénes somos" title="AECODE: comunidad, educación, tecnología e IA"
        lead="No hacemos una sola cosa. Y cuando muchas áreas se mueven a la vez, el reto no es avanzar: es avanzar sin perder el contexto." />
      <div className="model-grid up" style={st(1)}>
        {areas.map((a, i) => (
          <article className="model-card" key={a[1]} style={st(i + 1)}>
            <span>{a[0]}</span><h3>{a[1]}</h3><p>{a[2]}</p>
          </article>
        ))}
      </div>
    </>
  )
}

/* ============================ 05 · EL RETO ============================= */

function ChallengeSlide() {
  return (
    <>
      <Head eyebrow="Nuestro reto" title="No necesitábamos más herramientas: necesitábamos una arquitectura"
        lead="Un equipo puede trabajar mucho, pero si cada persona usa una versión distinta de la realidad, el avance se vuelve desordenado." />
      <div className="comparison up" style={st(1)}>
        <article style={st(1)}>
          <span className="pill-mini">El reflejo fácil</span>
          <h3>Sumar más herramientas</h3>
          <p>Otro lugar donde guardar cosas. Si Notion solo es «otro sitio», no resolviste el caos: lo cambiaste de plataforma.</p>
          <b>Más apps ≠ más claridad</b>
        </article>
        <article style={st(2)}>
          <span className="pill-mini">Lo que funcionó</span>
          <h3>Diseñar un sistema</h3>
          <p>Una forma de convertir conocimiento disperso en ejecución coordinada: contexto, prioridades, responsables y seguimiento.</p>
          <b>Una arquitectura, no un cajón</b>
        </article>
      </div>
      <Plain>La pregunta que lo cambió todo: <b>¿qué necesita saber el equipo para ejecutar mejor?</b></Plain>
    </>
  )
}

/* ===================== 06 · NOTION COMO SISTEMA OPERATIVO ============== */

function SystemSlide() {
  return (
    <>
      <Head eyebrow="El cambio de mentalidad" title="Notion como centro de operaciones, no como otra carpeta"
        lead="Un lugar donde no solo se guardan notas: se conectan proyectos, tareas, reuniones, dashboards, plantillas, procesos y decisiones." />
      <NotionHub />
      <Plain>Notion no vale por lo bonito que se ve. Vale por <b>la claridad que le da al equipo</b>.</Plain>
    </>
  )
}

/* ===================== 07 · CASO: AI CONSTRUCTION SUMMIT =============== */

function SummitCaseSlide() {
  return (
    <>
      <Head eyebrow="Caso real" title="AI Construction Summit: una operación, no solo una fecha"
        lead="Un congreso internacional que conecta IA, robótica, BIM, gemelos digitales y automatización con la construcción. Organizarlo significa coordinar muchos frentes a la vez." />
      <Frentes />
    </>
  )
}

/* ===================== 08 · SPONSORS → CRM OPERATIVO ================== */

function SponsorsSlide() {
  return (
    <>
      <Head eyebrow="Frente comercial" title="Sponsors: de conversaciones sueltas a un CRM operativo"
        lead="No basta una lista de empresas. Necesitamos etapa, responsable, última conversación, propuesta, beneficios, entregables y la próxima acción." />
      <SponsorBoard />
      <Plain>Una base de datos bien diseñada no es una tabla: es <b>una forma de pensar el negocio</b>. Cambia la pregunta de «¿cómo vamos?» a «¿qué está bloqueado?».</Plain>
    </>
  )
}

/* ===================== 09 · REUNIONES → EJECUCIÓN ==================== */

function MeetingsSlide() {
  const flow: Array<[string, string]> = [
    ['Minuta', 'lo que se habló'],
    ['Decisiones', 'lo que se acordó'],
    ['Tareas', 'lo que se hará'],
    ['Responsables', 'quién lo hace'],
    ['Fechas', 'para cuándo'],
  ]
  return (
    <>
      <Head eyebrow="Operación" title="Una reunión debería terminar en decisiones, tareas y responsables"
        lead="Si no termina así, fue una conversación —no una reunión de ejecución. Notion convierte el acuerdo en movimiento." />
      <div className="process-flow up" style={st(1)}>
        {flow.map((f, i) => (
          <div className="process-node" key={f[0]} style={st(i + 1)}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <h3>{f[0]}</h3>
            <p>{f[1]}</p>
          </div>
        ))}
      </div>
      <Plain>Así hacemos <b>visible lo invisible</b>: seguimientos, validaciones y pendientes dejan de depender de la memoria de una sola persona.</Plain>
    </>
  )
}

/* ===================== 10 · NOTION + IA + EQUIPO ===================== */

function AiSlide() {
  return (
    <>
      <Head eyebrow="El multiplicador" title="Notion como sistema · IA como acelerador · equipo como criterio"
        lead="La IA resume, estructura y convierte notas en tareas. Pero no usamos IA para dejar de pensar: la usamos para pensar mejor, más rápido y con más contexto." />
      <Triad />
    </>
  )
}

/* ============================ 11 · LECCIONES ========================= */

function LessonsSlide() {
  return (
    <>
      <Head eyebrow="Lo que aprendimos" title="Cinco lecciones (seguimos mejorando, no es perfecto)"
        lead="La transformación digital no ocurre cuando compras una herramienta. Ocurre cuando cambias la forma en que el equipo trabaja." />
      <Lessons />
    </>
  )
}

/* ===================== 12 · INVITACIÓN AL SUMMIT ==================== */

function InviteSlide() {
  const bridge: Array<[string, string, string]> = [
    ['🤝', 'Conecta', 'Academia, industria, startups y comunidad en una misma conversación sobre el futuro de la construcción.'],
    ['🚀', 'Vive la experiencia', 'Ponencias, demos de IA, robótica, gemelos digitales y visión por computadora, networking y feria empresarial.'],
    ['🎁', 'Llévate beneficios', 'Beneficios, experiencias y sorpresas para la comunidad —incluyendo recursos de Notion, Replit y más.'],
  ]
  return (
    <>
      <Head eyebrow="Sigamos conectados" title="Te invitamos al AI Construction Summit"
        lead="La transformación digital no es solo técnica: también es organizacional. No sirve tener IA si la empresa no sabe ordenar su conocimiento." />
      <div className="summit-bridge up" style={st(1)}>
        {bridge.map((b, i) => (
          <div key={b[1]} style={st(i + 1)}>
            <span>{b[0]}</span>
            <h3>{b[1]}</h3>
            <p>{b[2]}</p>
          </div>
        ))}
      </div>
    </>
  )
}

/* ============================== 13 · CIERRE ========================== */

function ClosingSlide() {
  return (
    <div className="closing">
      <p className="closing-eyebrow up" style={st(0)}>Para cerrar</p>
      <p className="bigquote-text up" style={st(1)}>
        La empresa del futuro no será la que tenga <span className="hl">más información</span>.
        Será la que sepa convertirla en <span className="hl">decisiones, procesos, ejecución y aprendizaje</span>.
      </p>
      <div className="closing-cta up" style={st(2)}>
        <a className="btn btn-cta" href="#/notion-talk/1">↺ Volver al inicio</a>
        <a className="btn" href="mailto:apalpan@genplusdesign.com">Hablemos · apalpan@genplusdesign.com</a>
      </div>
      <p className="closing-brand up" style={st(3)}>AECODE · AI Construction Summit</p>
    </div>
  )
}

/* ============================== DECK DEF ============================== */

const S = (id: string, num: string, title: string, node: JSX.Element): SlideDef => ({ id, num, title, node })

export const notionTalk: DeckDef = {
  slug: 'notion-talk',
  tag: 'AECODE × Notion',
  title: 'De información dispersa a sistemas vivos',
  subtitle: 'Cómo usamos Notion en AECODE para ordenar conocimiento, ejecución e IA — caso AI Construction Summit.',
  date: 'Comunidad Notion · 2026',
  targetSeconds: 1200,
  slides: [
    S('cover', '', 'Portada', <Cover />),
    S('donde', '00', '¿Dónde vive el conocimiento?', <WhereSlide />),
    S('problema', '00', 'No falta información: dispersión', <ProblemSlide />),
    S('aecode', '00', 'AECODE', <AecodeSlide />),
    S('reto', '00', 'El reto: una arquitectura', <ChallengeSlide />),
    S('sistema', '00', 'Notion como sistema', <SystemSlide />),
    S('summit', '00', 'Caso: AI Construction Summit', <SummitCaseSlide />),
    S('sponsors', '00', 'Sponsors → CRM', <SponsorsSlide />),
    S('reuniones', '00', 'Reuniones → ejecución', <MeetingsSlide />),
    S('ia', '00', 'Notion + IA + equipo', <AiSlide />),
    S('lecciones', '00', 'Lecciones aprendidas', <LessonsSlide />),
    S('invitacion', '00', 'Invitación al Summit', <InviteSlide />),
    S('cierre', '', 'Cierre', <ClosingSlide />),
  ],
  times: [
    '0:00–1:30',
    '1:30–3:30',
    '3:30–6:00',
    '6:00–7:30',
    '7:30–9:00',
    '9:00–11:00',
    '11:00–13:00',
    '13:00–15:00',
    '15:00–16:30',
    '16:30–18:00',
    '18:00–19:00',
    '19:00–19:45',
    '19:45–20:00',
  ],
  notes: [
    // 01 · Portada
    'Buenos días y gracias por estar aquí. Soy Erika Delgado, del equipo de AECODE: comunidad y startup de tecnología, educación e IA aplicada a la construcción. Hoy no vengo a dar un tutorial de Notion: vengo a contarles una historia real de transformación operativa.',
    // 02 · ¿Dónde vive el conocimiento?
    'Quiero empezar con una pregunta: ¿dónde vive realmente el conocimiento de tu empresa? No dónde debería; dónde vive de verdad. Decimos «está en el Drive», pero en realidad está en WhatsApp, correos, llamadas, audios, capturas, Excel… y en la memoria de alguien que, si no responde, bloquea todo.',
    // 03 · No falta información: dispersión
    'El problema no es que falte información: es que está fragmentada. Y con fricción la empresa paga dos veces: una por decidir, otra por volver a buscar, explicar o reconstruir. Cada vez que alguien pregunta algo ya decidido, estamos pagando de nuevo. Eso parece normal, pero no debería serlo.',
    // 04 · AECODE
    'En AECODE vivimos esto con fuerza porque no hacemos una sola cosa: comunidad, educación, eventos, tecnología e IA para arquitectura, ingeniería y construcción. Cuando muchas áreas se mueven a la vez, el reto no es avanzar: es avanzar sin perder el contexto.',
    // 05 · El reto
    'Entonces entendimos algo: no necesitábamos más herramientas, necesitábamos una arquitectura. Si Notion es solo «otro lugar donde poner cosas», no resuelves el caos, lo cambias de plataforma. La pregunta que lo cambió todo fue: ¿qué necesita saber el equipo para ejecutar mejor?',
    // 06 · Notion como sistema
    'Así empezamos a usar Notion como centro de operaciones: no para guardar notas, sino para conectar proyectos, tareas, reuniones, dashboards, plantillas, procesos y decisiones. Y lo clave: Notion no vale por lo bonito que se ve, vale por la claridad que le da al equipo.',
    // 07 · Caso AI Construction Summit
    'Lo aterrizo en nuestro caso más grande: el AI Construction Summit, un congreso que conecta IA, robótica, BIM, gemelos digitales y automatización con la construcción. Organizarlo no es poner una fecha: es coordinar muchos frentes a la vez. Si todo eso vive en WhatsApp, tarde o temprano la operación se rompe.',
    // 08 · Sponsors → CRM
    'Tomemos sponsors. No basta una lista de empresas: necesitamos etapa, responsable, última conversación, propuesta, beneficios, entregables y próxima acción. Llevado a Notion, deja de ser una lista muerta y se vuelve un CRM. Una base de datos bien diseñada es una forma de pensar el negocio: ya no preguntas «¿cómo vamos?», sino «¿qué está bloqueado?».',
    // 09 · Reuniones → ejecución
    'Lo mismo con las reuniones. Antes terminaban con buenas ideas, pero no siempre con acciones. Una reunión debería terminar con tres cosas: decisiones, tareas y responsables. Si no, fue una conversación. Notion captura ese flujo y hace visible lo invisible: seguimientos, validaciones y pendientes dejan de depender de una sola persona.',
    // 10 · Notion + IA + equipo
    'Aquí entra la IA. Combinada con Notion, nos ayuda a resumir, estructurar, convertir notas en tareas y preparar primeras versiones. Pero la IA no reemplaza el criterio: la decisión, el tono y la estrategia siguen siendo humanos. La fórmula es Notion como sistema, IA como acelerador y el equipo como criterio. Y una regla: si algo se repite, hazlo proceso; si se consulta mucho, documéntalo; si se ejecuta varias veces, conviértelo en plantilla.',
    // 11 · Lecciones
    'Cinco lecciones, y aclaro: seguimos mejorando, no tenemos el sistema perfecto. Menos páginas y más sistema. Si la información no tiene dueño, se desactualiza. Las plantillas son ventaja compuesta. La IA funciona mejor con contexto. Y la más realista: la cultura importa más que la herramienta. La transformación no ocurre al comprar una app, sino al cambiar cómo trabaja el equipo.',
    // 12 · Invitación al Summit
    'Antes de cerrar, los invito a seguir conectados con AECODE y el AI Construction Summit: ponencias, demos de IA y robótica, gemelos digitales, networking y feria empresarial. Queremos a la comunidad de Notion en esa conversación, y compartiremos beneficios y recursos de Notion, Replit y más. La transformación digital no es solo técnica: también es organizacional.',
    // 13 · Cierre
    'Cierro con una idea: la empresa del futuro no será la que tenga más información, sino la que sepa convertirla en decisiones, procesos, ejecución y aprendizaje. Notion puede ser la infraestructura donde una organización piensa, decide, ejecuta y aprende. Muchas gracias.',
  ],
}
