import { View, Text, StyleSheet } from "react-native";

export default function HeaderMessageCard ({title, content, children})
{
    return (
        <View style={styles.headerCard}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
            <View style={styles.children}>{children}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerCard: {
        flex:1,      
        backgroundColor:"gray",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    title: {
      color:"white",
      fontSize:60,
    },
    content: {
        color:"white",
        fontSize:35,
    },
    children: {
    // borderStyle: "solid",
    // borderColor: "black",
    // borderWidth: 1,
    // backgroundColor:"white",
    // padding: 2
      }
  });
  