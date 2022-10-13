/*variable and function definitions*/
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ["Barbie", "Phil DeStefano", "Chip", "Mildred"];
const insertY = ["the farmers market", "the mall", "Whole Foods", "campus", "Copper Mountain"];
const insertZ = ["face-planted", "quit", "skiied", "drank 14 protein shakes", "made dinner", "spent all their money"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:",xItem);
  newStory = newStory.replaceAll(":inserty:",yItem);
  newStory = newStory.replaceAll(":insertz:",zItem); 

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob",name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+ " stones";
    const temperature =  Math.round((94-32)*(5/9))+ " centigrade";
    newStory = newStory.replaceAll("94 fahrenheit",temperature);
    newStory = newStory.replaceAll("300 pounds",weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
