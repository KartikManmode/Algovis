import { useState } from "react"
import Hero from "./components/Hero"
import FilterBar from "./components/FilterBar"
import BounceCards from "./components/BounceCards"
import FibonacciVisualizer from "./fib/FibonacciVisualizer"
import { algorithms, filters } from "./data/algorithms"

function App() {
  const [active, setActive] = useState("all")
  const [selectedAlgo, setSelectedAlgo] = useState(null)

  const filtered =
    active === "all"
      ? algorithms
      : algorithms.filter((a) => a.tag === active)

  if (selectedAlgo?.id === "fibonacci") {
    return (
      <FibonacciVisualizer
        algo={selectedAlgo}
        onBack={() => setSelectedAlgo(null)}
      />
    )
  }

  return (
    <div className="page">
      <Hero />

      <div className="section-header">
        <p className="section-label">Explore</p>
        <h2 className="section-title">Pick an algorithm</h2>
        <p className="section-sub">
          {filtered.length} algorithms — click any card to dive in
        </p>
      </div>

      <FilterBar
        filters={filters}
        active={active}
        onFilter={setActive}
      />

      <BounceCards
        items={filtered}
        enableHover
        onSelect={setSelectedAlgo}
      />
    </div>
  )
}

export default App
