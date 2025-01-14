import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

export default function Rhyme() {
  const [userData, setUserData] = useState(""); // State to store user data
  const navigation = useNavigation();

  // Array of image URLs for the carousel
  const imageUrls = [
    "https://i.ytimg.com/vi/-JRJibhgwUQ/maxresdefault.jpg",
    "https://cdn.firstcry.com/education/2022/08/24142823/Baa-Baa-Black-Sheep-Nursery-Rhyme.jpg",
    "https://cdn-images.dzcdn.net/images/cover/a8c5209d4253c3694f7c9a0bfc5a0c49/500x500.jpg",
    "https://i.ytimg.com/vi/AIIj0mBX1jU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/-j6Dk6qLFB8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/Otf4_UEvnQ8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/y-wajXp48I0/maxresdefault.jpg",
    "https://i.ytimg.com/vi/wwdfDDfwFrk/maxresdefault.jpg",
    "https://i.ytimg.com/vi/mwQ3eWE8XUY/maxresdefault.jpg",
    "https://i.ytimg.com/vi/11CcklUq-h4/sddefault.jpg",
  ];

  return (
    <View style={styles.container}>
      {/* Static Carousel */}
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={imageUrls}
        style={{ zIndex: 2 }}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => {}}
        renderItem={({ index }) => (
          <View style={styles.carouselItem}>
            <Image
              source={{ uri: imageUrls[index] }}
              style={styles.carouselImage}
              resizeMode="stretch"
            />
          </View>
        )}
      />

      {/* Static Header */}
      <View style={styles.content}>
        <Text style={styles.headerText}>All Rhymes</Text>
      </View>

      {/* Scrollable List */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Rhymes", {
              serial: 1,
              text: "Twinkle, Twinkle",
              details:
                "Twinkle, twinkle, little star,\nHow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky.\n\nWhen the blazing sun is gone,\nWhen he nothing shines upon,\nThen you show your little light,\nTwinkle, twinkle, all the night.\n\nThen the traveler in the dark\nThanks you for your tiny spark;\nHe could not see which way to go,\nIf you did not twinkle so.\n\nIn the dark blue sky you keep,\nAnd often through my curtains peep,\nFor you never shut your eye\nTill the sun is in the sky.\n\nAs your bright and tiny spark\nLights the traveler in the dark,\nThough I know not what you are,\nTwinkle, twinkle, little star.\n",
            })
          }
          style={styles.rhymeItem}
        >
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/-JRJibhgwUQ/maxresdefault.jpg",
            }}
            style={styles.rhymeImage}
            resizeMode="stretch"
          />
          <Text style={styles.rhymeText}>Twinkle, Twinkle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Rhymes", {
              serial: 2,
              text: "Baa Baa Black Sheep",
              details:
                "Baa, baa, black sheep,\nHave you any wool?\nYes, sir, yes, sir,\nThree bags full.\n\nOne for the master,\nOne for the dame,\nAnd one for the little boy\nWho lives down the lane.\n\nThank you, said the master,\nThank you, said the dame,\nAnd thank you, said the little boy\nWho lives down the lane.",
            })
          }
          style={styles.rhymeItem}
        >
          <Image
            source={{
              uri: "https://cdn.firstcry.com/education/2022/08/24142823/Baa-Baa-Black-Sheep-Nursery-Rhyme.jpg",
            }}
            style={styles.rhymeImage}
            resizeMode="stretch"
          />
          <Text style={styles.rhymeText}>Baa Baa Black Sheep</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Rhymes", {
              serial: 3,
              text: "Bismillah Bismillah",
              details:
                "Bismillah, Bismillah,\nIn the name of Allah,\nBismillah, Bismillah,\nIn the name of Allah.\n\nBefore I start my work today,\nI say Bismillah.\nBefore I eat or drink my milk,\nI say Bismillah.\n\nBismillah, Bismillah,\nIn the name of Allah,\nBismillah, Bismillah,\nIn the name of Allah.\n\nWhen I wake up in the morning,\nI say Bismillah.\nWhen I lay down to go to sleep,\nI say Bismillah.\n\nBismillah, Bismillah,\nIn the name of Allah,\nBismillah, Bismillah,\nIn the name of Allah.\n\nWhen I play or when I run,\nI say Bismillah.\nWhen my day is almost done,\nI say Bismillah.\n\nBismillah, Bismillah,\nIn the name of Allah,\nBismillah, Bismillah,\nIn the name of Allah.\n\nEverything I do or say,\nI’ll always start this way.\nBismillah, Bismillah,\nIn the name of Allah.\n",
            })
          }
          style={styles.rhymeItem}
        >
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/y-wajXp48I0/maxresdefault.jpg",
            }}
            style={styles.rhymeImage}
            resizeMode="stretch"
          />
          <Text style={styles.rhymeText}>Bismillah Bismillah</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Rhymes", {
              serial: 4,
              text: "Ding dong bell",
              details:
                "Ding dong bell,\nPussy’s in the well.\nWho put her in?\nLittle Tommy Thin.\n\nWho pulled her out?\nLittle Tommy Stout.\nWhat a naughty boy was that,\nTo drown poor pussy cat,\n\nWho never did him any harm,\nBut killed the mice in his father’s barn.\n",
            })
          }
          style={styles.rhymeItem}
        >
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/wwdfDDfwFrk/maxresdefault.jpg",
            }}
            style={styles.rhymeImage}
            resizeMode="stretch"
          />
          <Text style={styles.rhymeText}>Ding dong bell</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Rhymes", {
              serial: 5,
              text: "Humpty Dumpty",
              details:
                "Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall.\nAll the king’s horses and all the king’s men\nCouldn't put Humpty together again.\n\nHumpty Dumpty sat on a wall,\nEating blackberries and cream with them all.\nAlong came a wind that blew them around,\nAnd poor Humpty Dumpty fell to the ground.",
            })
          }
          style={styles.rhymeItem}
        >
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/AIIj0mBX1jU/maxresdefault.jpg",
            }}
            style={styles.rhymeImage}
            resizeMode="stretch"
          />
          <Text style={styles.rhymeText}>Humpty Dumpty</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Rhymes", {
              serial: 6,
              text: "Johny Johny",
              details:
                "Johny, Johny,\nYes, Papa?\nEating sugar?\nNo, Papa.\n\nTelling lies?\nNo, Papa.\nOpen your mouth.\nHa! Ha! Ha!. Johny, Johny,\nYes, Papa?\nEating Cake?\nNo, Papa.\n\nTelling lies?\nNo, Papa.\nOpen your mouth.\nHa! Ha! Ha!. Johny, Johny,\nYes, Papa?\nEating Ice-cream?\nNo, Papa.\n\nTelling lies?\nNo, Papa.\nOpen your mouth.\nHa! Ha! Ha!. Johny, Johny,\nYes, Papa?\nEating Chocolate?\nNo, Papa.\n\nTelling lies?\nNo, Papa.\nOpen your mouth.\nHa! Ha! Ha!",
            })
          }
          style={styles.rhymeItem}
        >
          <Image
            source={{
              uri: "https://m.media-amazon.com/images/M/MV5BNGJmYjFlYWMtOWViMi00NGEyLWE4MWEtYjVjZmFjYWQ0ZmNiXkEyXkFqcGc@._V1_.jpg",
            }}
            style={styles.rhymeImage}
            resizeMode="stretch"
          />
          <Text style={styles.rhymeText}>Johny Johny</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Rhymes", {
              serial: 7,
              text: "My Mother",
              details:
                "My Mommy is the best, the best there ever was,\nMy Mommy is the best, and I love her just because.\nWhenever I am sick or hurt, she gives a great big kiss,\nShe helps me to feel better and she does it just like this.\n\nMy Mommy is the best, the best there ever was,\nMy Mommy is the best, and I love her just because.\nShe takes the time to play with me, all my favorite games,\nEven when she’s busy, she loves me just the same.\n\nMy Mommy is the best, the best there ever was,\nMy Mommy is the best, and I love her just because.\nWhenever I get hungry, she makes my favorite snacks,\nShe makes them just the way I like, they’re great and that’s a fact.\n\nYour Mommy is the best, the best there ever was,\nYour Mommy is the best, and I love her just because.\nShe laughs when I am silly, and likes to play along,\nWe sing and dance together to all our favorite songs.\n\nOur Mommy is the best, the best there ever was,\nOur Mommy is the best, and we love her just because.\nShe always takes good care of us, and she should be a queen,\nShe’s the greatest mommy that we have ever seen.\n\nI love to be your mommy,\nReally?  It’s true!\nYou fill my life with lots of joy,\nYou are my precious girl and boys.\nReally?  It’s true!\nI love you!",
            })
          }
          style={styles.rhymeItem}
        >
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/mwQ3eWE8XUY/maxresdefault.jpg",
            }}
            style={styles.rhymeImage}
            resizeMode="stretch"
          />
          <Text style={styles.rhymeText}>My Mother</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Rhymes", {
              serial: 8,
              text: "1 2 Buckle My Shoe",
              details:
                "One, two \nbuckle my shoe.\nThree, four \nknock at the door.\nFive, six \npick up sticks.\nSeven, eight \nlay them straight.\nNine, ten \na big fat hen.",
            })
          }
          style={styles.rhymeItem}
        >
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/Otf4_UEvnQ8/maxresdefault.jpg",
            }}
            style={styles.rhymeImage}
            resizeMode="stretch"
          />
          <Text style={styles.rhymeText}>1 2 Buckle My Shoe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Rhymes", {
              serial: 9,
              text: "Pussy Cat",
              details:
                "Pussy cat, pussy cat, \nwhere have you been?\nI’ve been to London \nto look at the Queen.\nPussy cat, pussy cat, \nwhat did you there?\nI frightened a little mouse\n under the chair. \n\nPussy cat, pussy cat, \nwhere have you been?\nI’ve been to New York \nto look at the Queen.\nPussy cat, pussy cat, \nwhat did you there?\nI frightened a little mouse\n under the chair.",
            })
          }
          style={styles.rhymeItem}
        >
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/11CcklUq-h4/sddefault.jpg",
            }}
            style={styles.rhymeImage}
            resizeMode="stretch"
          />
          <Text style={styles.rhymeText}>Pussy Cat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Rhymes", {
              serial: 10,
              text: "Rain Rain Go Away",
              details:
                "Rain, rain, go away,\nCome again another day\nDaddy wants to play\nRain rain go away\n\nRain, rain, go away,\nCome again another day\nMommy wants to play\nRain rain go away\n\nRain, rain, go away,\nCome again another day\nLittle brother wants to play\nRain rain go away\n\nRain, rain, go away,\nCome again another day\nLittle sister wants to play\nRain rain go away\n\nRain, rain, go away,\nCome again another day\nLittle baby wants to play\nRain rain go away\n\nRain, rain, go away,\nCome again another day\nAll the family wants to play\nRain rain go away\n\nRain, rain, went away\nTo come again another day\nEverybody gets to play\nRain rain went away",
            })
          }
          style={styles.rhymeItem}
        >
          <Image
            source={{
              uri: "https://i.scdn.co/image/ab67616d00001e027a7e8f125b96bd7be71c71ab",
            }}
            style={styles.rhymeImage}
            resizeMode="stretch"
          />
          <Text style={styles.rhymeText}>Rain Rain Go Away</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
  },
  scrollContent: {
    position: "relative",
    top: "35%",
    padding: 10,
  },
  content: {
    position: "relative",
    padding: 10,
    top: "31.1%",
    width: "100%",
    zIndex: 3,
    height: "10%",
    backgroundColor: "#e1eff0",
  },
  headerText: {
    flex: 1,
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
    top: "10%",
  },
  rhymeList: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 6,
    overflow: "hidden",
  },
  rhymeItem: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 100,
    backgroundColor: "#1480af",
    marginBottom: 10,
  },
  rhymeImage: {
    width: "30%",
    height: "100%",
  },
  rhymeText: {
    textAlign: "justify",
    marginLeft: "2%",
    color: "white",
    fontSize: 18,
  },
});
