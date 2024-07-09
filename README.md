# Journal App

This is a React Native app built with Expo for managing journal entries and categories. The app allows users to view, add, edit, and delete journal entries and categories.

## Table of Contents
- [Requirements](#requirements)
- [Setup](#setup)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Configure Environment Variables](#configure-environment-variables)
  - [Run the App](#run-the-app)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Requirements
- Node.js >= 14.x
- Expo CLI >= 4.x
- A running instance of the Django backend (API)

## Setup

### Clone the Repository
```bash
git clone git@github.com:thislawyercodes/diary-yangu.git
cd diary-yangu
npm install
```


### Configure Environment Variables
- Navigate to the lib directory and put the backend base url (without a trailing slash at the end)
- If you are running the app on ios, react native may not recognize the localhost, you need to tunnel the backend base url using ngrok for instance

### Run the App
- npx expo start
- Scan the QR code with the Expo Go app on your iOS or Android device.


-Happy journaling! If you encounter any issues or have any questions, feel free to open an issue or reach out.






