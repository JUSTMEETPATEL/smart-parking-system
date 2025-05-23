"use client"

import { useState, useEffect } from "react"
import ParkingSpot from "@/components/parking-spot"

interface ParkingSpotType {
  id: number
  isOccupied: boolean
  lastUpdated: Date
}

export default function Home() {
  const [parkingSpots, setParkingSpots] = useState<ParkingSpotType[]>(() => {
    return Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      isOccupied: Math.random() > 0.5,
      lastUpdated: new Date(),
    }))
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setParkingSpots((currentSpots) => {
        const newSpots = [...currentSpots]
        const randomIndex = Math.floor(Math.random() * newSpots.length)
        newSpots[randomIndex] = {
          ...newSpots[randomIndex],
          isOccupied: !newSpots[randomIndex].isOccupied,
          lastUpdated: new Date(),
        }
        return newSpots
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen p-6 md:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Smart Parking System</h1>

        <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-sm text-blue-800">
            This system simulates an IoT parking solution using frontend logic only. In a real implementation, these
            status updates would come from sensors via an API, but here we&apos;re using JavaScript intervals to mimic those
            changes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parkingSpots.map((spot) => (
            <ParkingSpot key={spot.id} spot={spot} />
          ))}
        </div>
      </div>
    </main>
  )
}
