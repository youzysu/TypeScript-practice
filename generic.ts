// type ArrayPrint = {
//     <T, M>(a: T[], b: M): T
// }

// const firstPrint: ArrayPrint = (arr) => arr[0]

const a = firstPrint([1, 2, 3, 4], "string")
const b = firstPrint([true, false, true], 1)
const c = firstPrint([0, 1, true, false], true)
const d = firstPrint([1, 2, false, "hello"], {name: "Jin"})

function firstPrint<V, O>(a: V[], b: O) {
    return a[0]
}