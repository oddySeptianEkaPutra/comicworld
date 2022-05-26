const nodemailer = require('nodemailer');

function sendEmail(data){
    const price = data[0].price
    const quantity = data[0].quantity
    const email = data[0].User.email

    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "comic.world666@gmail.com",
        pass: "comicworld19"
    }
    });
    
    const options = {
        from : "comic.world666@gmail.com",
        to : `${email}`,
        subject: "Pembelian Komik",
        text: `Terima Kasih telah membeli komik kami dengan quantity ${quantity} dan harga Rp.${price.tolocalestring()}`
    };
    
    
    transporter.sendMail(options, (err, info)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("sent: " + info.response);
    })

}

module.exports = sendEmail