export function renderHero(container) {
  if (!container) return;

  container.innerHTML = `
    <!-- Clearly Visible Background Video & Subtle Gradient Overlay -->
    <div class="hero-video-bg-container">
      <video class="hero-bg-video" autoplay loop muted playsinline poster="/assets/hero-dashboard.jpg" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.75; filter: contrast(105%) brightness(95%);">
        <source src="/hero-bg-video.mp4" type="video/mp4" />
      </video>
      <div style="position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(11, 15, 25, 0.45) 0%, rgba(11, 15, 25, 0.82) 85%); pointer-events: none; z-index: 1;"></div>
    </div>

    <!-- Centered Hero Banner Content Container -->
    <div class="container hero-container-relative" style="position: relative; z-index: 2; display: flex; justify-content: center; width: 90%; max-width: 90%; margin: 0 auto;">
      <div class="hero-content-centered" style="max-width: 860px; text-align: center; display: flex; flex-direction: column; align-items: center; padding: 60px 0 40px; margin: 0 auto;">
        
        <!-- Centered Pill Badge -->
        <div class="hero-badge-wrap" style="display: flex; justify-content: center; margin-bottom: 24px;">
          <span class="hero-pill-badge" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(11, 15, 25, 0.75); backdrop-filter: blur(12px); border-radius: 999px; padding: 6px 18px;">
            <span class="badge-dot-green" style="background: #F59E0B;"></span>
            TRADING MASTERY • COMMUNITY INSPIRED. ENTERPRISE TRUSTED.
          </span>
        </div>

        <!-- Centered Main Title -->
        <h1 class="hero-title" style="font-family: var(--font-heading); font-weight: 800; font-size: clamp(2.8rem, 5.2vw, 4.5rem); line-height: 1.1; letter-spacing: -0.03em; text-align: center; text-shadow: 0 4px 20px rgba(0,0,0,0.85); margin: 0;">
          Crypto Trading Readiness.<br/>
          <span style="color: #F59E0B;">Battle-Tested Edge.</span>
        </h1>

        <!-- Centered Subtitle / Description -->
        <p class="hero-description" style="color: #E2E8F0; font-size: 1.2rem; line-height: 1.6; margin-top: 22px; max-width: 720px; text-align: center; text-shadow: 0 2px 10px rgba(0,0,0,0.85);">
          TRADELAB is the leading crypto trading readiness platform. Upskill your technical analysis, battle-test strategy frameworks, and manage risk with institutional-grade discipline.
        </p>

        <!-- Centered Call to Action Buttons -->
        <div class="hero-cta-group" style="margin-top: 32px; display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; align-items: center;">
          <a href="strategies.html" class="btn btn-hero-primary" id="hero-primary-cta" style="background: #F59E0B; color: #0B0F19; font-weight: 700; padding: 16px 34px; border-radius: 8px; font-size: 1.05rem; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; box-shadow: 0 4px 20px rgba(245, 158, 11, 0.25);">
            <span>Explore Strategy Suite</span>
            <span class="btn-arrow">→</span>
          </a>
          <a href="contact.html" class="btn btn-hero-secondary" id="hero-secondary-cta" style="border: 1px solid rgba(255,255,255,0.25); background: rgba(11, 15, 25, 0.75); color: #FFFFFF; font-weight: 600; padding: 16px 30px; border-radius: 8px; font-size: 1.05rem; backdrop-filter: blur(12px); display: inline-flex; align-items: center; transition: all 0.2s;">
            <span>Request Platform Demo</span>
          </a>
        </div>

        <!-- Centered Golden Stats Strip Card -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; padding: 24px 36px; border: 1px solid rgba(255, 255, 255, 0.12); background: rgba(11, 15, 25, 0.7); backdrop-filter: blur(16px); border-radius: 16px; width: 100%; max-width: 780px;">
          <div style="text-align: center;">
            <div style="font-family: var(--font-mono); font-size: 1.75rem; font-weight: 800; color: #F59E0B;">185K+</div>
            <div style="font-size: 0.8rem; color: #A3B3C9; text-transform: uppercase; font-family: var(--font-mono); font-weight: 600; margin-top: 4px;">Traders Worldwide</div>
          </div>
          <div style="text-align: center;">
            <div style="font-family: var(--font-mono); font-size: 1.75rem; font-weight: 800; color: #F59E0B;">$140M+</div>
            <div style="font-size: 0.8rem; color: #A3B3C9; text-transform: uppercase; font-family: var(--font-mono); font-weight: 600; margin-top: 4px;">Funded Capital</div>
          </div>
          <div style="text-align: center;">
            <div style="font-family: var(--font-mono); font-size: 1.75rem; font-weight: 800; color: #FFFFFF;">1 : 3.2</div>
            <div style="font-size: 0.8rem; color: #A3B3C9; text-transform: uppercase; font-family: var(--font-mono); font-weight: 600; margin-top: 4px;">Target R:R Ratio</div>
          </div>
        </div>

      </div>
    </div>
  `;
}
