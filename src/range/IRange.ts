import INumericallyComparable from './INumericallyComparable'

export default interface IRange<T extends INumericallyComparable> {
    lower: T
    upper: T

    containsValue(value: T): boolean
}
