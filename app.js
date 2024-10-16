const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/user-details/send-mail', async (req, res)=> {
    const { name, email, msg, contact, country, std } = req.body;
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mohdahsanahsan1@gmail.com',
            pass: 'wtaf rsag jtea nxqs'
        },
    })
    
    await transporter.sendMail({
        to: 'mohdahsanahsan1@gmail.com',
        subject: `${name}`,
        text: `${msg} \n Contact: ${std}${contact} \n email address: ${email} \n Country ${country}`,
    })
    .then(()=> {
        res.end();
    })
    .catch((err)=> {
        console.log('Error to send', err);
    });
})

app.listen(5000, ()=>{console.log('Server is live now !')});