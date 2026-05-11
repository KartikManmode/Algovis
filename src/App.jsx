import { useState } from "react"
import Hero from "./components/Hero"
import FilterBar from "./components/FilterBar"
import BounceCards from "./components/BounceCards"
import { algorithms, filters } from "./data/algorithms"
import FactorialVisualizer from "./factorial/FactorialVisualizer"

function App() {
  const [active, setActive] = useState("all")
  const [selectedVisualizer, setSelectedVisualizer] = useState(null)

  const filtered =
    active === "all"
      ? algorithms
      : algorithms.filter((a) => a.tag === active)

  const handleSelectAlgorithm = (algorithm) => {
    if (algorithm.id === "factorial") {
      setSelectedVisualizer("factorial")
    }
  }

  if (selectedVisualizer === "factorial") {
    return <FactorialVisualizer onBack={() => setSelectedVisualizer(null)} />
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
        onSelect={handleSelectAlgorithm}
      />
    </div>
  )
}

export default App
