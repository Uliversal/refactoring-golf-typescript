import {Takehomecalculator} from "./takehomecalculator";
import {money} from "./money";

describe('TakeHomeCalculator', () => {
    it("can calculate tax", () => {
        const value: number = new Takehomecalculator(10).netAmount(money(40, "GBP"), money(50, "GBP"), money(60, "GBP")).value;
        expect(Math.trunc(value)).toBe(135)
    })

    it("cannot sum different currencies", () => {
        expect(() => new Takehomecalculator(10).netAmount(money(4, "GBP"), money(5, "USD"))).toThrow()
    })
})