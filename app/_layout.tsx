import { useFonts } from "expo-font";
import { Stack } from "expo-router";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Mulish-Italic': require('@/assets/fonts/Mulish-Italic.ttf'),
    'Mulish': require('@/assets/fonts/Mulish.ttf'),
  })
  return <Stack screenOptions={{headerShown:false}}/>;
}
