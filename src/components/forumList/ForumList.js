import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
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

    const removeBike = (key) => {
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
                key: res.key, brand, model
            }])
        });

        useEffect(() => {
            getAllComments();
        }, []);


        return(
            <>
                <div>
                    <div>
                        <form>
                            <input></input>
                            <input></input>
                            <input></input>
                        </form>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </>
        );

    }


}

export default ForumList;