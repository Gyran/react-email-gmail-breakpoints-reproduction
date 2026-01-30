import { Resend } from "resend";
import PxEmail from "./emails/px.tsx";
import RemEmail from "./emails/rem.tsx";

async function sendEmail() {
	const apiKey = process.env.RESEND_API_KEY;
	const fromEmail = process.env.FROM_EMAIL;
	const toEmail = process.env.TO_EMAIL;

	if (!apiKey || !fromEmail || !toEmail) {
		throw new Error("Missing environment variables");
	}
	const resend = new Resend(apiKey);
	const pxRes = await resend.emails.send({
		from: fromEmail,
		to: toEmail,
		subject: "0.5.7 px",
		react: <PxEmail />,
	});
	if (pxRes.error) {
		console.error("Error sending email:", pxRes.error);
		return;
	}
	console.log("Email sent successfully:", pxRes.data);

	const remRes = await resend.emails.send({
		from: fromEmail,
		to: toEmail,
		subject: "0.5.7 rem",
		react: <RemEmail />,
	});
	if (remRes.error) {
		console.error("Error sending email:", remRes.error);
		return;
	}
	console.log("Email sent successfully:", remRes.data);
}

sendEmail();
