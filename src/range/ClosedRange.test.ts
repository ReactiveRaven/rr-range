import ClosedRange from './ClosedRange'
import Range from './Range'

// tslint:disable:no-magic-numbers
describe('Range', () => {
    describe('containsRange', () => {
        it('should return true if it wholly encloses the other', () => {

            expect(
                ClosedRange.fromTo(0, 1)
                    .containsRange(ClosedRange.fromTo(0, 1))
            )
                .toEqual(true)
            expect(
                ClosedRange.fromTo(0, 100)
                    .containsRange(ClosedRange.fromTo(10, 20))
            )
                .toEqual(true)
        })

        it('should return false if either end is outside of this range', () => {
            expect(
                ClosedRange.fromTo(0, 100)
                    .containsRange(ClosedRange.fromTo(50, 150))
            )
                .toEqual(false)

            expect(
                ClosedRange.fromTo(0, 100)
                    .containsRange(ClosedRange.fromTo(-50, 50))
            )
                .toEqual(false)
        })
    })

    describe('overlapsRange', () => {
        it('should return true if either end overlaps this range', () => {
            expect(
                ClosedRange.fromTo(0, 100)
                    .overlapsRange(ClosedRange.fromTo(50, 150))
            )
                .toEqual(true)
            expect(
                ClosedRange.fromTo(0, 100)
                    .overlapsRange(ClosedRange.fromTo(-50, 50))
            )
                .toEqual(true)
        })

        it('should return false if neither end overlaps this range', () => {
            expect(
                ClosedRange.fromTo(0, 1)
                    .overlapsRange(ClosedRange.fromTo(2, 3))
            )
                .toEqual(false)
        })

        it('should handle the other range being a half-open properly', () => {
            expect(
                ClosedRange.fromTo(100, 200)
                    .overlapsRange(Range.fromToLessThan(0, 100))
            )
                .toEqual(false)
        })

        it('should handle being entirely enclosed by the other range', () => {
            expect(
                ClosedRange.fromTo(25, 75)
                    .overlapsRange(ClosedRange.fromTo(0, 100))
            )
                .toEqual(true)
        })
    })

    describe('union', () => {
        it('should return a range that encompases both ranges', () => {
            const union = ClosedRange.fromTo(25, 75)
                .union(ClosedRange.fromTo(50, 100))
            expect(union.lower).toEqual(25)
            expect(union.upper).toEqual(100)
        })

        it('should handle being entirely enclosed', () => {
            const union = ClosedRange.fromTo(25, 75)
                .union(ClosedRange.fromTo(0, 100))

            expect(union.lower).toEqual(0)
            expect(union.upper).toEqual(100)
        })

        it('should throw if ranges do not overlap', () => {
            expect(() => {
                ClosedRange.fromTo(0, 25)
                    .union(ClosedRange.fromTo(75, 100))
            }).toThrow()
        })
    })

    describe('equals', () => {
        it('should return true if ranges are equal', () => {
            expect(
                ClosedRange.fromTo(0, 100)
                    .equals(ClosedRange.fromTo(0, 100))
            )
                .toEqual(true)
        })

        it('should return false if ranges are not equal', () => {
            expect(
                ClosedRange.fromTo(0, 100)
                    .equals(ClosedRange.fromTo(100, 200))
            )
                .toEqual(false)
        })
    })
})
// tslint:enable:no-magic-numbers
