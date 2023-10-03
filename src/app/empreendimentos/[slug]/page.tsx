// import { GetServerSidePropsContext } from 'next';
import { meta, enterprise, menuItems, aboutButtons, aboutDetails } from './data';
import { EnterPage } from './enterPage';
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

export default function EnterPageWrapper() {
  
  // const { enterprise } = props;

  return <EnterPage
      enterprise={enterprise[0]}
      menuItems={menuItems}
      aboutButtons={aboutButtons}
      aboutDetails={aboutDetails}
    />;
}