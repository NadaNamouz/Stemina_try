import { useState } from 'react';
import { databases, DATABASE_ID, COLLECTION_ID } from '../lib/appwrite';

export function useAppwrite() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const saveName = async (name) => {
        setLoading(true);
        setError(null);
        try {
            await databases.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', { name });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { saveName, loading, error };
}