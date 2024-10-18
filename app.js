const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res)=>{
    res.send(`
      <h1>Yeah it Works</h1>
      <p>My Mail is: ${process.env.MY_MAIL}</P>
    `);
});
app.post('/user-details/send-mail', async (req, res)=> {
    const { name, email, msg, contact, country, std } = req.body;
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_MAIL,
            pass: process.env.PASS,
        },
    })
    
    await transporter.sendMail({
        to: process.env.MY_MAIL,
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

app.listen(process.env.PORT || 3000, ()=>{console.log(`Server is live now ! at Port ${process.env.PORT}`)});
