import { Slot } from 'expo-router';
import { Text, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Index from '.'


export default function Layout() {
    return (
        <SafeAreaView style={{ flex: 1 }} className="bg-neutral-100 dark:bg-neutral-900" >
            <StatusBar style="auto" />
            <Slot />
        </SafeAreaView>

    );
}
