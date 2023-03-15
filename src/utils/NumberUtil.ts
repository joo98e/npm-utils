import _ from "lodash"

export default class NumberUtil {
    static reduce(nums: number[]) {
        return _.reduce(nums, (accum, next) => {
            return accum + next
        })
    }
}