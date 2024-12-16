# Expo DocumentPicker Android - Null URI Bug

This repository demonstrates a bug in Expo's DocumentPicker API on Android.  Under certain conditions, `DocumentPicker.getDocumentAsync()` resolves with a `uri` property that is unexpectedly null or undefined. This inconsistency makes reliable file selection problematic.

## Bug Reproduction

1. Run the provided `bug.js` example on an Android device (specific devices and Android versions may exhibit the problem). 
2. Attempt to select a file using the DocumentPicker.
3. Observe that the promise sometimes resolves with a null or undefined uri, leading to an error.

## Solution

The `bugSolution.js` file provides a workaround that adds error handling and retry mechanisms to mitigate this issue. The improved approach ensures robust file selection even if the initial attempt fails.

## Contributing

Contributions are welcome! If you've encountered this bug or found a better solution, please open an issue or create a pull request.