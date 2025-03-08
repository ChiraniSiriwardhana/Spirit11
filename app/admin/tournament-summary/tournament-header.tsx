import { Button } from "@/components/ui/button"
import { Download, Filter, RefreshCw } from "lucide-react"

export default function TournamentHeader() {
  return (
    <header className="bg-maroon-800 text-white py-4 border-b border-maroon-700">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="mr-4">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Spirit11 Logo"
              className="h-10 w-10 rounded-full bg-white p-1"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">Spirit11 Admin</h1>
            <p className="text-xs text-maroon-200">The Ultimate Inter-University Fantasy Cricket Game</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-maroon-200 text-white hover:bg-maroon-700"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-maroon-200 text-white hover:bg-maroon-700"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-maroon-200 text-white hover:bg-maroon-700"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
    </header>
  )
}

