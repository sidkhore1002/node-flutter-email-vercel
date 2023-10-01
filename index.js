const nodemailer = require('nodemailer');
const http = require('http')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.listen(5000, console.log("Server started on port: 5000") )

app.use(bodyParser.json());

app.get('/', function(req,res){
    console.log("Flutter-Nodejs-Email...")
    res.send("Flutter - Nodejs - Email...")
    res.end()
})

app.post('/sendemail', async function(req, res){
    console.log(req.body.emailId)    
    await sendEmail(req.body.emailId)	
    // res.send("Email sent...")
    // res.end()
});

async function sendEmail(emailId){
    console.log("Inside sendmail" + emailId);
    var transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'findoutmobile@gmail.com',
            pass: 'eiorarwtsqtyxaee'        
        }
    });
    var mailOptions = {
        from : 'findoutmobile@gmail.com',
        to: emailId,
        subject: 'Flutter-Nodejs test email',
        text: 'Flutter-Nodejs test email'
    }
    console.log("after mail options");
    await transpoter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        else{
            console.log("Actual Email sent from nodemailer.. " + info.envelope);
        }
    });
}


