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
        appStyles: {
            marginTop: '25px',
        },
        eventCapacity: 25,
        eventCapacityPercentage: 0
    },
    methods: {
        // formSubmitted: function() {
        //     console.log(this.newNameText)
        // } TEST IN LOGO FIRST BY RYAN
        formSubmitted: function() {
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText)
                this.newNameText = '' 
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)
            }
        },
        keyPressed: function() {
            console.log('key pressed')
        }
    },
    computed: {
        sortNames: function() {
            return this.guestName.sort()
        }
    },
    watch: {
        guestName: function(data) {
            console.log('Watch Triggered')
        }
    },
    filters: {
        formatName: function(value) {
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
        }
    }
});