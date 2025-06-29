import type { ActivitySession } from '@api/_types'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import styled from 'styled-components'
import useMediaQuery from '@/hooks/useMediaQuery'

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{
    dataKey: string
    value: number
    color?: string
    fill?: string
    payload: ActivitySession
  }>
}) => {
  if (active && payload && payload.length > 0) {
    const data = payload[0]!.payload

    const date = new Date(data.day)
    const dateLabel =
      date.getDate() +
      ' ' +
      date.toLocaleString('fr-FR', { month: 'short' }) +
      ' ' +
      String(date.getFullYear()).slice(-2)

    return (
      <div
        style={{
          background: '#fff',
          padding: 12,
          borderRadius: 10,
          fontWeight: 600,
          boxShadow: '0 2px 8px #1112',
          minWidth: 80,
        }}
      >
        <div style={{ fontWeight: 700, marginBottom: 10, color: '#313131' }}>{dateLabel}</div>
        {payload.map((p, i) => {
          const pillBg = p.color || p.fill || '#ccc'
          return (
            <div
              key={i}
              style={{
                color: pillBg,
                fontSize: 15,
                letterSpacing: '0.5px',
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              {p.dataKey === 'kilogram' && `${p.value} kg`}
              {p.dataKey === 'calories' && `${p.value} kCal`}
            </div>
          )
        })}
      </div>
    )
  }
  return null
}

const ChartWrapper = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 1rem;
  align-self: stretch;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: 1240px) {
    gap: 32px;
  }

  @media (max-width: 600px) {
    background: #f0f0f0;
  }
`
const ChartTitle = styled.h3`
  color: rgba(0, 0, 0, 0.85);
  text-align: left;
  font-size: 0.9375rem;
  margin: 0 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  position: relative;
`
interface DailyActivityChartProps {
  data: ActivitySession[]
}

const DailyActivityChart = ({ data }: DailyActivityChartProps) => {
  const isTablet = useMediaQuery('(max-width: 1240px)')
  const LegendAlign = isTablet ? 'left' : 'right'


  return (
    <ChartWrapper role="img" aria-label="Activité quotidienne">
      <ChartTitle>Activité quotidienne</ChartTitle>
      <ResponsiveContainer width="100%" aspect={2} maxHeight={320}>
        <BarChart data={data} margin={{ right: 16, left: 16, top: 16, bottom: 32 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickMargin={16}
            tickLine={false}
            tickFormatter={(date) => new Date(date).getDate().toString()}
          />
          <YAxis orientation="right" tickMargin={16} tickLine={false} axisLine={false} />
          <Tooltip
            allowEscapeViewBox={{ x: true, y: true }}
            content={<CustomTooltip />}
            cursor={{ fill: '#fde2e4', opacity: 1 }}
          />
          <Legend align={LegendAlign} verticalAlign="top" wrapperStyle={{ top: -16 }} />
          <Bar
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            legendType="circle"
            barSize={8}
            radius={[8, 8, 0, 0]}
          />
          <Bar
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            legendType="circle"
            barSize={8}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}

export default DailyActivityChart
