import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, option, message } = body;

        const templateParams = {
            to_email: "cinedisestudio@gmail.com",
            subject: subject,
            option: option,
            name: name,
            time: new Date().toLocaleString(),
            message: message,
            from_email: email,
            reply_to: email
        };

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: 'service_bui5z4s',
                template_id: 'template_1zfk70o',
                user_id: 'OlOVU80KMUttQfRAk',
                accessToken: process.env.EMAILJS_PRIVATE_KEY,
                template_params: templateParams
            }),
        });

        if (response.ok) {
            return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
        } else {
            const errorText = await response.text();
            console.error('EmailJS Error:', errorText);
            return NextResponse.json({ message: 'Failed to send email', details: errorText }, { status: 500 });
        }
    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
