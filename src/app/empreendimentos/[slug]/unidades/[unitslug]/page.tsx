import fetchData from '@/helpers/fetchData';
import { unit, meta, menuItems, formInputs } from './data';
import { UnitPage } from './unitPage';
import getStorageFile from '@/helpers/getStorageFile';

 export async function generateMetadata(slug : any) {

   const data = await  fetchData(`empreendimentos/${slug.params.slug}/apartamentos/${slug.params.unitslug}`)

     return {
       title:data?.apartment?.unit,
       description:data?.apartment?.description,
         openGraph: {
           title:data?.apartment?.unit,
           description:data?.apartment?.description,
           images: [{
             url: getStorageFile(data?.apartment?.horizontal_image?.path),
             width: data?.apartment?.horizontal_image?.width,
             height: data?.apartment?.horizontal_image?.height,
           },]
         },
     }
   }

  UnitPageWrapper.getInitialProps = async (context:any) => {
    const { slug, unitslug } = context.query;
    const meta = await UnitPageWrapper(`empreendimentos/${slug.params.slug}/apartamentos/${unitslug.params.slug}`);
    const page = await fetchData(`empreendimentos/${slug.params.slug}/apartamentos/${unitslug.params.slug}`);
  
    return { 
      meta, 
      page 
    };
  };

export default async function UnitPageWrapper(slug : any) {
  
  const data = await  fetchData(`empreendimentos/${slug.params.slug}/apartamentos/${slug.params.unitslug}`)

  return <UnitPage
      menuItems={menuItems}
      unit={data?.apartment}
      formInputs={formInputs}
    />;
}
