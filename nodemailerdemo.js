const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
    user: "comic.world666@gmail.com",
    pass: "comicworld19"
}
});

const options = {
    from : "comic.world666@gmail.com",
    to : "awalludin.jamil17@gmail.com",
    subject: "Testing nodemailer",
    text: "Pesan kedua"
};


transporter.sendMail(options, (err, info)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("sent: " + info.response);
})