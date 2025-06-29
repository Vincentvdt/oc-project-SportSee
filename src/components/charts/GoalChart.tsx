import styled from 'styled-components'
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import useMediaQuery from '@/hooks/useMediaQuery'

interface GoalChartProps {
  data: number | null
}

const ChartWrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 16px;
  position: relative;
`

const ChartTitle = styled.h3`
  color: rgb(32, 37, 58);
  text-align: left;
  font-size: 0.9375rem;
  margin: 0 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  position: relative;
`

const CenterLabel = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, calc(-50% + 8px));
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
  font-size: 2rem;
  color: #282d30;

  font-style: normal;
  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: #74798c;
    margin-top: 4px;
  }
`

const GoalChart = ({ data }: GoalChartProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const aspectRatio = isMobile ? 1.6 : 1

  const clamped = Math.max(0, Math.min(data!, 1))
  const percent = Math.round(clamped * 100)

  const chartData = [
    { value: percent, fill: '#ff0000' },
    { value: 100 - percent, fill: 'transparent' },
  ]

  return (
    <ChartWrapper role="img" aria-label="Score de l'objectif">
      <ChartTitle>Score</ChartTitle>
      <ResponsiveContainer width="100%" aspect={aspectRatio}>
        <RadialBarChart
          style={{ transition: '150ms ease' }}
          innerRadius={100}
          outerRadius={116}
          data={chartData}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            dataKey="value"
            background
            cornerRadius={8}
            data={[{ value: percent, fill: '#ff2e00' }]}
          />
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        </RadialBarChart>
      </ResponsiveContainer>
      <CenterLabel>
        {percent}%<span>de votre objectif</span>
      </CenterLabel>
    </ChartWrapper>
  )
}

export default GoalChart
