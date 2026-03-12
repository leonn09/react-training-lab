# React Debugging Playground

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20App-16a34a?style=for-the-badge)](https://leonn09.github.io/react-training-lab/)

**Live Demo:** [Open the training lab](https://leonn09.github.io/react-training-lab/)

A practice app for beginner React developers. The UI is styled with Tailwind CSS and includes intentional bugs, design challenges, and empty components for team collaboration.

## Quick start

1. npm install
2. npm run dev

## What to practice

- Debug state, effects, rendering, and layout issues
- Use browser DevTools, React DevTools, and console logs
- Build new UI from empty components
- Practice Git branches and pull requests as a team

## Bug tickets

- BUG-101 Burst counter only adds 1. File: src/components/BurstCounter.jsx
- BUG-102 Member search list never updates. File: src/components/MemberSearch.jsx
- BUG-103 Form refreshes the page on submit. File: src/components/FeedbackForm.jsx
- BUG-104 Priority list order changes strangely. File: src/components/PriorityList.jsx
- BUG-105 Badge toggle is not keyboard friendly. File: src/components/BadgeToggle.jsx
- BUG-106 Mobile layout has horizontal scroll. File: src/components/LayoutTrap.jsx
- BUG-107 Welcome subtitle is missing. File: src/components/WelcomeBanner.jsx
- BUG-108 Progress bar width is wrong. File: src/components/ProgressMeter.jsx
- BUG-109 Tip cycler goes blank after last tip. File: src/components/TipCycler.jsx
- BUG-110 Mood chip label is missing. File: src/components/MoodChip.jsx
- BUG-111 Click tracker never increments. File: src/components/ClickTracker.jsx
- BUG-112 Checkbox cannot be unchecked. File: src/components/StickyCheckbox.jsx
- BUG-113 Card border missing because of a typo. File: src/components/StyleTypoCard.jsx
- BUG-114 Start button is always disabled. File: src/components/DisabledButton.jsx
- BUG-115 Checklist items are not rendering. File: src/components/Checklist.jsx
- BUG-116 Echo input will not accept typing. File: src/components/EchoInput.jsx
- BUG-117 Uppercase styling is not applied. File: src/components/CapsLockNotice.jsx
- BUG-118 Size box is not 120px square. File: src/components/SizeBox.jsx
- BUG-119 Toggle panel never opens. File: src/components/TogglePanel.jsx
- BUG-120 Reduce render spikes on the dashboard. Status: Fixed (example only).

## Build tasks

- FEAT-201 Build the Quick Notes editor. File: src/components/QuickNotes.jsx
- FEAT-202 Design the Leaderboard card. File: src/components/Leaderboard.jsx

## Suggested team workflow

1. Pick a ticket from the bug board.
2. Create a branch.
3. Fix the issue or build the feature.
4. Open a pull request and get a teammate review.

## Beginner Git flow (recommended)

1. Create a GitHub Issue per ticket (BUG-101, FEAT-201, etc.).
2. Assign one teammate per issue.
3. Create a branch for the ticket.
4. Make changes, commit, and push.
5. Open a PR and request review.
6. After merge, update the ticket status in src/data/bugs.js manually.

Branch naming examples:
- bug/BUG-101-burst-counter
- bug/BUG-105-badge-toggle
- feat/FEAT-201-quick-notes
- chore/docs-readme

Commit message examples:
- fix: BUG-101 burst counter
- feat: FEAT-201 quick notes

PR title examples:
- [BUG-101] Burst counter fix

## Deploy to GitHub Pages

1. Ensure the repo has GitHub Pages enabled: Settings → Pages → Source → GitHub Actions.
2. Push to `main`. The GitHub Action in `.github/workflows/deploy.yml` will build and publish.
3. Your site will be available at:
4. [https://leonn09.github.io/react-training-lab/](https://leonn09.github.io/react-training-lab/)

Have fun breaking and fixing things.
