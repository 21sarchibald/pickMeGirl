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
1. Create a new account using your email and a password.
2. Once an account is created, login using your credentials to access your account in the app.
3. After opening the app, press the "Add Photo" button. It will display options to either take a new photo or select one from the gallery. Select an option and allow the app permission to access your camera/photos.
4. Add a photo of your outfit of the day from head to toe.
5. To have the app randomly select an outfit for you, press "Pick My Outfit" button and a new image will appear on the home screen with the chosen outfit.
6. To view photos, navigate to the "Gallery" tab by pressing the icon in the nav bar on the bottom of the screen.
7. To edit or delete outfits, click on the image in the gallery to open a modal allowing you to edit the outfit description/category or delete the outfit.


## Development Environment 

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* VS Code (or another code editor)
* React (19.1.0)
* React Native (0.81.4)
* TypeScript (~5.9.2)
* Expo (~54.0.12)
* Expo Go App (installed on cell phone)
* Google Firebase (Firestore)

## Useful Websites to Learn More

I found these websites useful in developing this software:

* [Complete React Native Course by Net Ninja (YouTube)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNTz3sxqGTfxAwU-DIHJd2)
* [GeeksforGeeks React Native Tutorial](https://www.geeksforgeeks.org/react-native/react-native-tutorial/)
* [ChatGPT React Native App Development Help](https://chatgpt.com/c/68e42698-b9ac-8328-a7a6-7941fbe6f154)
* [React Nativation useFocusEffect](https://reactnavigation.org/docs/use-focus-effect/)
* [React Native Firestore Usage with Flatlist](https://rnfirebase.io/firestore/usage-with-flatlists)
* [Fetch Data from Firebase Firestore](https://www.youtube.com/watch?v=_yNK31hdyJk)
* [How to Update Data in Firebase Firestore](https://www.youtube.com/watch?v=jVwefdoUEIQ)
* [ChatGPT React Native Firestore Help](https://chatgpt.com/c/6903cd6c-87e4-8323-91d9-2be7ce57b364)

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] I want to make it so that the categories might be a dropdown list rather than something the user types in.
* [ ] I want to make it so that the user can pick a category to sort their outfits by and see inspiration for different categories.
* [ ] I would love to make it so the user can update the tops, bottoms, and shoes of their outfits separately and then scroll through each of them to make tons of outfit combinations and see what looks good.
* [ ] I want to improve the overall look of the app, especially the modals. The text inputs are strange sizes right now, and the photo is not the right width.