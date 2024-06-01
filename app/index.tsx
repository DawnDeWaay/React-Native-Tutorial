import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Link } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>
          <Link href="/(tabs)/bookmark">Hello World</Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    fontSize: 20,
  },
});

export default Home;
