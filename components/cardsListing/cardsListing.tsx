import React from 'react'
import ProblemCard from '../uiComponents/problemCard'
import { problemCards } from '@/lib/problemCards';

export const CardsListing = () => {
  return (
    <div>
        <div className='flex flex-col gap-4 items-center mt-4' >
            <h1>Problems</h1>
        </div>

        <div className='flex flex-col gap-4 mt-12' >
            {problemCards.map((items) => (
                <ProblemCard key={items.id} data={items} />
            ))}
        </div>
    </div>
  )
}
