import './App.css'

const YEAR = new Date().getFullYear()

const NAV = [
  { label: '海图', href: '#chart' },
  { label: '航线', href: '#route' },
  { label: '日志', href: '#log' },
]

const MODULES = [
  {
    id: 'chart',
    tag: 'CHART',
    title: '电子海图',
    desc: '接入 S-57 / S-63 海图数据，叠加等深线与浮标物标，支持等值线与流场渲染。',
    status: '规划中',
  },
  {
    id: 'route',
    tag: 'ROUTE',
    title: '航线规划',
    desc: '按大圆航法生成推荐航线，自动绕避碍航区，给出分段航向、航程与预计航时。',
    status: '开发中',
  },
  {
    id: 'log',
    tag: 'LOG',
    title: '航海日志',
    desc: '记录船位、气象与风向变化，落笔即成结构化日志，可导出 PDF 与 GPX 轨迹。',
    status: '待启动',
  },
]

function Compass() {
  return (
    <div className="compass" aria-hidden="true">
      <svg viewBox="0 0 240 240" role="presentation">
        <circle className="compass-ring" cx="120" cy="120" r="112" />
        <circle className="compass-ring inner" cx="120" cy="120" r="88" />
        <g className="compass-ticks">
          {Array.from({ length: 24 }, (_, i) => (
            <line
              key={i}
              x1="120"
              y1="14"
              x2="120"
              y2={i % 2 === 0 ? 30 : 22}
              transform={`rotate(${i * 15} 120 120)`}
            />
          ))}
        </g>
        <text className="compass-label" x="120" y="46">N</text>
        <text className="compass-label" x="120" y="200">S</text>
        <text className="compass-label" x="200" y="126">E</text>
        <text className="compass-label" x="40" y="126">W</text>
        <g className="compass-needle">
          <path d="M120 44 L134 120 L120 136 L106 120 Z" />
          <path className="needle-tail" d="M120 196 L108 136 L120 120 L132 136 Z" />
        </g>
        <circle className="compass-pin" cx="120" cy="120" r="5" />
      </svg>
    </div>
  )
}

export default function App() {
  return (
    <div className="shell">
      <header className="topbar">
        <a className="brand" href="#top">
          <svg className="brand-mark" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1" opacity=".35" />
            <path d="M12 4 15 12 12 16 9 12Z" fill="currentColor" />
          </svg>
          <span className="brand-name">SEXTANT</span>
          <span className="brand-sub">六分仪</span>
        </a>

        <nav className="nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <span className="version">v0.1.0 · pre-alpha</span>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">远洋航线规划台 · Open Water</p>
            <h1>
              把整片海，
              <br />
              画成一条航线。
            </h1>
            <p className="lede">
              六分仪是一个开源的航海前端项目。它把海图、风场、潮汐与船位放进同一块画布，
              让每一次出发都能被计算，而不只是被祈祷。
            </p>

            <div className="actions">
              <a className="btn primary" href="#route">
                开始规划
              </a>
              <a
                className="btn ghost"
                href="https://github.com/xuncv/sextant"
                target="_blank"
                rel="noreferrer"
              >
                GitHub 仓库
              </a>
            </div>

            <dl className="stats">
              <div>
                <dt>海图比例</dt>
                <dd>1 : 50 000</dd>
              </div>
              <div>
                <dt>坐标系</dt>
                <dd>WGS 84</dd>
              </div>
              <div>
                <dt>当前状态</dt>
                <dd>骨架搭建完成</dd>
              </div>
            </dl>
          </div>

          <Compass />
        </section>

        <section className="modules" aria-label="模块">
          {MODULES.map((m) => (
            <article key={m.id} id={m.id} className="card">
              <header>
                <span className="tag">{m.tag}</span>
                <span className="status">{m.status}</span>
              </header>
              <h2>{m.title}</h2>
              <p>{m.desc}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <span>© {YEAR} SEXTANT · MIT License</span>
        <span className="footer-hint">风吹向哪里，航线就从哪里开始。</span>
      </footer>
    </div>
  )
}
