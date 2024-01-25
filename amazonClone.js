

const HandleSignIn = () => { 

    var inpEmail =document.getElementById('inpEmail').value
    var inpPwd = document.getElementById('inpPwd').value

    var noemail= document.getElementById('noEmail')
    var wrongemail= document.getElementById('wrongEmail')
    var nopwd= document.getElementById('noPwd')
    var wrongpwd= document.getElementById('wrongPwd')

    // console.log(inpEmail);
    // console.log(inpPwd);

    if (inpEmail && inpPwd) {  //inpEmail !==null,'',undefined
        if (inpEmail==='vivek@something.com' && inpPwd==='12345') {
        document.location ='./amazonclone.html'
         } else {
        if (inpEmail !='vivek@something.com') {
            wrongemail.style.display= "block"
        }
        if (inpPwd != '12345') {
            wrongpwd.style.display= "block"
        }
        }
            
        }else{
            if (!inpEmail) {
                noemail.style.display="block"
            }
            if (!inpPwd) {
                nopwd.style.display="block"
                
            }
    }
}

const handleEnterEmail = () => {
    var noemail= document.getElementById('noEmail')
    var wrongemail= document.getElementById('wrongEmail')

    noemail.style.display="none"
    wrongemail.style.display= "none"

}

const handleEnterPwd  = () => {
    var nopwd= document.getElementById('noPwd')
    var wrongpwd= document.getElementById('wrongPwd')

    nopwd.style.display="none"
    wrongpwd.style.display= "none"
    
}

const handleOpenSidebar = () => {
    var sidebar = document.getElementById('sidebar')
    sidebar.style.display = "block"
}

const handleCloseSidebar = () => {
    var sidebar = document.getElementById('sidebar')
    sidebar.style.display = "none"
}

// const something =() => {                                      //used for opening and closing sidebar with only one function
//     var sidebar = document.getElementById('sidebar')
//     if (sidebar.style.display === 'block') {
//         sidebar.style.display = 'none'
//     } else {
//         sidebar.style.display = 'block'
//     }
// }


// fetch("")  //we can use fetch method to fetch data about products from db but it is very lengthy and time consuming


// fetch("https://dummyjson.com/products")
// .then(res => res.json())
// .then(data => {
//     //console.log(data); 

  
// })
// .catch(err => {
//     console.log(err);
// })


$.ajax({

    url:'https://dummyjson.com/products',
    type:'get',
    dataType: 'json',
    success: function (data){
      //  const mainDiv = document.getElementById('products')
    
        // console.log(mainDiv);
    
        for(let i = 0; i < data.products.length; i++) {
    
            // const mainDiv = document.createElement('div')                              //this code will take time and is very lengthy
            // mainDiv.setAttribute('class', 'oneProduct')
    
            // const categoryTag = document.createElement('p')
            // const categoryContent = document.createTextNode(data.prodeucts[i].category)
            // categoryTag.appendChild(categoryContent)
            // categoryTag.setAttribute('class', 'category')
    
            // const oneProduct = 
    
            // console.log(oneProduct);
    
            // const products = document.getElementById('products')
            // products.append(oneProduct)
    
            // console.log(products);
    
            const oneProduct = ` 
            
                    <div class="oneProduct">
    
                    <!-- category -->
                    <p>${data.products[i].category}</p>
                
                    <!-- image -->
                    <img src="${data.products[i].images[0]}" alt="">
                
                    
                    <div class="ratingAndprice">
                        <!-- price -->
                        <h1>&#x20B9; ${data.products[i].price}0</h1>
                
                        <!-- rating -->
                        <h3>${data.products[i].rating}</h3>
                    </div>
                
                    <!-- product name -->
                    <h2>${data.products[i].title}</h2>
                
                    <!-- product description -->
                    <h4>${data.products[i].description}</h4>
                
                    <!-- button -->
                    <button>Add to Cart</button>
    
                </div>
            `
            
            $('#products').append(oneProduct)
    
             
                 //  mainDiv.append(oneProduct)
        }
    },
    error: function (error) {
        console.log(error);
    },

    always: function(){

    }



})