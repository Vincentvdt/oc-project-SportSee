import ChartContainer from './ChartContainer.tsx'
import styled from 'styled-components'
import type { AverageSessionData } from "@/types/global";
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import type { NameType, Payload, ValueType } from "recharts/types/component/DefaultTooltipContent";

const CustomTitle = styled.p`
  width: 100%;
  text-align: left;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px; /* 160% */
  opacity: 0.504;
  height: 30%;
`

const TooltipWrapper = styled.div`
  width: 39px;
  height: 25px;
  flex-shrink: 0;
  background: #fff;

  p {
    color: #000;
    text-align: center;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`

interface TooltipProps {
  active?: boolean
  payload?: Payload<ValueType, NameType>[]
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload) {
    return (
      <TooltipWrapper>
        <p className="label">{`${payload[0].value} min`}</p>
      </TooltipWrapper>
    )
  } else {
    return null
  }
}

interface AverageSessionChartProps {
  data: AverageSessionData
}

const formatDayTick = (day: number) => {
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'] // Corresponding first letters
  return daysOfWeek[day - 1] // Adjust day to zero-based index
}
const AverageSessionChart = ({ data }: AverageSessionChartProps) => {
  return (
    <ChartContainer
      width={258}
      height={263}
      color={'#f00'}
      chartWidth={100}
      chartHeight={70}
      title={<CustomTitle>Durée moyenne des sessions</CustomTitle>}
      titlePadding={{
        top: 29,
        right: 34,
        left: 33,
      }}
    >
      <LineChart data={data.sessions}>
        <XAxis
          allowDataOverflow={true}
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickFormatter={formatDayTick}
          tick={{ fontSize: 12, fontWeight: 500, fill: 'rgba(255, 255, 255, 1)' }}
          padding={{ left: 12, right: 12 }}
        />
        <YAxis
          hide={true}
          tickCount={60}
          domain={['dataMin - 5', 'dataMax + 5']}
          allowDecimals={false}
        />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line
          type="bump"
          dot={false}
          activeDot={{
            fill: 'rgba(255,255,255,1)',
            stroke: 'rgba(255,255,255,0.5)',
            strokeWidth: 5,
            r: 4,
          }}
          dataKey="sessionLength"
          stroke="#ffffff"
          strokeWidth={2}
        />
      </LineChart>
    </ChartContainer>
  )
}

export default AverageSessionChart
