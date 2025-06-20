import ChartContainer from './ChartContainer.tsx'
import { RadialBar, RadialBarChart } from 'recharts'
import styled from 'styled-components'

const PercentageText = styled.span`
  width: 95px;
  flex-shrink: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #282d30;
  text-align: center;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;

  span {
    color: #74798c;
    font-size: 16px;
    font-weight: 500;
  }
`

const RadialBackground = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 159px;
  height: 159px;
  background: #fff;
`

const Title = styled.p`
  color: #20253a;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: 1024px) {
    display: none;
  }
`

interface GoalChartProps {
  data: number
}

const GoalChart = ({ data }: GoalChartProps) => {
  const scoreAngle = data * 360
  const chartData = [{ score: Number(data) }]
  return (
    <ChartContainer
      width={258}
      height={263}
      color={'#FBFBFB'}
      position={'relative'}
      title={<Title>Score</Title>}
      titlePosition={'absolute'}
      titlePos={{ top: 24, left: 30 }}
      subElement={
        <>
          <RadialBackground />
          <PercentageText>
            {data * 100}% <br />
            <span>de votre objectif</span>
          </PercentageText>
        </>
      }
    >
      <RadialBarChart
        barSize={10}
        startAngle={90}
        endAngle={90 + scoreAngle}
        innerRadius={80}
        outerRadius={140}
        data={chartData}
      >
        <RadialBar dataKey="score" fill={'#FF0000'} cornerRadius={5} />
      </RadialBarChart>
    </ChartContainer>
  )
}

export default GoalChart
