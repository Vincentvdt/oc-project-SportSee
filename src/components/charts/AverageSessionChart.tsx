import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { AverageSession } from '@api/types.ts'
import styled from 'styled-components'

const renderCustomAxisTick = ({
  x,
  y,
  payload,
}: {
  x?: number
  y?: number
  payload: { value: number | string }
}) => {
  const dayNum = Number(payload.value)
  const dayLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const letter = dayNum >= 1 && dayNum <= 7 ? dayLetters[dayNum - 1] : ''

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#FFFFFF" fontSize={16} fontWeight="bold">
        {letter}
      </text>
    </g>
  )
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ value: number }>
}) => {
  if (active && payload && payload.length > 0 && payload[0]?.value !== undefined) {
    return (
      <div style={{ background: '#fff', padding: 8, borderRadius: 8, fontWeight: 600 }}>
        {payload[0].value} min
      </div>
    )
  }
  return null
}

const ChartWrapper = styled.div`
  background: red;
  border-radius: 16px;
  padding: 16px;
  height: 100%;
  width: 100%;
`

const ChartTitle = styled.h3`
  color: rgba(255, 255, 255, 0.85);
  text-align: left;
  font-size: 0.9375rem;
  margin: 0 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  position: relative;
`

interface AverageSessionChartProps {
  data: AverageSession[]
}

const AverageSessionChart = ({ data }: AverageSessionChartProps) => {
  return (
    <ChartWrapper role="img" aria-label="Durée moyenne des sessions">
      <ChartTitle>Durée moyenne des sessions</ChartTitle>
      <ResponsiveContainer width="100%" aspect={1}>
        <LineChart data={data} margin={{ right: 16, left: 16, top: 16 }}>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 6,
              fill: '#fff',
              stroke: 'rgba(255,255,255,0.5)',
              strokeWidth: 10,
              style: { filter: 'drop-shadow(0px 0px 8px rgba(255,255,255,0.4))' },
            }}
          />
          <YAxis padding={{ bottom: 25 }} hide={true} type="number" includeHidden />
          <XAxis
            dataKey="day"
            type="category"
            tick={renderCustomAxisTick}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={false}
            allowEscapeViewBox={{ x: true, y: true }}
            content={<CustomTooltip />}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}

export default AverageSessionChart
