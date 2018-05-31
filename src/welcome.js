import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};
