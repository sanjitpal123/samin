import { renderHeader } from '../components/Header.js';
import { renderCommunity } from '../components/Community.js';
import { renderLeaderboard } from '../components/Leaderboard.js';
import { renderRiskDisclaimer } from '../components/RiskDisclaimer.js';
import { renderFooter } from '../components/Footer.js';
import { initTradingCanvas } from '../components/CyberCanvas.js';

document.addEventListener('DOMContentLoaded', () => {
  initTradingCanvas();

  renderHeader(document.getElementById('site-header'));
  renderCommunity(document.getElementById('community'));
  renderLeaderboard(document.getElementById('leaderboard'));
  renderRiskDisclaimer(document.getElementById('risk-disclaimer'));
  renderFooter(document.getElementById('site-footer'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.community-card, .ptl-leader-sec-main').forEach(el => {
    observer.observe(el);
  });
});
