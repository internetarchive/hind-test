import { serve } from 'https://deno.land/std/http/server.ts'

serve(() => {
  console.log(`visitor.  demo secrets: ${Deno.env.get('TOKEN3')} ${Deno.env.get('MY_URL')}`)
  return new Response('hello from HinD')
}, {
  port: Number(Deno.env.get('NOMAD_PORT_http')) || 5000,
})
