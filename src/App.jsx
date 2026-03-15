import BadgeToggle from './components/BadgeToggle'
import CapsLockNotice from './components/CapsLockNotice'
import BugBoard from './components/BugBoard'
import BurstCounter from './components/BurstCounter'
import Checklist from './components/Checklist'
import ClickTracker from './components/ClickTracker'
import DisabledButton from './components/DisabledButton'
import EchoInput from './components/EchoInput'
import FeedbackForm from './components/FeedbackForm'
import LayoutTrap from './components/LayoutTrap'
import Leaderboard from './components/Leaderboard'
import MemberSearch from './components/MemberSearch'
import MoodChip from './components/MoodChip'
import PriorityList from './components/PriorityList'
import ProgressMeter from './components/ProgressMeter'
import QuickNotes from './components/QuickNotes'
import ScoreBoard from './components/ScoreBoard'
import SizeBox from './components/SizeBox'
import StickyCheckbox from './components/StickyCheckbox'
import StatGrid from './components/StatGrid'
import StyleTypoCard from './components/StyleTypoCard'
import TagSelector from './components/TagSelector'
import TipCycler from './components/TipCycler'
import TaskFilter from './components/TaskFilter'
import TogglePanel from './components/TogglePanel'
import WelcomeBanner from './components/WelcomeBanner'
import { BUG_TICKETS } from './data/bugs'

function App() {
  const openCount = BUG_TICKETS.filter((ticket) => ticket.status === 'Open').length
  const featureCount = BUG_TICKETS.filter((ticket) => ticket.id.startsWith('FEAT')).length
  const focusAreas = new Set(BUG_TICKETS.map((ticket) => ticket.area)).size

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[rgba(255,184,144,0.4)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-60 h-80 w-80 rounded-full bg-[rgba(167,240,213,0.5)] blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:px-8">
        <header className="max-w-3xl">
          <img
            className="inline m-2 h-12 rounded-xl"
            src={`${import.meta.env.BASE_URL}leisure-links-logo.webp`}
            alt="Leisure Links logo"
          />
          <span className="chip">React Training Lab</span>
          <h1 className="font-display mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Debug, design, and ship together.
          </h1>
          <p className="mt-4 text-base text-slate-700 sm:text-lg">
            A collaborative practice board with intentional bugs, design challenges, and empty
            components for your team to build.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="card-muted px-4 py-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Open Bugs</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{openCount}</p>
            </div>
            <div className="card-muted px-4 py-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">New Features</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{featureCount}</p>
            </div>
            <div className="card-muted px-4 py-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Focus Areas</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{focusAreas}</p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_1.45fr]">
          <BugBoard />
          <div className="grid gap-6 sm:grid-cols-2">
            <WelcomeBanner title="Hello team" subTitle="Let's ship a fix together." />
            <MoodChip lable="Daily check-in" />
            <BurstCounter />
            <MemberSearch />
            <FeedbackForm />
            <BadgeToggle />
            <ClickTracker />
            <StickyCheckbox />
            <EchoInput />
            <PriorityList />
            <LayoutTrap />
            <ProgressMeter />
            <TipCycler />
            <StyleTypoCard />
            <DisabledButton />
            <Checklist />
            <CapsLockNotice />
            <SizeBox />
            <TogglePanel />
            <ScoreBoard />
            <TagSelector />
            <TaskFilter />
            <StatGrid />
            <QuickNotes />
            <Leaderboard />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
