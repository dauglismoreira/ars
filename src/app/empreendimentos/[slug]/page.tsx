// import { GetServerSidePropsContext } from 'next';
import fetchData from '@/helpers/fetchData';
import { menuItems, aboutButtons, aboutDetails } from './data';
import { EnterPage } from './enterPage';
import getStorageFile from '@/helpers/getStorageFile';
import Dump from '@/impacte/Dump';
// import { findPostBySlug } from './data';


export async function generateMetadata(slug : any) {

  const data = await  fetchData(`empreendimentos/${slug.params.slug}`)

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

  EnterPageWrapper.getInitialProps = async (context:any) => {
    const { slug } = context.query;
    const meta = await generateMetadata(`empreendimentos/${slug?.params?.slug}`);
    const page = await fetchData(`empreendimentos/${slug?.params?.slug}`);
  
    return { meta, page };
  };

export default async function EnterPageWrapper(slug : any) {

  const data = await  fetchData(`empreendimentos/${slug.params.slug}`)

  return (
    <>
      {/* <Dump obj={data} /> */}
      <EnterPage
        enterprise={data.enterprise}
        menuItems={menuItems}
        aboutButtons={aboutButtons}
        aboutDetails={aboutDetails}
      />
    </>
    )
}