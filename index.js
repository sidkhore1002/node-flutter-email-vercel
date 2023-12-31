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

app.post('/sendemail', function(req, res){
    console.log(req.body.emailId)    
    // sendEmail(req.body.emailId)
    sendEmail(req.body.emailId).then((data)=>{
        res.send("Email sent...")
        res.end()    
    })

});

function sendEmail(emailId){
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
    return new Promise((resolve, reject) => {
        transpoter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
                reject(error);
            }
            else{
                console.log("Email sent.. " + info.envelope);
                resolve(info);
            }
        });
    });
}

