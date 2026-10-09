import { renderHeader } from '../components/Header.js';
import { renderWhyPlatform } from '../components/WhyPlatform.js';
import { renderResidentialProxies } from '../components/ResidentialProxies.js';
import { renderHumanSupportMap } from '../components/HumanSupportMap.js';
import { renderTrustedBrands } from '../components/TrustedBrands.js';
import { renderRiskDisclaimer } from '../components/RiskDisclaimer.js';
import { renderFooter } from '../components/Footer.js';
import { initTradingCanvas } from '../components/CyberCanvas.js';

document.addEventListener('DOMContentLoaded', () => {
  initTradingCanvas();

  renderHeader(document.getElementById('site-header'));
  renderWhyPlatform(document.getElementById('why-platform'));
  renderResidentialProxies(document.getElementById('residential-proxies'));
  renderHumanSupportMap(document.getElementById('human-support'));
  renderTrustedBrands(document.getElementById('trusted-brands'));
  renderRiskDisclaimer(document.getElementById('risk-disclaimer'));
  renderFooter(document.getElementById('site-footer'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.why-card, .proxy-hero-container, .map-sec-wrap').forEach(el => {
    observer.observe(el);
  });
});
