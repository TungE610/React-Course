import { useRef } from "react";
import styles from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetupHandler(meetupData);
    };

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor="title">TITLE</label>
                    <input
                        type="text"
                        required
                        id="title"
                        ref={titleInputRef}
                    />
                </div>
                <div className={styles.control}>
                    <label htmlFor="image">IMAGE</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor="address">ADDRESS</label>
                    <input
                        type="text"
                        required
                        id="address"
                        ref={addressInputRef}
                    />
                </div>
                <div className={styles.control}>
                    <label htmlFor="description">DESCRIPTION</label>
                    <textarea
                        rows="5"
                        required
                        id="description"
                        ref={descriptionInputRef}
                    />
                </div>
                <div className={styles.actions}>
                    <button>ADD meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;
