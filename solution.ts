type FormatValueType = string | number | boolean;
const formatValue = (value: FormatValueType) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    if (value) {
      return false;
    } else {
      return true;
    }
  }
};

type GetLengthFunc = (param: string | any[]) => number;

const getLength: GetLengthFunc = (param) => {
  return param.length;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    const details = `Name: ${this.name}, Age: ${this.age}`;
    return details;
  }
}

interface ItemType {
  title: string;
  rating: number;
}

const filterByRating = (items: ItemType[]): ItemType[] => {
  const filteredItems = items.filter((item: ItemType) => item.rating >= 4);
  return filteredItems;
};

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user: User) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const { title, author, publishedYear, isAvailable } = book;
  const bookDetails = `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? "Yes" : "NO"}`;
  console.log(bookDetails);
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  let totalPrice = 0;

  for (const product of products) {
    const productDiscount = product.discount ?? 0;

    const productTotal = product.price * product.quantity;
    const dicountAmount = productTotal * productDiscount / 100
    const priceAfterDiscount = productTotal - dicountAmount;
    totalPrice += priceAfterDiscount;
  }
  return totalPrice;
};

type Value = (string | number)[];
const getUniqueValues = (arry1 : Value, arry2 : Value) : Value => {
    let result : Value = [];   

    const addUnique = (value : string | number) : void => {
        let isExist = false;

        for(const item of result){
            if(item === value){
                isExist = true;
                break
            }
        }
         if (!isExist) {
           result[result.length] = value;
         }
    }


    for(const element of arry1) {
        addUnique(element)
    }

    for(const element of arry2){
        addUnique(element)
    }

    return result
}


