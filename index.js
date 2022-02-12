import { serve } from 'https://deno.land/std/http/server.ts'

serve(() => new Response('hello from HinD'), {
  port: Number(Deno.env.get('NOMAD_PORT_http')) || 5000,
})

/*
serve(() => {
  // eslint-disable-next-line no-console
//  console.log(`visitor.  demo secrets: ${Deno.env.get('TOKEN3')} ${Deno.env.get('MY_URL')}`)
  return new Response('hello from HinD')
}, {
  port: Number(Deno.env.get('NOMAD_PORT_http')) || 5000,
})
*/
