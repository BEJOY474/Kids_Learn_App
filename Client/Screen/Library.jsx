import { StyleSheet, View } from 'react-native';
import React from 'react';
import Details from '../Components/Details';
import { ScrollView } from 'react-native-gesture-handler';

export default function Library() {
  const data = [
    {
      id: 1,
      name: 'App Discription',
      image: require('../assets/ABC/dis.png'),
      comment:
        'The name of this app is Kis Learn App, and it is designed specifically for kids. To use this app, if the user is new, they must first register by going to the registration screen. After completing the registration process, they can log in to access the app. Users can update their profile by navigating to the profile option if needed. Additionally, if a user wishes to delete their account, they can do so by going to the user delete option.',
    },
    {
      id: 2,
      name: 'ABC Book',
      image: require('../assets/ABC/abc.jpg'),
      comment:
        'The A-Z Alphabet Sound Book is a fun and interactive tool designed to help kids learn the English alphabet. Each letter, from A to Z, is displayed with colorful images and plays a corresponding sound when clicked, such as "A for Apple" or "B for Ball." Kids can tap on any letter to hear its pronunciation and associated word, making it easy to learn through repetition. They can explore the letters in any order, improving their memory and pronunciation at their own pace. Parents or teachers can guide children by asking questions like "Can you find the letter B?" or adding extra examples such as "A for Apple and Ant." The book can also be used to play interactive games, like matching objects around them to the letters, or as a spelling aid for simple words like "Cat." Its vibrant visuals and engaging sounds make learning enjoyable, turning it into a daily activity that builds vocabulary, early reading skills, and confidence in a playful way.',
    },
    {
      id: 3,
      name: 'One Two Book',
      image: require('../assets/ABC/oneTwo.jpg'),
      comment:
        'The One-Two Sound Book is an engaging and educational tool designed for kids to learn numbers in a fun way. Each number, from 1 to 10, is displayed in vibrant colors and plays an interactive sound when clicked. For example, tapping on "1" will play the sound "One, O-N-E," helping children associate the number with its spelling. This feature allows kids to learn pronunciation and spelling simultaneously. Parents or teachers can further enhance learning by encouraging kids to count objects around them, like "How many apples are there?" and tapping the corresponding number. The book can also be used to play counting games, where kids identify and press the correct number based on spoken prompts. Its combination of colorful visuals, interactive sounds, and spelling helps build foundational math skills, improve number recognition, and make learning an exciting daily activity.',
    },
    {
      id: 4,
      name: 'Bird Book',
      image: require('../assets/ABC/bird.jpg'),
      comment:
        "The Bird Sound Book is an exciting and interactive learning tool designed to help kids explore and recognize different birds. Each page features colorful images of various birds, such as a crow, parrot, and sparrow. When a child clicks on a bird's image, the book plays its name aloud, like 'Crow,' along with its spelling. Additionally, a small volume icon next to each bird lets kids hear the bird's natural sound, such as a crow's 'caw-caw.' This dual feature helps kids learn bird names and their unique sounds simultaneously, making the experience both educational and fun. Parents or teachers can use the book to ask questions like 'What sound does a parrot make?' or create games where kids match bird sounds with their names. With its engaging visuals and realistic sounds, the Bird Sound Book is perfect for building curiosity about nature, enhancing memory, and encouraging interactive learning.",
    },
    {
      id: 5,
      name: 'Fruits Book',
      image: require('../assets/ABC/frt.jpg'),
      comment:
        "The Fruits Book is an exciting and interactive learning tool designed to help kids explore and recognize different birds. Each page features colorful images of various birds, such as a crow, parrot, and sparrow. When a child clicks on a bird's image, the book plays its name aloud, like 'Crow,' along with its spelling. Additionally, a small volume icon next to each bird lets kids hear the bird's natural sound, such as a crow's 'caw-caw.' This dual feature helps kids learn bird names and their unique sounds simultaneously, making the experience both educational and fun. Parents or teachers can use the book to ask questions like 'What sound does a parrot make?' or create games where kids match bird sounds with their names. With its engaging visuals and realistic sounds, the Bird Sound Book is perfect for building curiosity about nature, enhancing memory, and encouraging interactive learning.",
    },
    {
      id: 6,
      name: 'Animal Book',
      image: require('../assets/ABC/animal.jpeg'),
      comment:
        "The Animal Sound Book is an engaging and interactive tool designed to help kids learn about different vegetables. Each page features colorful images of various animals, such as Cat, Tiger, and Dog. When a child clicks on a Animal's image, the book plays its name aloud, like 'Cat,' along with its spelling. Additionally, a small volume icon next to each Animal lets kids hear the Animal's name in a fun way. This dual feature helps kids learn Animal names and their unique sounds simultaneously, making the experience both educational and enjoyable. Parents or teachers can use the book to ask questions like 'What is the name of this Animal?' or create games where kids match Animal with their names. With its vibrant visuals and engaging sounds, the Animals Sound Book is perfect for building curiosity about healthy eating, enhancing memory, and encouraging interactive learning.",
    },
    {
      id: 7,
      name: 'Vegetable Book',
      image: require('../assets/ABC/vg.png'),
      comment:
        "The Vegetable Sound Book is an engaging and interactive tool designed to help kids learn about different vegetables. Each page features colorful images of various vegetables, such as Carrot, Tomato, and Potato. When a child clicks on a vegetable's image, the book plays its name aloud, like 'Carrot,' along with its spelling. Additionally, a small volume icon next to each vegetable lets kids hear the vegetable's name in a fun way. This dual feature helps kids learn vegetable names and their unique sounds simultaneously, making the experience both educational and enjoyable. Parents or teachers can use the book to ask questions like 'What is the name of this vegetable?' or create games where kids match vegetables with their names. With its vibrant visuals and engaging sounds, the Vegetables Sound Book is perfect for building curiosity about healthy eating, enhancing memory, and encouraging interactive learning.",
    },
   
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    {data.map((item) => (
      <Details key={item.id} item={item} />
    ))}
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
