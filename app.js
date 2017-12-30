new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: 'It\'s back! This years summer festival will be in the beautiful countryside featuring our best line up ever!'
        },
        newNameText: '',
        guestName: []
    },
    methods: {
        // formSubmitted: function() {
        //     console.log(this.newNameText)
        // } TEST IN LOGO FIRST BY RYAN
        formSubmitted: function() {
            this.guestName.push(this.newNameText)
            this.newNameText = ''
        }
    }
});