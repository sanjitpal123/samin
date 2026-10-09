import { renderHeader } from '../components/Header.js';
import { renderMarketTicker } from '../components/MarketTicker.js';
import { renderStrategyProduct } from '../components/StrategyProduct.js';
import { renderTradingProcess } from '../components/TradingProcess.js';
import { renderPricing } from '../components/Pricing.js';
import { renderRiskDisclaimer } from '../components/RiskDisclaimer.js';
import { renderFooter } from '../components/Footer.js';
import { initTradingCanvas } from '../components/CyberCanvas.js';

document.addEventListener('DOMContentLoaded', () => {
  initTradingCanvas();

  renderHeader(document.getElementById('site-header'));
  renderMarketTicker(document.getElementById('market-strip'));
  renderStrategyProduct(document.getElementById('premium-strategy'));
  renderTradingProcess(document.getElementById('trading-process'));
  renderPricing(document.getElementById('pricing'));
  renderRiskDisclaimer(document.getElementById('risk-disclaimer'));
  renderFooter(document.getElementById('site-footer'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.premium-product-card, .process-card, .pricing-card').forEach(el => {
    observer.observe(el);
  });
});
