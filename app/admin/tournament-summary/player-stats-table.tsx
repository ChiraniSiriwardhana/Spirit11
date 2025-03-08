import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data - in a real app, this would come from an API or database
const topBatsmen = [
  {
    rank: 1,
    name: "Ashan Perera",
    university: "University of Colombo",
    matches: 8,
    runs: 423,
    average: 52.88,
    strikeRate: 138.24,
    fifties: 3,
    hundreds: 1,
  },
  {
    rank: 2,
    name: "Rajitha Silva",
    university: "University of Peradeniya",
    matches: 7,
    runs: 387,
    average: 48.38,
    strikeRate: 142.8,
    fifties: 2,
    hundreds: 1,
  },
  {
    rank: 3,
    name: "Kasun Mendis",
    university: "University of Moratuwa",
    matches: 8,
    runs: 356,
    average: 44.5,
    strikeRate: 129.45,
    fifties: 3,
    hundreds: 0,
  },
  {
    rank: 4,
    name: "Nuwan Bandara",
    university: "University of Kelaniya",
    matches: 7,
    runs: 312,
    average: 44.57,
    strikeRate: 135.65,
    fifties: 2,
    hundreds: 0,
  },
  {
    rank: 5,
    name: "Chamara Perera",
    university: "University of Ruhuna",
    matches: 8,
    runs: 298,
    average: 37.25,
    strikeRate: 124.17,
    fifties: 2,
    hundreds: 0,
  },
  {
    rank: 6,
    name: "Isuru Fernando",
    university: "University of Sri Jayewardenepura",
    matches: 6,
    runs: 276,
    average: 46.0,
    strikeRate: 148.39,
    fifties: 1,
    hundreds: 1,
  },
  {
    rank: 7,
    name: "Dinesh Jayasinghe",
    university: "University of Jaffna",
    matches: 7,
    runs: 267,
    average: 38.14,
    strikeRate: 132.18,
    fifties: 2,
    hundreds: 0,
  },
  {
    rank: 8,
    name: "Lahiru Kumara",
    university: "Sabaragamuwa University",
    matches: 7,
    runs: 245,
    average: 35.0,
    strikeRate: 127.6,
    fifties: 1,
    hundreds: 0,
  },
  {
    rank: 9,
    name: "Tharindu Rathnayake",
    university: "Rajarata University",
    matches: 6,
    runs: 234,
    average: 39.0,
    strikeRate: 130.0,
    fifties: 2,
    hundreds: 0,
  },
  {
    rank: 10,
    name: "Malinda Pushpakumara",
    university: "Eastern University",
    matches: 7,
    runs: 228,
    average: 32.57,
    strikeRate: 125.27,
    fifties: 1,
    hundreds: 0,
  },
]

const topBowlers = [
  {
    rank: 1,
    name: "Dinesh Jayawardena",
    university: "University of Moratuwa",
    matches: 7,
    wickets: 18,
    economy: 6.42,
    average: 14.33,
    bestFigures: "4/22",
  },
  {
    rank: 2,
    name: "Lasith Malinga",
    university: "University of Colombo",
    matches: 8,
    wickets: 16,
    economy: 7.12,
    average: 16.25,
    bestFigures: "3/18",
  },
  {
    rank: 3,
    name: "Chaminda Vaas",
    university: "University of Peradeniya",
    matches: 7,
    wickets: 15,
    economy: 5.87,
    average: 15.6,
    bestFigures: "4/25",
  },
  {
    rank: 4,
    name: "Ajantha Mendis",
    university: "University of Kelaniya",
    matches: 8,
    wickets: 14,
    economy: 6.75,
    average: 17.21,
    bestFigures: "3/24",
  },
  {
    rank: 5,
    name: "Rangana Herath",
    university: "University of Ruhuna",
    matches: 6,
    wickets: 13,
    economy: 6.32,
    average: 15.38,
    bestFigures: "3/19",
  },
  {
    rank: 6,
    name: "Nuwan Kulasekara",
    university: "University of Sri Jayewardenepura",
    matches: 7,
    wickets: 12,
    economy: 7.05,
    average: 18.5,
    bestFigures: "3/28",
  },
  {
    rank: 7,
    name: "Muttiah Muralitharan",
    university: "University of Jaffna",
    matches: 6,
    wickets: 11,
    economy: 5.95,
    average: 16.45,
    bestFigures: "3/15",
  },
  {
    rank: 8,
    name: "Suranga Lakmal",
    university: "Sabaragamuwa University",
    matches: 7,
    wickets: 10,
    economy: 7.25,
    average: 19.3,
    bestFigures: "3/32",
  },
  {
    rank: 9,
    name: "Dilhara Fernando",
    university: "Rajarata University",
    matches: 6,
    wickets: 9,
    economy: 7.65,
    average: 20.11,
    bestFigures: "2/18",
  },
  {
    rank: 10,
    name: "Thisara Perera",
    university: "Eastern University",
    matches: 7,
    wickets: 8,
    economy: 7.85,
    average: 22.5,
    bestFigures: "2/24",
  },
]

interface PlayerStatsTableProps {
  type: "batsmen" | "bowlers"
}

export default function PlayerStatsTable({ type }: PlayerStatsTableProps) {
  const data = type === "batsmen" ? topBatsmen : topBowlers

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader className="bg-maroon-50">
          <TableRow>
            <TableHead className="w-12 text-maroon-800">Rank</TableHead>
            <TableHead className="text-maroon-800">Player</TableHead>
            <TableHead className="text-maroon-800">University</TableHead>
            <TableHead className="text-maroon-800">Matches</TableHead>
            {type === "batsmen" ? (
              <>
                <TableHead className="text-maroon-800">Runs</TableHead>
                <TableHead className="text-maroon-800">Average</TableHead>
                <TableHead className="text-maroon-800">Strike Rate</TableHead>
                <TableHead className="text-maroon-800">50s/100s</TableHead>
              </>
            ) : (
              <>
                <TableHead className="text-maroon-800">Wickets</TableHead>
                <TableHead className="text-maroon-800">Economy</TableHead>
                <TableHead className="text-maroon-800">Average</TableHead>
                <TableHead className="text-maroon-800">Best Figures</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((player) => (
            <TableRow key={player.rank} className={player.rank === 1 ? "bg-maroon-50" : ""}>
              <TableCell className="font-medium">{player.rank}</TableCell>
              <TableCell className="font-medium">{player.name}</TableCell>
              <TableCell>{player.university}</TableCell>
              <TableCell>{player.matches}</TableCell>
              {type === "batsmen" ? (
                <>
                  <TableCell className="font-medium">{(player as (typeof topBatsmen)[0]).runs}</TableCell>
                  <TableCell>{player.average}</TableCell>
                  <TableCell>{(player as (typeof topBatsmen)[0]).strikeRate}</TableCell>
                  <TableCell>
                    {(player as (typeof topBatsmen)[0]).fifties}/{(player as (typeof topBatsmen)[0]).hundreds}
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell className="font-medium">{(player as (typeof topBowlers)[0]).wickets}</TableCell>
                  <TableCell>{(player as (typeof topBowlers)[0]).economy}</TableCell>
                  <TableCell>{player.average}</TableCell>
                  <TableCell>{(player as (typeof topBowlers)[0]).bestFigures}</TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

