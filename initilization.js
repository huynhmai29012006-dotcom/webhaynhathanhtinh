
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
                id: 1,
                status: 1,
                title: 'Mì kimchi thập cẩm',
                img: './images/products/mi-kim-chi-thap-cam.png',
                category: 'Mì kimchi',
                price: 200000,
                desc: 'Món mì truyền thống Hàn Quốc đầy màu sắc, kết hợp giữa kim chi cải thảo chua cay, tôm tươi, thịt bò, nấm và trứng. Nước dùng đậm đà, nóng hổi.',
            },
            {
                id: 2,
                status: 1,
                title: 'Mì kimchi cá hồi',
                img: './images/products/kim-chi-ca-hoi.png',
                category: 'Mì kimchi',
                price: 50000,
                desc: 'Mì kimchi đặc biệt với lát cá hồi Nauy tươi béo, kết hợp cùng nước dùng cay nhẹ và kim chi giòn, mang lại hương vị vừa truyền thống vừa hiện đại.',
            },
            {
                id: 3,
                status: 1,
                title: 'Mì kimchi bạch tuộc',
                img: './images/products/kim-chi-bach-tuot.png',
                category: 'Mì kimchi',
                price: 50000,
                desc: 'Bạch tuộc tươi giòn, được chế biến ngay, mang lại vị ngọt tự nhiên kết hợp với nước dùng kimchi chua cay đặc trưng, là lựa chọn hoàn hảo cho tín đồ hải sản.',
            },
            {
                id: 4,
                status: 1,
                title: 'Mì kimchi bò cuộn nấm trứng ',
                img: './images/products/mi-kim-chi-bo-cuon-nam-trung.png',
                category: 'Mì kimchi',
                price: 50000,
                desc: 'Thịt bò Mỹ được cuộn cùng nấm kim châm tươi, nhúng trong nước dùng kimchi trứng béo ngậy. Món ăn vừa bổ dưỡng vừa kích thích vị giác.',
            },
            {
                id: 5,
                status: 1,
                title: 'Mì kimchi bò cuộn nấm',
                img: './images/products/mi-kim-chi-bo-cuon-nam.png',
                category: 'Mì kimchi',
                price: 50000,
                desc: 'Sự kết hợp hoàn hảo giữa thịt bò cuộn nấm tươi và nước dùng kimchi truyền thống. Cay nhẹ, thơm nồng, thích hợp cho bữa ăn nhanh gọn.',
            },
            {
                id: 6,
                status: 1,
                title: 'Mì kimchi sườn sụn',
                img: './images/products/mi-kim-chi-suon-sun.png',
                category: 'Mì kimchi',
                price: 50000,
                desc: 'Sườn sụn heo được ninh mềm, giòn sần sật, kết hợp với vị chua cay của kimchi, tạo nên tô mì ấm nóng và đầy đặn.',
            },
            {
                id: 7,
                status: 1,
                title: 'Mì lẩu thái bò cuộn nấm',
                img: './images/products/mi-lau-thai-bo-cuon-nam-Photoroom.png',
                category: 'Mì lẩu thái',
                price: 50000,
                desc: 'Mì lẩu Thái Tomyum chua cay, đậm đà kết hợp với bò cuộn nấm kim châm. Hương vị sả, riềng, lá chanh đặc trưng của Thái Lan.',
            },
            {
                id: 8,
                status: 1,
                title: 'Mì lẩu thái cá',
                img: './images/products/mi-lau-thai-ca-Photoroom.png',
                category: 'Mì lẩu thái',
                price: 50000,
                desc: 'Thịt cá tươi, chiên giòn, nhúng vào nước dùng lẩu Thái chua cay. Món ăn thanh nhẹ, ít béo và rất ngon miệng.',
            },
            {
                id: 9,
                status: 1,
                title: 'Mì lẩu thái đùi gà',
                img: './images/products/Mi-lau-thai-dui-ga-Photoroom.png',
                category: 'Mì lẩu thái',
                price: 50000,
                desc: 'Đùi gà được hầm mềm, nước dùng lẩu Thái Tomyum chua cay kích thích vị giác. Món ăn no bụng và giàu dinh dưỡng.',
            },
            {
                id: 10,
                status: 1,
                title: 'Mì lẩu thái sườn sụn',
                img: './images/products/mi-lau-thai-suon-sun-Photoroom.png',
                category: 'Mì lẩu thái',
                price: 50000,
                desc: 'Sườn sụn giòn sần sật trong nước dùng lẩu Thái cay nồng. Cảm giác béo ngậy của nước cốt dừa và vị cay của ớt.',
            },
            {
                id: 11,
                status: 1,
                title: 'Mì lẩu thái thập cẩm',
                img: './images/products/mi-lau-thai-thap-cam-Photoroom.png',
                category: 'Mì lẩu thái',
                price: 50000,
                desc: 'Tô mì đầy đủ tôm, thịt, nấm, trứng và rau củ trong nước dùng Tomyum chuẩn vị. Lựa chọn tuyệt vời cho người thích ăn đa dạng.',
            },
            {
                id: 12,
                status: 1,
                title: 'Mì trộn bò',
                img: './images/products/mi-tron-bo-Photoroom.png',
                category: 'Trộn',
                price: 50000,
                desc: 'Mì trứng dai ngon được trộn đều với sốt đặc biệt, thịt bò xào mềm, rau thơm, đậu phộng và hành phi giòn tan.',
            },
            {
                id: 13,
                status: 1,
                title: 'Mì trộn hải sản',
                img: './images/products/mi-tron-hai-san-Photoroom.png',
                category: 'Trộn',
                price: 50000,
                desc: 'Mì trộn thanh mát với tôm, mực tươi, được trộn cùng nước sốt chua ngọt, rau củ và mè rang thơm lừng.',
            },
            {
                id: 14,
                status: 1,
                title: 'Mì trộn thập cảm',
                img: './images/products/mi-tron-thap-cam-Photoroom.png',
                category: 'Trộn',
                price: 50000,
                desc: 'Mì trộn đầy đủ các loại topping: thịt, hải sản, trứng cút, và rau xanh. Sốt trộn đậm đà, không gây ngán.',
            },
            {
                id: 15,
                status: 1,
                title: 'Cơm trộn Truyền Thống ',
                img: './images/products/TRUYEN-THONG-Photoroom.png',
                category: 'Trộn',
                price: 50000,
                desc: 'Bibimbap chuẩn vị Hàn Quốc với cơm, rau củ theo mùa, thịt, trứng lòng đào, trộn cùng sốt Gochujang cay ngọt truyền thống.',
            },
            {
                id: 16,
                status: 1,
                title: 'Cơm trộn bò',
                img: './images/products/COM-TRON-BO-Photoroom.png',
                category: 'Trộn',
                price: 50000,
                desc: 'Cơm trộn với thịt bò xào tẩm ướp đậm đà, kết hợp cùng các loại rau củ tươi và sốt trộn đặc trưng, món ăn giàu protein.',
            },
            {
                id: 17,
                status: 1,
                title: 'Kimbap Chiên',
                img: './images/products/Banh-Kimbap-chien.png',
                category: 'Snack',
                price: 50000,
                desc: 'Kimbap được áo qua lớp trứng mỏng và chiên vàng giòn bên ngoài, nhân bên trong vẫn tươi ngon. Món ăn vặt độc đáo.',
            },
            {
                id: 18,
                status: 1,
                title: 'Kimbap',
                img: './images/products/Banh-Kimbap.png',
                category: 'Snack',
                price: 50000,
                desc: 'Cơm cuộn lá rong biển truyền thống với nhân thanh cua, trứng, dưa chuột và củ cải vàng. Món ăn kèm lý tưởng.',
            },
            {
                id: 19,
                status: 1,
                title: 'Đùi gà chiên',
                img: './images/products/Dui-ga-chien-Seoul.png',
                category: 'Snack',
                price: 50000,
                desc: 'Đùi gà được tẩm bột chiên giòn theo phong cách Seoul, lớp da giòn rụm, thịt bên trong mềm ngọt, chấm kèm tương ớt Hàn Quốc.',
            },
            {
                id: 20,
                status: 1,
                title: 'Gà cay phô mai',
                img: './images/products/Ga-cay-pho-mai.png',
                category: 'Snack',
                price: 50000,
                desc: 'Thịt gà xào cay nóng, được phủ lớp phô mai Mozzarella béo ngậy, kéo sợi. Món ăn này là sự kết hợp tuyệt vời giữa vị cay và béo.',
            },
            {
                id: 21,
                status: 1,
                title: 'Gà Cuộn rông biển',
                img: './images/products/Ga-cuon-rong-bien.png',
                category: 'Snack',
                price: 50000,
                desc: 'Thịt gà tươi được cuộn trong lớp rong biển giòn, chiên sơ qua. Ăn kèm sốt chấm riêng của quán, món ăn lạ miệng.',
            },
            {
                id: 22,
                status: 1,
                title: 'Tokbokki Bò',
                img: './images/products/Tokbokki-Bo.png',
                category: 'Snack',
                price: 50000,
                desc: 'Tokbokki dẻo dai nấu cùng thịt bò xắt lát, sốt cay ngọt, và trứng cút. Món ăn quen thuộc nhưng đầy hấp dẫn.',
            },
            {
                id: 23,
                status: 1,
                title: 'Tokbokki Hải sản',
                img: './images/products/Tokbokki-Hai-San.png',
                category: 'Snack',
                price: 50000,
                desc: 'Bánh gạo xào cay với mực và tôm tươi. Vị hải sản ngọt tự nhiên làm dịu đi vị cay của sốt Gochujang.',
            },
            {
                id: 24,
                status: 1,
                title: 'Tokbokki Lắc Phô mai',
                img: './images/products/Tokbokki-Lac-Pho-Mai1.png',
                category: 'Snack',
                price: 50000,
                desc: 'Tokbokki chiên giòn, sau đó lắc đều với bột phô mai mặn ngọt. Món ăn vặt hiện đại, béo ngậy được giới trẻ yêu thích.',
            },
            {
                id: 25,
                status: 1,
                title: 'Trà Chanh',
                img: './images/products/Tra-Chanh.jpg',
                category: 'Nước',
                price: 50000,
                desc: 'Thức uống giải khát cổ điển với vị chua thanh của chanh tươi, ngọt nhẹ, mang lại cảm giác sảng khoái tức thì.',
            },
            {
                id: 26,
                status: 1,
                title: 'Trà Đào',
                img: './images/products/Tra-Dao.jpg',
                category: 'Nước',
                price: 50000,
                desc: 'Trà đen đậm vị kết hợp với syrup đào thơm lừng và miếng đào ngâm giòn tan. Hương vị ngọt ngào, thơm mát.',
            },
            {
                id: 27,
                status: 1,
                title: 'Trà Dâu',
                img: './images/products/Tra-dau.jpg',
                category: 'Nước',
                price: 50000,
                desc: 'Trà trái cây với hương dâu tây tươi mát, vị chua nhẹ tự nhiên, là lựa chọn tuyệt vời cho ngày nóng.',
            },
            {
                id: 28,
                status: 1,
                title: 'Trà ổi',
                img: './images/products/Tra-oi.jpg',
                category: 'Nước',
                price: 50000,
                desc: 'Nước trà kết hợp với nước ép ổi, tạo ra hương vị độc đáo, vừa thanh mát vừa có vị ngọt chát nhẹ của ổi.',
            },
            {
                id: 29,
                status: 1,
                title: 'Trà Sữa Thái',
                img: './images/products/Tra-Sua-Thai.jpg',
                category: 'Nước',
                price: 50000,
                desc: 'Trà sữa đậm đặc, mang hương vị đặc trưng của trà Thái Lan, béo ngậy vị sữa. Thường uống kèm với đá.',
            },
            {
                id: 30,
                status: 1,
                title: 'Trà Sữa Trân Châu',
                img: './images/products/Tra-sua-tran-chau.jpg',
                category: 'Nước',
                price: 50000,
                desc: 'Trà sữa truyền thống với trân châu dai mềm, là món đồ uống không thể thiếu của các tín đồ trà sữa.',
            },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}




