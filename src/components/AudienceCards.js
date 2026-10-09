export function renderAudienceCards(container) {
  if (!container) return;

  const imageUrl = import.meta.env.BASE_URL + 'assets/trader_illustration.jpg';

  container.innerHTML = `
    <!-- Main Showcase Section (Golden Accent) -->
    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <div class="audience-feature-hero" style="background: #162032; border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 20px; padding: 48px; display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px; align-items: center; position: relative; overflow: hidden;">
        
        <!-- Left Side: Headline, Copy, Feature Cards & CTAs -->
        <div style="position: relative; z-index: 2;">
          <div style="margin-bottom: 16px;">
            <span class="hero-pill-badge" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(245, 158, 11, 0.08); padding: 6px 14px; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: #F59E0B; display: inline-flex; align-items: center; gap: 8px;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #F59E0B;"></span>
              CYBER READINESS &amp; TRADING MASTERY
            </span>
          </div>

          <h2 style="font-family: var(--font-heading); font-size: clamp(2.2rem, 3.6vw, 3.2rem); font-weight: 800; line-height: 1.12; letter-spacing: -0.03em; color: #FFFFFF; margin-bottom: 18px;">
            Built for Individual Edge.<br/>
            <span style="color: #F59E0B;">Scaled for Teams &amp; Capital.</span>
          </h2>

          <p style="color: #A3B3C9; font-size: 1.08rem; line-height: 1.65; margin-bottom: 32px; max-width: 620px;">
            Whether you are building your personal trading consistency or leading a funded account portfolio, TRADELAB provides battle-tested trading frameworks, risk intelligence, and interactive execution environments.
          </p>

          <!-- 3 Interactive Feature Cards -->
          <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px;">
            
            <!-- Feature 1 -->
            <div style="background: #0B0F19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; gap: 16px; transition: all 0.2s;" onmouseover="this.style.borderColor='rgba(245, 158, 11, 0.6)'" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.08)'">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.3); display: flex; align-items: center; justify-content: center; color: #F59E0B; font-weight: 800; font-size: 1.05rem; flex-shrink: 0;">
                ✓
              </div>
              <div>
                <div style="color: #FFFFFF; font-weight: 700; font-size: 0.975rem;">Multi-Timeframe Price Action</div>
                <div style="color: #64748B; font-size: 0.825rem; margin-top: 2px;">Advanced liquidity sweep &amp; order block execution models</div>
              </div>
            </div>

            <!-- Feature 2 -->
            <div style="background: #0B0F19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; gap: 16px; transition: all 0.2s;" onmouseover="this.style.borderColor='rgba(245, 158, 11, 0.6)'" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.08)'">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.3); display: flex; align-items: center; justify-content: center; color: #F59E0B; font-weight: 800; font-size: 1.05rem; flex-shrink: 0;">
                ✓
              </div>
              <div>
                <div style="color: #FFFFFF; font-weight: 700; font-size: 0.975rem;">Strict Risk &amp; Position Sizing</div>
                <div style="color: #64748B; font-size: 0.825rem; margin-top: 2px;">Mathematical portfolio heat limits &amp; automated invalidations</div>
              </div>
            </div>

            <!-- Feature 3 -->
            <div style="background: #0B0F19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; gap: 16px; transition: all 0.2s;" onmouseover="this.style.borderColor='rgba(245, 158, 11, 0.6)'" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.08)'">
              <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.3); display: flex; align-items: center; justify-content: center; color: #F59E0B; font-weight: 800; font-size: 1.05rem; flex-shrink: 0;">
                ✓
              </div>
              <div>
                <div style="color: #FFFFFF; font-weight: 700; font-size: 0.975rem;">24/7 Global Infrastructure</div>
                <div style="color: #64748B; font-size: 0.825rem; margin-top: 2px;">Low-latency residential trading proxy hubs in London, NYC &amp; Tokyo</div>
              </div>
            </div>

          </div>

          <!-- CTAs -->
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <a href="strategies.html" class="btn btn-primary" style="background: #F59E0B; color: #0B0F19; font-weight: 700; padding: 14px 28px; border-radius: 8px; font-size: 0.95rem;">
              <span>Explore Strategy Suite</span>
              <span>→</span>
            </a>
            <a href="pricing.html" class="btn btn-secondary" style="border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.04); color: #FFFFFF; font-weight: 600; padding: 14px 26px; border-radius: 8px; font-size: 0.95rem;">
              <span>Funded Account Plans</span>
            </a>
          </div>
        </div>

        <!-- Right Side: Clean Flat Terminal Card Frame with Vector Illustration -->
        <div style="position: relative; display: flex; justify-content: center; align-items: center; z-index: 2;">
          
          <div style="width: 100%; border-radius: 16px; border: 1px solid rgba(245, 158, 11, 0.4); background: #0B0F19; overflow: hidden; position: relative;">
            
            <!-- Terminal Card Top Bar -->
            <div style="background: #111927; padding: 12px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; gap: 6px; align-items: center;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #FF3B69;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #F59E0B;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #F59E0B;"></span>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.725rem; color: #F59E0B; font-weight: 700; letter-spacing: 0.05em;">
                TRADELAB // OPERATIONAL_HUB
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.675rem; color: #F59E0B; background: rgba(245, 158, 11, 0.1); padding: 2px 8px; border-radius: 4px; font-weight: 600;">
                ● ONLINE
              </div>
            </div>

            <!-- Vector Illustration Image Area -->
            <div style="position: relative; overflow: hidden; display: flex; justify-content: center; background: #0B0F19;">
              <img src="${imageUrl}" alt="TRADELAB Trader Vector Illustration" style="width: 100%; height: auto; max-height: 440px; object-fit: contain; display: block;" />
              
              <!-- Bottom Overlaid Floating Metric Pills -->
              <div style="position: absolute; bottom: 16px; left: 16px; right: 16px; display: flex; justify-content: space-between; gap: 10px;">
                <div style="background: #111927; border: 1px solid rgba(245, 158, 11, 0.4); padding: 8px 12px; border-radius: 8px;">
                  <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase;">ACTIVE TRADERS</div>
                  <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 800; color: #F59E0B;">185,000+</div>
                </div>
                <div style="background: #111927; border: 1px solid rgba(245, 158, 11, 0.4); padding: 8px 12px; border-radius: 8px;">
                  <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase;">EXECUTION UPTIME</div>
                  <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 800; color: #F59E0B;">99.98%</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

    <!-- Dual Path Cards (Golden Accent) -->
    <div class="container" style="margin-top: 10px; margin-bottom: 40px;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 28px;">
        
        <!-- Path 1: For Individual Traders -->
        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 36px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; transition: all 0.2s;" onmouseover="this.style.borderColor='#F59E0B'" onmouseout="this.style.borderColor='var(--border-subtle)'">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #F59E0B; letter-spacing: 0.1em; font-weight: 700;">FOR INDIVIDUAL TRADERS</span>
              <span style="background: rgba(245, 158, 11, 0.12); color: #F59E0B; padding: 4px 10px; border-radius: 999px; font-size: 0.725rem; font-family: var(--font-mono); font-weight: 600;">INDIVIDUAL PATH</span>
            </div>

            <h3 style="font-size: 1.8rem; font-weight: 800; color: #FFFFFF; margin-bottom: 12px; line-height: 1.2;">
              Develop Personal Consistency &amp; Setup Discipline
            </h3>
            
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 24px;">
              Master price action fundamentals, trend alignment models, and mathematical position sizing to trade your personal capital with confidence.
            </p>

            <ul style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px;">
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Complete Trading Academy &amp; Technical Analysis Modules</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Interactive Pre-Trade Execution Checklist Engine</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Daily Technical Briefings across BTC, ETH &amp; Alts</span>
              </li>
            </ul>
          </div>

          <a href="strategies.html" class="btn btn-primary" style="background: #F59E0B; color: #0B0F19; font-weight: 700; width: 100%; justify-content: center; padding: 14px;">
            <span>Explore Individual Strategies</span>
            <span>→</span>
          </a>
        </div>

        <!-- Path 2: For Teams & Funded Accounts -->
        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 36px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; transition: all 0.2s;" onmouseover="this.style.borderColor='#F59E0B'" onmouseout="this.style.borderColor='var(--border-subtle)'">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #F59E0B; letter-spacing: 0.1em; font-weight: 700;">FOR FUNDED ACCOUNTS &amp; TEAMS</span>
              <span style="background: rgba(245, 158, 11, 0.12); color: #F59E0B; padding: 4px 10px; border-radius: 999px; font-size: 0.725rem; font-family: var(--font-mono); font-weight: 600;">ENTERPRISE PATH</span>
            </div>

            <h3 style="font-size: 1.8rem; font-weight: 800; color: #FFFFFF; margin-bottom: 12px; line-height: 1.2;">
              Scale Risk Management &amp; Multi-Account Execution
            </h3>
            
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 24px;">
              Deploy institutional trading proxies, manage maximum drawdown limits, and track team performance across prop firm evaluation tiers.
            </p>

            <ul style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px;">
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Interactive Funded Account Challenge Calculator</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Low-Latency Residential Trading Proxy Networks</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #E2E8F0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Multi-Account Leaderboards &amp; Creator League Rankings</span>
              </li>
            </ul>
          </div>

          <a href="pricing.html" class="btn btn-secondary" style="border: 1px solid #F59E0B; color: #F59E0B; font-weight: 700; width: 100%; justify-content: center; padding: 14px;">
            <span>Explore Funded Account Plans</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </div>
  `;
}
