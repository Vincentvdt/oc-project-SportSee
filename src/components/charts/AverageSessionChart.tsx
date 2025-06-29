import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { AverageSession } from '@api/_types'
import useMediaQuery from '@/hooks/useMediaQuery'
import Card from '@/components/Card'

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

interface AverageSessionChartProps {
  data: AverageSession[]
}

const AverageSessionChart = ({ data }: AverageSessionChartProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const aspectRatio = isMobile ? 2 : 1
  const padding = isMobile ? '24px' : undefined

  return (
    <Card
      aria-label="Durée moyenne des sessions"
      title="Durée moyenne des sessions"
      background={'#FF0000'}
      titleColor={'#FFFFFF'}
      padding={padding}
    >
      <ResponsiveContainer width="100%" aspect={aspectRatio}>
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
    </Card>
  )
}

export default AverageSessionChart
