import { useState } from "react"
import Hero from "./components/Hero"
import FilterBar from "./components/FilterBar"
import BounceCards from "./components/BounceCards"
import FibonacciVisualizer from "./fib/FibonacciVisualizer"
import InsertionSortVisualizer from "./insertion_sort/InsertionSortVisualizer"
import SelectionSortVisualizer from "./selection_sort/SelectionSortVisualizer"
import { algorithms, filters } from "./data/algorithms"

const visualizers = {
  fibonacci: FibonacciVisualizer,
  insertion: InsertionSortVisualizer,
  selection: SelectionSortVisualizer,
}

function App() {
  const [active, setActive] = useState("all")
  const [selectedAlgo, setSelectedAlgo] = useState(null)

  const filtered =
    active === "all"
      ? algorithms
      : algorithms.filter((a) => a.tag === active)

  const SelectedVisualizer = selectedAlgo ? visualizers[selectedAlgo.id] : null

  if (SelectedVisualizer) {
    return (
      <SelectedVisualizer
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
