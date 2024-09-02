import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Layout from './app/_layout';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-neutral-100 dark:bg-neutral-900 " >
      <StatusBar style="auto" />
      <Layout />
    </SafeAreaView>
  );
}