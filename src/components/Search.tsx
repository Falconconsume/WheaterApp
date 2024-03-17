import React, { ChangeEvent } from 'react'
import { optionType } from '../types'

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

export default function Search({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) {
  return (
    <section
      className="w-full md:max-w-[500px] p-4 flex flex-col text-center 
        items-center justify-content md:px-10 lg:p-24 h-full lg:h-[500px] bg-white 
        bg-opacity-20 backdrop-blur-ls drop-shadow-lg rounded text-zine-700"
    >
      <h1 className="text-4xl font-thin">
        {' '}
        Wheather <span className="font-black mt-10">Forecast</span>
      </h1>
      <p className="text-sm mt-2">
        Enter below a place you want to know the wheather of and select an
        option from the dropdown
      </p>

      <div className="relative flex mt-10 md:mt-4">
        <input
          type="text"
          value={term}
          className="px-2 py-1 rounded-1-md border-2 border-white"
          onChange={onInputChange}
        />

        <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
          {options.map((option: optionType, index: number) => (
            <li key={index}>
              <button
                onClick={() => onOptionSelect(option)}
                className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
              >
                {option.name}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={onSubmit}
          className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer "
        >
          search
        </button>
      </div>
    </section>
  )
}
