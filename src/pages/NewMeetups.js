import { react } from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewMeetups() {
    let navigate = useNavigate();

    const addMeetupHandler = (newMeetup) => {
        axios({
            method: "post",
            url: "https://react-getting-started-d011b-default-rtdb.firebaseio.com/meetups.json",
            data: { newMeetup },
        }).then(() => {
            navigate("/");
        });
    };

    return (
        <section>
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetupHandler={addMeetupHandler} />
        </section>
    );
}

export default NewMeetups;
