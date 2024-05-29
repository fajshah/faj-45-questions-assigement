//q14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guests: string[]= ["Sir Zia", "Sir Faisal","Sir Asharib"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


//q15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let unableToAttend = "Sir Zia";
console.log(`${unableToAttend} can't make it to dinner.`);

//Replace the guest
let newGuest = "Sir Ameen";
guests[guests.indexOf(unableToAttend)] = newGuest;

//New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});