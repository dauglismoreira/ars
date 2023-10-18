export function findPostBySlug(slug) {
    const enterprise = enterprise.find(enterprise => enterprise.slug === slug) || null;
    return enterprise;
  }

export const meta = {
    title:'Conheça a história da Koch construtora & incorporadora.',
    description:'Venha fazer um bom negócio com a koch'
}

export const enterprise = [
    {
        slug:'teste',
        title:'Thiesen Residence',
        title_high: 'Pronto para morar',
        address:'Rua 310',
        type:'Frente Mar',
        city:'Itapema',
        district:'Meia Praia',
        state:'SC',
        high_image:'/tmp/1920-1000.webp',
        high_image_alt:'Imagem de destaque',
        enterprise_logo:'/tmp/logo(140x140).webp',
        suites:'4 ou 5 suítes',
        garage:'4 vagas de garagem',
        area: '1.250m² de área de lazer',
        slogan:'Liberte-se para deixar a sua marca!',
        resum:'Localizado a poucos metros do mar, o Thiesen é junção de equilíbrio, descrição e confiabilidade! Com uma infraestrutura completa, sua ampla área comum de lazer é um convite para desfrutar de todos os espaços como extensão do seu apartamento. Permita-se abrir mais a vida, a fim de você exercer toda a sua potencialidade e, principalmente, a deixar sua marca no mundo!',
        skills: [
            {
                label:'suítes',
                value:'5'
            },
            {
                label:'vagas',
                value:'3'
            },
            {
                label:'privativos',
                value:'490 m²'
            }
        ],
        localDescription:'Uma região excepcional a 5 minutos da BR 101, entre parques e escolas.',
        localDetails:[
            'Escola',
            'Saída para BR 101',
            'Bancos',
            'Farmácia',
            'Academia',
        ],
        about_image : '/tmp/448-597.webp',
        enterprise_gallery : [
            {
              label:'Empreendimento',
              photos:[
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Empreendimento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Empreendimento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Empreendimento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Empreendimento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Empreendimento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Empreendimento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Empreendimento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Empreendimento'
                },
              ]
            },
            {
              label:'Lazer',
              photos:[
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Lazer'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Lazer'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Lazer'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Lazer'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Lazer'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Lazer'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Lazer'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Lazer'
                },
              ]
            },
            {
              label:'Apartamento',
              photos:[
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Apartamento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Apartamento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Apartamento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Apartamento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Apartamento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Apartamento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Apartamento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Apartamento'
                },
              ]
            },
          ],
          aboutImages: [
            {
              label:'Empreendimento',
              photos:[
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Empreendimento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Empreendimento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Empreendimento'
                },
              ]
            },
            {
              label:'Lazer',
              photos:[
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Lazer'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Lazer'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Lazer'
                },
              ]
            },
            {
              label:'Apartamento',
              photos:[
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Apartamento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Apartamento'
                },
                {
                  url:'/tmp/900-500.webp',
                  alt:'Teste',
                  description:'Apartamento'
                },
              ]
            },
          ],
          videos: [
            {
                url:'<iframe width="560" height="315" src="https://www.youtube.com/embed/fSKQRDq3RkM?si=OVfyRW3Y6xQUJPGv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                alt:'Teste',
                description:'Empreendimento'
              },
              {
                url:'<iframe width="560" height="315" src="https://www.youtube.com/embed/fSKQRDq3RkM?si=OVfyRW3Y6xQUJPGv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                alt:'Teste',
                description:'Empreendimento'
              },
              {
                url:'<iframe width="560" height="315" src="https://www.youtube.com/embed/fSKQRDq3RkM?si=OVfyRW3Y6xQUJPGv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                alt:'Teste',
                description:'Empreendimento'
              },
          ],
        tour : {
            cover:'/tmp/900-500.webp',
            link:'#'
        },
        progress : {
            total:60,
            fundation:100,
            structure:70,
            alvenaria:30,
            hidraulic:60,
            paint:20,
        },
        all_units : [
          {
            type:'TORRE A - Tipo 01 - Lateral',
            units:[
              {
                unit:'701',
                status:'Disponível',
                area:'130 m²',
                value_metter:'R$ 10.593',
                dorms:'3 suítes',
                garages:'2 vagas',
                value:'1.424.000,00',
                condition:'Saldo em 72x + 6 reforços anuais',
                more:'teste',
                action:'teste'
              },
              {
                unit:'701',
                status:'Disponível',
                area:'130 m²',
                value_metter:'R$ 10.593',
                dorms:'3 suítes',
                garages:'2 vagas',
                value:'1.424.000,00',
                condition:'Saldo em 72x + 6 reforços anuais',
                more:'teste',
                action:'teste'
              },
              {
                unit:'701',
                status:'Indisponível',
                area:'130 m²',
                value_metter:'R$ 10.593',
                dorms:'3 suítes',
                garages:'2 vagas',
                value:'1.424.000,00',
                condition:'Saldo em 72x + 6 reforços anuais',
                more:'teste',
                action:'teste'
              },
              {
                unit:'701',
                status:'Disponível',
                area:'130 m²',
                value_metter:'R$ 10.593',
                dorms:'3 suítes',
                garages:'2 vagas',
                value:'1.424.000,00',
                condition:'Saldo em 72x + 6 reforços anuais',
                more:'teste',
                action:'teste'
              }
            ]
          },
          {
            type:'TORRE B - Tipo 02 - Lateral',
            units:[
              {
                unit:'701',
                status:'Disponível',
                area:'130 m²',
                value_metter:'R$ 10.593',
                dorms:'3 suítes',
                garages:'2 vagas',
                value:'1.424.000,00',
                condition:'Saldo em 72x + 6 reforços anuais',
                more:'teste',
                action:'teste'
              },
              {
                unit:'701',
                status:'Disponível',
                area:'130 m²',
                value_metter:'R$ 10.593',
                dorms:'3 suítes',
                garages:'2 vagas',
                value:'1.424.000,00',
                condition:'Saldo em 72x + 6 reforços anuais',
                more:'teste',
                action:'teste'
              },
              {
                unit:'701',
                status:'Indisponível',
                area:'130 m²',
                value_metter:'R$ 10.593',
                dorms:'3 suítes',
                garages:'2 vagas',
                value:'1.424.000,00',
                condition:'Saldo em 72x + 6 reforços anuais',
                more:'teste',
                action:'teste'
              },
              {
                unit:'701',
                status:'Disponível',
                area:'130 m²',
                value_metter:'R$ 10.593',
                dorms:'3 suítes',
                garages:'2 vagas',
                value:'1.424.000,00',
                condition:'Saldo em 72x + 6 reforços anuais',
                more:'teste',
                action:'teste'
              }
            ]
          }
        ]
    }
]

