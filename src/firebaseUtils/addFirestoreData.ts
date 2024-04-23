import { collection, setDoc, doc, getDocs } from 'firebase/firestore';
import { firestore } from './firebaseConfig'; // Import the Firestore instance

export const addRoomToFirestore = async (data: any) => {
  try {
    const roomRef = doc(collection(firestore, 'horse_valley_resort'), 'rooms'); // Reference to a specific document ID under the 'rooms' collection
    await setDoc(roomRef, data); // Set the document data directly under the specified document ID
    console.log('Data added successfully');
  } catch (error) {
    console.error('Error adding data:', error);
  }
};


export const fetchRoomsData = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, 'horse_valley_resort'));
    const roomsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return roomsData;
  } catch (error) {
    console.error('Error fetching rooms data:', error);
    return [];
  }
};
