import { renderHeader } from '../components/Header.js';
import { renderContactForm } from '../components/ContactForm.js';
import { renderFAQ } from '../components/FAQ.js';
import { renderRiskDisclaimer } from '../components/RiskDisclaimer.js';
import { renderFooter } from '../components/Footer.js';
import { initTradingCanvas } from '../components/CyberCanvas.js';

document.addEventListener('DOMContentLoaded', () => {
  initTradingCanvas();

  renderHeader(document.getElementById('site-header'));
  renderContactForm(document.getElementById('contact-form'));
  renderFAQ(document.getElementById('faq'));
  renderRiskDisclaimer(document.getElementById('risk-disclaimer'));
  renderFooter(document.getElementById('site-footer'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.demo-form-card, .faq-item').forEach(el => {
    observer.observe(el);
  });
});
