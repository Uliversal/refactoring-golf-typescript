import {Money, Takehomecalculator} from "./takehomecalculator";

describe('TakeHomeCalculator', () => {
    it("can calculate tax", () => {
        const value: number = new Takehomecalculator(10).netAmount(new Money(40, "GBP"), new Money(50, "GBP"), new Money(60, "GBP")).value;
        expect(Math.trunc(value)).toBe(135)
    })

    it("cannot sum different currencies", () => {
        expect(() => new Takehomecalculator(10).netAmount(new Money(4, "GBP"), new Money(5, "USD"))).toThrow()
    })
})