import type { Performance, PerformanceEntry } from '@api/_types'
import styled from 'styled-components'
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import useMediaQuery from '@/hooks/useMediaQuery'

const ChartWrapper = styled.div`
  background: #282d30;
  border-radius: 16px;
  padding: 16px;
  position: relative;
  height: 100%;
  width: 100%;
`

interface TooltipPayload {
  value: number
  payload: PerformanceEntry & { kindLabel?: string }
}

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) => {
  if (active && payload && payload.length > 0) {
    const item = payload[0]!
    const kindLabel = item.payload.kindLabel ?? item.payload.kind

    return (
      <div
        style={{
          background: '#fff',
          padding: 12,
          borderRadius: 10,
          fontWeight: 600,
          boxShadow: '0 2px 8px #1112',
          minWidth: 80,
          textAlign: 'center',
        }}
      >
        <div style={{ fontWeight: 700, color: '#282d30', fontSize: 16 }}>{item.value}</div>
        <div style={{ fontSize: 13, color: '#74798c', marginTop: 4 }}>{kindLabel}</div>
      </div>
    )
  }
  return null
}

interface PerformanceChartProps {
  data: Performance
}

const PerformanceChart = ({ data }: PerformanceChartProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const aspectRatio = isMobile ? 2 : 1

  const chartData: (PerformanceEntry & { kindLabel: string })[] = data.data.map((d) => ({
    ...d,
    kindLabel: data.kind[d.kind] || 'Inconnu',
  }))

  return (
    <ChartWrapper role="img" aria-label="Performance">
      <ResponsiveContainer width="100%" aspect={aspectRatio}>
        <RadarChart
          data={chartData}
          outerRadius="75%"
          margin={{ right: 16, left: 16, top: 16, bottom: 32 }}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: '#FFF', fontSize: 12, fontWeight: 500 }}
            tickFormatter={(kindId: number) => data.kind[kindId] || ''}
          />
          <Tooltip content={<CustomTooltip />} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}

export default PerformanceChart
