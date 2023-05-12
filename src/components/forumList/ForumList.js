import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons"
import serviceForum from "../../services/service.forum";

function ForumList() {
    const [comments, setComment] = useState([]);
    const refForum = useRef();

    const getAllComments = () => {
        serviceForum.getAllComments().then((items) => {
            let allComments = [];
            items.forEach(item => {
                const key = item.key;
                const data = item.val();
                allComments.push({
                    key: key,
                    user: data.user,
                    comment: data.comment
                });
            });
            setComment([...allComments]);
        })
            .catch((err) => {
                console.error(err);
            });
    }

    const removeComment = (key) => {
        serviceForum.removeComment(key).then((res) => {
            getAllComments();
        });
    }

    const addComment = (e) => {
        e.preventDefault();
        const user = e.target.user.value;
        const comment = e.target.comment.value;
        serviceForum.addComent(user, comment).then((res) => {
            refForum.current.reset();
            setComment(oldValues => [...oldValues, {
                key: res.key, user, comment
            }])
        });
    }

    const updateComment = (e) => {
        e.preventDefault();
        const key = e.target.key.value;
        const user = e.target.user.value;
        const comment = e.target.comment.value;

        serviceForum.updateComment(key, user, comment).then(() => getAllComments());
    }

    const specificCommentUpdate = (key) => {
        const form = document.getElementById("update-form");
        serviceForum.getComment(key).then((data) => {
            form.key.value = data.key
            form.user.value = data.val().user;
            form.comment.value = data.val().comment;

        })
    }

    useEffect(() => {
        getAllComments();
    }, []);

    return (
        <>
            <div className="forum-list-main-container">
                <div className="forum-form-container">
                    <form id="forum-form" onSubmit={addComment} ref={refForum}>
                        <input className="rounded-input" type="text" name="user" placeholder="Nombre de usuario"></input>
                        <input className="rounded-input" type="text" name="comment" placeholder="Comentario"></input>
                        <input className="rounded-imput" type="submit" value="Add Comment"></input>
                    </form>
                    <form id="update-form" onSubmit={updateComment} ref={refForum}>
                        <input className="rounded-input" type="text" name="user" placeholder="Nombre de usuario"></input>
                        <input className="rounded-input" type="text" name="comment" placeholder="Comentario"></input>
                        <input className="rounded-imput" type="submit" value="Update Comment"></input>
                        <input hidden name="key" id="key"></input>
                    </form>
                </div>

                <div className="forum-list">
                    {comments.map(c =>
                        <div className="comment-item" key={c.key}>
                            <p>{c.user} {c.comment}</p>
                            <FontAwesomeIcon icon={faTrash} className="delete-comment" onClick={() => removeComment(c.key)} />
                            <FontAwesomeIcon icon={faUpload} className="update-comment" onClick={() => specificCommentUpdate(c.key)} />
                        </div>)}
                </div>
            </div>
        </>
    );
}

export default ForumList;