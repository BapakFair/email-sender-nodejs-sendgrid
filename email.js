const sgMail = require('@sendgrid/mail')

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const finalList = require('./emailData')

const email = async () => {
    try {
        finalList.forEach( (emailData) => {
            const msg = {
                from: {
                    name: 'test3',                          // isi dengan nama domain pengirim yang anda inginkan
                    email: 'test3@test.com'    // isi dengan email domain pengirim yang anda inginkan
                },
                to: emailData,
                subject: 'isi judul subject sesuai selera',
                html:
                    `isi dengan html script anda`,
            };
            // code dibawah ini bekerja mengirim via sendgrid
            sgMail
                .send(msg)
                .then((response) => {
                    console.log(response[0].statusCode)
                    console.log(response[0].headers)
                })
                .catch((error) => {
                    console.error(error)
                })
        });

    } catch (error) {
        return console.error(error);
    }
};

email()
