import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, TrendingUp, Users } from "lucide-react"
import PlayerStatsTable from "./player-stats-table"
import TournamentHeader from "./tournament-header"
import { CustomTabs, CustomTabsList, CustomTabsTrigger, CustomTabsContent } from "./custom-tabs"

// Mock data - in a real app, this would come from an API or database
const tournamentStats = {
  totalRuns: 12458,
  totalWickets: 387,
  totalMatches: 42,
  totalPlayers: 220,
  highestRunScorer: {
    name: "Ashan Perera",
    university: "University of Colombo",
    runs: 423,
    matches: 8,
    average: 52.88,
    strikeRate: 138.24,
    fifties: 3,
    hundreds: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
  highestWicketTaker: {
    name: "Dinesh Jayawardena",
    university: "University of Moratuwa",
    wickets: 18,
    matches: 7,
    economy: 6.42,
    average: 14.33,
    bestFigures: "4/22",
    image: "/placeholder.svg?height=100&width=100",
  },
}

export default function TournamentSummaryPage() {
  return (
    <div className="min-h-screen bg-white">
      <TournamentHeader />

      <main className="container py-6">
        <h1 className="text-3xl font-bold text-maroon-800 mb-6">Tournament Summary</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Runs</CardTitle>
              <TrendingUp className="h-4 w-4 text-maroon-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-maroon-800">{tournamentStats.totalRuns}</div>
              <p className="text-xs text-muted-foreground">Across {tournamentStats.totalMatches} matches</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Wickets</CardTitle>
              <Award className="h-4 w-4 text-maroon-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-maroon-800">{tournamentStats.totalWickets}</div>
              <p className="text-xs text-muted-foreground">
                Average {(tournamentStats.totalWickets / tournamentStats.totalMatches).toFixed(1)} per match
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Matches Played</CardTitle>
              <Trophy className="h-4 w-4 text-maroon-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-maroon-800">{tournamentStats.totalMatches}</div>
              <p className="text-xs text-muted-foreground">Inter-university tournament</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Players</CardTitle>
              <Users className="h-4 w-4 text-maroon-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-maroon-800">{tournamentStats.totalPlayers}</div>
              <p className="text-xs text-muted-foreground">From all universities</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-maroon-800">Highest Run Scorer</CardTitle>
              <CardDescription>Top performer with the bat</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-maroon-100">
                  <img
                    src={tournamentStats.highestRunScorer.image || "/placeholder.svg"}
                    alt={tournamentStats.highestRunScorer.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-maroon-800">{tournamentStats.highestRunScorer.name}</h3>
                  <p className="text-sm text-muted-foreground">{tournamentStats.highestRunScorer.university}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-maroon-50 p-3 rounded-lg">
                  <p className="text-xs text-maroon-600 font-medium">Total Runs</p>
                  <p className="text-2xl font-bold text-maroon-800">{tournamentStats.highestRunScorer.runs}</p>
                </div>
                <div className="bg-maroon-50 p-3 rounded-lg">
                  <p className="text-xs text-maroon-600 font-medium">Average</p>
                  <p className="text-2xl font-bold text-maroon-800">{tournamentStats.highestRunScorer.average}</p>
                </div>
                <div className="bg-maroon-50 p-3 rounded-lg">
                  <p className="text-xs text-maroon-600 font-medium">Strike Rate</p>
                  <p className="text-2xl font-bold text-maroon-800">{tournamentStats.highestRunScorer.strikeRate}</p>
                </div>
                <div className="bg-maroon-50 p-3 rounded-lg">
                  <p className="text-xs text-maroon-600 font-medium">50s/100s</p>
                  <p className="text-2xl font-bold text-maroon-800">
                    {tournamentStats.highestRunScorer.fifties}/{tournamentStats.highestRunScorer.hundreds}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-maroon-800">Highest Wicket Taker</CardTitle>
              <CardDescription>Top performer with the ball</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-maroon-100">
                  <img
                    src={tournamentStats.highestWicketTaker.image || "/placeholder.svg"}
                    alt={tournamentStats.highestWicketTaker.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-maroon-800">{tournamentStats.highestWicketTaker.name}</h3>
                  <p className="text-sm text-muted-foreground">{tournamentStats.highestWicketTaker.university}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-maroon-50 p-3 rounded-lg">
                  <p className="text-xs text-maroon-600 font-medium">Total Wickets</p>
                  <p className="text-2xl font-bold text-maroon-800">{tournamentStats.highestWicketTaker.wickets}</p>
                </div>
                <div className="bg-maroon-50 p-3 rounded-lg">
                  <p className="text-xs text-maroon-600 font-medium">Economy</p>
                  <p className="text-2xl font-bold text-maroon-800">{tournamentStats.highestWicketTaker.economy}</p>
                </div>
                <div className="bg-maroon-50 p-3 rounded-lg">
                  <p className="text-xs text-maroon-600 font-medium">Average</p>
                  <p className="text-2xl font-bold text-maroon-800">{tournamentStats.highestWicketTaker.average}</p>
                </div>
                <div className="bg-maroon-50 p-3 rounded-lg">
                  <p className="text-xs text-maroon-600 font-medium">Best Figures</p>
                  <p className="text-2xl font-bold text-maroon-800">{tournamentStats.highestWicketTaker.bestFigures}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full">
          <CustomTabs defaultValue="batsmen">
            <CustomTabsList className="grid w-full grid-cols-2 bg-maroon-50">
              <CustomTabsTrigger
                value="batsmen"
                className="data-[state=active]:bg-maroon-700 data-[state=active]:text-white"
              >
                Top Batsmen
              </CustomTabsTrigger>
              <CustomTabsTrigger
                value="bowlers"
                className="data-[state=active]:bg-maroon-700 data-[state=active]:text-white"
              >
                Top Bowlers
              </CustomTabsTrigger>
            </CustomTabsList>
            <CustomTabsContent value="batsmen">
              <Card>
                <CardHeader>
                  <CardTitle className="text-maroon-800">Top 10 Batsmen</CardTitle>
                  <CardDescription>Ranked by total runs scored</CardDescription>
                </CardHeader>
                <CardContent>
                  <PlayerStatsTable type="batsmen" />
                </CardContent>
              </Card>
            </CustomTabsContent>
            <CustomTabsContent value="bowlers">
              <Card>
                <CardHeader>
                  <CardTitle className="text-maroon-800">Top 10 Bowlers</CardTitle>
                  <CardDescription>Ranked by total wickets taken</CardDescription>
                </CardHeader>
                <CardContent>
                  <PlayerStatsTable type="bowlers" />
                </CardContent>
              </Card>
            </CustomTabsContent>
          </CustomTabs>
        </div>
      </main>
    </div>
  )
}

