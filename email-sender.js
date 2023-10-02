var nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport({

    service:'gmail',
    auth:{
        user:'',
        pass:'',
    }
});

var mailoption ={
    from:'',
    to:'',
    subject:'sending email using Node.js',
    text:'bonjour'
};


transporter.sendMail(mailoption,(erreur,info)=>{

    if(erreur){
        console.log('Erreur',erreur)
    }else{
        console.log('Email envoyée',info.response)
    }
})