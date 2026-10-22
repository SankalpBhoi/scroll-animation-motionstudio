import React from 'react'

export default function MetricCard({ value, label, detail, tone, index }) {
  return (
    <article className={`metric-card metric-${tone}`} data-metric={index}>
      <div className="metric-topline"><span className="metric-index">0{index}</span><span className="metric-dot" /></div>
      <p className="metric-value">{value}</p>
      <p className="metric-label">{label}</p>
      <p className="metric-detail">{detail}</p>
    </article>
  )
}
