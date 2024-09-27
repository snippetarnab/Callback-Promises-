function greet(name) {
  return new Promise((resolve) => {
    const greeting = "Hello, ${name}!";
    resolve(greeting);
  });
}
greet("Jack").then((message) => console.log(message));