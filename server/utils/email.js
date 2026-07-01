import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendVerificationEmail = async (email, token) => {
  const url = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
  await transporter.sendMail({
    from: `"DevCanvas" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Verify your DevCanvas account",
    html: `<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#0f172a;border-radius:16px;color:#f8fafc">
      <h1 style="font-size:28px;background:linear-gradient(135deg,#06b6d4,#a855f7);-webkit-background-clip:text;color:transparent">DevCanvas</h1>
      <p>Click the button below to verify your email:</p>
      <a href="${url}" style="display:inline-block;padding:12px 32px;margin:16px 0;border-radius:12px;background:linear-gradient(135deg,#06b6d4,#a855f7);color:white;text-decoration:none;font-weight:bold">Verify Email</a>
      <p style="color:#64748b">Or copy: ${url}</p>
    </div>`,
  });
};

export const sendResetPasswordEmail = async (email, token) => {
  const url = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
  await transporter.sendMail({
    from: `"DevCanvas" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Reset your DevCanvas password",
    html: `<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#0f172a;border-radius:16px;color:#f8fafc">
      <h1 style="font-size:28px;background:linear-gradient(135deg,#06b6d4,#a855f7);-webkit-background-clip:text;color:transparent">DevCanvas</h1>
      <p>Click the button below to reset your password:</p>
      <a href="${url}" style="display:inline-block;padding:12px 32px;margin:16px 0;border-radius:12px;background:linear-gradient(135deg,#06b6d4,#a855f7);color:white;text-decoration:none;font-weight:bold">Reset Password</a>
      <p style="color:#64748b">Or copy: ${url}</p>
    </div>`,
  });
};
