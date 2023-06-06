/////////////////////Задание 2.1
var  user = {
    name: "Den",
    sayHello(name = this.name, string = 'Добрый день') {
     if ((typeof name != 'string') || (name == '')  ){ return 'Имя пользователя не указано'}
        this.name = name; 
        return this.name + ' ' + string;   
  }
}
console.log('Zd2.1: ' + user.sayHello('Артём', 'привет'));
/////////////////////Задание 2.2
var  product = {
    name: "iPhone",
    id: 7485,
    price: 1000,
    upPrice(factor) {
      this.price = this.price*(factor/100+1);
      return this.price;
  }
}
console.log('Zd2.1: ' + product.upPrice(10));
/////////////////////Задание 2.3
function showStudentsFavoriteLessons(...students) {
  let lessons = ['Математика', 'История', 'Спорт', 'Литература', 'Биология', 'География'];
  function checkStudentFavoriteLessons(studentName) {
    let randomNum = Math.floor(Math.random() * (lessons.length + 1)); 
    let favoriteLessons = lessons.slice(-randomNum); 
    if (favoriteLessons.length > 0) {
      console.log(`${studentName}: ${favoriteLessons.join(', ')}`);
    } else {
      console.log(`${studentName}: У этого студента нет любимых предметов`);
    }
  }
 students.forEach(student => checkStudentFavoriteLessons(student));
}
console.log('Zd2.3:');
showStudentsFavoriteLessons('Артур', 'Женя', 'Костя', 'Миша', 'Денис');



