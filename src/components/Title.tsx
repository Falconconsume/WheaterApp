import React from 'react'
import Wind from './Icons/Wind'
import Feels from './Icons/Feels'
import Humidity from './Icons/Humidity'
import Visibility from './Icons/Visibility'
import Pressure from './Icons/Pressure'
import Pop from './Icons/Pop'

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
  title: string
  info: string | JSX.Element
  description: string
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
}

export default function Title({
  icon,
  title,
  info,
  description,
}: Props): JSX.Element {
  const Icon = icons[icon]
  return (
    <article className="w-[140px] h-[130px] text-sm font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
      <div className=" flex items-center text-sm font-bold">
        <Icon /> <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg">{info}</h3>
      <p className="text-xs font-bold">{description}</p>
    </article>
  )
}
