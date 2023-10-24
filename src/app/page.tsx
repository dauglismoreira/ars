import fetchData from "@/helpers/fetchData";
import getStorageFile from '@/helpers/getStorageFile';
import Dump from "@/impacte/Dump";
import List from './components/enterpriseGrid/List';

export async function generateMetadata() {
  const data = await  fetchData('home')
    return {
      title:data.page.title,
      description:data.page.description,
        openGraph: {
          title:data.page.title,
          description:data.page.description,
          images: [{
            url: getStorageFile(data.page.file?.path),
            width: data.page.file?.width,
            height: data.page.file?.height,
          },]
        },
    }
  }


export default async function Home() {
  const enterprises = await fetchData('empreendimentos-feed')
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Dump obj={data} /> */}
      <List cities={enterprises.cities} status={enterprises.status}/>
    </main>
  )
}
