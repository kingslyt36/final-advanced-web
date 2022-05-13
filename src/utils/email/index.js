// core module
const fs = require('fs');
const { promisify } = require('util')
const readFile = promisify(fs.readFile);

// npm module
const nodemailer = require('nodemailer');
require('dotenv').config();

const { EMAIL_USER, EMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
    }
});

const sendEmail = async(data) => {
    try {
        const mailOptions = {
            from: EMAIL_USER,
            to: data.toEmail,
            subject: data.subject,
            html: `
            <p>Username: ${data.username}</p>
            <p>Password: ${data.password}</p>
            `
                // html: await fs.readFile()
        };
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.log('Có lỗi trong quá trình gửi email: ' + error.message);
        return false;
    }
};

module.exports = { sendEmail };