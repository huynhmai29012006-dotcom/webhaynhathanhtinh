
function createProduct(){
   if(localStorage.getItem('products')==null){ 
   let products = [{
            id: 1,
            status: 1, 
            title: 'Mì kimchi thập cẩm',
            img: './images/products/mi-kim-chi-thap-cam.png',
            category: 'Mì kimchi',
            price: 200000,

        },
        {
            id: 2,
            status:1,
            title: 'Mì kimchi cá hồi',
            img: './images/products/kim-chi-ca-hoi.png',
            category:'Mì kimchi',
            price: 50000,
            
        },
        {
            id: 3,
            status:1,
            title: 'Mì kimchi bạch tuộc',
            img:'./images/products/kim-chi-bach-tuot.png', 
            category:'Mì kimchi',
            price: 50000,
            
        },
        {
            id: 4,
            status:1,
            title: 'Mì kimchi bò cuộn nấm trứng ',
            img:'./images/products/mi-kim-chi-bo-cuon-nam-trung.png',
            category:'Mì kimchi',
            price: 50000,
            
        },
        {
            id: 5,
            status:1,
            title: 'Mì kimchi bò cuộn nấm',
            img:'./images/products/mi-kim-chi-bo-cuon-nam.png',
            category:'Mì kimchi',
            price: 50000,
            
        },
        {
            id: 6,
            status:1,
            title: 'Mì kimchi sườn sụn',
            img:'./images/products/mi-kim-chi-suon-sun.png',
            category:'Mì kimchi',
            price: 50000,
            
        },
        {
            id: 7,
            status:1,
            title: 'Mì lẩu thái bò cuộn nấm',
            img:'./images/products/mi-lau-thai-bo-cuon-nam-Photoroom.png',
            category:'Mì lẩu thái',
            price: 50000,
            
        },
        {
            id: 8,
            status:1,
            title: 'Mì lẩu thái cá',
            img:'./images/products/mi-lau-thai-ca-Photoroom.png',
            category:' ',
            price: 50000,
            
        },
        {
            id: 9,
            status:1,
            title: 'Mì lẩu thái đùi gà',
            img:'./images/products/Mi-lau-thai-dui-ga-Photoroom.png',
            category:' ',
            price: 50000,
            
        },
        {
            id: 10,
            status:1,
            title: 'Mì lẩu thái sườn sụn',
            img:'./images/products/mi-lau-thai-suon-sun-Photoroom.png',
            category:' ',
            price: 50000,
            
        },
        {
            id: 11,
            status:1,
            title: 'Mì lẩu thái thập cẩm',
            img:'./images/products/mi-lau-thai-thap-cam-Photoroom.png',
            category:' ',
            price: 50000,
            
        },
        {
            id: 12,
            status:1,
            title: 'Mì trộn bò',
            img:'./images/products/mi-tron-bo-Photoroom.png',
            category:'Trộn',
            price: 50000,
            
        },
        {
            id: 13,
            status:1,
            title: 'Mì trộn hải sản',
            img:'./images/products/mi-tron-hai-san-Photoroom.png',
            category:'Trộn',
            price: 50000,
            
        },
        {
            id: 14,
            status:1,
            title:'Mì trộn thập cảm',
            img:'./images/products/mi-tron-thap-cam-Photoroom.png',
            category:'Trộn',
            price: 50000,
            
        },
        {
            id: 15,
            status:1,
            title:'Cơm trộn Truyền Thống ',
            img:'./images/products/TRUYEN-THONG-Photoroom.png',
            category:'Trộn',
            price: 50000,
            
        },
        {
            id: 16,
            status:1,
            title: 'Cơm trộn bò',
            img:'./images/products/COM-TRON-BO-Photoroom.png',
            category:'Trộn',
            price: 50000,
            
        },
        {
            id: 17,
            status:1,
            title:'Kimbap Chiên',
            img:'./images/products/Banh-Kimbap-chien.png',
            category:'Snack',
            price: 50000,
            
        },
        {
            id:18,
            status:1,
            title:'Kimbap',
            img:'./images/products/Banh-Kimbap.png',
            category:'Snack',
            price: 50000,
            
        },
        {
            id:19,
            status:1,
            title: 'Đùi gà chiên',
            img:'./images/products/Dui-ga-chien-Seoul.png',
            category:'Snack',
            price: 50000,
            
        },
        {
            id: 20,
            status:1,
            title:'Gà cay phô mai',
            img:'./images/products/Ga-cay-pho-mai.png',
            category:'Snack',
            price: 50000,
            
        },
         {
            id: 21,
            status:1,
            title:'Gà Cuộn rông biển',
            img:'./images/products/Ga-cuon-rong-bien.png',
            category:'Snack',
            price: 50000,
            
        },
        {
            id: 22,
            status:1,
            title:'Tokbokki Bò',
            img:'./images/products/Tokbokki-Bo.png',
            category:'Snack',
            price: 50000,
            
        },{
            id: 23,
            status:1,
            title:'Tokbokki Hải sản',
            img:'./images/products/Tokbokki-Hai-San.png',
            category:'Snack',
            price: 50000,
            
        },{
            id: 24,
            status:1,
            title:'Tokbokki Lắc Phô mai',
            img:'./images/products/Tokbokki-Lac-Pho-Mai1.png',
            category:'Snack',
            price: 50000,
            
        },
        {
            id: 25,
            status:1,
            title:'Trà Chanh',
            img:'./images/products/Tra-Chanh.jpg',
            category:'Nước',
            price: 50000,
            
        },{
            id: 26,
            status:1,
            title:'Trà Đào',
            img:'./images/products/Tra-Dao.jpg',
            category:'Nước',
            price: 50000,
            
        },{
            id: 27,
            status:1,
            title:'Trà Dâu',
            img:'./images/products/Tra-dau.jpg',
            category:'Nước',
            price: 50000,
            
        },{
            id: 28,
            status:1,
            title:'Trà ổi',
            img:'./images/products/Tra-oi.jpg',
            category:'Nước',
            price: 50000,
            
        },{
            id: 29,
            status:1,
            title:'Trà Sữa Thái',
            img:'./images/products/Tra-Sua-Thai.jpg',
            category:'Nước',
            price: 50000,
            
        },{
            id: 30,
            status:1,
            title:'Trà Sữa Trân Châu',
            img:'./images/products/Tra-sua-tran-chau.jpg',
            category:'Nước',
            price: 50000,
            
        },
    ]
    localStorage.setItem('products', JSON.stringify(products));
}
}
// Hiện Menu
function renderProducts(){
    const products=JSON.parse(localStorage.getItem('products'));

    const productlistcontainer= document.getElementById('product-list');
    if(!products)
    {
        console.error("Not find data products or #product-list");
        return;
    }
    if(!productlistcontainer)
    {
        console.error("not find #productlist")
        
    }
            // Xóa nội dung cũ
    productlistcontainer.innerHTML="";

    products.forEach(products => {
        if(products.status==1){
            const formattedPrice = products.price.toLocaleString('vi-VN')+ 'Đ';

        const productHTML=`
        <div class="product-item">
            <img src="${products.img}" alt="${products.title}"> </img>
            <h3 class="product-title">${products.title}</h3>
            <p class="product-price">${formattedPrice}</p>
            <button class="btn-order" onclick="addToCart(${products.id})">
                <i class="fas fa-shopping-cart">ĐẶT MÓN</i> 
            </button>
        </div>` ;
        productlistcontainer.innerHTML+=productHTML;    
    }
    
    });
}
function addToCart(productId) {
    console.log(`Đã thêm sản phẩm ID: ${productId} vào giỏ hàng.`);
}
window.onload= function(){
    createProduct();
    renderProducts();
};