export const menuItems = [
    {
      image:'/icons/apartment.png',
      label:'Disponíveis',
      link:'disponiveis'
    },
    {
      image:'/icons/feed.png',
      label:'Informações',
      link:'informacoes'
    },
    {
      image:'/icons/photo_camera.png',
      label:'Galeria',
      link:'galeria'
    },
    {
      image:'/icons/bedroom.png',
      label:'Plantas',
      link:'plantas'
    },
    {
      image:'/icons/location.png',
      label:'Localização',
      link:'local'
    },
    {
      image:'/icons/videocam.png',
      label:'Vídeos',
      link:'videos'
    },
    {
      image:'/icons/360.png',
      label:'Tour 360',
      link:'tour'
    },
    {
      image:'/icons/construction.png',
      label:'Obras',
      link:'obra'
    },
    {
      image:'/icons/call.png',
      label:'Contato',
      link:'#'
    },
  ]

  export const aboutButtons=[
    {
      label:'Empreendimento',
      link:'#'
    },
    {
      label:'Lazer',
      link:'#'
    },
    {
      label:'Apartamento',
      link:'#'
    },
  ]

  export const aboutDetails=[
    {
      label:'Empreendimento',
      content:[
          '32 andares',
          '2 apartamentos por andar',
          '2 vagas de garagem, sendo 1 com infraestrutura para carros elétricos',
          '3 elevadores de última geração, sendo 1 de emergência',
          'Fachada contemporânea com revestimento em pele de vidro e iluminação em LED',
          'Sistema de monitoramento 24h',
          '1250m² de lazer completo, mobiliado e decorado',
      ]
    },
    {
      label:'Lazer',
      content:[
          '32 andares',
          '2 apartamentos por andar',
          '2 vagas de garagem, sendo 1 com infraestrutura para carros elétricos',
          '3 elevadores de última geração, sendo 1 de emergência',
          'Fachada contemporânea com revestimento em pele de vidro e iluminação em LED',
          'Sistema de monitoramento 24h',
          '1250m² de lazer completo, mobiliado e decorado',
      ]
    },
    {
      label:'Apartamento',
      content:[
          '32 andares',
          '2 apartamentos por andar',
          '2 vagas de garagem, sendo 1 com infraestrutura para carros elétricos',
          '3 elevadores de última geração, sendo 1 de emergência',
          'Fachada contemporânea com revestimento em pele de vidro e iluminação em LED',
          'Sistema de monitoramento 24h',
          '1250m² de lazer completo, mobiliado e decorado',
      ]
    },
  ]