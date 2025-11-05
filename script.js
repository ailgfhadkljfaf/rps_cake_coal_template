alert('welcome to JavaScript!');
let username = prompt('please enter your user name');


document.getElementById('username').textContent = username; 

alert('welcome ' + username + '!')
alert('you are going to play rock paper scissors vs a computer')
alert('if you win, you receive a cake, lose, receive coal!')

choice = prompt('choose one: rock, paper, or scissors')

while (choice != 'rock' && choice != 'paper' && choice != 'scissors')
{
    alert('invalid choice!')
    choice = prompt('choose one: rock, paper, or scissors')
}

computer_choices = ['rock', 'paper', 'scissors']
const randomIndex = Math.floor(Math.random() * computer_choices.length);
computer_choice = computer_choices[randomIndex]


let coal = document.createElement('img');
coal.src = './assets/coal.jpg';
coal.width = 200; 
coal.height = 200;


let cake = document.createElement('img');
cake.src = './assets/cake_image.jpg';
cake.width = 200;
cake.height = 200;


let thing = document.createElement('img');
thing.src = './assets/brown_thing.jpg';
thing.width = 200;
thing.height = 200;

if (computer_choice == choice)
{
    alert('draw!\n' +"Your choice: " + choice + "\nComputer's choice: " + computer_choice)
    document.getElementById('rps').appendChild(coal)
}
else if((computer_choice=='rock' && choice=='scissors') || (computer_choice=='paper' && choice=='rock') || (computer_choice=='scissors' && choice=='paper'))
{
    alert('Loose!\n' +"Your choice: " + choice + "\nComputer's choice: " + computer_choice)
    document.getElementById('rps').appendChild(thing)
}
else
{
    alert('Win!\n'+"Your choice: " + choice + "\nComputer's choice: " + computer_choice);
    document.getElementById('rps').appendChild(cake)
}



