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
    backgroundColor: '#161622',

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
    backgroundColor: '#161622',
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

  },
  tabBar: {
    backgroundColor: '#161622',
    borderTopWidth: 1,
    borderTopColor: '#232533',
    height: 84,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabIconText: {
    fontSize: 12,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    marginBottom: 8,
  },

  categoriesContainer: {
    marginTop: 12,
  },
  categoriesTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  category: {
    marginBottom: 4,
  },
  categoryTitle: {
    fontWeight: 'bold',
  },
  categoryDescription: {
    fontStyle: 'italic',
  },
  categoryColor: {
    color: '#555555',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardDate: {
    fontSize: 14,
    color: '#555555',
    textAlign:'right',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  calendarIcon: {
    marginRight: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  multilineInput: {
    height:250, 
    textAlignVertical: 'top', 
    marginLeft:20
  },
  categoryItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  categoryItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  categoryItemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  categoryItemColor: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  loader: {
    marginTop: 20,
  },
  
 
  
});
