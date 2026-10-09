// Clean Institutional Static Financial Grid & Depth Canvas (Golden Theme)
export function initTradingCanvas() {
  const canvas = document.getElementById('trading-matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let animationFrameId;
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const resizeHandler = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resizeHandler, { passive: true });

  const isMobile = window.innerWidth < 768;
  const nodeCount = isMobile ? 24 : 45;
  
  // Real static institutional palette: Luxury Gold & Slate Blue
  const colors = [
    { r: 245, g: 158, b: 11 },   // Institutional Amber Gold
    { r: 59, g: 130, b: 246 },   // Institutional Slate Blue
    { r: 148, g: 163, b: 184 }   // Slate Gray
  ];

  const nodes = Array.from({ length: nodeCount }, () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      radius: Math.random() * 1.5 + 0.8,
      color: color,
      baseAlpha: Math.random() * 0.25 + 0.1
    };
  });

  // Micro static financial indicators
  const glyphs = Array.from({ length: isMobile ? 3 : 7 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vy: -0.08,
    text: ['BTC/USDT', 'ETH/USDT', 'R:R 1:3.2', 'ORDER BLOCK', 'LIQUIDITY SWEEP', 'RISK 1.0%'][Math.floor(Math.random() * 6)],
    alpha: Math.random() * 0.12 + 0.05
  }));

  function render() {
    ctx.clearRect(0, 0, width, height);

    // 1. Draw static grid overlay lines
    const gridSpacing = 80;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 2. Draw static data labels
    ctx.font = `500 10px "JetBrains Mono", monospace`;
    for (const g of glyphs) {
      g.y += g.vy;
      if (g.y < -20) {
        g.y = height + 20;
        g.x = Math.random() * width;
      }
      ctx.fillStyle = `rgba(148, 163, 184, ${g.alpha})`;
      ctx.fillText(g.text, g.x, g.y);
    }

    // 3. Draw connecting constellation lines
    const maxDistance = isMobile ? 100 : 140;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const factor = 1 - dist / maxDistance;
          const lineAlpha = factor * 0.08;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${nodes[i].color.r}, ${nodes[i].color.g}, ${nodes[i].color.b}, ${lineAlpha})`;
          ctx.lineWidth = factor * 1;
          ctx.stroke();
        }
      }
    }

    // 4. Render node points
    for (const node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${node.baseAlpha})`;
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resizeHandler);
  };
}
