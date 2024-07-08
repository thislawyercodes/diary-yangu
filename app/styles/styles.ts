import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors'; // Adjust the path as necessary

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImage:{
    width: 200,
    height: 200,
  },
  text: {
    color: Colors.dark.text,
    fontSize: 19,
    textAlign: 'center',
  },
  button: {
    backgroundColor:'#5F4C31',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    marginLeft:20
  },
  buttonStyle : {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
},
  buttonText: {
    color: Colors.dark.background,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor:'#5F4C31',

  },
  loginImageContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  formFieldContainer: {
    marginBottom: 20,
    marginLeft:20

  },
  formFieldLabel: {
    color: Colors.dark.text,
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ECEDEE',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    fontSize: 16,
    color: Colors.light.background,
  },
  placeholderText: {
    color: '#9BA1A6',
    fontSize: 14, 
  },
  loginHeader: {
      color: '#9BA1A6',
      fontSize: 18, 
      marginLeft:20,
      marginBottom:20,
      fontWeight: 'bold'
    
  },

  registerHeader: {
    color: '#9BA1A6',
    fontSize: 18, 
    marginLeft:20,
    marginTop:20,
},

  toggleButtonText:{
    color: '#0a7ea4',
    fontSize: 14,

  },

  toggleButton:{
    position: 'absolute',
    right: 10,
    bottom: 10,

  }
});
