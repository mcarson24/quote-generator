<template>
    <div id="card" v-bind:style="{ 'background-color': color }" v-show="quote">
        <div id="quote">
            <p class="quote">"{{ quote }}"</p>
            <p class="author">- {{ author }}</p>
        </div>
        <div class="buttons">
            <button @click="getAQuote" class="fetch" v-bind:style="{ color: color }">{{ buttonText }}</button>
            <div>
                <a :href="tweetLink">
                    <i class="fa fa-twitter-square twitter" aria-hidden="true"></i>
                </a>
            </div>
        </div>  
    </div>
</template>

<script scoped>
    export default {
        data() {
            return {
                quote: '',
                author: '',
                color: '',
                buttonText: 'Get A Quote'
            }
        },
        methods: {
            getAQuote() {
                let api = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
                setTimeout(() => {
                    this.$http.get(api).then(response => {
                        this.buttonText = 'Fetching...';
                        let quoteInfo = response.body;

                        if (quoteInfo == null) {
                            this.getAQuote();
                        }

                        this.quote = quoteInfo.quoteText.trim();
                        this.author = quoteInfo.quoteAuthor;

                        if (quoteInfo.quoteText == null) {
                            this.getAQuote();
                        }

                        if (quoteInfo.quoteAuthor === '') {
                            this.author = 'Unknown';
                        }
                        this.color = this.randomColor();
                        this.buttonText = 'Get A Quote';
                    }, response => {
                        this.getAQuote();
                    });
                }, 1000);
            },
            randomColor() {
                let characters = "1 2 3 4 5 6 7 8 9 0 A B C D E".split(' ');
                let color = ['#'];
                for (let i = 0; i < 6; i++) {
                    let randomNumber = Math.floor((Math.random() * 15))
                    color.push(characters[randomNumber]);
                }
                return color.join('');
            }
        },
        computed: {
            tweetLink() {
                let encodedQuote = `${this.quote} - ${this.author}` 
                return `https://twitter.com/intent/tweet?text=${encodedQuote.replace(/\s/g, '%20')}&hashtags=quote`
            }
        },
        created() {
            this.getAQuote();
            this.color = this.randomColor();
        }
    }
</script>

<style lang="scss">
    #card {
        width: 50%;
        height: 150px;
        margin: 0 auto;
        border-radius: 5px;
        padding: 35px;
        font-weight: bold;
        display: table;
        p {
            color: white;
            font-size: 1.2em;
            &.author {
                text-align: right;
            }
            &.quote {
                text-align: left;
            }
        }
    }

    .buttons {
        display: block;
    }

    button {
        &.fetch {
            background-color: #FFF;
            display: inline-block;
            font-size: 1.1em;
            font-weight: bold;  
            border-radius: 5px;
            float: right;
            padding: 15px;
            cursor: pointer;
        }
        border: none;
    }
    
    i {
        &.twitter {
            float: left;
            font-size: 60px;
            color: white;
        }
    }
</style>