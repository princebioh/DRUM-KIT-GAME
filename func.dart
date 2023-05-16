void main(List<String> args) {
  var sum = calculator(10, 10, add);
  print(sum);
}

int add(num1, num2) {
  return num1 + num2;
}

int sub(num1, num2) {
  return num1 - num2;
}

int calculator(num1, num2, op) {
  return op(num1, num2);
}
