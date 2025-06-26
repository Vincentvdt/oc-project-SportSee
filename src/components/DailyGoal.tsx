import { useState, type KeyboardEvent } from 'react'
import styled from 'styled-components'
import { DotsHorizontalIcon, LapTimerIcon, TargetIcon } from '@radix-ui/react-icons'
import YogaIcon from '@/assets/icons/yoga.svg?react'
import SwimmingIcon from '@/assets/icons/swimming.svg?react'
import CyclingIcon from '@/assets/icons/cycling.svg?react'
import WorkoutIcon from '@/assets/icons/workout.svg?react'
import type { Goal } from '../../api/types'

interface DailyGoalProps {
  goals: Goal[]
}

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

const Card = styled.section`
  display: flex;
  padding: 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(32, 32, 56, 0.06);
`

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  > div {
    display: flex;
    gap: 8px;
  }

  h3 {
    color: #1e1f24;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  svg {
    width: 22px;
    height: 22px;
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
  gap: 20px;
  align-self: stretch;
`

const GoalItem = styled.li`
  display: flex;
  gap: 20px;
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
  gap: 6px;
  align-items: flex-start;
`

const GoalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: #232326;
  font-weight: 600;
`

const GoalObjectif = styled.span`
  font-size: 15px;
  color: #62636c;
  font-weight: 500;
`

const GoalDetails = styled.div<{ $pastel: string }>`
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 14px;
  background: ${({ $pastel }) => $pastel};
  gap: 18px;
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
  font-size: 15px;
  font-weight: 500;
  text-align: left;
`
const GoalDesc = styled.span`
  color: #62636c;
  font-size: 13px;
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
    width: 20px;
    height: 20px;
    border: 2px solid ${({ $main }) => $main};
    border-radius: 6px;
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
  font-size: 14px;
  color: ${({ $completed }) => ($completed ? '#099f55' : 'black')};
  font-weight: 500;
  gap: 4px;
`

const DailyGoal = ({ goals }: DailyGoalProps) => {
  const [userGoals, setUserGoals] = useState(goals)

  const handleToggle = (idx: number) => {
    setUserGoals((goals) => goals.map((g, i) => (i === idx ? { ...g, done: !g.done } : g)))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, idx: number) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleToggle(idx)
    }
  }

  const getCompletedGoalsCount = (goals: Goal[]) =>
    goals.filter((goal) => goal.done).length

  const completedGoals = getCompletedGoalsCount(userGoals)
  const totalGoals = userGoals.length

  return (
    <Card aria-label="Objectifs quotidiens">
      <CardHeader>
        <div>
          <h3>Objectifs du jour</h3>

          <GoalProgress $completed={userGoals.every((goal) => goal.done)}>
            {completedGoals}/{totalGoals}
          </GoalProgress>
        </div>

        <DotsHorizontalIcon />
      </CardHeader>
      <GoalList>
        {userGoals.map((goal, idx) => {
          const { main, pastel, icon: MainIcon, progressIcon: ProgressIcon } = goalTheme[goal.type]
          return (
            <GoalItem key={goal.title + idx}>
              <GoalIconBox $main={main}>
                <MainIcon />
              </GoalIconBox>
              <GoalInfo>
                <GoalHeader>
                  <ProgressIcon style={{ color: main }} />
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
