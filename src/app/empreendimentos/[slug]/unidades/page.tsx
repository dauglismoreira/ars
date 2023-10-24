import fetchData from '@/helpers/fetchData';
import getStorageFile from '@/helpers/getStorageFile';
import Dump from '@/impacte/Dump';
import {UnitsListPage} from './UnitsPage';

export async function generateMetadata(slug : any) {

  const data = await  fetchData(`empreendimentos/${slug.params.slug}/apartamentos`)

    return {
      title:data?.enterprise?.title,
      description:data?.enterprise?.seo_description,
        openGraph: {
          title:data?.enterprise?.title,
          description:data?.enterprise?.seo_description,
          images: [{
            url: getStorageFile(data?.enterprise?.horizontal_image?.path),
            width: data?.enterprise?.horizontal_image?.width,
            height: data?.enterprise?.horizontal_image?.height,
          },]
        },
    }
  }

  UnitsPageWrapper.getInitialProps = async (context:any) => {
    const { slug } = context.query;
    const meta = await generateMetadata(`empreendimentos/${slug.params.slug}/apartamentos`);
    const page = await fetchData(`empreendimentos/${slug.params.slug}/apartamentos`);
  
    return { meta, page };
  };

export default async function UnitsPageWrapper(slug : any) {

  const data = await  fetchData(`empreendimentos/${slug.params.slug}/apartamentos`)

  return (
    <>
      <UnitsListPage
        types={data.enterprise[0]}
        cub={data.cub}
      />
    </>
    )
}