console.log('js added');

const searchPhone=()=>{
    
    const searchField=document.getElementById('search-phone');
    const searchText=searchField.value;
    console.log(searchText);
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(response=>response.json())
    .then(json=>displaySearchResult(json.data))
    searchField.value='';
}


const displaySearchResult=phones=>{
    const resultContainer=document.getElementById('search-result');
    // resultContainer.innerHTML='';
    phones.forEach(phone=>{
        console.log(phone);
        // if(phone.length<21){
        //     const div=document.createElement('div');
        //     div.classList.add('col');
        //     div.innerHTML=`
        //     <div class="card h-100 p-3">
        //     <img src="${phone.image}" class="card-img-top" alt="...">
        //     <div class="card-body d-flex flex-column align-items-start">
        //       <h5 class="card-title text-info">Phone Name: ${phone.phone_name}</h5>
        //       <p class="card-text fw-bolder text-info">Brand: ${phone.brand}</p>
        //       <button onclick="loadPhoneById('${phone.slug}')" type="button" class="btn btn-primary">Details</button>
        //     </div>
        //   </div>
    
        //     `;
        //     resultContainer.appendChild(div);
        // }
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card h-100 p-3 d-flex flex-column align-items-center">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column align-items-start">
          <h5 class="card-title text-info">Phone Name: ${phone.phone_name}</h5>
          <p class="card-text fw-bolder text-info">Brand: ${phone.brand}</p>
          <div class="text-center">
          <button onclick="loadPhoneById('${phone.slug}')" type="button" class="btn btn-primary ">Details</button></div>
        </div>
      </div>

        `;
        resultContainer.appendChild(div);
    })
}

const loadPhoneById=phoneId=>{
    console.log(phoneId);
    const url=` https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(response=>response.json())
    .then(json=>displayPhoneById(json.data))
}

const displayPhoneById=phone=>{
    console.log(phone);
    const phoneDetails=document.getElementById('phone-details');
    const div=document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`
    <div class="card h-100 p-3">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body d-flex flex-column align-items-start">
      <h5 class="card-title text-info">Phone Name: ${phone.phone_name}</h5>
      <p class="card-text fw-bolder text-info">Brand: ${phone.brand}</p>
    </div>
  </div>
    
  
    `;
    phoneDetails.appendChild(div);
}