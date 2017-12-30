new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventTitle2: 'v text output',
            signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
            eventDescription: 'It\'s back! This years summer festival will be in the beautiful countryside featuring our best line up ever!'
        },
        newNameText: '',
        guestName: [],
        formSubmitClass: "",
        appStyles: {
            marginTop: '25px',
        }
    },
    methods: {
        // formSubmitted: function() {
        //     console.log(this.newNameText)
        // } TEST IN LOGO FIRST BY RYAN
        formSubmitted: function() {
            if(this.newNameText.length > 0) {
                this.guestName.push(this.newNameText)
                this.newNameText = '' 
                this.formSubmitClass = "submitted"
            }
        }
    }
});