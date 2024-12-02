import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height * 1;
export default StyleSheet.create({
  loading: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    height: 1000,
  },
  button: {
    alignItems: 'center',
    marginTop: 0,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 30,
  },
  textSign: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  inBut: {
    width: '70%',
    backgroundColor: '#0163D2',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
  },

  avatar: {
    borderRadius: 80,
    marginTop: 50,
    backgroundColor: 'white',
    height: 160,
    width: 160,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  camIconDiv: {
    position: 'absolute',
    right: "35%",
    zIndex: 1,
    bottom: "4%",
    height: 36,
    width: 36,
    backgroundColor: '#0163D2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  cameraIcon: {
    color: 'white',
  },
  formContainer:{
    marginHorizontal : '7%'
  },
  nameText: {
    color: 'white',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoEditView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#e6e6e6',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  infoEditFirst_text: {
    color: '#7d7c7c',
    fontSize: 16,
    fontWeight: '400',
  },
  infoEditSecond_text: {
    color: 'black',
    fontStyle: 'normal',
    fontSize: 15,
    textAlignVertical: 'center',
    textAlign: 'right',
  },
 
  radioView: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    color: 'black',
    fontSize: 15,
  },
  radioButtons:{
  backgroundColor: "#EBE7E2",
  borderRadius: 100,
  marginHorizontal:5,
  borderColor: '#333',
  borderWidth: 1,
  },

  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  
  updateButton: {
    backgroundColor: "#4A90E2", // A pleasant blue color
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: "70%",
    alignItems: "center",
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  
  buttonText: {
    color: "#fff", // White text color
    fontSize: 16,
    fontWeight: "600",
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  
});
