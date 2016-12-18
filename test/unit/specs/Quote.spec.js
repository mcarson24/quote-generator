import Vue from 'vue'
import Quote from 'src/components/Quote'

describe('getQuote', () => {
    it('should have correct functions and data', () => {
        expect(Quote.methods.getAQuote).to.exist
        expect(Quote.data().quote).to.exist
        expect(Quote.data().author).to.exist
    })

    it('should update the quote and author parameters', () => {
        Quote.methods.getAQuote()

        Vue.nextTick(() => {
            expect(data.quote).to.not.be.empty
            expect(data.author).to.not.be.empty
        })
    })
})