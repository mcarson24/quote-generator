import Vue from 'vue'
import Quote from 'src/components/Quote'

describe('getQuote', () => {
    it('should have correct functions and data', () => {
        expect(Quote.methods.getAQuote).to.exist
        expect(Quote.data().quote).to.exist
        expect(Quote.data().author).to.exist
    })

    it('should be able to tweet a quote', () => {
        const vm = new Vue(Quote).$mount()

        vm.quote = 'Shut up Wesley!'
        vm.author = 'Jean-Luc Picard'

        assert.equal(vm.tweetLink, 'https://twitter.com/intent/tweet?text=Shut%20up%20Wesley!%20-%20Jean-Luc%20Picard&hashtags=quote')
    })
})