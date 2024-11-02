window.addEventListener('scroll',onscroll,false);


//Get all the section reference
var sectionOne = document.querySelector('#item-1');
var sectionTwo = document.querySelector('#item-2');
var sectionThree = document.querySelector('#item-3');
var sectionFourth = document.querySelector('#item-4');
var sectionFifth = document.querySelector('#item-5');


//Calculate their individual height
var SectionOneHeight = getComputedStyle(sectionOne).height.split('px')[0];
var SectionTwoHeight = getComputedStyle(sectionTwo).height.split('px')[0];
var SectionThreeHeight = getComputedStyle(sectionThree).height.split('px')[0];
var SectionFourthHeight = getComputedStyle(sectionFourth).height.split('px')[0];
var SectionFifthHeight = getComputedStyle(sectionFifth).height.split('px')[0];


//calculate the checkpoint where item need to be modified
var checkPointOne = parseFloat(SectionOneHeight);
var checkPointTwo = checkPointOne + parseFloat(SectionTwoHeight);
var checkPointThree = checkPointTwo + parseFloat(SectionThreeHeight);
var checkPointFourth = checkPointThree + parseFloat(SectionFourthHeight);


//Scroll logic
function onScroll(){
    //get the current scrollbar position
    var scrollBarPosition = window.scrollY | document.body.scrollTop
    if(scrollBarPosition>= 0 && scrollBarPosition< checkPointOne){
      removeClass(sectionTwo,sectionThree)
    }else if(scrollBarPosition> checkPointOne && scrollBarPosition<=checkPointTwo ){
      addClass(sectionTwo,sectionThree,checkPointTwo)
      removeClass(sectionThree,sectionFourth)
    }else if(scrollBarPosition> checkPointTwo && scrollBarPosition<=checkPointThree ){
      addClass(sectionThree,sectionFourth,checkPointThree)
      removeClass(sectionFourth,sectionFifth)
    }else if(scrollBarPosition> checkPointThree && scrollBarPosition<=checkPointFourth ){
      addClass(sectionFourth,sectionFifth,checkPointFourth)
    }
}

function addClass(elemOne,elemTwo,margin){
    elemOne.classList.add('fixed');
    elemTwo.style.marginTop = (margin) + 'px';
  }
  function removeClass(elemOne,elemTwo){
    elemOne.classList.remove('fixed');
    elemTwo.style.marginTop = '0px';
  }