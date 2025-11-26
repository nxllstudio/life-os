import { useState, useEffect, useMemo } from 'react';
import {
  collection,
  query,
  onSnapshot,
  QueryConstraint,
  FirestoreError,
} from 'firebase/firestore';
import { db } from '../lib/firebase';

export function useCollection<T>(
  collectionName: string,
  constraints?: QueryConstraint[]
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  const constraintsKey = useMemo(
    () => constraints?.map((c) => JSON.stringify(c)).join(',') || '',
    [constraints]
  );

  useEffect(() => {
    const q = constraints
      ? query(collection(db, collectionName), ...constraints)
      : query(collection(db, collectionName));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items: T[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          // Convert Firestore timestamps to Date objects
          const processedData: any = { id: doc.id };
          Object.keys(data).forEach((key) => {
            const value = data[key];
            if (value && typeof value === 'object' && 'toDate' in value) {
              processedData[key] = value.toDate();
            } else if (value && typeof value === 'object' && 'seconds' in value) {
              processedData[key] = new Date(value.seconds * 1000);
            } else {
              processedData[key] = value;
            }
          });
          items.push(processedData as T);
        });
        setData(items);
        setLoading(false);
        setError(null);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName, constraintsKey]);

  return { data, loading, error };
}

