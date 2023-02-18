import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  updateDoc,
  getDoc,
  deleteField,
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getDownloadURL, getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";
import firebaseConfig from "../configs/fire.config";



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const usr = auth.currentUser;
let uid = "";

export const createUser = (email: any, password: any, func: Function) => {
  try {
    createUserWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    func(err.message);
    console.log(err);
  }
};

export const loginUser = async (email: any, password: any) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err: any) {
    console.error(err);
    return err;
  }
};

export function stateChangeLogin(func: Function) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
      func(user);
    }
  });
}

export async function uploadToFirestore(col: string, data: any) {
  const ref = doc(db, "admin", 'team');
  const response = await updateDoc(ref, { [data.name]: data });
}

export async function getFromFirestore(col: string, func: Function) {
  const ref = doc(db, 'admin', col);
  const response = await getDoc(ref);
  if (response.exists()) {
    func(response.data());
  }
}

export async function deleteFromFirestore(col: string, fieldName: string) {
  const ref = doc(db, 'admin', col);

  const response = await updateDoc(ref, {
    [fieldName]: deleteField(),
  });
}

export async function uploadImageToFirebase(file: any, func: Function) {
  console.log(file);

  const storageRef = ref(storage, `team/${file.name}`);
  const res = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(res.ref)
  const path = res.ref.fullPath
  func({ url, path })
  console.log(url, path);

}

export async function deleteImageFromFirebase(imagePath: string) {
  const deleteRef = ref(storage, imagePath)
  const response = deleteObject(deleteRef)
}
