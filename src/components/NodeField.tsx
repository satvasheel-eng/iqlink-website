/** Decorative ambient network of linked nodes, used behind the hero. */
export function NodeField({ className }: { className?: string }) {
  const nodes = [
    [80, 90], [220, 40], [340, 130], [470, 60], [560, 160],
    [120, 220], [300, 260], [460, 240], [600, 300], [40, 330],
    [220, 380], [400, 400], [540, 420], [140, 460],
  ]
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 2], [6, 7],
    [7, 4], [7, 8], [5, 9], [5, 10], [10, 6], [10, 11], [11, 7], [11, 12],
    [9, 13], [13, 10],
  ]

  return (
    <svg
      viewBox="0 0 640 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nf-line" x1="0" y1="0" x2="640" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C87FF" />
          <stop offset="100%" stopColor="#33E0C8" />
        </linearGradient>
        <radialGradient id="nf-fade" cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="nf-mask">
          <rect width="640" height="500" fill="url(#nf-fade)" />
        </mask>
      </defs>
      <g mask="url(#nf-mask)" stroke="url(#nf-line)" strokeOpacity="0.55" strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
          />
        ))}
      </g>
      <g mask="url(#nf-mask)">
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 4.5 : 2.6} fill={i % 4 === 0 ? '#33E0C8' : '#8A8DFF'} fillOpacity="0.85" />
        ))}
      </g>
    </svg>
  )
}
