// const observer = new IntersectionObserver((entries) =>{
//     entries.forEach((entry) => {
//         console.log(entry)
//        if (entry.isIntersecting){
//        entry.target.classList.add('show');
//     }
//        else{
//         entry.target.classList.remove('show');
//        }
//     });

// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

const headr = document.querySelector('.header');
function changeBg(){
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue > 120)
    {
        headr.classList.add('scrolled');
    }
    else{
        headr.classList.remove('scrolled');
    }
}
document.addEventListener('scroll', changeBg);

// const wrapper =document.querySelector(".wrapper"),
// selectBtn =wrapper.querySelector(".select_btn"),
// searchInp = wrapper.querySelector("input"),
// options = wrapper.querySelector(".options");
// let countries =["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
//  function addCountry(selectedCountry){
//     options.innerHTML ="";
// countries.forEach(country => {
//     let isSelected = country == selectedCountry ? "selected" : ""
//     let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
//     options.insertAdjacentHTML("beforeend", li);
// });
//  }
//  addCountry();
//  function updateName(selectedLi)
//  {
//     searchInp.value = "";
//     addCountry(selectedLi.innerText);
//     wrapper.classList.remove("active");
//     console.log(selectedLi);
//     selectBtn.firstElementChild.innerText = selectedLi.innerText;
//  }
//  searchInp.addEventListener("keyup", () => 
//  {
//     let arr = [];
//     let searchVal = searchInp.value;
//     arr = countries.filter(data => {
//         return data.toLowerCase().match(searchVal.toLocaleLowerCase());
//     }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
//     options.innerHTML = arr ? arr :`<p style="color:red"> we tried but couldn't find your country </p>`
//     console.log(arr);
//  });

// selectBtn.addEventListener("click", () =>
// {
//     wrapper.classList.toggle("active");
//     console.log(wrapper);
// } );
