
export const config = {
  runtime: 'edge',
};
export default async (req: Request) => {
  // if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  // const { gender, mood } = (await req.json()) as RequestData;

  // const clothes = gender === 'man' ? manClothes : womanClothes;

  // const result: ResponseData = {
  //   clothes: mood ? clothes[mood] : Object.values(clothes).flat(),
  //   mood,
  //   today: Date.now(),
  // };
  // http://172.16.10.202:9999/sop/open/static_data
  const res:any = await fetch('http://172.16.10.202:9999/sop/open/static_data', {
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(response => response.json());
  console.log("res:",res)
  return new Response(JSON.stringify(res));
};
