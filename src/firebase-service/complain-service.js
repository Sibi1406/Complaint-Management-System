import {
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { firestoreDb } from "../Components/Firebase/Config";
import { doc, updateDoc } from "firebase/firestore";


export async function createComplain(data) {
  await addDoc(collection(firestoreDb, "complains"), {
    ...data,
    status: "Open",
    createdAt: new Date()
  });
}

export async function listComplain(email) {
  const q = query(
    collection(firestoreDb, "complains"),
    where("createdBy", "==", email)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function listAllComplaints() {
  const snapshot = await getDocs(
    collection(firestoreDb, "complains")
  );

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// ✅ ADMIN: UPDATE COMPLAINT STATUS
export async function updateComplaintStatus(id, status) {
  const ref = doc(firestoreDb, "complains", id);
  await updateDoc(ref, { status });
}

