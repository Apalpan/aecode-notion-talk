import type { ReactNode } from 'react'
import { st } from '../deck/primitives'

/* ---- Hub radial reutilizable (ecosistema · sistema · Notion) ----------- */
export function Hub({ core, sub, nodes, ac = 'nx-v' }: {
  core: string; sub: string; nodes: Array<[string, string]>; ac?: string
}) {
  return (
    <div className={`nx-hub up ${ac}`} data-n={String(nodes.length)} style={st(1)}>
      <div className="nx-core"><b>{core}</b><span>{sub}</span></div>
      {nodes.map((n) => (
        <div className="nx-node" key={n[0]}>{n[0]}<small>{n[1]}</small></div>
      ))}
    </div>
  )
}

/* ---- Comparación a dos lados (problema/costo · herramientas/arquitectura) */
export function VS({ bad, good, mid = 'vs' }: {
  bad: { pill: string; h: string; items: string[] }
  good: { pill: string; h: string; items: string[] }
  mid?: string
}) {
  return (
    <div className="nx-vs up" style={st(1)}>
      <div className="nx-side bad" style={st(1)}>
        <span className="vs-pill">{bad.pill}</span>
        <h3>{bad.h}</h3>
        <ul>{bad.items.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
      <div className="vs-mid" style={st(2)}><span>{mid}</span></div>
      <div className="nx-side good" style={st(3)}>
        <span className="vs-pill">{good.pill}</span>
        <h3>{good.h}</h3>
        <ul>{good.items.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </div>
  )
}

/* ---- Flujo horizontal reutilizable ------------------------------------- */
export function Flow({ steps, loop }: { steps: Array<[string, string]>; loop?: string }) {
  return (
    <>
      <div className="nx-flow up" style={st(1)}>
        {steps.map((s, i) => (
          <div className="nx-step" key={s[0]} style={st(i + 1)}>
            <span className="fs-n">{i + 1}</span>
            <h3>{s[0]}</h3>
            <p>{s[1]}</p>
          </div>
        ))}
      </div>
      {loop && <span className="nx-loop up" style={st(2)}>{loop}</span>}
    </>
  )
}

/* ---- S1 · Orbe del sistema (portada) ----------------------------------- */
export function SystemOrb() {
  const sats = ['Conocimiento', 'Ejecución', 'Inteligencia', 'Aprendizaje']
  return (
    <div className="nx-orb up" style={st(3)} aria-hidden="true">
      <span className="ring r1" /><span className="ring r2" /><span className="ring r3" />
      {sats.map((s) => <span className="sat" key={s}>{s}</span>)}
      <span className="core"><b>Sistema vivo</b><span>AECODE OS</span></span>
    </div>
  )
}

/* ---- S6 · Fuentes dispersas -------------------------------------------- */
export function ScatterSources() {
  const sources: Array<[string, string]> = [
    ['💬', 'WhatsApp'], ['✉️', 'Gmail'], ['📁', 'Drive'], ['📊', 'Sheets'],
    ['🖥️', 'Reuniones'], ['🎙️', 'Audios'], ['📸', 'Capturas'], ['📞', 'Llamadas'],
  ]
  return (
    <div className="nx-scatter up" style={st(1)}>
      {sources.map((s, i) => (
        <span className="nx-src" key={s[1]} style={st(i + 1)}><i>{s[0]}</i>{s[1]}</span>
      ))}
      <span className="nx-src ghost" style={st(9)}><i>🧠</i>«lo sabe alguien del equipo»</span>
    </div>
  )
}

/* ---- S8 · Simulación de chat ------------------------------------------- */
export function ChatChaos() {
  const msgs = [
    '¿Dónde está el link de Zoom?',
    '¿Cuál es la última versión del PPT?',
    '¿Quién confirmó al instructor?',
    '¿Ya llegó el logo del sponsor?',
    '¿Dónde está la grabación?',
    '¿Ese tema se dictó o se reprogramó?',
  ]
  return (
    <div className="nx-chat up" style={st(1)}>
      {msgs.map((m, i) => <div className="nx-bub" key={i} style={st(i + 1)}>{m}</div>)}
      <div className="nx-alert" style={st(7)}>Demasiadas preguntas repetidas = sistema débil</div>
    </div>
  )
}

/* ---- S9 · Caos operativo ----------------------------------------------- */
export function Chaos() {
  const cloud = ['WhatsApp', 'Drive sin orden', 'Correos pendientes', 'Excel abierto', 'Reunión sin minuta', 'Versiones duplicadas', 'Pendientes sin dueño']
  const fails = [
    'Decisiones que se pierden tras la reunión.',
    'Pendientes sin responsable claro.',
    'Versiones distintas del mismo documento.',
    'Procesos que dependen de la memoria de una persona.',
    'Equipos trabajando con contextos diferentes.',
  ]
  return (
    <div className="nx-chaos up" style={st(1)}>
      <div className="nx-cloud" style={st(1)} aria-hidden="true">
        {cloud.map((c) => <span key={c}>{c}</span>)}
        <span className="nx-overwhelmed">😵‍💫</span>
      </div>
      <ul className="nx-fail" style={st(2)}>
        {fails.map((f) => <li key={f}>{f}</li>)}
      </ul>
    </div>
  )
}

/* ---- S10 · Crecimiento rompe el contexto ------------------------------- */
export function Growth() {
  const stages: Array<[string, string, string]> = [
    ['Inicio', 'Pocas personas', 'Comunicación directa, todo se conversa.'],
    ['Crecimiento', 'Más áreas', 'Más información en circulación.'],
    ['Escala', 'Más proyectos', 'Más dependencias entre tareas.'],
    ['Riesgo', 'Más velocidad', 'Menos contexto compartido.'],
  ]
  return (
    <div className="nx-growth up" style={st(1)}>
      {stages.map((s, i) => (
        <div className="nx-stage" key={s[0]} style={st(i + 1)}>
          <span className="gs-dot" />
          <span className="gs-n">{String(i + 1).padStart(2, '0')}</span>
          <h3>{s[0]}</h3>
          <p><b style={{ color: 'var(--ink)' }}>{s[1]}</b><br />{s[2]}</p>
        </div>
      ))}
    </div>
  )
}

/* ---- S13 · Frentes del Summit ------------------------------------------ */
export function Frentes() {
  const frentes: Array<[string, string]> = [
    ['Sponsors', 'pipeline y entregables'], ['Speakers', 'tema, bio, confirmación'],
    ['Agenda', 'bloques y moderadores'], ['Marketing', 'campaña y piezas'],
    ['Registro', 'inscripción y tickets'], ['App', 'experiencia digital'],
    ['Bot de IA', 'atención y guía'], ['Feria', 'stands y empresas'],
    ['Videos', 'sponsors y reels'], ['Logos', 'marcas y materiales'],
    ['Moderadores', 'staff y guiones'], ['Materiales', 'kits y señalética'],
    ['Comunidad', 'difusión y aliados'], ['Post-evento', 'memoria y seguimiento'],
  ]
  return (
    <div className="nx-frentes up" style={st(1)}>
      {frentes.map((f, i) => (
        <article className="nx-frente" key={f[0]} style={st(i + 1)}>
          <span className="ff-n">{String(i + 1).padStart(2, '0')}</span>
          <span className="ff-t">{f[0]}</span>
          <span className="ff-d">{f[1]}</span>
        </article>
      ))}
    </div>
  )
}

/* ---- S15 · Equipos sobre una sola fuente de verdad --------------------- */
export function Teams() {
  const teams: Array<[string, string]> = [
    ['Dirección', 'decisiones y prioridades'],
    ['Comercial', 'sponsors y oportunidades'],
    ['Marketing', 'campañas y piezas'],
    ['Eventos', 'agenda y logística'],
    ['Comunidad', 'comunicación y asistencia'],
    ['Coord. académica', 'sesiones y docentes'],
    ['Tecnología', 'app, bot y plataformas'],
    ['Operaciones', 'responsables y seguimiento'],
  ]
  return (
    <div className="nx-teams up" style={st(1)}>
      <div className="nx-truth" style={st(1)}>Una sola fuente de verdad</div>
      <div className="nx-teamgrid" style={st(2)}>
        {teams.map((t) => (
          <div className="nx-team" key={t[0]}><b>{t[0]}</b><span>{t[1]}</span></div>
        ))}
      </div>
    </div>
  )
}

/* ---- S19 · Trazabilidad: 4 preguntas + ficha --------------------------- */
export function Trace() {
  const qs: Array<[string, string]> = [
    ['¿Cuál es el estado actual?', 'sin preguntar'],
    ['¿Quién es responsable?', 'dueño claro'],
    ['¿Qué decisión se tomó?', 'criterio registrado'],
    ['¿Cuál es la próxima acción?', 'siguiente paso'],
  ]
  const rec: Array<[string, string, boolean?]> = [
    ['Empresa', 'Sponsor X'],
    ['Estado', 'Propuesta enviada', true],
    ['Responsable', 'Erika'],
    ['Decisión', 'Enviar paquete premium'],
    ['Próxima acción', 'Seguimiento jueves'],
  ]
  return (
    <div className="nx-trace up" style={st(1)}>
      <div className="nx-q4" style={st(1)}>
        {qs.map((q, i) => (
          <div className="nx-q" key={q[0]}><div className="qn">{i + 1}</div><p>{q[0]}</p></div>
        ))}
      </div>
      <div className="nx-record" style={st(2)}>
        <div className="rh"><span className="av">🏢</span> Ficha de empresa</div>
        {rec.map((r) => (
          <div className="rr" key={r[0]}><span className="rk">{r[0]}</span><span className={`rv${r[2] ? ' tag' : ''}`}>{r[1]}</span></div>
        ))}
      </div>
    </div>
  )
}

/* ---- S20 · Sistema por frentes (con sub-items) ------------------------- */
export function FrentesDetail() {
  const cards: Array<[string, string, string[]]> = [
    ['🤝', 'Sponsors', ['pipeline', 'estado', 'entregables', 'pagos', 'beneficios']],
    ['🎤', 'Speakers', ['confirmación', 'tema', 'horario', 'bio', 'técnico']],
    ['📣', 'Marketing', ['calendario', 'piezas', 'copies', 'canales', 'objetivos']],
    ['🧰', 'Logística', ['venue', 'stands', 'proveedores', 'horarios']],
    ['🎟️', 'Registro', ['participantes', 'tickets', 'confirmaciones', 'comms']],
    ['🌐', 'Comunidad', ['difusión', 'grupos', 'recordatorios', 'atención']],
    ['📦', 'Post-evento', ['grabaciones', 'reportes', 'aprendizajes', 'seguimiento']],
  ]
  return (
    <div className="nx-fdetail up" style={st(1)}>
      {cards.map((c, i) => (
        <article className="nx-fcard" key={c[1]} style={st(i + 1)}>
          <div className="fc-h"><i>{c[0]}</i>{c[1]}</div>
          <div className="fc-tags">{c[2].map((t) => <span key={t}>{t}</span>)}</div>
        </article>
      ))}
      <article className="nx-fcard" style={st(8)}>
        <div className="fc-h"><i>📊</i>Dashboard general</div>
        <div className="fc-tags"><span>conecta todos los frentes</span></div>
      </article>
    </div>
  )
}

/* ---- S21 · Conexión relacional ---------------------------------------- */
export function RelWeb() {
  const nodes = ['Sponsors', 'Speakers', 'Agenda', 'Tareas', 'Reuniones', 'Marketing']
  const examples: Array<ReactNode> = [
    <>Una <b>reunión</b> crea tareas.</>,
    <>Una <b>tarea</b> actualiza el estado del frente.</>,
    <>Un <b>sponsor</b> confirmado activa entregables de marketing.</>,
    <>Una <b>decisión</b> queda registrada en el historial.</>,
    <>El <b>dashboard</b> resume bloqueos y prioridades.</>,
  ]
  return (
    <div className="nx-rel up" style={st(1)}>
      <div className="nx-web" style={st(1)} aria-hidden="true">
        {nodes.map((n) => <span className="wb" key={n}>{n}</span>)}
        <span className="wb-center">Dashboard</span>
      </div>
      <ol style={st(2)}>
        {examples.map((e, i) => <li key={i}>{e}</li>)}
      </ol>
    </div>
  )
}

/* ---- S22 · Recomendaciones -------------------------------------------- */
export function Reco() {
  const recos: Array<[string, string]> = [
    ['Menos páginas, más sistema', 'Crear estructuras que respondan a procesos reales, no páginas por impulso.'],
    ['Cada dato con dueño', 'Si nadie actualiza una base, se vuelve obsoleta.'],
    ['Estados simples', 'Por hacer · en curso · bloqueado · revisión · hecho. Sin exceso de categorías.'],
    ['Vistas por rol', 'Dirección ve decisiones; marketing, calendario; comercial, pipeline; ops, bloqueos.'],
    ['IA después del proceso', 'No automatices caos: primero ordena el flujo, luego acelera con IA.'],
  ]
  return (
    <div className="nx-reco up" style={st(1)}>
      {recos.map((r, i) => (
        <article key={r[0]} style={st(i + 1)}>
          <div className="rn">{i + 1}</div>
          <h3>{r[0]}</h3>
          <p>{r[1]}</p>
        </article>
      ))}
    </div>
  )
}

/* ---- S23 · Stack tecnológico ------------------------------------------ */
export function Stack() {
  const layers: Array<[string, string, string, boolean?]> = [
    ['🗂️', 'Notion', 'Centro de operaciones: bases, tareas, dashboards, plantillas y conocimiento.', true],
    ['📁', 'Google Drive', 'Archivos, materiales, fotos, videos y entregables pesados.'],
    ['💬', 'WhatsApp', 'Comunicación rápida, coordinación inmediata y alertas humanas.'],
    ['📅', 'Calendar', 'Fechas, reuniones, sesiones, eventos y recordatorios.'],
    ['⚡', 'IA', 'Resumen, redacción, clasificación, reportes y detección de riesgos.'],
    ['📊', 'Dashboards', 'Seguimiento ejecutivo: KPIs, avance, bloqueos y decisiones.'],
    ['🔁', 'Automatizaciones', 'Notificaciones, estados, creación de tareas y reportes recurrentes.'],
  ]
  return (
    <div className="nx-stack up" style={st(1)}>
      {layers.map((l, i) => (
        <div className={`nx-layer${l[3] ? ' feat' : ''}`} key={l[1]} style={st(i + 1)}>
          <span className="ly-name"><i>{l[0]}</i>{l[1]}</span>
          <span className="ly-role">{l[2]}</span>
        </div>
      ))}
    </div>
  )
}

/* ---- S24 · Cierre conceptual: tri-flow --------------------------------- */
export function TriFlow() {
  const tf: Array<[string, string, string]> = [
    ['🧩', 'Información → Decisión', 'Ordenar contexto para elegir mejor.'],
    ['🎯', 'Decisión → Acción', 'Acuerdos en responsables, fechas y seguimiento.'],
    ['📈', 'Acción → Aprendizaje', 'Experiencia en procesos, plantillas y mejora continua.'],
  ]
  return (
    <div className="nx-triflow up" style={st(1)}>
      <div className="nx-tf" style={st(1)}><span className="tf-i">{tf[0][0]}</span><h3>{tf[0][1]}</h3><p>{tf[0][2]}</p></div>
      <div className="tf-arrow" style={st(2)} aria-hidden="true">→</div>
      <div className="nx-tf" style={st(3)}><span className="tf-i">{tf[1][0]}</span><h3>{tf[1][1]}</h3><p>{tf[1][2]}</p></div>
      <div className="tf-arrow" style={st(4)} aria-hidden="true">→</div>
      <div className="nx-tf" style={st(5)}><span className="tf-i">{tf[2][0]}</span><h3>{tf[2][1]}</h3><p>{tf[2][2]}</p></div>
    </div>
  )
}
