import { FETCH_NOTIFICATIONS_SUCCESS } from "../action-types";
import { isLoading } from "../action-creator";

export const fetchedNotifications = notifications => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications
});
const notifs = [
    {
        id: "1",
        username: "Sam Kaheil",
        message: "test message",
        image: "images/avatar-5.jpg",
        date: "10:30pm",
        status: "away"
    },
    {
        id: "2",
        username: "Peter Ramsy",
        message: "lorem ipsum dolor sit amit",
        image: "images/avatar-1.jpg",
        date: "6:55am",
        status: "busy"
    },
    {
        id: "3",
        username: "Peter Ramsy",
        message: "lorem ipsum dolor sit amit",
        image: "images/avatar-3.jpg",
        date: "6:15am",
        status: "online"
    },
    {
        id: "4",
        username: "Peter heni",
        message: "lorem ipsum dolor sit amit sdka sdqskjqsd qsdq",
        image: "images/avatar-2.jpg",
        date: "2:45am",
        status: "offline"
    }
];

export function fetchNotifications() {
    return dispatch => {
        dispatch(isLoading(true));
        dispatch(fetchedNotifications(notifs));
        dispatch(isLoading(false));
    };
}
