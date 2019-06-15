'use strict';

function displayResult(responseJson) {
    if (responseJson.status === "success") {
        $('.js-dogResult').append(
            `<div class="dogResult">
                <p class="dogName">${responseJson.message}</p>
                <img src="${responseJson.message}" class="dogImage">
            </div>`
        );
    } else if (responseJson.message === "Breed not found (master breed does not exist)") {
        $('.js-dogResult').append(
            `<div class="dogResult">
                <h2 class="dogName">Oh no!</h2> 
                <p class="dogName">DogAPI says</p>
                <blockquote>${responseJson.message}</blockquote> 
                <p class="dogName">Please try again!</p> 
                <p class="dogName">Pro tip: searching with a more generic term will more likely yield results (ex: "Terrier" vs "Yorkshire Terrier").</p>
            </div>`
        );
    } else {
        $('.js-dogResult').append(
            `<div class="dogResult">
                <h2 class="dogName">Oh no!</h2> 
                <p class="dogName">Something went wrong. Pleast try again!</p> 
                <p class="dogName"> Pro tip: searching with a more generic term will more likely yield results (ex: "Terrier" vs "Yorkshire Terrier").</p>
            </div>`
        );
    }
    console.log(responseJson);
}

function goGetImage() {
    let dogBreed = "https://dog.ceo/api/breed/"+ $('.js-dogBreed').val()+"/images/random";
    fetch(dogBreed)
        .then (response => response.json())
        .then (responseJson => displayResult(responseJson))
        .catch(error => alert('Doh! Something when wrong! Please try again.'));
}

function dogImageGenerator(){
    $('.js-typeOfBreed').submit(event => {
        event.preventDefault();
        $('.js-dogResult').html(``);
        goGetImage();
    })
}

$(dogImageGenerator);