import { serve } from 'https://deno.land/std/http/server.ts'

serve(() => new Response('hello js'), {
  port: Number(Deno.env.get('NOMAD_PORT_http')) || 5000,
})
