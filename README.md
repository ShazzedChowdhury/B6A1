## 1. What are some differences between interfaces and types in TypeScript?

Interfaces and types are both used to define the type or structure of data in TypeScript.

* **Interface** is mainly used to describe object structures.
* An interface can be extended using the `extends` keyword.
* **Type** is more flexible and can describe objects, arrays, primitives, unions, and more.
* Type can create combinations using the intersection (`&`) operator.

### Example of Interface

```ts
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}
```

---

## 2. Provide an example of using union and intersection types in TypeScript.

### Union Type

A union type allows a value to be **one of several possible types or values**.

```ts
type UserRole = "admin" | "editor";
```

Here, `UserRole` can only be `"admin"` or `"editor"`.

### Intersection Type

An intersection type combines multiple types into **one type**.

```ts
type UserInfo = {
  name: string;
  age: number;
  gender: "Male" | "Female";
};

type ExtraInfo = {
  address: string;
  nationality: string;
};

type NewUserInfo = UserInfo & ExtraInfo;
```

Here, `NewUserInfo` contains all the properties from both `UserInfo` and `ExtraInfo`.

### Example

```ts
const user: NewUserInfo = {
  name: "Rakib",
  age: 25,
  gender: "Male",
  address: "Dhaka",
  nationality: "Bangladeshi",
};
```
