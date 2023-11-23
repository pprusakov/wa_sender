# WhatsApp Mass Sender

This mini-app sends your specified message to an array of contacts via WhatsApp.

## Prerequisites
Ensure your [Node.js](https://nodejs.org/en/) version is at least version 12.0 

## Installation

1. Initialize your project:
    ```bash
    npm init -y
    ```
2. Install dependencies:
    ```bash
    npm i whatsapp-web.js qrcode-terminal
    ```

## Initialization

1. In the `index.js` file, edit the `numbers` and `message` variables
2. Run the command:
    ```bash
    node index.js
    ```
3. After a QR code gets generated, scan it with your WhatsApp app
4. Your messages shall be sent out, else you will catch an error