import { useEffect, useMemo, useState } from 'react'
import ChartContainer from './charts/ChartContainer.tsx'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, Tooltip } from 'recharts'
import { PerformanceData } from '../../../../Documents/Programmation/OpenClassroom/Project_OC_SportSee/frontend/src/interfaces'

interface PerformanceChartProps {
  data: PerformanceData
}

const PerformanceChart = ({ data }: PerformanceChartProps) => {
  const [renderTooltip, setRenderTooltip] = useState(false)
  const radarData = useMemo(() => {
    if (!data) return []
    return data.data.map((activity) => ({
      value: activity.value,
      kind:
        data.kind[activity.kind as keyof typeof data.kind]?.charAt(0).toUpperCase() +
          data.kind[activity.kind as keyof typeof data.kind]?.slice(1) || '',
    }))
  }, [data])

  useEffect(() => {
    shouldRenderTooltip()
    window.addEventListener('resize', shouldRenderTooltip)
    return () => {
      window.removeEventListener('resize', shouldRenderTooltip)
    }
  }, [])

  const shouldRenderTooltip = () => {
    if (window.innerWidth <= 1024) {
      setRenderTooltip(true)
    } else {
      setRenderTooltip(false)
    }
  }

  return (
    <ChartContainer width={258} height={263} color={'#282D30'}>
      <RadarChart outerRadius={70} data={radarData}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{
            fill: '#FFF',
            fontSize: '12px',
            fontWeight: 500,
            opacity: renderTooltip ? 0 : 1,
          }}
        />
        {renderTooltip && <Tooltip />}
        <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
      </RadarChart>
    </ChartContainer>
  )
}

export default PerformanceChart
