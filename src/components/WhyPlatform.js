export function renderWhyPlatform(container) {
  if (!container) return;

  const features = [
    {
      badge: "SYSTEMATIC EDGE",
      title: "Battle-Tested Strategy Frameworks",
      desc: "Pre-defined rulebooks for trend trading, breakout continuation, and market structure sweeps designed to eliminate guesswork."
    },
    {
      badge: "CAPITAL PRESERVATION",
      title: "Risk-First Architecture",
      desc: "Capital preservation comes first. Every strategy incorporates rigorous position sizing rules, portfolio heat limits, and strict invalidations."
    },
    {
      badge: "REAL-TIME INTELLIGENCE",
      title: "Institutional Market Analysis",
      desc: "Continuous technical research, volume delta tracking, and multi-timeframe structural mapping across Bitcoin, Ethereum, and Altcoins."
    },
    {
      badge: "CONTINUOUS UP-SKILLING",
      title: "Practical Trading Education",
      desc: "In-depth case studies, execution checklists, and interactive walkthroughs that turn abstract market concepts into repeatable habits."
    }
  ];

  container.innerHTML = `
    <div class="container">
      <div class="intro-section" style="margin-bottom: 24px;">
        <span class="tag-badge" style="margin-bottom: 12px; display: inline-flex; border-color: rgba(245, 158, 11, 0.4); background: rgba(245, 158, 11, 0.08);">
          <span class="tag-dot" style="background: #F59E0B;"></span>
          WHY TRADELAB PLATFORM
        </span>
        <h2 class="heading-lg">
          Built Around Process, <span style="color: #F59E0B;">Not Predictions</span>
        </h2>
        <p class="text-lead intro-desc" style="color: var(--text-secondary);">
          Eliminate emotional guesswork. TRADELAB delivers a repeatable execution engine designed for consistent risk-adjusted trading performance.
        </p>
      </div>

      <div class="why-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
        ${features.map(f => `
          <div class="why-card" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 32px; transition: all 0.3s;" onmouseover="this.style.borderColor='#F59E0B'; this.style.transform='translateY(-3px)'" onmouseout="this.style.borderColor='var(--border-subtle)'; this.style.transform='translateY(0)'">
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: #F59E0B; font-weight: 700; letter-spacing: 0.08em; display: block; margin-bottom: 12px;">${f.badge}</span>
            <h3 class="why-title" style="font-size: 1.35rem; font-weight: 700; color: #FFFFFF; margin-bottom: 12px;">${f.title}</h3>
            <p class="why-desc" style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
