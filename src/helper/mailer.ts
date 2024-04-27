import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    const mailOption = {
      from: "fulldeveloper@786.email",
      to: email,
      subject:
        emailType === "VERIFY" ? "your email vrify" : "your email not vrify", // Subject line
      html: "<b>Hello world?</b>", // html body
    };

    const mailResponse =  await transporter.sendMail(mailOption);
    return mailResponse;

  } catch (error:any) {
    throw new Error(error.message)
  }
};
