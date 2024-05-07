    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const signupLink = document.querySelector('.signup-link');
    const btnPopup = document.querySelector('.btn-Login-popup');
    const closeIcon = document.querySelector('.close');


    signupLink.addEventListener('click', ()=> {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', ()=> {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
    });

    closeIcon.addEventListener('click', ()=> {
        wrapper.classList.remove('active-popup');
    });

    
    const nav= document.querySelector(".nav")
    const searchIcon = document.querySelector("#searchIcon")

    searchIcon.addEventListener("click", () => {
        nav.classList.toggle("openSearch")

        if (nav.classList.contains("openSearch")){
            return searchIcon.classList.replace("","")
        }
        searchIcon.classList.replace("","")
    })


    let availableKeywords = [
    'Home',
    'About',
    'Pomodoro Method',
    'Feynman Method',
    'Leitner Method',
    'SQ3R Method',
    'Active Recall Method',
    'All-Night Studying Method',
    'Blurting Method',
    'Multisensory Learning Method',
    'Find YOUR style',
    'Establish goals',
    'Know your time',
    'Teach Someone',
    'Take Notes',
    'Reorganize your Notes',
    'Take breaks',
    'Minimize Distractions	',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = []
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display (result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join ('') + "</ul>"
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

function selectInput(keyword){
    const selectedKeyword = keyword.innerHTML;
    switch(selectedKeyword) {
        case 'Home':
            window.location.href = 'Home.html';
            break;
        case 'About':
            window.location.href = 'About.html';
            break;
        case 'Pomodoro Method':
            window.location.href = 'Method 1.html';
            break;
        case 'Feynman Method':
            window.location.href = 'Method 2.html';
            break;
         case 'Leitner Method':
            window.location.href = 'Method3.html';
            break;
         case 'SQ3R Method':
            window.location.href = 'Method 4.html';
            break;
         case 'Active Recall Method':
            window.location.href = 'Method 5.html';
            break;
         case 'All-Night Studying Method':
            window.location.href = 'Method 6.html';
            break;
         case 'Blurting Method':
            window.location.href = 'Method 7.html';
            break;
         case 'Multisensory Learning Method':
            window.location.href = 'Method 8.html';
            break;
         case 'Find YOUR style':
            window.location.href = 'Tech1.html';
            break;        
         case 'Establish goals':
            window.location.href = 'Tech2.html';
            break;
         case 'Know your time':
            window.location.href = 'Tech3.html';
            break;
         case 'Teach it':
            window.location.href = 'Tech4.html';
            break;
         case 'Take Notes':
            window.location.href = 'Tech5.html';
            break;
         case 'Reorganize your notes':
            window.location.href = 'Tech6.html';
            break;
        case 'Take breaks':
            window.location.href = 'Tech7.html';
            break;
        case 'Minimize Distractions':
            window.location.href = 'Tech8.html';
            break;    
        default:
            break;
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.querySelector(".reviews-container");
    const reviews = document.querySelectorAll(".review");
    const arrowLeft = document.querySelector(".arrow.left");
    const arrowRight = document.querySelector(".arrow.right");
  
    let currentIndex = 0;
    const maxIndex = Math.ceil(reviews.length / 3) - 1;
  
    function updateReviews() {
      const containerWidth = reviewsContainer.offsetWidth;
      const reviewWidth = containerWidth / 3;
  
      reviews.forEach((review, index) => {
        if (index >= currentIndex * 3 && index < (currentIndex + 1) * 3) {
          review.style.display = "block";
          review.style.width = reviewWidth + "px";
        } else {
          review.style.display = "none";
        }
      });
    }
    arrowLeft.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateReviews();
      }
    });
  
    arrowRight.addEventListener("click", function () {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateReviews();
      }
    });
  
    updateReviews();
  });
  