const body = document.querySelector("body");
let modalContainer = document.querySelectorAll('.modal');
let modalBox = document.querySelectorAll('.mdl-cnt');


modalContainer.forEach(item => {
    item.addEventListener('click', closeModal);
});

modalBox.forEach(item => {
    item.addEventListener('click', function (event) {
        event.stopPropagation();
    })
});

function closeModal() {
    modalContainer.forEach(item => {
        item.classList.remove('open');
    });
    console.log(modalContainer)
    body.style.overflow = "auto";
}
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}





function addToCart(productId) {
    console.log(`Đã thêm sản phẩm ID: ${productId} vào giỏ hàng.`);
}

//Modal mua ngay, thêm sản phẩm vào giỏ hàng

function renderProducts(ShowProducts){
   

    const productlistcontainer= document.getElementById('product-list');
            // Xóa nội dung cũ
    productlistcontainer.innerHTML="";

    ShowProducts.forEach(products => {
        if(products.status==1){
        const productHTML=`
        <div class="product-item">
            <img src="${products.img}" alt="${products.title}" onclick="ShowDetailProduct(${products.id})">
            <h3 class="product-title">${products.title}</h3>
            <p class="product-price">${vnd(products.price)}</p>
            <button class="btn-order" onclick="ShowDetailProduct(${products.id})">
                <b class="btn-primary" "><i class="fa fa-cart-shopping"> </i><span>ĐẶT MÓN</span></b> 
            </button>
        </div>` ;
        productlistcontainer.innerHTML+=productHTML;    
    }
    
    });
}
function increasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    if (parseInt(qty.value) < qty.max) {
        qty.value = parseInt(qty.value) + 1;
    } else {
        qty.value = qty.max;
    }
}
function decreasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    if (qty.value > qty.min) {
        qty.value = parseInt(qty.value) - 1;
    } else {
        qty.value = qty.min;
    }
}
//Show detail product
function ShowDetailProduct(productId){
    let products=JSON.parse(localStorage.getItem('products')) ; 
    let modal=document.querySelector('.modal.product-detail');
    
    event.preventDefault();
    let InfoProduct= products.find(p =>{
        return p.id=== productId;
    })

    let modalhtml=`
        <div class="modal-header">
            <img class="product-image" src="${InfoProduct.img}" alt="">
        </div>

    <div class="modal-body">
        <h2 class="product-title">${InfoProduct.title}</h2>
        <div class="product-control">
            <div class="PriceBox">
                <span class="current-price">${vnd(InfoProduct.price)}</span>
            </div>
            <div class="buttons_added">
                <input class="minus is-form" type="button" value="-" onclick="decreasingNumber(this)">
                <input class="input-qty" max="100" min="1" name="" type="number" value="1">
                <input class="plus is-form" type="button" value="+" onclick="increasingNumber(this)">
            </div>
        </div>
        <p class="product-description">${InfoProduct.desc}</p>
    </div>

    <div class="notebox">
            <p class="notebox-title"> Ghi Chú</p>
            <textarea class="text-note" id="popup-detail-note" placeholder="Nhập thông tin cần lưu ý..."></textarea>
  
    </div>
    
    <div class="modal-footer">
        <div class="price-total">
            <span class="thanhtien">Thành Tiền</span>
            <span class="price">${vnd(InfoProduct.price)}</span>
        </div>
        <div class="modal-footer-control">
            <button class="button-danghangngay" data-product="${InfoProduct.id}">Đặt hàng ngay</button>
            <button class="button-dat" id="add-cart" onclick="animationCart()">
        </div>
    </div>`;
    document.querySelector('#product-detail-content').innerHTML=modalhtml;
    modal.classList.add('open');
    body.style.overflow="hidden";

    //CapNhap Thanh Tien
    let tgbtn = document.querySelectorAll('.is-form');
    let qty= document.querySelector('.input-qty');
    let pricetext= document.querySelector('.price');
    tgbtn.forEach(element =>{
    element.addEventListener('click',() =>{
        if(qty){
        let price=InfoProduct.price*parseInt(qty.value);
        pricetext.innerHTML=vnd(price);
        }
    });
});
    //add product to cart
    let productbtn=document.querySelector('.button-dat');
    productbtn.addEventListener('click',(e)=>{
        if(localStorage.getItem('currentuser')){
            addCart(InfoProduct.id);
        }else{
                toast({tittle:'Warning', message: ' Chưa đăng nhập tài khoản!', type:'Warning', duration:3000});
        }
    }

)
// datbangngay();
}
//Show depend on Category
var productAll = JSON.parse(localStorage.getItem('products')).filter(item => item.status == 1);


