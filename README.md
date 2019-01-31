# Ranges

Range components, intended to replicate the ranges available in Swift.

## Range

Expresses a range like `1..<10` - ie '1 to 10, exclusive'.

```typescript
import { Range } from 'rr-range'
const myRange = Range.fromToLessThan(1, 10)

myRange.containsValue(9.9) // true
myRange.containsValue(1)   // true
myRange.containsValue(10)  // false
myRange.containsValue(0)   // false
```

### Static methods

#### fromToLessThan(lower, upper)

Constructs a new range, with the given lower and upper bounds.

#### emptyNumeric()

Constructs an empty range for use with numbers.

#### emptyDate()

Constructs an empty range for use with dates.

### Instance methods

#### containsValue(value)

Returns true if the value is within the current range.

#### containsRange(otherRange)

Returns true if the other range entirely fits within the current range.

#### overlapsRange(otherRange)

Returns true if the other range overlaps with the current range at all.

#### union(otherRange)

Returns a new range that spans both the current range and the other range.

Throws if the ranges do not overlap.

#### equals(otherRange)

Returns true if the two range objects cover the exact same range.

#### toString()

Returns a representation of the range like `1..<10` 

## ClosedRange

Expresss a range like `1...10` - ie '1 to 10, inclusive'.

```typescript
import { ClosedRange } from 'rr-range'
const myRange = ClosedRange.fromTo(1, 10)

myRange.containsValue(10)   // true
myRange.containsValue(1)    // true
myRange.containsValue(10.1) // false
myRange.containsValue(0)    // false
```

### Static methods

#### fromTo(lower, upper)

Constructs a new range, with the given lower and upper bounds.

### Instance methods

#### containsValue(value)

Returns true if the value is within the current range.

#### containsRange(otherRange)

Returns true if the other range entirely fits within the current range.

#### overlapsRange(otherRange)

Returns true if the other range overlaps with the current range at all.

#### union(otherRange)

Returns a new range that spans both the current range and the other range.

Throws if the ranges do not overlap.

#### equals(otherRange)

Returns true if the two range objects cover the exact same range.

#### toString()

Returns a representation of the range like `1...10`