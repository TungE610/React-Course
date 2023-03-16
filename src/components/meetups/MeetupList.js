import react from "react";
import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

function MeetupList(props) {
    return (
        <ul className={styles.list}>
            {props.meetups.map((meetup) => {
                const { id, image, title, address, description } = meetup;
                return (
                    <MeetupItem
                        key={id}
                        image={image}
                        title={title}
                        description={description}
                    />
                );
            })}
        </ul>
    );
}

export default MeetupList;
