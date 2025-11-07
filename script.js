alert('welcome to JavaScript!');
let username = prompt('please enter your user name');


document.getElementById('username').textContent = username; 

alert('welcome ' + username + '!')
alert('you are going to play rock paper scissors vs a computer')
alert('if you win, you receive a cake, lose, receive coal!')




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

let fw = document.createElement('img');
fw.src = './assets/firework.jpg';
fw.width = 200;
fw.height = 200;

function rps()
{
    choice = prompt('choose one: rock, paper, or scissors')

    while (choice != 'rock' && choice != 'paper' && choice != 'scissors' && choice != 'felix')
    {
        alert('invalid choice!')
        choice = prompt('choose one: rock, paper, or scissors')
    }

    if(choice == 'felix')
    {
        alert("You win!!!!!!!")
        document.getElementById('rps').innerHTML="";
        document.getElementById('rps').appendChild(fw)
        return 0;
    }

    computer_choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * computer_choices.length);
    computer_choice = computer_choices[randomIndex]

    if (computer_choice == choice)
    {
        alert('draw!\n' +"Your choice: " + choice + "\nComputer's choice: " + computer_choice)
        document.getElementById('rps').innerHTML="";
        document.getElementById('rps').appendChild(coal)
    }
    else if((computer_choice=='rock' && choice=='scissors') || (computer_choice=='paper' && choice=='rock') || (computer_choice=='scissors' && choice=='paper'))
    {
        alert('Loose!\n' +"Your choice: " + choice + "\nComputer's choice: " + computer_choice)
        document.getElementById('rps').innerHTML="";
        document.getElementById('rps').appendChild(thing)
    }
    else
    {
        alert('Win!\n'+"Your choice: " + choice + "\nComputer's choice: " + computer_choice);
        document.getElementById('rps').innerHTML="";
        document.getElementById('rps').appendChild(cake)
    }
}

document.getElementById('play game').addEventListener('click', (e) => {
    rps();
})

document.getElementById('change name').addEventListener('click', (e) => {
    let username = prompt('please enter your user name');
    document.getElementById('username').textContent = username; 
})

const sound = new Audio('./assets/emotional-damage.mp3')
const sound_2 = new Audio('./assets/FBI.mp3')
const sound_3 = new Audio('./assets/huh.mp3')
const sound_4 = new Audio('./assets/bruh.mp3')
const sound_5 = new Audio('./assets/rick_roll.mp3')

document.addEventListener('keydown', (e) => { 

    if (e.key === 'q') 
    sound.play(); 

}) 

document.addEventListener('keydown', (e) => { 

    if (e.key === 'w') 
    sound_2.play(); 

})

document.addEventListener('keydown', (e) => { 

    if (e.key === 'e') 
    sound_3.play(); 

})

document.addEventListener('keydown', (e) => { 

    if (e.key === 'r') 
    sound_4.play(); 

})

document.addEventListener('keydown', (e) => { 

    if (e.key === 't') 
    sound_5.play(); 

})