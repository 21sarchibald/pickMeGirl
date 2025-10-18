# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.



# Pick Me Girl

Mobile app that allows users to add and store photos of their daily outfits. The app displays past outfits in a gallery, and chooses one photo at random to recommend each day to the user. The user can ask the app to pick an outfit for them, and it will search through past outfits and display one for them to wear that day.


## Instructions for Build and Use

Steps to build and/or run the software:

1. Download Expo Go onto your mobile device
2. Ensure your mobile device is connected to the same Wifi as the computer you are running the application on.
3. Open the repository in VS Code
4. Open a new terminal and type "npx expo start"
5. Scan the QR code with your cell phone and open it using Expo Go

Instructions for using the software:

1. After opening the app, press the "Add Photo" button. It will display options to either take a new photo or select one from the gallery. Select an option and allow the app permission to access your camera/photos.
2. Add a photo of your outfit of the day from head to toe.
3. To have the app randomly select an outfit for you, press "Pick My Outfit" button and a new image will appear on the home screen with the chosen outfit.
4. To view photos, navigate to the "Gallery" tab by pressing the icon in the nav bar on the bottom of the screen.


## Development Environment 

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* VS Code (or another code editor)
* React (19.1.0)
* React Native (0.81.4)
* TypeScript (~5.9.2)
* Expo (~54.0.12)
* Expo Go App (installed on cell phone)

## Useful Websites to Learn More

I found these websites useful in developing this software:

* [Complete React Native Course by Net Ninja (YouTube)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNTz3sxqGTfxAwU-DIHJd2)
* [GeeksforGeeks React Native Tutorial](https://www.geeksforgeeks.org/react-native/react-native-tutorial/)
* [ChatGPT React Native App Development Help](https://chatgpt.com/c/68e42698-b9ac-8328-a7a6-7941fbe6f154)

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] I plan to add a cloud database to add login functionality and store photos somewhere other than AsyncStorage.
* [ ] I would love to make it so the user can update the tops, bottoms, and shoes of their outfits separately and then scroll through each of them to make tons of outfit combinations and see what looks good.
* [ ] I want to make it so that the photo is stored with a date, a description, and maybe even categories so that the user can tailor outfit generation based on the weather/occasion.