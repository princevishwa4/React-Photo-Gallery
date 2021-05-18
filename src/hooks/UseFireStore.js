import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/Config';

const UseFireStore = (collection) => {
    const[docs, setDocs] = useState([]);

    useEffect(() => {
        const getData = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            });
        return () => getData();
    }, [collection]);

    return { docs };
}

export default UseFireStore;