function ShowCategory(Type){
      main_nav.classList.add('hide');
      document.getElementById("trangchu").scrollIntoView();
      let productfind = productAll.filter(p =>{
        return p.category.toString().toUpperCase().includes(Type.toUpperCase());
    })
    let currentPage=1;
    setupPagination(productfind, perPage, currentPage);
    displayList(productfind, perPage, currentPage);
}
//Phan Trang Pagnation
let perPage=9;
let currentPage=1;

function showHomeProduct(products) {
    let productAll = products.filter(item => item.status == 1)
       setupPagination(productAll, perPage, currentPage);
    displayList(productAll, perPage, currentPage);
 
}


function displayList(productAll, perPage, currentPage) {
    let start = (currentPage - 1) * perPage;//        0 9 18 27
    let end = (currentPage - 1) * perPage + perPage;  // 9 18   
    let productShow = productAll.slice(start, end);
    renderProducts(productShow);
}

// Chạy code khi DOM đã tải xong

function createAccount(){
 let accounts=[{
    username:'admin',
    password:'123456',
    cart:[]
 },
 {
    username:'staff',   
    password:'123456',
    cart:[]
},{
    username:'user',
    password:'123456',
    cart:[],
}]
    localStorage.setItem('accounts', JSON.stringify(accounts))
};
//hàm kiểm tra Current user và thay đổi hiển thị tên người dùng trên thanh điều hướng
function checkCurrentUser() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userDisplay = document.getElementById('auth-card-username');

    if (currentUser && userDisplay) {
        userDisplay.innerHTML = `Xin chào, ${currentUser.username}`;
    }
}

