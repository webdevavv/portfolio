import mailer from 'nodemailer'
const smtpTransport = mailer.createTransport(
	{
		host: 'smtp.mail.ru',
		port: 465,
		secure: true,
		auth: {
			user: 'vikulovtola@mail.ru',
			pass: 'PsuYWjiZR6ugyvC2Aba4',
		},
		tls: {
			rejectUnauthorized: false,
		},
	},
	{
		from: 'your site <vikulovtola@mail.ru>',
	}
)

const sendEmail = message => {
	smtpTransport.sendMail(message, function (error, info) {
		if (error) {
			console.log(error)
		} else {
			console.log('Email sent successfully', info)
		}
		smtpTransport.close()
	})
}

export default sendEmail
