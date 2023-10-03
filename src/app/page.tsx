import { EnterpriseGrid } from './components/enterpriseGrid';
import {enterprises, citiesOptions, situationOptions} from './data';

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EnterpriseGrid data={enterprises} citiesFilter={citiesOptions} statusFilter={situationOptions}/>
    </main>
  )
}
