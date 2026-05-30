import { useEffect, useState } from 'react';

const content = {
  zh: {
    htmlLang: 'zh-CN',
    toggleLanguage: 'EN',
    toggleTheme: {
      light: '切换暗色',
      dark: '切换亮色',
    },
    toggleThemeButton: {
      light: 'DARK',
      dark: 'LIGHT',
    },
    nav: [
      { label: '宣言', href: '#manifesto' },
      { label: '起点', href: '#origin' },
      { label: '实验', href: '#signals' },
      { label: '方法', href: '#process' },
      { label: '联系', href: '#contact' },
    ],
    hero: {
      eyebrow: '独立游戏工作室 / 噪点采样中',
      title: 'AntiWaves',
      subtitle: '制噪工坊',
      body:
        '我们在 2025 年平安夜成立。AntiWaves 拆开熟悉的机制，打碎顺手的反馈，再把它们重新拼回去，让游戏回到最原始、最直接、最不需要解释的快乐。',
      primary: '查看工作方式',
      secondary: '联系工作室',
      badgeLeft: 'FOUND 2025.12.24',
      badgeRight: 'PLAY BEFORE POLISH',
      alert: '玩法不是被包装出来的，它是从冲突、节奏和失控里长出来的。',
    },
    stats: [
      { label: '成立时间', value: '2025.12.24', note: '平安夜启动' },
      { label: '工作模式', value: 'Remote / 小规模', note: '原型优先' },
      { label: '核心命题', value: '解构并重组玩法', note: '拒绝惯性设计' },
      { label: '输出目标', value: '纯粹乐趣', note: '先好玩，再解释' },
    ],
    manifesto: {
      kicker: 'MANIFESTO / 宣言',
      title: '把规则拆开，再把乐趣重新焊回去。',
      lead:
        '制噪工坊相信，许多游戏的疲惫感并不来自题材，而是来自被反复抚平、被流程化包装的玩法结构。我们做的不是“加内容”，而是重新排列冲突、风险、时机与反馈。',
      cards: [
        {
          title: '解构',
          body: '先质疑默认答案。把跳跃、攻击、资源、失败条件这些“理所应当”拆成可以单独审视的部件。',
        },
        {
          title: '重组',
          body: '不迷信类型边界。我们把互不相干的手感、规则和节奏焊接在一起，直到出现新的行为张力。',
        },
        {
          title: '还原',
          body: '最终目标不是复杂，而是直接。让玩家在几秒内就能感受到想继续按下去、试下去、闯下去的冲动。',
        },
      ],
    },
    origin: {
      kicker: 'ORIGIN / 起点',
      title: '成立于一个本该安静的夜晚。',
      description:
        '2025 年 12 月 24 日，我们决定让“噪音”成为方法：保留粗糙、保留试错、保留不稳定，并把这些通常会被设计流程修剪掉的部分，当成游戏诞生的核心。',
      timeline: [
        { year: '24 DEC 2025', title: '制噪工坊成立', body: '以独立工作室身份开始长期原型研发。' },
        { year: 'PHASE 01', title: '机制拆分', body: '把动作、资源、空间关系分离成可重接的模块。' },
        { year: 'PHASE 02', title: '失真测试', body: '故意引入冲突与异常，寻找意外但成立的乐趣。' },
        { year: 'PHASE 03', title: '乐趣提纯', body: '删掉解释层和多余装饰，只保留有效刺激。' },
      ],
    },
    signals: {
      kicker: 'SIGNALS / 实验',
      title: '当前噪波片段',
      description:
        '这里不是产品路标，而是正在发热的游戏信号。每个方向都从一个简单问题出发：如果把某种玩法逻辑扭转 30 度，玩家会不会重新感到兴奋？',
      projects: [
        {
          name: 'Loop Breaker',
          type: '动作 / 节奏错位',
          summary: '把“连段”拆成可打断、可逆向、可被环境接管的行为链。',
        },
        {
          name: 'Noise Ritual',
          type: '仪式 / 生存压力',
          summary: '让资源管理与仪式操作互相污染，失误也能生成策略窗口。',
        },
        {
          name: 'Shard Playground',
          type: '空间 / 规则拼接',
          summary: '把关卡切成碎片，再让玩家在运行中重写空间规则。',
        },
      ],
    },
    process: {
      kicker: 'PROCESS / 方法',
      title: '我们的工作方式比页面更粗。',
      steps: [
        {
          index: '01',
          title: '先做可玩的冲突',
          body: '优先验证按键和结果之间有没有张力，而不是先写世界观。',
        },
        {
          index: '02',
          title: '允许系统互相打架',
          body: '当规则互相顶撞时，新乐趣才有机会冒出来。',
        },
        {
          index: '03',
          title: '用删除逼近核心',
          body: '删掉炫耀性的层，留下玩家真正会重复体验的那一刀。',
        },
      ],
      quote: '游戏不该像说明书那样顺从。它应该先让你反应，再让你理解。',
    },
    contact: {
      kicker: 'CONTACT / 联系',
      title: '如果你也相信玩法需要被重新制造，和我们通个电。',
      body:
        '欢迎聊合作、媒体、原型试玩、或只是聊聊你最近遇到的那些被“设计规范”压平的游戏瞬间。',
      primary: '发送邮件',
      secondary: '查看宣言',
      mail: 'hello@antiwaves.cn',
      footer: 'AntiWaves / 制噪工坊. Independent game studio. Built for noise.',
    },
    aside: {
      label: 'STUDIO SIGNAL',
      text: '拆开机制，保留摩擦，重建快乐。',
    },
  },
  en: {
    htmlLang: 'en',
    toggleLanguage: '中文',
    toggleTheme: {
      light: 'Switch to dark',
      dark: 'Switch to light',
    },
    toggleThemeButton: {
      light: 'DARK',
      dark: 'LIGHT',
    },
    nav: [
      { label: 'Manifesto', href: '#manifesto' },
      { label: 'Origin', href: '#origin' },
      { label: 'Signals', href: '#signals' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Independent Game Studio / Sampling Noise',
      title: 'AntiWaves',
      subtitle: 'Zhi Zao Workshop',
      body:
        'Founded on December 24, 2025, AntiWaves breaks open familiar mechanics, ruins comfortable feedback loops, and rebuilds them so games can return to their most primitive and immediate pleasure.',
      primary: 'See the process',
      secondary: 'Contact the studio',
      badgeLeft: 'FOUND 2025.12.24',
      badgeRight: 'PLAY BEFORE POLISH',
      alert: 'Play is not wrapped in branding. It grows out of conflict, rhythm, and controlled loss of balance.',
    },
    stats: [
      { label: 'Founded', value: '2025.12.24', note: 'Christmas Eve launch' },
      { label: 'Mode', value: 'Remote / Small Team', note: 'Prototype first' },
      { label: 'Core Thesis', value: 'Deconstruct & recombine play', note: 'No default design habits' },
      { label: 'Output', value: 'Pure delight', note: 'Fun first, explanation later' },
    ],
    manifesto: {
      kicker: 'MANIFESTO',
      title: 'Break the rules apart. Weld the fun back in.',
      lead:
        'AntiWaves believes fatigue in games rarely comes from genre alone. More often it comes from mechanics that have been smoothed, standardized, and over-explained. We do not simply add content. We rearrange conflict, risk, timing, and feedback.',
      cards: [
        {
          title: 'Deconstruct',
          body: 'Challenge the default answers first. Jumping, attacking, economy, failure states: each “obvious” piece must survive inspection on its own.',
        },
        {
          title: 'Recombine',
          body: 'Genre boundaries are not sacred. We splice together incompatible feelings, rules, and tempos until a new tension appears.',
        },
        {
          title: 'Reduce',
          body: 'The goal is not complexity. It is directness. We want players to feel the urge to press forward, retry, and improvise within seconds.',
        },
      ],
    },
    origin: {
      kicker: 'ORIGIN',
      title: 'Started on a night that should have been quiet.',
      description:
        'On December 24, 2025, we decided to treat noise as method: keep the rough edges, keep the failed attempts, keep instability, and promote the parts most pipelines would trim away into the center of game creation.',
      timeline: [
        { year: '24 DEC 2025', title: 'AntiWaves begins', body: 'The studio starts long-form prototype research as an independent team.' },
        { year: 'PHASE 01', title: 'Mechanic separation', body: 'Action, resources, and spatial relations are split into reconnectable modules.' },
        { year: 'PHASE 02', title: 'Distortion tests', body: 'Conflict and irregularity are introduced on purpose to uncover surprising fun.' },
        { year: 'PHASE 03', title: 'Pleasure distillation', body: 'Explanatory layers and decorative excess are cut until only the useful spark remains.' },
      ],
    },
    signals: {
      kicker: 'SIGNALS',
      title: 'Current wave fragments',
      description:
        'These are not product promises. They are hot signals from the lab. Every direction begins with one question: if we torque a familiar play logic thirty degrees off-axis, does the player wake up again?',
      projects: [
        {
          name: 'Loop Breaker',
          type: 'Action / displaced rhythm',
          summary: 'Turns combo logic into interruptible, reversible, environment-hijacked behavior chains.',
        },
        {
          name: 'Noise Ritual',
          type: 'Ritual / survival pressure',
          summary: 'Lets resource management contaminate ritual actions so mistakes become strategic openings.',
        },
        {
          name: 'Shard Playground',
          type: 'Space / rule stitching',
          summary: 'Cuts levels into shards and lets players rewrite spatial logic while the session is live.',
        },
      ],
    },
    process: {
      kicker: 'PROCESS',
      title: 'Our method is rougher than this page.',
      steps: [
        {
          index: '01',
          title: 'Prototype the conflict first',
          body: 'We validate tension between input and outcome before writing lore.',
        },
        {
          index: '02',
          title: 'Let systems fight each other',
          body: 'New fun tends to surface when rules collide instead of aligning too early.',
        },
        {
          index: '03',
          title: 'Delete until the core stays',
          body: 'We remove ornamental layers and keep the one cut players actually want to repeat.',
        },
      ],
      quote: 'Games should not behave like manuals. They should trigger reaction first, understanding second.',
    },
    contact: {
      kicker: 'CONTACT',
      title: 'If you believe play should be rebuilt, send a signal.',
      body:
        'Talk to us about collaboration, press, prototype sessions, or simply the game moments that were flattened by design orthodoxy.',
      primary: 'Send mail',
      secondary: 'Read the manifesto',
      mail: 'hello@antiwaves.cn',
      footer: 'AntiWaves. Independent game studio. Built for noise.',
    },
    aside: {
      label: 'STUDIO SIGNAL',
      text: 'Split mechanics. Keep the friction. Rebuild delight.',
    },
  },
};

const storageKeys = {
  lang: 'antiwaves-lang',
  theme: 'antiwaves-theme',
};

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem(storageKeys.theme);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getInitialLang() {
  if (typeof window === 'undefined') {
    return 'zh';
  }

  const storedLang = window.localStorage.getItem(storageKeys.lang);
  return storedLang === 'en' ? 'en' : 'zh';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [lang, setLang] = useState(getInitialLang);
  const copy = content[lang];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = copy.htmlLang;
    window.localStorage.setItem(storageKeys.theme, theme);
  }, [theme, copy.htmlLang]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.lang, lang);
  }, [lang]);

  const themeSwitchLabel = copy.toggleTheme[theme];

  return (
    <div className="site-shell">
      <div className="noise-layer" aria-hidden="true" />
      <header className="topbar">
        <a className="brand-mark" href="#top" aria-label="AntiWaves home">
          <span className="brand-mark__symbol">AW</span>
          <span className="brand-mark__text">
            <strong>AntiWaves</strong>
            <em>{copy.hero.subtitle}</em>
          </span>
        </a>

        <nav className="topbar__nav" aria-label="Primary">
          {copy.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar__actions">
          <button
            type="button"
            className="switch"
            onClick={() => setLang((value) => (value === 'zh' ? 'en' : 'zh'))}
            aria-label="Toggle language"
          >
            {copy.toggleLanguage}
          </button>
          <button
            type="button"
            className="switch"
            onClick={() => setTheme((value) => (value === 'light' ? 'dark' : 'light'))}
            aria-label={themeSwitchLabel}
            aria-pressed={theme === 'dark'}
          >
            {copy.toggleThemeButton[theme]}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero panel hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <h1>{copy.hero.title}</h1>
            <p className="hero-copy__subtitle">{copy.hero.subtitle}</p>
            <p className="hero-copy__body">{copy.hero.body}</p>

            <div className="hero-copy__actions">
              <a className="cta cta--primary" href="#process">
                {copy.hero.primary}
              </a>
              <a className="cta cta--secondary" href="#contact">
                {copy.hero.secondary}
              </a>
            </div>
          </div>

          <div className="hero-board">
            <div className="stamp">{copy.hero.badgeLeft}</div>
            <div className="signal-card">
              <span>{copy.aside.label}</span>
              <strong>{copy.aside.text}</strong>
            </div>
            <div className="warning-box">
              <small>{copy.hero.badgeRight}</small>
              <p>{copy.hero.alert}</p>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {copy.stats.map((item) => (
            <article key={item.label} className="panel stat-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </section>

        <section id="manifesto" className="section-block">
          <div className="section-heading">
            <span>{copy.manifesto.kicker}</span>
            <h2>{copy.manifesto.title}</h2>
          </div>
          <div className="manifesto-grid">
            <article className="panel manifesto-lead">
              <p>{copy.manifesto.lead}</p>
            </article>

            {copy.manifesto.cards.map((card) => (
              <article key={card.title} className="panel manifesto-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="origin" className="section-block offset-layout">
          <div className="section-heading">
            <span>{copy.origin.kicker}</span>
            <h2>{copy.origin.title}</h2>
          </div>
          <div className="origin-layout">
            <article className="panel origin-copy">
              <p>{copy.origin.description}</p>
            </article>
            <div className="timeline">
              {copy.origin.timeline.map((item) => (
                <article key={item.year} className="panel timeline-card">
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="signals" className="section-block">
          <div className="section-heading">
            <span>{copy.signals.kicker}</span>
            <h2>{copy.signals.title}</h2>
            <p>{copy.signals.description}</p>
          </div>
          <div className="projects-grid">
            {copy.signals.projects.map((project) => (
              <article key={project.name} className="panel project-card">
                <div className="project-card__header">
                  <h3>{project.name}</h3>
                  <span>{project.type}</span>
                </div>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="section-block">
          <div className="section-heading">
            <span>{copy.process.kicker}</span>
            <h2>{copy.process.title}</h2>
          </div>
          <div className="process-layout">
            <div className="process-steps">
              {copy.process.steps.map((step) => (
                <article key={step.index} className="panel process-card">
                  <span>{step.index}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
            <aside className="panel quote-box">
              <p>{copy.process.quote}</p>
            </aside>
          </div>
        </section>

        <section id="contact" className="section-block">
          <div className="contact-banner panel">
            <div className="section-heading section-heading--compact">
              <span>{copy.contact.kicker}</span>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.body}</p>
            </div>

            <div className="contact-actions">
              <a className="cta cta--primary" href={`mailto:${copy.contact.mail}`}>
                {copy.contact.primary}
              </a>
              <a
                className="cta cta--secondary"
                href="#manifesto"
              >
                {copy.contact.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{copy.contact.footer}</p>
        <a href={`mailto:${copy.contact.mail}`}>{copy.contact.mail}</a>
      </footer>
    </div>
  );
}

export default App;
