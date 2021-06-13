import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const item1 = await prisma.post.create({
      data: {
        title: 'Captain cyber',    
        published: '2021-06-13T00:00:00.000Z', 
        description: 'La cybersécurité qui engage de manière positive toutes les parties prenantes des entreprises',
        image: 'https://www.prisma/img1', 
        author: 'emmanuel Dubois'   
      },
    });
    console.log(item1);

    const item2 = await prisma.post.create({
        data: {
          title: 'people-powered',    
          published: '2021-06-14T00:00:00.000Z', 
          description: 'Mettez en oeuvre une cyber people-powered',
          image: 'https://www.prisma/img2', 
          author: 'Eric viale'   
        },
      });
main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
}