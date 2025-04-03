import { formatDistanceToNow } from "date-fns"

// Define props type using the ParkingSpotType interface
interface ParkingSpotProps {
  spot: {
    id: number
    isOccupied: boolean
    lastUpdated: Date
  }
}

export default function ParkingSpot({ spot }: ParkingSpotProps) {
  // Determine background color based on status
  const bgColor = spot.isOccupied ? "bg-red-100" : "bg-green-100"
  const statusColor = spot.isOccupied ? "text-red-600" : "text-green-600"
  const borderColor = spot.isOccupied ? "border-red-200" : "border-green-200"

  // Format the last updated time as "X minutes ago"
  const timeAgo = formatDistanceToNow(new Date(spot.lastUpdated), {
    addSuffix: true,
    includeSeconds: true,
  })

  return (
    <div className={`p-6 rounded-lg shadow-md ${bgColor} border ${borderColor} transition-colors duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Spot #{spot.id}</h2>
        <div className={`px-3 py-1 rounded-full ${statusColor} font-medium text-sm`}>
          {spot.isOccupied ? "Occupied" : "Vacant"}
        </div>
      </div>

      <div className="flex items-center text-gray-600 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Updated {timeAgo}</span>
      </div>
    </div>
  )
}

