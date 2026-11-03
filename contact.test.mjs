import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from './functions/api/contact.ts';

test('envía únicamente al buzón de contacto de SQH', async () => {
  const originalFetch = globalThis.fetch;
  let payload;
  globalThis.fetch = async (url, options) => {
    if (String(url).includes('siteverify')) return Response.json({ success:true, action:'contact', hostname:'sqh.cl' });
    payload = JSON.parse(options.body);
    return new Response('{}', { status: 200 });
  };
  try {
    const data = new FormData();
    for (const [key, value] of Object.entries({name:'Prueba', email:'test@example.com', reason:'Consulta', message:'Mensaje', 'cf-turnstile-response':'token'})) data.set(key, value);
    const request = new Request('https://sqh.cl/api/contact', { method:'POST', body:data });
    const result = await onRequestPost({ request, env:{ RESEND_API_KEY:'fake', TURNSTILE_SECRET:'fake' } });
    assert.equal(result.status, 200);
    assert.deepEqual(payload.to, ['contacto@sqh.cl']);
  } finally { globalThis.fetch = originalFetch; }
});

test('rechaza solicitudes sin comprobación antispam', async () => {
  const data = new FormData();
  for (const [key, value] of Object.entries({name:'Prueba', email:'test@example.com', reason:'Consulta', message:'Mensaje'})) data.set(key, value);
  const result = await onRequestPost({request:new Request('https://sqh.cl/api/contact',{method:'POST',body:data}), env:{RESEND_API_KEY:'fake',TURNSTILE_SECRET:'fake'}});
  assert.equal(result.status, 403);
});
