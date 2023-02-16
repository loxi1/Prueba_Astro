import type { APIRoute } from "astro";
import sgMail from "../../../../lib/sendgrid";

export const post: APIRoute = async ({ request }) => {
  const sender = import.meta.env.SENDGRID_EMAIL;
  const body = await request.json();
  const code = Math.floor(100000 + Math.random() * 900000);
  
  const msg = {
    to: body.email, // Change to your recipient
    from: sender, // Change to your verified sender
    subject: "Solicito informacion",
    text: "Info",
    html: `Sr. <strong>${code}</strong> ${body.email}`,
  };
  sgMail.send(msg);
  return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
};
