function plusToMinus(event){
    const faqs = event.currentTarget.parentElement;
    const plusImage = faqs.querySelector('.plus');
    const answer = faqs.nextElementSibling;

    if(plusImage.src.match('./assets/images/icon-plus.svg')){
        plusImage.src = './assets/images/icon-minus.svg'
        answer.style.display = 'block'
    }
    else{
        plusImage.src = './assets/images/icon-plus.svg'
        answer.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        answer.style.display = "none"; // Hide all answers initially
    });
});
/*function toggleAnswer(event) {
    const faqItem = event.currentTarget.parentElement;
    const plusImage = faqItem.querySelector('.toggle-icon');
    const answer = faqItem.querySelector('.answer');

    // Toggle the answer visibility
    if (plusImage.src.includes('icon-plus.svg')) {
        plusImage.src = './assets/images/icon-minus.svg';
        answer.style.display = 'block';
    } else {
        plusImage.src = './assets/images/icon-plus.svg';
        answer.style.display = 'none';
    }
}*/
