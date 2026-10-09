import { renderHeader } from '../components/Header.js';
import { renderMarketTicker } from '../components/MarketTicker.js';
import { renderMarketAnalysis } from '../components/MarketAnalysis.js';
import { renderFeaturedStrategy } from '../components/FeaturedStrategy.js';
import { renderFAQ } from '../components/FAQ.js';
import { renderRiskDisclaimer } from '../components/RiskDisclaimer.js';
import { renderFooter } from '../components/Footer.js';
import { initTradingCanvas } from '../components/CyberCanvas.js';

document.addEventListener('DOMContentLoaded', () => {
  initTradingCanvas();

  renderHeader(document.getElementById('site-header'));
  renderMarketTicker(document.getElementById('market-strip'));
  renderMarketAnalysis(document.getElementById('market-analysis'));
  renderFeaturedStrategy(document.getElementById('featured-strategy'));
  renderFAQ(document.getElementById('faq'));
  renderRiskDisclaimer(document.getElementById('risk-disclaimer'));
  renderFooter(document.getElementById('site-footer'));

  // Scroll reveal setup
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.analysis-panel, .featured-strategy-card, .faq-item').forEach(el => {
    observer.observe(el);
  });
});
