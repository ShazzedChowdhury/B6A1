What are some differences between interfaces and types in TypeScript?
Answer: interfaces and type both are used for define the type of data. 
interface mainly used for descride object, can be extends using extends and commonly used for object structures. Type can describe array, primitives, union etc, can creates combination using & and more flexible.

Provide an example of using union and intersection types in TypeScript.
Union:
type User = "admin" | "editor"

Intersection:
type UserInfo = {
    name: string;
    age: number;
    gender: "Male" | "Female"
}

type extraInfo = {
    address: string;
    nationality: string
}

type newUserInfo = UserInfo & extraInfo;