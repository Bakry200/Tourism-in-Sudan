import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

async function addData() {
    const destinations = [
        { name: 'Temple of Amun at Jebel Barkal', description: 'A significant archaeological site featuring ancient temples and pyramids.' },
        { name: 'Jebel Kauda', description: 'A mountainous region known for its scenic beauty and hiking opportunities.' },
        { name: 'Jebel Totil', description: 'A popular destination for trekking and exploring the natural landscapes.' },
        { name: 'Jebel Marra', description: 'A volcanic range offering stunning views and waterfalls.' },
        { name: 'Sanganeb Island', description: 'An island famous for its marine biodiversity and coral reefs.' },
        { name: 'The Tourist Kilometer', description: 'A well-known area with various tourist attractions and activities.' },
        { name: 'Pyramids of Meroe at Begrawiya', description: 'Ancient pyramids from the Meroitic period, a UNESCO World Heritage site.' },
        { name: 'Al-Mogran', description: 'The confluence of the Blue Nile and White Nile rivers, a significant geographical landmark.' }
    ];

    try {
        destinations.forEach(async (destination) => {
            await addDoc(collection(db, 'destinations'), destination);
        });
        console.log('Data added successfully!');
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

addData();