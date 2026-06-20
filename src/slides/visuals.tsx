import { st } from '../deck/primitives'

/* ---- S2 · Fuentes dispersas del conocimiento --------------------------- */
export function ScatterSources() {
  const sources: Array<[string, string]> = [
    ['📁', 'Drive'], ['💬', 'WhatsApp'], ['✉️', 'Correos'], ['📞', 'Llamadas'],
    ['🎙️', 'Audios'], ['🖥️', 'Reuniones'], ['📸', 'Capturas'], ['📊', 'Excel'],
  ]
  return (
    <div className="scatter up" style={st(1)}>
      {sources.map((s, i) => (
        <span className="scatter-chip" key={s[1]} style={st(i + 1)}><i>{s[0]}</i>{s[1]}</span>
      ))}
      <span className="scatter-chip ghost" style={st(9)}><i>🧠</i>«lo sabe alguien del equipo»</span>
    </div>
  )
}

/* ---- S3 · El problema: dispersión = doble costo + fricción ------------- */
export function DoubleCost() {
  const frictions: Array<string[]> = [
    ['¿Dónde está el ', 'logo actualizado', ' del sponsor?'],
    ['¿', 'Quién confirmó', ' al speaker?'],
    ['Ese no es el final… el final ', 'lo mandaron por WhatsApp', '.'],
    ['Creo que ', 'lo vio en una llamada', '.'],
  ]
  return (
    <div className="cost2 up" style={st(1)}>
      <div className="cost2-hero" style={st(1)}>
        <span className="cost2-x">×2</span>
        <p className="cost2-lead">La empresa paga dos veces por la misma información.</p>
        <div className="cost2-pays">
          <div className="cost2-pay"><b>1</b><span>Pagó el tiempo de <em>decidirlo</em>.</span></div>
          <div className="cost2-pay"><b>2</b><span>Paga otra vez para <em>volver a buscarlo</em>, explicarlo o reconstruirlo.</span></div>
        </div>
      </div>
      <div className="frictions" style={st(2)}>
        {frictions.map((f, i) => (
          <p className="friction" key={i} style={st(i + 2)}>{f[0]}<em>{f[1]}</em>{f[2]}</p>
        ))}
      </div>
    </div>
  )
}

/* ---- S6 · Notion como centro de operaciones (hub) --------------------- */
export function NotionHub() {
  const nodes: Array<[string, string]> = [
    ['Proyectos', 'frentes y objetivos'],
    ['Tareas', 'qué, quién, cuándo'],
    ['Reuniones', 'acuerdos y minutas'],
    ['Dashboards', 'estado real'],
    ['Plantillas', 'lo que se repite'],
    ['Procesos', 'cómo se ejecuta'],
    ['Decisiones', 'criterio registrado'],
    ['Conocimiento', 'disponible al equipo'],
  ]
  return (
    <div className="notion-hub up" style={st(1)}>
      <div className="nh-core"><b>Notion</b><span>centro de operaciones</span></div>
      {nodes.map((n) => (
        <div className="nh-node" key={n[0]}>{n[0]}<small>{n[1]}</small></div>
      ))}
    </div>
  )
}

/* ---- S7 · Frentes del AI Construction Summit -------------------------- */
export function Frentes() {
  const frentes: Array<[string, string]> = [
    ['Sponsors', 'empresas, propuesta y cierre'],
    ['Speakers', 'tema, bio, confirmación'],
    ['Marketing', 'campaña y calendario'],
    ['Contenido', 'piezas, copies, agenda'],
    ['Agenda', 'bloques y moderadores'],
    ['Logística', 'stands, materiales, horarios'],
    ['Registro', 'inscripción y beneficios'],
    ['App + Bot IA', 'experiencia del asistente'],
    ['Comunidad', 'activación y alianzas'],
    ['Alianzas', 'academia · industria · startups'],
    ['Post-evento', 'seguimiento y memoria'],
  ]
  return (
    <div className="frentes up" style={st(1)}>
      {frentes.map((f, i) => (
        <article className="frente" key={f[0]} style={st(i + 1)}>
          <span className="fr-n">{String(i + 1).padStart(2, '0')}</span>
          <span className="fr-t">{f[0]}</span>
          <span className="fr-d">{f[1]}</span>
        </article>
      ))}
    </div>
  )
}

