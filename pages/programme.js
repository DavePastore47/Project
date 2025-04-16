// pages/programme.js

import Header from '../components/Header'
import Banner from '../components/Banner'
import MatchList from '../components/MatchList'

export default function Programme() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header />
      <Banner />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Programme des matchs</h1>
        <MatchList />
      </main>
    </div>
  )
}
