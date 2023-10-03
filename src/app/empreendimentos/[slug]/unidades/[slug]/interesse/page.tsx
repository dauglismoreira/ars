// import { GetServerSidePropsContext } from 'next';
import { formInputs, meta, unit } from './data';
import { ContactPage } from './contactPage';
// import { findPostBySlug } from './data';

 export async function generateMetadata() {
   return {
     title: meta.title,
     description: meta.description,
     openGraph: {
       title: meta.title,
       description: meta.description,
     },
   };
 }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const slug = context.query.slug || null;
//   const enterprise = findPostBySlug(slug);

//   if (!enterprise) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       enterprise,
//     },
//   };
// }

export default function UnitPageWrapper() {
  

  return <ContactPage
      formInputs={formInputs}
      unit={unit[0]}
    />;
}