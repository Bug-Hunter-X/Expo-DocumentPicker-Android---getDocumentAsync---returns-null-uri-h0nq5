This bug occurs when using the Expo DocumentPicker API on Android.  The issue is that after selecting a file, the promise returned by DocumentPicker.getDocumentAsync() sometimes resolves with a null or undefined uri property. This prevents accessing the selected file.