window.onload = function(){
    createProduct();
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
        showHomeProduct(products); 
    } else {
        console.error("Lỗi: Không tìm thấy dữ liệu sản phẩm để hiển thị.");
    }
    createAccount();
    checkCurrentUser();
};
function setupPagination(productAll, perPage, currentPage) {
    const pageNavList = document.querySelector('.page-nav-list'); 
    if (!pageNavList) return;
    document.querySelector('.page-nav-list').innerHTML = '';
    let page_count = Math.ceil(productAll.length / perPage);
    for (let i = 1; i <= page_count; i++) {
        let li = paginationChange(i, productAll, currentPage);
        document.querySelector('.page-nav-list').appendChild(li);
    }
}

function paginationChange(page, productAll, currentPage) {
    let node = document.createElement(`li`);
    node.classList.add('page-nav-item');
    node.innerHTML = `<a href="javascript:;">${page}</a>`;
    if (currentPage == page) node.classList.add('active');
    node.addEventListener('click', function () {
    
        currentPage = page;

        displayList(productAll, perPage, currentPage);  

        let t = document.querySelectorAll('.page-nav-item.active');
        for (let i = 0; i < t.length; i++) {
            t[i].classList.remove('active');
        }

        node.classList.add('active');
        document.getElementById("trangchu").scrollIntoView();
    })
    return node;
}


//back to top bottom
const BackTop= document.getElementById('backtotoplink');
if(BackTop){
    BackTop.addEventListener('click',(e)=>{
        e.preventDefault();

        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    });
}

function protect(){
    event.preventDefault();
}

//Chuc nang dang ky
let singupButton= document.getElementById('signup-button');
let loginButton= document.getElementById('login-button');

//Che Nav voi scroll
const main_nav=document.getElementById('main-nav');
let lastScrollY=window.scrollY;

window.addEventListener("scroll",()=>{
    if (lastScrollY<window.scrollY)
    {main_nav.classList.add('hide');}
    else
    {main_nav.classList.remove('hide');}
    lastScrollY=window.scrollY;
});