/* ---- S8 · Sponsors: de conversaciones a CRM operativo ---------------- */
export function SponsorBoard() {
  const pipeline = ['Prospecto', 'Contacto', 'Reunión', 'Propuesta', 'Negociación', 'Confirmado', 'Entregables', 'Cerrado']
  const onStage = 'Propuesta'
  const cols: Array<{ name: string; ac: string; count: string; cards: Array<{ co: string; av: string; tags: Array<[string, boolean?]> }> }> = [
    {
      name: 'Contacto', ac: 'var(--d-purple)', count: '2',
      cards: [
        { co: 'Nonica BIM', av: '🏗️', tags: [['Daniella'], ['Stand']] },
        { co: 'Hilti LATAM', av: '🔩', tags: [['Erika']] },
      ],
    },
    {
      name: 'Reunión', ac: 'var(--d-indigo)', count: '1',
      cards: [
        { co: 'Autodesk', av: '🅰️', tags: [['Erika'], ['Gold', true]] },
      ],
    },
    {
      name: 'Propuesta', ac: 'var(--accent)', count: '2',
      cards: [
        { co: 'Graphisoft', av: '📐', tags: [['Caliente', true], ['Video']] },
        { co: 'Procore', av: '🟧', tags: [['Daniella'], ['Logo']] },
      ],
    },
    {
      name: 'Confirmado', ac: 'var(--d-green)', count: '2',
      cards: [
        { co: 'AECODE', av: '🟢', tags: [['Pagado', true]] },
        { co: 'Notion', av: '⬛', tags: [['Beneficios', true]] },
      ],
    },
  ]
  const props = ['Estado', 'Responsable', 'Última interacción', 'Próxima acción', 'Valor potencial', 'Riesgo', 'Fecha límite', 'Entregables']
  return (
    <div className="sponsor up" style={st(1)}>
      <div className="sb-pipe" style={st(1)}>
        {pipeline.map((s, i) => (
          <span key={s} style={{ display: 'contents' }}>
            <span className={`sb-stage${s === onStage ? ' on' : ''}`}>{s}</span>
            {i < pipeline.length - 1 && <span className="sb-arrow" aria-hidden="true">›</span>}
          </span>
        ))}
      </div>
      <div className="sb-board" style={st(2)}>
        {cols.map((c, ci) => (
          <div className="sb-col" key={c.name} style={st(ci + 2)}>
            <div className="sb-col-head" style={{ ['--ac' as any]: c.ac }}>
              <b>{c.name}</b><em>{c.count}</em>
            </div>
            {c.cards.map((card) => (
              <article className="sb-card" key={card.co}>
                <span className="sc-co"><span className="sc-av">{card.av}</span>{card.co}</span>
                <span className="sc-tags">
                  {card.tags.map((t) => <span className={`sc-tag${t[1] ? ' hot' : ''}`} key={t[0]}>{t[0]}</span>)}
                </span>
              </article>
            ))}
          </div>
        ))}
      </div>
      <div className="sb-props" style={st(3)}>
        {props.map((p) => <span className="spk" key={p}><b>·</b> {p}</span>)}
      </div>
    </div>
  )
}

/* ---- S10 · Notion + IA + Equipo (tríada) + regla de reúso ------------- */
export function Triad() {
  const pillars: Array<[string, string, string, string]> = [
    ['🗂️', 'Notion', 'el sistema', 'Donde el conocimiento se ordena, conecta y queda disponible para todo el equipo.'],
    ['⚡', 'IA', 'el acelerador', 'Resume, estructura, convierte notas en tareas y prepara primeras versiones — más rápido.'],
    ['🧭', 'Equipo', 'el criterio', 'La decisión, el tono, la estrategia y la relación siguen siendo humanas. La IA no reemplaza el criterio.'],
  ]
  const rules: Array<[string, string]> = [
    ['Si algo se repite', 'Proceso'],
    ['Si se consulta mucho', 'Documentación'],
    ['Si se ejecuta varias veces', 'Plantilla'],
  ]
  return (
    <>
      <div className="triad up" style={st(1)}>
        {pillars.map((p, i) => (
          <article key={p[1]} style={st(i + 1)}>
            <span className="tr-i">{p[0]}</span>
            <span className="tr-role">{p[2]}</span>
            <h3>{p[1]}</h3>
            <p>{p[3]}</p>
          </article>
        ))}
      </div>
      <div className="rules up" style={st(2)}>
        {rules.map((r, i) => (
          <div className="rule" key={r[0]} style={st(i + 2)}>
            <span className="ru-if"><em>{r[0]}</em></span>
            <span className="ru-arrow" aria-hidden="true">→</span>
            <span className="ru-then">{r[1]}</span>
          </div>
        ))}
      </div>
    </>
  )
}

/* ---- S11 · Lecciones aprendidas --------------------------------------- */
export function Lessons() {
  const lessons: Array<[string, string]> = [
    ['Menos páginas, más sistema', 'El objetivo no es tener muchas páginas, sino una estructura que el equipo realmente use.'],
    ['Si la información no tiene dueño, se desactualiza', 'Cada base, dashboard y proceso necesita un responsable. Sin eso, Notion es un cementerio elegante.'],
    ['Las plantillas son ventaja compuesta', 'Ahorran tiempo una vez; usadas veinte o cincuenta veces, se vuelven un activo.'],
    ['La IA funciona mejor con contexto', 'Ayudar sobre información dispersa es útil; sobre un sistema ordenado es mucho más poderoso.'],
    ['La cultura importa más que la herramienta', 'Si el equipo no actualiza, no documenta y no consulta, ninguna herramienta salva el proceso.'],
  ]
  return (
    <div className="lessons up" style={st(1)}>
      {lessons.map((l, i) => (
        <article className="lesson" key={l[0]} style={st(i + 1)}>
          <span className="le-n">{i + 1}</span>
          <div>
            <div className="le-t">{l[0]}</div>
            <div className="le-d">{l[1]}</div>
          </div>
        </article>
      ))}
    </div>
  )
}
