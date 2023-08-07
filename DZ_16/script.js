console.log('task-1')
class Product {
    constructor(productId, productName, productPrice, productQuantity, productBrand, productDiscount, productSeller) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productBrand = productBrand;
        this.productDiscount = productDiscount;
        this.productSeller = productSeller;
    }

    changePrice(newPrice) {
        if (newPrice < 0) {
            return "Price can't be negative";
        } else {
            this.productPrice = newPrice;
            return "Price has been changed";
        }
    }

    get productDiscountPrice() {
        return this.productPrice - this.productDiscount;
    }

    set productDiscountPrice(newPrice) {
        this.productPrice = newPrice + this.productDiscount;
    }

    static addNewMethod(methodName, methodFunction) {
        Product.prototype[methodName] = methodFunction;
    }
}


/////////////////////-Запуск
const product = new Product(1, 'Desktop', 1000, 5, 'Brend', 100, 'SellerA');

console.log(product.productName);
console.log(product.productPrice);
console.log(product.productDiscount);
console.log(product.productDiscountPrice);

product.changePrice(1200);
console.log(product.productPrice);
console.log(product.productDiscountPrice);

product.productDiscountPrice = 800;
console.log(product.productPrice);


Product.addNewMethod('multiplyQuantity', function (factor) {
    this.productQuantity *= factor;
});

product.multiplyQuantity(2);
console.log(product.productQuantity);
console.log("______________________________________________________END");
//////////////////////////////----------2--------------////////////////////////////////////////////
console.log('task-2')
class User {
    constructor(name, surname, email, password, birthday) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
    }

    changePassword(newPassword) {
        if (newPassword.length < 8) {
            return 'New password is too short';
        }

        if (!/[A-Z]/.test(newPassword)) {
            return "New password hasn't any uppercase letters";
        }

        this.password = newPassword;
        return 'Your password has been changed';
    }

    changeEmail(newEmail) {
        if (!newEmail.includes('@')) {
            return 'New email is wrong';
        }

        this.email = newEmail;
        return 'Your email has been changed';
    }

    calculateAge() {
        if (!this.birthday) {
            return "This user hasn't any information about birthday";
        }

        const birthdayDate = new Date(this.birthday);
        const today = new Date();
        const age = today.getFullYear() - birthdayDate.getFullYear();
        if (
            today.getMonth() < birthdayDate.getMonth() ||
            (today.getMonth() === birthdayDate.getMonth() && today.getDate() < birthdayDate.getDate())
        ) {
            return age - 1;
        }
        return age;
    }
}
/////////////////////-Запуск
const user = new User('John', 'Doe', 'blaBla@example.com', 'securepassword', '1990-05-15');
console.log(user.calculateAge());

console.log(user.changePassword('newpass123'));
console.log(user.password);

console.log(user.changeEmail('johndoe@example.com'));
console.log(user.email);
console.log("______________________________________________________END");

//////////////////////////////----------3--------------////////////////////////////////////////////
console.log('task-3')
class Customer extends User {
    constructor(name, surname, email, password, birthday, cardNumber) {
        super(name, surname, email, password, birthday);
        this.cardNumber = cardNumber;
        this.wishList = [];
        this.cart = [];
    }

    addProductToWishList(product) {
        if (!(product instanceof Product)) {
            return 'This is not a product';
        }

        this.wishList.push(product);
        return 'This product has been added to the wish list';
    }

    addProductToCart(product) {
        if (!(product instanceof Product)) {
            return 'This is not a product';
        }

        this.cart.push(product);
        return 'This product has been added to your cart';
    }
}

/////////////////////-Запуск
const user1 = new Customer('John', 'Doe', 'blaBla@example.com', 'securepassword', '1990-05-15', '1234567890123456');

const product1 = new Product(1, 'Laptop', 1000, 5, 'BrandX', 0.1, 'SellerA');
const product2 = new Product(2, 'Phone', 500, 10, 'BrandY', 0.05, 'SellerB');

console.log(user1.addProductToWishList(product1));
console.log(user1.wishList);

console.log(user1.addProductToCart(product2));
console.log(user1.cart);
console.log("______________________________________________________END");


////////////////////////////////////---4-----//////////////////////////////////////////////////////
console.log('task-4')
class Seller extends User {
    constructor(name, surname, email, password, birthday, shopName, phoneNumber, workingHours) {
        super(name, surname, email, password, birthday);
        this.shopName = shopName;
        this.phoneNumber = phoneNumber;
        this.workingHours = workingHours;
        this.productList = [];
    }

    addProductToProductList(productId, productName, productPrice, productQuantity, productBrand, productDiscount) {
        const newProduct = new Product(productId, productName, productPrice, productQuantity, productBrand, productDiscount, this.shopName);
        this.productList.push(newProduct);
    }

    removeProductFromProductList(productId) {
        const index = this.productList.findIndex(product => product.productId === productId);
        if (index === -1) {
            return 'There is no such product in the product list';
        }

        this.productList.splice(index, 1);
        return 'Product has been removed';
    }

    changeWorkingHours(newWorkingHours) {
        if (newWorkingHours.trim() === '') {
            return "New value can't be an empty string";
        }

        this.workingHours = newWorkingHours;
        return 'New working hours have been successfully set';
    }
}

/////////////////////-Запуск
const seller = new Seller('Jane', 'Doe', 'blaBla.com', 'securepassword', '1985-10-20', 'Awesome Shop', '123-456-7890', '9 AM - 6 PM');

seller.addProductToProductList(1, 'Laptop', 1000, 5, 'BrandX', 0.1);
seller.addProductToProductList(2, 'Phone', 500, 10, 'BrandY', 0.05);

console.log(seller.productList);


console.log(seller.removeProductFromProductList(1));
console.log(seller.productList);

console.log(seller.changeWorkingHours('8 AM - 5 PM'));
console.log(seller.workingHours); 