import database from "../firebase";
import {ref, get, remove, push, update} from "firebase/database";

const databaseRef = ref(database, "/forum");

const getAllComments = () => {
    return get(databaseRef);
}

const getComment = (key) => {
    const databaseRefComment = ref(database, `/forum/${key}`);
    return get(databaseRefComment);
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

const updateComment = (key, user, comment) => {
    const updatingComment = ref(database, `/forum/${key}`);

    return update(updatingComment, {
        user: user,
        comment: comment
    });
}

export default {
    getAllComments,
    getComment,
    addComent,
    removeComment,
    updateComment
};