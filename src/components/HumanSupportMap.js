export function renderHumanSupportMap(container) {
  if (!container) return;

  const languages = [
    { code: "EN", text: "Hello", region: "English" },
    { code: "ES", text: "Hola", region: "Spanish" },
    { code: "HI", text: "Namaste", region: "Hindi" },
    { code: "FR", text: "Bonjour", region: "French" },
    { code: "PT", text: "Olá", region: "Portuguese" },
    { code: "DE", text: "Hallo", region: "German" },
    { code: "JA", text: "Konnichiwa", region: "Japanese" }
  ];

  const hubs = [
    { name: "New York Hub", region: "Americas Desk", ping: "< 2 min", status: "ONLINE", tz: "EST (UTC-5)" },
    { name: "London Hub", region: "EMEA Desk", ping: "< 1 min", status: "ONLINE", tz: "GMT (UTC+0)" },
    { name: "Singapore Hub", region: "APAC Desk", ping: "< 2 min", status: "ONLINE", tz: "SGT (UTC+8)" },
    { name: "Tokyo Hub", region: "Asia Desk", ping: "< 3 min", status: "ONLINE", tz: "JST (UTC+9)" }
  ];

  container.innerHTML = `
    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <div style="background: #111927; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; padding: 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; position: relative; overflow: hidden;" class="support-map-main-card">
        
        <!-- Left Side: Sleek Matte Institutional Network Visual Card -->
        <div style="background: #0B0F19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 18px; padding: 32px; display: flex; flex-direction: column; gap: 20px; position: relative; overflow: hidden;">
          
          <!-- Card Header HUD -->
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255, 255, 255, 0.06); padding-bottom: 16px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #F59E0B;"></span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #F59E0B; font-weight: 700; letter-spacing: 0.08em;">GLOBAL DESK NETWORK</span>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); background: rgba(255,255,255,0.03); padding: 3px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.06);">24/7 ACTIVE</span>
          </div>

          <!-- Network Hub Nodes Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            ${hubs.map(h => `
              <div style="background: #162032; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 8px; transition: all 0.2s;" onmouseover="this.style.borderColor='rgba(245, 158, 11, 0.4)'" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.06)'">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <span style="font-size: 0.875rem; font-weight: 700; color: #FFFFFF;">${h.name}</span>
                  <span style="width: 6px; height: 6px; border-radius: 50%; background: #F59E0B;"></span>
                </div>
                <div style="font-size: 0.775rem; color: var(--text-secondary);">${h.region}</div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 4px; font-family: var(--font-mono); font-size: 0.7rem;">
                  <span style="color: var(--text-muted);">${h.tz}</span>
                  <span style="color: #F59E0B; font-weight: 600;">${h.ping}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Network Summary Bar -->
          <div style="background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 10px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #FFFFFF; font-weight: 600;">AVERAGE RESPONSE TIME</span>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 800; color: #F59E0B;">UNDER 90 SECONDS</span>
          </div>

        </div>

        <!-- Right Side: Smooth Professional Content & Language Selector -->
        <div>
          
          <!-- Smooth Monochromatic Language Pills -->
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
            ${languages.map(l => `
              <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 999px; padding: 6px 14px; display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono); font-size: 0.775rem; color: #E2E8F0; transition: all 0.2s;" onmouseover="this.style.borderColor='#F59E0B'; this.style.color='#F59E0B'" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.1)'; this.style.color='#E2E8F0'">
                <span style="color: var(--text-muted); font-weight: 700;">${l.code}</span>
                <span>•</span>
                <span style="font-weight: 600;">${l.text}</span>
              </div>
            `).join('')}
          </div>

          <!-- Section Headline -->
          <h2 style="font-family: var(--font-heading); font-size: clamp(2rem, 3.4vw, 3rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.025em; color: #FFFFFF; margin-bottom: 16px;">
            24/7 Human Support,<br/>
            <span style="color: #F59E0B;">In Any Language.</span>
          </h2>

          <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.65; margin-bottom: 32px;">
            Talk directly to experienced market practitioners and technical risk managers. Resolve strategy inquiries, trade execution details, and account setup in minutes.
          </p>

          <!-- 4 Smooth Metric Counters -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 24px; margin-bottom: 32px;">
            <div>
              <div style="font-family: var(--font-mono); font-size: 1.75rem; font-weight: 800; color: #FFFFFF;">30+</div>
              <div style="font-size: 0.825rem; color: var(--text-secondary); margin-top: 2px;">Market Desk Experts</div>
            </div>
            <div>
              <div style="font-family: var(--font-mono); font-size: 1.75rem; font-weight: 800; color: #FFFFFF;">10+ Years</div>
              <div style="font-size: 0.825rem; color: var(--text-secondary); margin-top: 2px;">Avg Trading Experience</div>
            </div>
          </div>

          <!-- Smooth CTA -->
          <div>
            <a href="contact.html" class="btn btn-primary" style="background: #F59E0B; color: #0B0F19; font-weight: 700; padding: 14px 28px; border-radius: 8px; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 8px;">
              <span>Get Support Now</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  `;
}
