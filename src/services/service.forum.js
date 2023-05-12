import database from "../firebase";
import {ref, get, remove, push} from "firebase/database";

const databaseRef = ref(database, "/forum");

const getAllComments = () => {
    return get(databaseRef);
}

const addComent = (user, comment) => {
    return push(databaseRef, {
        user: user,
        comment: comment
    });
};

const removeComment = (key) => {
    const databaseRefComment = ref(database, `/forum/${key}`);
    return remove(databaseRefComment);
};

export default {
    getAllComments,
    addComent,
    removeComment
};