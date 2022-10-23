type ReturnElement = {
    <T>(a: T[]) : T
}
const last: ReturnElement = (arr) => arr[arr.length - 1]


type ReturnArray = {
    <T>(a: T[], b: T) : T[]
}
const prepend: ReturnArray = (arr, item) => ([item, ...arr])