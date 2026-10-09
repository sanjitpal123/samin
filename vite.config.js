import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        strategies: resolve(__dirname, 'strategies.html'),
        marketAnalysis: resolve(__dirname, 'market-analysis.html'),
        education: resolve(__dirname, 'education.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        whyPlatform: resolve(__dirname, 'why-platform.html'),
        community: resolve(__dirname, 'community.html'),
        contact: resolve(__dirname, 'contact.html'),
        strategyBreakout: resolve(__dirname, 'strategy-breakout-pro.html'),
        strategyTrend: resolve(__dirname, 'strategy-trend-master.html'),
        strategyMomentum: resolve(__dirname, 'strategy-momentum-scalper.html'),
      },
    },
  },
  plugins: [
    {
      name: 'rewrite-clean-urls',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const rawUrl = req.url.split('?')[0];
          const cleanUrl = rawUrl.endsWith('/') && rawUrl.length > 1 ? rawUrl.slice(0, -1) : rawUrl;
          const pageMap = {
            '/strategies': '/strategies.html',
            '/market-analysis': '/market-analysis.html',
            '/education': '/education.html',
            '/pricing': '/pricing.html',
            '/why-platform': '/why-platform.html',
            '/community': '/community.html',
            '/contact': '/contact.html',
            '/strategy-breakout-pro': '/strategy-breakout-pro.html',
            '/strategy-trend-master': '/strategy-trend-master.html',
            '/strategy-momentum-scalper': '/strategy-momentum-scalper.html'
          };
          if (pageMap[cleanUrl]) {
            req.url = pageMap[cleanUrl];
          }
          next();
        });
      }
    }
  ]
});
