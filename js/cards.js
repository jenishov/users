let catalogRow = document.querySelector('.row');
 let search = document.querySelector('.header__search')



    const getAllCards =()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) =>{
                data.forEach((item)=>{
                    catalogRow.innerHTML +=`

            <div class="row__card">
            
                <img class="row__img" src="../img/user.png" alt="">
                <div class="row__desc">
                <h2 class="row__title">${item.name}</h2>
                <p class="row__email">${item.email}</p>
                <p class="row__phone">tel +${item.phone}</p>
                </div>
                
            </div>
            
            `


                })
            })

    }



    getAllCards()













