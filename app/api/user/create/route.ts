export async function POST(req: Request) {
   const { test } = await req.json()
   console.log(test)

   return Response.json('ку')
}
