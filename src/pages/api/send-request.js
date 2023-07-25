import sendEmail from '../../../lib/mail'

export default async function handler(req, res) {
	const message = {
		to: 'vikulovtolya38@gmail.com',
		subject: `Новая заявка с сайта от ${req.body.userName}`,
		text: `
      Имя: ${req.body.userName},
      Почта: ${req.body.userEmail},
      Телефон: ${req.body.userPhone},
      Сообщение: ${req.body.userMess}
    `,
	}
	sendEmail(message)
	console.log(message)
	res.send(`Спасибо за заявку, ${req.body.userName}`)
}
