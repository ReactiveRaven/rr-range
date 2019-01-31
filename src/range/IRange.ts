import INumericallyComparable from './INumericallyComparable'

export default interface IRange<T extends INumericallyComparable> {
    lower: T
    upper: T
}
