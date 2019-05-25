export const getSingleMeetup = (state, id) => {
    return state.AllMeetups.filter(meetup => meetup.id === id);
};