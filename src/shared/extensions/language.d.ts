type Optional<T> = T | undefined;
type Nullable<T> = T | null;

type ModifyFunction<Value> = (source: Value) => Value;
type ComposedFunction<Value> = (source: Value) => Value;
