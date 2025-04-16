interface ContactForm {
    name: string;
    email: string;
    message: string;
    'cf-turnstile-response': string;
}

export async function POST({ request }: { request: Request }) {
    try {
        const data = await request.json() as ContactForm;

        // Verificar el token de Turnstile
        const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                secret: import.meta.env.TURNSTILE_SECRET_KEY,
                response: data['cf-turnstile-response'],
            }),
        });

        const turnstileData = await turnstileResponse.json();

        if (!turnstileData.success) {
            return new Response(JSON.stringify({ error: 'Verificación fallida' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Aquí puedes agregar la lógica para enviar el email
        // Por ejemplo, usando un servicio de email como SendGrid o similar

        return new Response(JSON.stringify({ message: 'Mensaje enviado con éxito' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error al procesar la solicitud' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
} 