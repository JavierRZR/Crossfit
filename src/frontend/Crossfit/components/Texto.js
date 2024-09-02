

import { Text } from "react-native";

export default function Texto({ children, className }) {

    return (
        <Text className={`text-neutral-900 dark:text-neutral-100 ${className}`} >
            {children}
        </Text >
    );
}