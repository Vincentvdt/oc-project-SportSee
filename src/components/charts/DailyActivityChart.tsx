import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import styled from 'styled-components'
import ChartContainer from './ChartContainer.tsx'
import { ActivityData } from '@/types/global'
import { NameType, Payload, ValueType } from 'recharts/types/component/DefaultTooltipContent'

const BarChartTitle = styled.div`
  color: #20253a;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`

const LegendText = styled.span`
  color: #74798c;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: 4px;
`

const TooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e60000;
  gap: 7px;
  padding: 4px 6px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`

interface TooltipProps {
  active?: boolean
  payload?: Payload<ValueType, NameType>[]
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload?.length) {
    return (
      <TooltipWrapper>
        {payload.map((entry, index) => (
          <span key={index}>{`${entry?.value}${entry?.unit}`}</span>
        ))}
      </TooltipWrapper>
    )
  }

  return null
}

interface DailyActivityChartProps {
  data: ActivityData
}

interface PayloadType extends Payload<ValueType, NameType> {
  unit: string
}

const DailyActivityChart = ({ data }: DailyActivityChartProps) => {
  return (
    <ChartContainer
      width={'100%'}
      height={320}
      chartWidth={100}
      chartHeight={92}
      color={'#FBFBFB'}
      padding={{
        top: 23,
        right: 30,
        bottom: 23,
        left: 30,
      }}
      title={<BarChartTitle>Activité quotidienne</BarChartTitle>}
    >
      <BarChart data={data.sessions} barGap={8}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          tickFormatter={(index) => ((index as number) + 1).toString()}
          tickMargin={10}
          tickSize={14}
          tickLine={false}
          tick={{
            fill: '#9B9EAC',
            fontWeight: '500',
          }}
        />
        <YAxis
          orientation={'right'}
          tickMargin={10}
          tickSize={14}
          tick={{
            fill: '#9B9EAC',
            fontWeight: '500',
          }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ top: -24 }}
          align="right"
          verticalAlign="top"
          iconType="circle"
          iconSize={12}
          formatter={(value, entry) => (
            <LegendText>
              {' '}
              {value} ({(entry.payload as PayloadType).unit}){' '}
            </LegendText>
          )}
        />
        <Bar
          name="Poids"
          unit="kg"
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          name="Calories brûlées"
          unit="kCal"
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  )
}

export default DailyActivityChart
