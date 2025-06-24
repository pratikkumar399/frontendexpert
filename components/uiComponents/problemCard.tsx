"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


const ProblemCard = ({data}: {data: any}) => {
    const router = useRouter();
  return (
    <div className='border border-gray-200 rounded-lg p-4 shadow-md' onClick={() => {
        router.push(`/problems/${data.id}`)
    }}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>{data.difficulty}</p>
        <p>{data.author}</p>
    </div>
  )
}

export default ProblemCard