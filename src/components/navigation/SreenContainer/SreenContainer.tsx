import { spacing } from "@/theme";
import { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, View } from "react-native";


export function ScreenContainer({
  children,
}: PropsWithChildren) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {children}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md
  }
});