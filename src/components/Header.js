import { showToast } from './Toast.js';

export function renderHeader(container) {
  if (!container) return;

  const currentPath = window.location.pathname.toLowerCase();

  const isHome = currentPath.endsWith('/') || currentPath.endsWith('/index.html') || currentPath === '';
  const isStrategies = currentPath.includes('strategies.html') || currentPath.includes('strategy-');
  const isAnalysis = currentPath.includes('market-analysis.html');
  const isEducation = currentPath.includes('education.html');
  const isPricing = currentPath.includes('pricing.html');
  const isWhyPlatform = currentPath.includes('why-platform.html');
  const isCommunity = currentPath.includes('community.html');
  const isContact = currentPath.includes('contact.html');

  container.innerHTML = `
    <div class="container header-inner">
      <!-- Brand Logo -->
      <a href="index.html" class="brand-logo" id="header-brand-logo">
        <svg class="brand-logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Candlestick Graphic -->
          <rect x="4" y="10" width="6" height="16" rx="1.5" fill="currentColor"/>
          <line x1="7" y1="4" x2="7" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="7" y1="26" x2="7" y2="32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>

          <rect x="15" y="6" width="6" height="22" rx="1.5" fill="currentColor"/>
          <line x1="18" y1="2" x2="18" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="18" y1="28" x2="18" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>

          <rect x="26" y="14" width="6" height="12" rx="1.5" fill="currentColor"/>
          <line x1="29" y1="8" x2="29" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="29" y1="26" x2="29" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>TRADELAB</span>
        <span class="tag-badge" style="font-size: 0.65rem; padding: 2px 8px; margin-left: 4px; border-color: rgba(16, 185, 129, 0.4);">STATIC PRO</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop" aria-label="Main Navigation">
        <div class="nav-item ${isHome ? 'active' : ''}">
          <a href="index.html" class="nav-link">Home</a>
        </div>

        <div class="nav-item ${isStrategies ? 'active' : ''}">
          <a href="strategies.html" class="nav-link has-dropdown">
            <span>Strategies</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <!-- Strategies Mega Menu -->
          <div class="mega-menu">
            <div>
              <div class="mega-col-title">Individual Strategies</div>
              <a href="strategy-breakout-pro.html" class="mega-item">
                <span class="mega-item-title">Breakout Pro Engine</span>
                <span class="mega-item-desc">High-volatility range expansion model</span>
              </a>
              <a href="strategy-trend-master.html" class="mega-item">
                <span class="mega-item-title">Trend Following Master</span>
                <span class="mega-item-desc">Multi-timeframe trend alignment</span>
              </a>
              <a href="strategy-momentum-scalper.html" class="mega-item">
                <span class="mega-item-title">Momentum Scalper FX/Crypto</span>
                <span class="mega-item-desc">Liquidity sweeps & rapid execution</span>
              </a>
            </div>
            <div>
              <div class="mega-col-title">Strategy Frameworks</div>
              <a href="strategies.html#strategy-catalog" class="mega-item">
                <span class="mega-item-title">All Trading Strategies</span>
                <span class="mega-item-desc">Browse complete strategy catalog</span>
              </a>
              <a href="strategies.html#featured-process" class="mega-item">
                <span class="mega-item-title">Execution Framework</span>
                <span class="mega-item-desc">4-step disciplined trading process</span>
              </a>
            </div>
            <div>
              <div class="mega-col-title">Platform & Analytics</div>
              <a href="why-platform.html" class="mega-item">
                <span class="mega-item-title">Why Platform</span>
                <span class="mega-item-desc">Institutional infrastructure & proxies</span>
              </a>
              <a href="community.html" class="mega-item">
                <span class="mega-item-title">Trader Community</span>
                <span class="mega-item-desc">Live leaderboards & trader network</span>
              </a>
            </div>
          </div>
        </div>

        <div class="nav-item ${isAnalysis ? 'active' : ''}">
          <a href="market-analysis.html" class="nav-link">Analysis</a>
        </div>

        <div class="nav-item ${isEducation ? 'active' : ''}">
          <a href="education.html" class="nav-link">Education</a>
        </div>

        <div class="nav-item ${isPricing ? 'active' : ''}">
          <a href="pricing.html" class="nav-link">Pricing</a>
        </div>

        <div class="nav-item ${isWhyPlatform ? 'active' : ''}">
          <a href="why-platform.html" class="nav-link">Platform</a>
        </div>

        <div class="nav-item ${isCommunity ? 'active' : ''}">
          <a href="community.html" class="nav-link">Community</a>
        </div>

        <div class="nav-item ${isContact ? 'active' : ''}">
          <a href="contact.html" class="nav-link">Contact</a>
        </div>
      </nav>

      <!-- Right Action Items -->
      <div class="header-actions">
        <a href="strategies.html" class="btn btn-primary btn-sm" id="nav-explore-btn" style="background: #F59E0B; color: #0B0F19; font-weight: 700;">Explore Strategies</a>
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Open Navigation Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <ul class="mobile-nav-list">
        <li><a href="index.html" class="mobile-nav-link ${isHome ? 'active' : ''}">Home</a></li>
        <li><a href="strategies.html" class="mobile-nav-link ${isStrategies ? 'active' : ''}">Strategies</a></li>
        <li><a href="strategy-breakout-pro.html" class="mobile-nav-link" style="padding-left: 1rem; font-size: 0.9rem;">→ Breakout Pro Detail</a></li>
        <li><a href="strategy-trend-master.html" class="mobile-nav-link" style="padding-left: 1rem; font-size: 0.9rem;">→ Trend Master Detail</a></li>
        <li><a href="strategy-momentum-scalper.html" class="mobile-nav-link" style="padding-left: 1rem; font-size: 0.9rem;">→ Momentum Scalper Detail</a></li>
        <li><a href="market-analysis.html" class="mobile-nav-link ${isAnalysis ? 'active' : ''}">Market Analysis</a></li>
        <li><a href="education.html" class="mobile-nav-link ${isEducation ? 'active' : ''}">Education</a></li>
        <li><a href="pricing.html" class="mobile-nav-link ${isPricing ? 'active' : ''}">Pricing & Funded</a></li>
        <li><a href="why-platform.html" class="mobile-nav-link ${isWhyPlatform ? 'active' : ''}">Why Platform</a></li>
        <li><a href="community.html" class="mobile-nav-link ${isCommunity ? 'active' : ''}">Community & Leaderboard</a></li>
        <li><a href="contact.html" class="mobile-nav-link ${isContact ? 'active' : ''}">Contact Us</a></li>
      </ul>
      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 12px;">
        <a href="strategies.html" class="btn btn-primary" style="width: 100%; background: #F59E0B; color: #0B0F19; font-weight: 700;">Explore Strategies</a>
      </div>
    </div>
  `;

  // Scroll detection & mobile menu handlers
  const headerEl = container;
  const toggleBtn = container.querySelector('#mobile-menu-toggle');
  const mobileDrawer = container.querySelector('#mobile-drawer');
  const mobileLinks = container.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      headerEl.classList.add('scrolled');
    } else {
      headerEl.classList.remove('scrolled');
    }
  });

  const toggleMobileMenu = () => {
    mobileDrawer.classList.toggle('open');
    const isOpen = mobileDrawer.classList.contains('open');
    toggleBtn.innerHTML = isOpen 
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  };

  toggleBtn?.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });
}
