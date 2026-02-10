import { Injectable } from '@angular/core';
import { addDoc, collection, doc, getDocs, getFirestore, limit, query, updateDoc, where } from 'firebase/firestore';
import { firebaseApp } from '../../configs/firebase.config';
import { UserPreferences } from '../../models/user-preferences.models';

@Injectable({
  providedIn: 'root',
})
export class UserPreferencesRepository {
  private _db = getFirestore(firebaseApp);
  private _preferencesCollection = collection(this._db, 'user_preferences')

  async getUserPreferences(userId: string) {
    const querySnapshot = await getDocs(query(
      this._preferencesCollection,
      where('userId', '==', userId),
      limit(1)
    ));
    return querySnapshot.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      } as UserPreferences;
    })[0]
  }

  async createUserPreferences(preferences: Omit<UserPreferences, 'id'>) {
    const doc = await addDoc(this._preferencesCollection, preferences);
    return doc.id
  }

  async updateUserPreferences(docId: string, preferences: Partial<UserPreferences>) {
    await updateDoc(doc(this._preferencesCollection, docId), preferences)
  }
}
