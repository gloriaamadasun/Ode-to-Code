import React from "react";
import {StyleSheet, Text, View } from "react-native";

function Link(props) {
  return (
    <Text
      {...props}
      accessibilityRole="link"
      style={StyleSheet.compose(styles.link, props.style)}
    />
  );
}

function App() {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
      <Text style={styles.title}>LIFESTYLE</Text>
      </View>
      
      <Text style={styles.text}>
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
           Diet and nutricion <br /> 
        </Link>
       Great and simple recipes from all around the world
      </Text>

      <Text style={styles.text}>
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
           Fitness <br /> 
        </Link>
        Step on and get moving with efficient exercise 
      </Text>

      <Text style={styles.text}>
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
           Skin care & Beauty <br />
        </Link>
        Great and simple recipes from all around the world 
      </Text>

      <Text style={styles.text}> 
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          POC health professionals <br /> 
        </Link>
        Lorem ipsum 
      </Text>

      <Text style={styles.text}>
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          Covid-19 & health <br /> 
        </Link>
        Reliable & updated information regarding COVID-19 symptoms
      </Text>
    </View>
 
    
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "none",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#FF7477"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  button: {
    fontWeight: "none"
  },
});

export default App;
