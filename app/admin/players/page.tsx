"use client"


import { useState } from "react"
import { ArrowUpDown, Filter, Search, Shield, Target, Zap } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample player data
const players = [
  {
    id: 1,
    name: "Virat Kohli",
    avatar: "/placeholder.svg?height=80&width=80",
    university: "Delhi University",
    role: "Batsman",
    price: "$1.5M",
    stats: {
      matches: 254,
      runs: 12169,
      average: 59.07,
      strikeRate: 93.17,
      centuries: 43,
      wickets: 4,
      economy: 5.78,
    },
  },
  {
    id: 2,
    name: "Jasprit Bumrah",
    avatar: "/placeholder.svg?height=80&width=80",
    university: "Gujarat University",
    role: "Bowler",
    price: "$1.2M",
    stats: {
      matches: 72,
      runs: 165,
      average: 8.25,
      strikeRate: 60.22,
      centuries: 0,
      wickets: 121,
      economy: 4.63,
    },
  },
  {
    id: 3,
    name: "Ravindra Jadeja",
    avatar: "/placeholder.svg?height=80&width=80",
    university: "Saurashtra University",
    role: "All-rounder",
    price: "$1.1M",
    stats: {
      matches: 171,
      runs: 2447,
      average: 32.62,
      strikeRate: 86.35,
      centuries: 0,
      wickets: 189,
      economy: 4.92,
    },
  },
  {
    id: 4,
    name: "Rishabh Pant",
    avatar: "/placeholder.svg?height=80&width=80",
    university: "Delhi University",
    role: "Wicket-keeper",
    price: "$950K",
    stats: {
      matches: 30,
      runs: 1358,
      average: 43.81,
      strikeRate: 108.29,
      centuries: 3,
      wickets: 0,
      economy: 0,
    },
  },
  {
    id: 5,
    name: "Hardik Pandya",
    avatar: "/placeholder.svg?height=80&width=80",
    university: "Baroda University",
    role: "All-rounder",
    price: "$1.3M",
    stats: {
      matches: 66,
      runs: 1476,
      average: 33.54,
      strikeRate: 116.22,
      centuries: 0,
      wickets: 64,
      economy: 5.53,
    },
  },
  {
    id: 6,
    name: "Rohit Sharma",
    avatar: "/placeholder.svg?height=80&width=80",
    university: "Mumbai University",
    role: "Batsman",
    price: "$1.4M",
    stats: {
      matches: 227,
      runs: 9283,
      average: 48.6,
      strikeRate: 89.18,
      centuries: 29,
      wickets: 8,
      economy: 5.22,
    },
  },
]

export default function PlayerList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")

  // Filter and sort players
  const filteredPlayers = players
    .filter((player) => {
      const matchesSearch =
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.university.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRole = roleFilter === "all" || player.role.toLowerCase() === roleFilter.toLowerCase()
      return matchesSearch && matchesRole
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      } else if (sortBy === "price") {
        const priceA = Number.parseFloat(a.price.replace(/[^0-9.]/g, ""))
        const priceB = Number.parseFloat(b.price.replace(/[^0-9.]/g, ""))
        return sortOrder === "asc" ? priceA - priceB : priceB - priceA
      }
      return 0
    })

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("asc")
    }
  }

  // Get role icon
  const getRoleIcon = (role: string) => {
    switch (role.toLowerCase()) {
      case "batsman":
        return <Target className="h-4 w-4 mr-1" />
      case "bowler":
        return <Zap className="h-4 w-4 mr-1" />
      case "all-rounder":
        return <Shield className="h-4 w-4 mr-1" />
      case "wicket-keeper":
        return <Shield className="h-4 w-4 mr-1" />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">All Players</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button size="sm">Add Player</Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search players..."
            className="pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="batsman">Batsman</SelectItem>
              <SelectItem value="bowler">Bowler</SelectItem>
              <SelectItem value="all-rounder">All-rounder</SelectItem>
              <SelectItem value="wicket-keeper">Wicket-keeper</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="ml-auto">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort by
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => toggleSort("name")}>
              Name {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleSort("price")}>
              Price {sortBy === "price" && (sortOrder === "asc" ? "↑" : "↓")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop view - Table */}
      <div className="hidden md:block overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Player</TableHead>
              <TableHead>University</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stats</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPlayers.map((player) => (
              <TableRow key={player.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <Image
                      src={player.avatar || "/placeholder.svg"}
                      alt={player.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    {player.name}
                  </div>
                </TableCell>
                <TableCell>{player.university}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {getRoleIcon(player.role)}
                    {player.role}
                  </div>
                </TableCell>
                <TableCell>{player.price}</TableCell>
                <TableCell>
                  <div className="flex gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground">Matches</div>
                      <div className="font-medium">{player.stats.matches}</div>
                    </div>
                    {player.role === "Batsman" || player.role === "All-rounder" || player.role === "Wicket-keeper" ? (
                      <>
                        <div>
                          <div className="text-xs text-muted-foreground">Runs</div>
                          <div className="font-medium">{player.stats.runs}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Avg</div>
                          <div className="font-medium">{player.stats.average}</div>
                        </div>
                      </>
                    ) : null}
                    {player.role === "Bowler" || player.role === "All-rounder" ? (
                      <>
                        <div>
                          <div className="text-xs text-muted-foreground">Wickets</div>
                          <div className="font-medium">{player.stats.wickets}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Economy</div>
                          <div className="font-medium">{player.stats.economy}</div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile view - Cards */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredPlayers.map((player) => (
          <Card key={player.id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Image
                  src={player.avatar || "/placeholder.svg"}
                  alt={player.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">{player.name}</h3>
                  <p className="text-sm text-muted-foreground">{player.university}</p>
                  <div className="flex items-center mt-1">
                    {getRoleIcon(player.role)}
                    <span className="text-sm">{player.role}</span>
                    <span className="ml-3 font-semibold">{player.price}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="bg-muted p-2 rounded">
                  <div className="text-xs text-muted-foreground">Matches</div>
                  <div className="font-medium">{player.stats.matches}</div>
                </div>

                {player.role === "Batsman" || player.role === "All-rounder" || player.role === "Wicket-keeper" ? (
                  <>
                    <div className="bg-muted p-2 rounded">
                      <div className="text-xs text-muted-foreground">Runs</div>
                      <div className="font-medium">{player.stats.runs}</div>
                    </div>
                    <div className="bg-muted p-2 rounded">
                      <div className="text-xs text-muted-foreground">Avg</div>
                      <div className="font-medium">{player.stats.average}</div>
                    </div>
                  </>
                ) : null}

                {player.role === "Bowler" || player.role === "All-rounder" ? (
                  <>
                    <div className="bg-muted p-2 rounded">
                      <div className="text-xs text-muted-foreground">Wickets</div>
                      <div className="font-medium">{player.stats.wickets}</div>
                    </div>
                    <div className="bg-muted p-2 rounded">
                      <div className="text-xs text-muted-foreground">Economy</div>
                      <div className="font-medium">{player.stats.economy}</div>
                    </div>
                  </>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No players found matching your criteria</p>
        </div>
      )}
    </div>
  )
}

