import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const searchInput = document.querySelector('input[type="text"]');
const searchResults = document.getElementById('searchResults');

async function dynamicSearch() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = ''; // تفريغ النتائج الحالية
    if (query.length === 0) {
        return; // إذا كان مربع البحث فارغًا، لا تقم بالبحث
    }

    const destinationsRef = collection(db, 'destinations');
    const snapshot = await getDocs(destinationsRef);
    const results = snapshot.docs.filter(doc => doc.data().name.toLowerCase().includes(query));

    results.forEach(doc => {
        const data = doc.data();
        const item = document.createElement('div');
        item.className = 'search-item';
        item.textContent = ${data.name} - ${data.description};
        searchResults.appendChild(item);
    });
}

searchInput.addEventListener('input', dynamicSearch);