const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Specify an array of numbers with the country code
const numbers = [
    "5500000000000",
    "5500000000001"
]

// Specify your message
const message = 'PUT YOUR MESSAGE HERE';

async function sendWhatsAppMessage(contactPhoneNumber, message) {
    try {
        await client.sendMessage(`${contactPhoneNumber}@c.us`, message);
        console.log(`Message sent to ${contactPhoneNumber}`);
    } catch (error) {
        console.error(`Error sending message to ${contactPhoneNumber}: ${error}`);
    }
}

async function arrayProcessing(arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sendWhatsAppMessage(arrayOfNumbers[i], message)
    }
}

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('QR Code:', qr);
});

client.on('ready', () => {
    console.log('WhatsApp bot is ready!');
    arrayProcessing(numbers)
});

client.initialize();

