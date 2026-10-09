import { renderHeader } from '../components/Header.js';
import { renderEducation } from '../components/Education.js';
import { renderTradingProcess } from '../components/TradingProcess.js';
import { renderAudienceCards } from '../components/AudienceCards.js';
import { renderFAQ } from '../components/FAQ.js';
import { renderRiskDisclaimer } from '../components/RiskDisclaimer.js';
import { renderFooter } from '../components/Footer.js';
import { initTradingCanvas } from '../components/CyberCanvas.js';

document.addEventListener('DOMContentLoaded', () => {
  initTradingCanvas();

  renderHeader(document.getElementById('site-header'));
  renderEducation(document.getElementById('trading-education'));
  renderTradingProcess(document.getElementById('trading-process'));
  renderAudienceCards(document.getElementById('audience-cards'));
  renderFAQ(document.getElementById('faq'));
  renderRiskDisclaimer(document.getElementById('risk-disclaimer'));
  renderFooter(document.getElementById('site-footer'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.education-card, .process-card, .audience-card, .faq-item').forEach(el => {
    observer.observe(el);
  });
});
