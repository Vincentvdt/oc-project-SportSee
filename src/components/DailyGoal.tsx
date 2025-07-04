import { useCallback, useMemo, useState, type KeyboardEvent } from 'react'
import styled from 'styled-components'
import { DotsHorizontalIcon, LapTimerIcon, TargetIcon } from '@radix-ui/react-icons'
import YogaIcon from '@/assets/icons/yoga.svg?react'
import SwimmingIcon from '@/assets/icons/swimming.svg?react'
import CyclingIcon from '@/assets/icons/cycling.svg?react'
import WorkoutIcon from '@/assets/icons/workout.svg?react'
import type { Goal } from '@api/_types'
import type { GridOrder } from '@/components/ProfileCard'
import Card, { CardTitle } from '@/components/Card'

const goalTheme = {
  workout: {
    main: '#C82424',
    pastel: 'hsl(0 90% 96%)',
    icon: WorkoutIcon,
    progressIcon: LapTimerIcon,
  },
  cycling: {
    main: '#005EA3',
    pastel: 'hsl(207 90% 96%)',
    icon: CyclingIcon,
    progressIcon: TargetIcon,
  },
  swimming: {
    main: '#FFD600',
    pastel: 'hsl(50 95% 92%)',
    icon: SwimmingIcon,
    progressIcon: TargetIcon,
  },
  yoga: {
    main: '#FD5181',
    pastel: 'hsl(340 85% 94%)',
    icon: YogaIcon,
    progressIcon: LapTimerIcon,
  },
} as const

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;

  svg {
    width: 24px;
    height: 24px;
    color: #c1c1c1;
    cursor: pointer;

    &:hover {
      color: #62636c;
    }
  }
`

const GoalList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: stretch;
`

const GoalItem = styled.li`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`

const GoalIconBox = styled.div<{ $main: string }>`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${({ $main }) => $main};

  svg {
    width: 24px;
    height: 24px;
    display: block;
    fill: #fff;
    color: #fff;

    path {
      fill: #fff;
      color: #fff;
    }
  }
`

const GoalInfo = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`

const GoalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9375rem;
  color: #232326;
  font-weight: 600;
`

const GoalObjectif = styled.span`
  font-size: 0.9375rem;
  color: #62636c;
  font-weight: 500;
`

const GoalDetails = styled.div<{ $pastel: string }>`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 16px;
  background: ${({ $pastel }) => $pastel};
  gap: 1rem;
  width: 100%;
  cursor: pointer;
  user-select: none;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px #007aff55;
  }
`

const GoalDetailText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const GoalTitle = styled.span`
  color: #232326;
  font-size: 0.9375rem;
  font-weight: 500;
  text-align: left;
`
const GoalDesc = styled.span`
  color: #62636c;
  font-size: 0.8125rem;
  font-weight: 400;
  text-align: left;
`

const CheckboxLabel = styled.label<{ $main: string }>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  input {
    display: none;
  }

  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid ${({ $main }) => $main};
    border-radius: 4px;
    background: #fff;
    transition:
      background 0.15s,
      border-color 0.15s;

    position: relative;
  }

  input:checked + span {
    background: ${({ $main }) => $main};
    border-color: ${({ $main }) => $main};
  }

  input:checked + span::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    pointer-events: none;
  }
`

const GoalProgress = styled.div<{ $completed: boolean }>`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${({ $completed }) => ($completed ? '#099f55' : 'black')};
  font-weight: 500;
  gap: 4px;
`

interface DailyGoalProps extends GridOrder {
  goals: Goal[]
}

const DailyGoal = ({ goals, order, mobileOrder }: DailyGoalProps) => {
  const [userGoals, setUserGoals] = useState(goals)

  const handleToggle = useCallback((idx: number) => {
    setUserGoals((goals) => goals.map((g, i) => (i === idx ? { ...g, done: !g.done } : g)))
  }, [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>, idx: number) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleToggle(idx)
      }
    },
    [handleToggle]
  )

  const completedGoals = useMemo(() => userGoals.filter((goal) => goal.done).length, [userGoals])
  const totalGoals = userGoals.length

  return (
    <Card
      aria-label="Objectifs quotidiens"
      order={order}
      mobileOrder={mobileOrder}
      title={
        <CardHeader>
          <CardTitle>
            Objectifs du jour
            <GoalProgress $completed={userGoals.every((goal) => goal.done)}>
              {completedGoals}/{totalGoals}
            </GoalProgress>
          </CardTitle>

          <DotsHorizontalIcon />
        </CardHeader>
      }
    >
      <GoalList>
        {userGoals.map((goal, idx) => {
          const { main, pastel, icon: MainIcon, progressIcon: ProgressIcon } = goalTheme[goal.type]
          return (
            <GoalItem key={goal.title + idx}>
              <GoalIconBox $main={main}>
                <MainIcon aria-hidden="true" />
              </GoalIconBox>
              <GoalInfo>
                <GoalHeader>
                  <ProgressIcon style={{ color: main }} aria-hidden="true" />
                  <GoalObjectif>
                    {goal.objectif.value}
                    {goal.objectif.unit}
                  </GoalObjectif>
                </GoalHeader>
                <GoalDetails
                  $pastel={pastel}
                  tabIndex={0}
                  role="button"
                  aria-pressed={goal.done}
                  onClick={() => handleToggle(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  aria-label={`Marquer "${goal.title}" comme fait`}
                >
                  <GoalDetailText>
                    <GoalTitle>{goal.title}</GoalTitle>
                    <GoalDesc>{goal.details}</GoalDesc>
                  </GoalDetailText>
                  <CheckboxLabel $main={main}>
                    <input
                      type="checkbox"
                      checked={goal.done}
                      readOnly
                      tabIndex={-1}
                      aria-hidden="true"
                    />
                    <span />
                  </CheckboxLabel>
                </GoalDetails>
              </GoalInfo>
            </GoalItem>
          )
        })}
      </GoalList>
    </Card>
  )
}
export default DailyGoal
