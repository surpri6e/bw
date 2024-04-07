import { Firestore } from 'firebase/firestore';
import { Auth } from 'firebase/auth';
import { FirebaseStorage } from 'firebase/storage';

export interface IDatabaseContext {
   firestore: Firestore;
   auth: Auth;
   storage: FirebaseStorage;
}
