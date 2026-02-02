import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  FirestoreDataConverter,
  getDocs,
  getFirestore,
  orderBy,
  query,
  QueryDocumentSnapshot,
  updateDoc,
  where,
  WithFieldValue
} from 'firebase/firestore';
import { firebaseApp } from '../../configs/firebase.config';
import { Task } from '../../models/task.models';

const taskConverter: FirestoreDataConverter<Task> = {
  toFirestore(task: WithFieldValue<Task>): DocumentData {
    const { id, ...data } = task as Task;
    return Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined && value !== null)
    );
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Task {
    return {
      ...snapshot.data(),
      id: snapshot.id,
    } as Task;
  }
};

@Injectable({
  providedIn: 'root',
})
export class TaskRepository {
  private _db = getFirestore(firebaseApp);
  private _taskCollection = collection(this._db, 'tasks').withConverter(taskConverter)

  async getAllTasksByUserId(userId: string) {
    const querySnapshot = await getDocs(query(
      this._taskCollection,
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    ));
    return querySnapshot.docs.map(doc => doc.data());
  }

  async createTask(task: Omit<Task, 'id' | 'completedAt'>) {
    const docRef = await addDoc(this._taskCollection, task);
    return docRef.id;
  }

  async updateTask(docId: string, task: Omit<Task, 'id' | 'userId' | 'createdAt' | 'completedAt'>) {
    return await updateDoc(doc(this._taskCollection, docId), taskConverter.toFirestore(task as Task))
  }

  async deleteTask(taskId: string) {
    return await deleteDoc(doc(this._taskCollection, taskId))
  }
}
