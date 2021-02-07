import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
        <Text style={styles.title}>Lifestyle</Text>
      </View>

      <Text style={styles.text}>
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          DIET & NUTRICION <br />
        </Link>
        Great and simple recipes from all around the world
      </Text>

      <View style = {styles.lineStyle} />

      <Text style={styles.text}>
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          FITNESS <br />
        </Link>
        Step on and get moving with efficient exercise
      </Text>

      <View style = {styles.lineStyle} />

      <Text style={styles.text}>
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          SKIN CARE & BEAUTY <br />
        </Link>
        Find useful tips and tricks that will improve your skin health
      </Text>

      <View style = {styles.lineStyle} />

      <Text style={styles.text}>
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          POC HEALTH PROFESSIONALS <br />
        </Link>
        Connect with local POC health practitioners around you for consultantion 
      </Text>

      <View style = {styles.lineStyle} />

      <Text style={styles.text}>
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          Covid-19  <br />
        </Link>
        Receive reliable & updated information regarding COVID-19 and its symptoms
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "left",
    maxWidth: 1600,
    height: 1024,
    backgroundColor:"#f5f5f5"
  },
  header: {
    padding: 30,
    fontSize: 28,
    width: "383px",
    height:"57px",
    right: "10px",
    marginBottom: "20px"
  },
  title: {
    fontSize: "1.5rem",
    marginVertical: "0.5em",
    textAlign: "left",
    marginLeft: "10px",
  },
  text: {
    lineHeight: "1.3em",
    fontSize: "1.120rem",
    marginVertical: "2em",
    textAlign: "left",
    marginLeft: "30px",
  },
  link: {
    color: "#5E81F4"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  lineStyle:{
    borderWidth: 0.4,
    borderColor:'black',
    margin:0,
    marginLeft: "30px",
    marginRight: "30px",
  },
});

export default App;
