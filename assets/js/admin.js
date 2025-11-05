// ==============================================================================
// I. Khởi tạo dữ liệu (Đảm bảo dữ liệu sản phẩm được tạo)
// ==============================================================================

// Chú ý: Hàm createProduct() và các hàm tạo dữ liệu giả lập khác 
// phải được định nghĩa trước khi admin.js cố gắng gọi chúng.
// Ta sẽ gọi chúng một cách phòng thủ trong hàm get*.

// ==============================================================================
// II. Hằng số và Hàm tiện ích chung
// ==============================================================================
// Thêm vào Phần II: Hằng số và Hàm tiện ích chung
const STORAGE_KEY_CURRENT_USER = 'currentUser'; // KEY MỚI: Lưu thông tin người dùng đang đăng nhập
const STORAGE_KEY_PRODUCTS = 'products';
const STORAGE_KEY_USERS = 'users';
const STORAGE_KEY_IMPORTS = 'imports';
const STORAGE_KEY_ORDERS = 'orders';

// Lấy dữ liệu từ localStorage
const getProducts = () => {
    // *** CẢI TIẾN QUAN TRỌNG: GỌI HÀM TẠO SẢN PHẨM Ở ĐÂY ***
    // Đảm bảo dữ liệu được tạo nếu nó chưa có trong localStorage.
    if (typeof createProduct === 'function') {
        createProduct();
    }
    return JSON.parse(localStorage.getItem(STORAGE_KEY_PRODUCTS) || '[]');
}
const setProducts = (products) => localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(products));

// Giả định hàm lấy danh sách người dùng (khởi tạo dữ liệu giả nếu chưa có)
const getUsers = () => {
    let users = JSON.parse(localStorage.getItem(STORAGE_KEY_USERS));
    if (!users || users.length === 0) {
        users = [{
                id: 101,
                name: 'Nguyễn Văn A',
                contact: '0123456789',
                joinDate: '2024-01-15',
                status: 1
            },
            {
                id: 102,
                name: 'Trần Thị B',
                contact: '0123456789',
                joinDate: '2024-02-20',
                status: 0
            },
            {
                id: 103,
                name: 'Lê Văn C',
                contact: '0123456789',
                joinDate: '2024-03-05',
                status: 1
            },
        ];
        localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
    }
    return users;
};
const setUsers = (users) => localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));

// Giả định hàm lấy danh sách phiếu nhập (khởi tạo dữ liệu giả nếu chưa có)
const getImports = () => {
    let imports = JSON.parse(localStorage.getItem(STORAGE_KEY_IMPORTS));
    if (!imports) {
        imports = [{
                id: 'PN-20240315-001',
                date: '2024-03-15',
                totalValue: 4500000,
                status: 'draft',
                items: [{ productId: 1, title: 'Mì cay cấp 7', importPrice: 50000, quantity: 20 },
                    { productId: 3, title: 'Tokbokki phô mai', importPrice: 70000, quantity: 50 }]
            },
            {
                id: 'PN-20240310-002',
                date: '2024-03-10',
                totalValue: 12000000,
                status: 'completed',
                items: [{ productId: 2, title: 'Mì lẩu thái', importPrice: 60000, quantity: 100 }]
            },
            {
                id: 'PN-20240301-003',
                date: '2024-03-01',
                totalValue: 7800000,
                status: 'draft',
                items: [{ productId: 4, title: 'Snack khoai tây', importPrice: 15000, quantity: 520 }]
            },
        ];
        localStorage.setItem(STORAGE_KEY_IMPORTS, JSON.stringify(imports));
    }
    return imports;
}
const setImports = (imports) => localStorage.setItem(STORAGE_KEY_IMPORTS, JSON.stringify(imports));

// Giả định hàm lấy danh sách đơn hàng (khởi tạo dữ liệu giả nếu chưa có)
// Giả định hàm lấy danh sách đơn hàng (khởi tạo dữ liệu giả nếu chưa có)
const getOrders = () => {
    let orders = JSON.parse(localStorage.getItem(STORAGE_KEY_ORDERS));
    if (!orders || orders.length < 4) { // Đảm bảo luôn có đủ dữ liệu mẫu, hoặc ít nhất 4 đơn hàng
        orders = [{
                id: 'DH1001',
                customer: 'Võ Nguyễn Văn Trâu',
                date: '2024-05-10',
                total: 250000,
                status: 1, // 1: Đã xử lý
                statusText: 'Đã xử lý',
                items: [{ title: 'Mì cay cấp 7', price: 100000, quantity: 2 }, { title: 'Nước ép cam', price: 25000, quantity: 2 }]
            },
            {
                id: 'DH1002',
                customer: 'Đinh Văn Mỳ',
                date: '2024-05-10',
                total: 100000,
                status: 0, // 0: Chưa xử lý (Mới đặt)
                statusText: 'Mới đặt',
                items: [{ title: 'Tokbokki phô mai', price: 50000, quantity: 2 }]
            },
            {
                id: 'DH1003',
                customer: 'Lê Văn Cấc',
                date: '2024-05-09',
                total: 300000,
                status: 3, // 3: Đã giao
                statusText: 'Đã giao',
                items: [{ title: 'Mì lẩu thái', price: 60000, quantity: 5 }]
            },
            {
                id: 'DH1004', // Đơn hàng bị thiếu trên bảng của bạn
                customer: 'Nguyễn Bát Man',
                date: '2024-05-08',
                total: 50000,
                status: 4, // 4: Đã hủy
                statusText: 'Đã hủy',
                items: [{ title: 'Snack khoai tây', price: 25000, quantity: 2 }]
            },
        ];
        localStorage.setItem(STORAGE_KEY_ORDERS, JSON.stringify(orders));
    }
    return orders;
}
const setOrders = (orders) => localStorage.setItem(STORAGE_KEY_ORDERS, JSON.stringify(orders));

// Format tiền tệ Việt Nam
const formatCurrency = (amount) => {
    // Đảm bảo amount là số và không phải null/undefined
    if (typeof amount !== 'number' || isNaN(amount)) return '0 VNĐ'; 
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount).replace('₫', ' VNĐ');
};
// Format số (ví dụ: 1000000 -> 1.000.000)
const formatNumber = (amount) => {
    if (typeof amount !== 'number' || isNaN(amount)) return '0';
    // Sử dụng Intl.NumberFormat để định dạng số theo chuẩn Việt Nam
    return new Intl.NumberFormat('vi-VN').format(amount);
};
window.formatNumber = formatNumber; // Rất quan trọng: Gắn vào window để các hàm nội tuyến trong HTML/JS gọi được

// ==============================================================================
// III. Chức năng Quản lý Sản phẩm (products.html)
// ==============================================================================

// Biến dùng chung (chỉ nên dùng khi chắc chắn chúng có trên trang)
const productListContainer = document.querySelector('.product-list');
const categoryFilter = document.getElementById('category');
// LƯU Ý: Không khai báo searchInput ở đây vì nó dùng chung class với các trang khác

// FIX CUỐI CÙNG: Sử dụng key KHÔNG DẤU làm key chuẩn, nhưng lưu Tên Tiếng Việt có dấu để hiển thị.
const categoryMap = {
  // Key chuẩn (Không dấu, để khớp HTML dropdown và logic nội bộ)
  "mi-kimchi": "Mì kimchi",
  "mi-lau-thai": "Mì lẩu thái",
  "tron": "Trộn",
  "snack": "Snack",
  "nuoc": "Nước",
  
  // Alias Key (Để khớp với dữ liệu cũ trong initilization.js nếu nó còn tồn tại)
  "Mì kimchi": "Mì kimchi", 
  "Mì lẩu thái": "Mì lẩu thái", 
  "Trộn": "Trộn", 
  "Snack": "Snack", 
  "Nước": "Nước",
};

// Map dùng để dịch key KHÔNG DẤU (từ HTML dropdown) sang key CÓ DẤU (dùng trong dữ liệu nếu cần)
const productKeyMap = {
    "mi-kimchi": "Mì kimchi",
    "mi-lau-thai": "Mì lẩu thái",
    "tron": "Trộn",
    "snack": "Snack",
    "nuoc": "Nước"
};

// Map dùng để dịch key CÓ DẤU (từ initilization.js) sang key KHÔNG DẤU (chuẩn hóa)
const normalizeKeyMap = {
    "Mì kimchi": "mi-kimchi",
    "Mì lẩu thái": "mi-lau-thai",
    "Trộn": "tron",
    "Snack": "snack",
    "Nước": "nuoc"
};


// Map ngược từ tên tiếng Việt sang value chuẩn (dùng khi sửa)
const reverseCategoryMap = Object.fromEntries(
  Object.entries(categoryMap).map(([key, value]) => [value.toLowerCase(), key])
);

// Hàm render danh sách sản phẩm
const renderProductList = (products) => {
    const container = document.querySelector('.product-list');
    if (!container) return; // Bảo vệ: Chỉ chạy khi container tồn tại
    container.innerHTML = ''; 

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.dataset.productId = product.id; 

        const deleteButtonText = product.status === 1 ? 'Ẩn' : 'Hiện lại';
        
        // FIX: Xử lý ánh xạ category để hiển thị tên tiếng Việt
        let categoryDisplayKey = product.category;
        
        // Nếu category là key không dấu (mi-kimchi), ta ánh xạ sang key có dấu
        if (productKeyMap[product.category]) {
            categoryDisplayKey = productKeyMap[product.category];
        }
        
        // Sau đó dùng categoryMap để dịch sang Tên hiển thị
        const categoryText = categoryMap[categoryDisplayKey] || product.category;


        productItem.innerHTML = `
            <div class="product-image">
                <img src="${product.img}" alt="${product.title}" 
                     onerror="this.onerror=null; this.src='./images/placeholder.png';">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.title}</h3>
                <p class="product-desc">${product.desc}</p>
                <p class="product-category"><strong>Loại:</strong> ${categoryText}</p>
                <p class="product-price"><strong>Giá:</strong> ${product.price.toLocaleString()} VNĐ</p>
            </div>
            <div class="product-actions">
                <button class="btn-edit" onclick="editProduct(${product.id})">
                    <i class="fa-solid fa-pen"></i> Sửa
                </button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})">
                    <i class="fa-solid fa-trash"></i> ${deleteButtonText}
                </button>
                <button class="btn btn-danger btn-sm" onclick="permanentlyDeleteProduct(${product.id})" 
                        style="background-color: #f4511e; margin-left: 10px;">
                    <i class="fa-solid fa-xmark"></i> Xóa Vĩnh Viễn
                </button>
            </div>
        `;
        container.appendChild(productItem);
    });
};

// Hàm lọc và tìm kiếm sản phẩm
// admin.js (Phần III)

// Hàm lọc và tìm kiếm sản phẩm (ĐÃ FIX: Cập nhật selector tìm kiếm)
const filterProducts = () => {
    const allProducts = getProducts();
    
    // FIX: Dùng selector phù hợp với cấu trúc products.html
    // TÌM input[type="text"] bên trong .product-filter-bar
    const searchInput = document.querySelector('.product-filter-bar .form-search-input');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

    let filtered = allProducts.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm) 
                           || product.desc.toLowerCase().includes(searchTerm);
        return matchesSearch;
    });

    renderProductList(filtered);
};


// Hàm thêm sản phẩm
const addProduct = () => {
  document.getElementById('addModal').style.display = 'block';
};

// Xem trước ảnh khi nhập URL
document.getElementById('add-img')?.addEventListener('input', function () {
  document.getElementById('preview-add-img').src = this.value || './images/placeholder.png';
});

// Submit form thêm sản phẩm
document.getElementById('addForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const products = getProducts();

  const newProduct = {
    id: Date.now(),
   // code: document.getElementById('add-code').value.trim(),
    title: document.getElementById('add-title').value.trim(),
    desc: document.getElementById('add-desc').value.trim(),
    price: parseFloat(document.getElementById('add-price').value),
    category: document.getElementById('add-category').value,
    img: document.getElementById('add-img').value.trim(),
    status: 1
  };

  products.push(newProduct);
  setProducts(products);
  filterProducts(); // FIX: Gọi filterProducts để render lại danh sách
  document.getElementById('addModal').style.display = 'none';
  this.reset();
  document.getElementById('preview-add-img').src = './images/placeholder.png';
});


// Hàm sửa sản phẩm: hiển thị modal với thông tin cũ
const editProduct = (id) => {
    const products = getProducts();
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById('edit-title').value = product.title;
    document.getElementById('edit-desc').value = product.desc;
    document.getElementById('edit-price').value = product.price;

    // Gán đúng value vào select
    document.getElementById('edit-category').value = product.category;

    document.getElementById('editModal').dataset.editingId = id;
    document.getElementById('editModal').style.display = 'block';
};

// Hàm lưu thay đổi khi submit form sửa
document.getElementById('editForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const products = getProducts();
    const id = parseInt(document.querySelector('#editModal').dataset.editingId);

    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        const oldStatus = products[index].status;

        products[index].title = document.getElementById('edit-title').value;
        products[index].desc = document.getElementById('edit-desc').value;
        products[index].price = parseFloat(document.getElementById('edit-price').value);
        products[index].category = document.getElementById('edit-category').value;
        products[index].status = oldStatus;

        setProducts(products);
        filterProducts();
        document.getElementById('editModal').style.display = 'none';
    }
});

// Hàm xóa/ẩn sản phẩm
const deleteProduct = (id) => {
    let products = getProducts();
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex !== -1) {
        const product = products[productIndex];
        const newStatus = product.status === 1 ? 0 : 1; 
        const actionText = newStatus === 0 ? 'ẩn (xóa)' : 'hiện lại';

        if (confirm(`Bạn có chắc chắn muốn ${actionText} sản phẩm "${product.title}"?`)) {
            products[productIndex].status = newStatus;
            setProducts(products);
            filterProducts();
            alert(`Đã ${actionText} sản phẩm "${product.title}".`);
        }
    }
};

/**
 * Xóa vĩnh viễn một sản phẩm khỏi localStorage.
 * @param {number} id - ID của sản phẩm cần xóa.
 */
const permanentlyDeleteProduct = (id) => {
    if (!confirm("CẢNH BÁO: Bạn có chắc chắn muốn XÓA VĨNH VIỄN sản phẩm này? Hành động này không thể hoàn tác.")) {
        return;
    }
    
    let products = getProducts();
    const productIndex = products.findIndex(p => p.id === id);
    
    if (productIndex !== -1) {
        const productName = products[productIndex].title;
        
        // Lọc sản phẩm ra khỏi mảng
        const updatedProducts = products.filter(p => p.id !== id);
        
        // Lưu lại mảng mới vào localStorage (XÓA VĨNH VIỄN)
        setProducts(updatedProducts);
        
        // Tải lại danh sách đang hiển thị
        filterProducts();
        
        alert(`Đã XÓA VĨNH VIỄN sản phẩm "${productName}" khỏi hệ thống.`);
    }
};

window.permanentlyDeleteProduct = permanentlyDeleteProduct; // Gắn hàm vào window để HTML gọi được

// Đảm bảo các hàm có thể được gọi từ HTML
window.addProduct = addProduct;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;


// =============================================================================
// IV. Chức năng Quản lý Người dùng (users.html) - Chức năng 2
// =============================================================================

// Hàm Khóa/Mở khóa người dùng
const lockUnlockUser = (id, newStatus) => {
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
        users[userIndex].status = newStatus;
        setUsers(users);
        filterUsers();
        alert(`${newStatus === 1 ? 'Mở khóa' : 'Khóa'} tài khoản thành công!`);
    }
};

// Hàm Đặt lại mật khẩu
const resetPassword = (id) => {
    alert(`Mật khẩu của người dùng ID ${id} đã được đặt lại về mặc định: 123456`);
};

// Hàm Render (Hiển thị) danh sách người dùng vào bảng
const renderUserList = (users) => {
    const usersTableBody = document.getElementById('users-table-body');
    
    // **KIỂM TRA QUAN TRỌNG:** Đảm bảo ID 'users-table-body' tồn tại 
    if (!usersTableBody) {
        console.error("Lỗi: Không tìm thấy phần tử <tbody id='users-table-body'>.");
        return; 
    }
    
    usersTableBody.innerHTML = '';

    if (!users || users.length === 0) {
        usersTableBody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #b0b0b0;">Không tìm thấy khách hàng nào.</td></tr>';
        return;
    }

    let htmlContent = '';
    users.forEach((user, index) => {
        const statusBadge = user.status === 1 
            ? '<span class="badge positive">Hoạt động</span>' 
            : '<span class="badge danger">Bị khóa</span>';

        const actionButton = user.status === 1 
            ? `<button class="btn btn-danger btn-sm" onclick="lockUnlockUser(${user.id}, 0)">Khóa</button>` 
            : `<button class="btn btn-positive btn-sm" onclick="lockUnlockUser(${user.id}, 1)">Mở khóa</button>`;

        htmlContent += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.contact}</td>
                <td>${user.joinDate}</td>
                <td>${statusBadge}</td>
                <td class="action-buttons">
                    <button class="btn btn-secondary btn-sm" onclick="resetPassword(${user.id})">Reset MK</button>
                    ${actionButton}
                </td>
            </tr>
        `;
    });
    usersTableBody.innerHTML = htmlContent;
};

// Hàm Lọc và Tìm kiếm người dùng (được gọi khi có thay đổi)
const filterUsers = () => {
    const users = getUsers(); 
    
    const statusFilterEl = document.getElementById('tinh-trang-user');
    const searchInputEl = document.getElementById('form-search-user');
    const timeStartEl = document.getElementById('time-start-user'); 
    const timeEndEl = document.getElementById('time-end-user'); 

    // Chỉ cần kiểm tra sự tồn tại của các phần tử filter
    if (!statusFilterEl || !searchInputEl) {
         renderUserList(users);
         return;
    }

    const statusFilter = statusFilterEl.value;
    const searchTerm = searchInputEl.value.toLowerCase();
    const timeStart = timeStartEl ? timeStartEl.value : '';
    const timeEnd = timeEndEl ? timeEndEl.value : '';

    const filtered = users.filter(u => {
        const matchesStatus = statusFilter === '2' || u.status === parseInt(statusFilter);
        const matchesSearch = u.name.toLowerCase().includes(searchTerm) || u.contact.includes(searchTerm);
        
        let matchesDate = true;
        if (timeStart && u.joinDate < timeStart) matchesDate = false;
        if (timeEnd && u.joinDate > timeEnd) matchesDate = false;

        return matchesStatus && matchesSearch && matchesDate;
    });

    renderUserList(filtered);
};


// ==============================================================================
// ==============================================================================
// V. Chức năng Quản lý Nhập hàng (import.html) - Chức năng 5

// Biến dùng chung
const importsTableBody = document.querySelector('.data-table tbody');
const importFormContainer = document.getElementById('importFormContainer');
const importStatusFilter = document.getElementById('importStatusFilter');


// ==============================================================================
// HÀM TIỆN ÍCH CHO FORM NHẬP HÀNG
// ==============================================================================

// Lấy danh sách sản phẩm để populate dropdown trong form nhập hàng
const getAllProductsForImport = () => {
    // Gọi hàm getProducts() để đảm bảo dữ liệu được khởi tạo
    const products = getProducts(); 
    // Trả về danh sách sản phẩm với giả định giá nhập cuối cùng là 70% giá bán
    return products.map(p => ({
        id: p.id,
        title: p.title,
        lastImportPrice: p.price * 0.7 || 50000,
        category: p.category // Thêm category để dùng cho Price Config
    }));
};

// Hàm tính toán tổng tiền của các sản phẩm trong form nhập
const calculateImportTotal = () => {
    let grandTotal = 0;
    // Dùng querySelectorAll trên #importProductRows để đảm bảo chỉ lấy các input trong form hiện tại
    const productRows = document.querySelectorAll('#importProductRows tr'); 

    productRows.forEach(row => {
        const priceInput = row.querySelector('.import-price-input');
        const quantityInput = row.querySelector('.import-quantity-input');
        const subtotalCell = row.querySelector('.import-subtotal');

        const price = parseFloat(priceInput ? priceInput.value : 0) || 0;
        const quantity = parseFloat(quantityInput ? quantityInput.value : 0) || 0;
        
        const subtotal = price * quantity;
        grandTotal += subtotal;

        if (subtotalCell) {
            subtotalCell.textContent = formatNumber(subtotal); 
        }
    });

    const grandTotalDisplay = document.getElementById('importGrandTotal');
    if (grandTotalDisplay) {
        grandTotalDisplay.textContent = formatCurrency(grandTotal);
    }
};

// Hàm tạo HTML cho dropdown Sản phẩm
const createProductOptions = (selectedId = null) => {
    const products = getAllProductsForImport();
    let options = '<option value="">-- Chọn sản phẩm --</option>';
    products.forEach(p => {
        // Chuyển p.id sang string để so sánh an toàn với value của option
        const selected = p.id.toString() === selectedId?.toString() ? 'selected' : ''; 
        options += `<option value="${p.id}" data-price="${p.lastImportPrice}" ${selected}>${p.title}</option>`;
    });
    return options;
};

// Hàm triển khai Thêm một dòng sản phẩm vào form nhập hàng
window.addImportProductRow = (item = {}) => {
    const tableBody = document.getElementById('importProductRows');
    if (!tableBody) return;

    // Dùng timestamp làm ID tạm thời cho dòng (để dễ xóa)
    const rowId = Date.now() + Math.random();
    
    // Giá trị mặc định khi tạo dòng mới hoặc khi tải dữ liệu sửa
    const productId = item.productId || '';
    const importPrice = item.importPrice || '';
    const quantity = item.quantity || '';
    const subtotal = importPrice * quantity || 0;

    const newRow = document.createElement('tr');
    newRow.dataset.rowId = rowId;
    newRow.innerHTML = `
        <td>
            <select class="form-control import-product-select" name="productId" required 
                    onchange="updateImportPrice(this)">
                ${createProductOptions(productId)}
            </select>
        </td>
        <td>
            <input type="number" class="form-control import-price-input" name="importPrice" 
                   value="${importPrice}" min="1000" required 
                   oninput="calculateImportTotal()">
        </td>
        <td>
            <input type="number" class="form-control import-quantity-input" name="quantity" 
                   value="${quantity}" min="1" required 
                   oninput="calculateImportTotal()">
        </td>
        <td class="text-right import-subtotal">${formatNumber(subtotal)}</td>
        <td>
            <button type="button" class="btn btn-delete-row btn-sm" onclick="removeImportProductRow(${rowId})">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </td>
    `;
    tableBody.appendChild(newRow);
    calculateImportTotal();
};

// Hàm tự động điền giá nhập giả định khi chọn sản phẩm
window.updateImportPrice = (selectElement) => {
    const row = selectElement.closest('tr');
    const priceInput = row.querySelector('.import-price-input');
    const quantityInput = row.querySelector('.import-quantity-input');
    
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const defaultPrice = parseFloat(selectedOption.dataset.price) || 0;
    
    // Nếu chưa có giá trị, hoặc giá trị là 0, thì cập nhật giá gợi ý
    if (priceInput && (priceInput.value === '' || parseFloat(priceInput.value) === 0)) { 
        priceInput.value = defaultPrice;
    }
    // Nếu chưa có số lượng, điền 1
     if (quantityInput && quantityInput.value === '') { 
        quantityInput.value = 1;
    }
    calculateImportTotal();
};

// Hàm xóa một dòng sản phẩm
window.removeImportProductRow = (rowId) => {
    // rowId là số, cần tìm đúng data-row-id (string)
    const row = document.querySelector(`#importProductRows tr[data-row-id="${rowId}"]`); 
    if (row && confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi phiếu nhập?')) {
        row.remove();
        calculateImportTotal(); 
    }
};

// Hàm thu thập dữ liệu từ form chi tiết
const getFormData = (form) => {
    const importItems = [];
    const productRows = document.querySelectorAll('#importProductRows tr');
    let grandTotal = 0;

    productRows.forEach(row => {
        const productId = row.querySelector('[name="productId"]').value;
        const importPrice = parseFloat(row.querySelector('[name="importPrice"]').value) || 0;
        const quantity = parseInt(row.querySelector('[name="quantity"]').value) || 0;
        
        // Chỉ lưu các dòng có sản phẩm được chọn và số lượng > 0
        if (productId && quantity > 0) {
            // Cần lấy Title của sản phẩm để lưu lại (vì importDetails không có)
            const product = getAllProductsForImport().find(p => p.id === parseInt(productId));
            
            importItems.push({
                productId: parseInt(productId), // Chuyển lại về số nếu ID sản phẩm là số
                title: product ? product.title : 'Sản phẩm không rõ', // Thêm title
                importPrice: importPrice,
                quantity: quantity
            });
            grandTotal += importPrice * quantity;
        }
    });

    return {
        id: document.getElementById('importId').value !== 'Tự động tạo' ? document.getElementById('importId').value : null,
        date: document.getElementById('importDate').value,
        totalValue: grandTotal,
        items: importItems
    };
};


// ==============================================================================
// LOGIC CHÍNH CỦA PHIẾU NHẬP
// ==============================================================================

// 5. Quản lý Nhập sản phẩm (Hiển thị & tìm kiếm)
const renderImportList = (imports) => {
    if (!importsTableBody) return;
    importsTableBody.innerHTML = '';
    
    imports.forEach(phiu => {
        const statusClass = phiu.status === 'draft' ? 'status-draft-badge' : 'status-completed-badge';
        const statusText = phiu.status === 'draft' ? 'Nháp' : 'Hoàn thành';
        const isDraft = phiu.status === 'draft'; 
        
        // Cập nhật lại onclick cho các nút hành động trong bảng
        const actions = isDraft ? `
            <button class="btn btn-primary btn-sm" onclick="showImportForm('edit', '${phiu.id}')">Sửa</button>
            <button class="btn btn-complete-import btn-sm" onclick="completeImport('${phiu.id}')">Hoàn thành</button>
        ` : `
            <button class="btn btn-secondary btn-sm" onclick="showImportForm('edit', '${phiu.id}')">Xem</button>
        `;

        importsTableBody.innerHTML += `
            <tr>
                <td>${phiu.id}</td>
                <td>${phiu.date}</td>
                <td>${formatCurrency(phiu.totalValue)}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td class="action-buttons">${actions}</td>
            </tr>
        `;
    });
};

const filterImports = () => {
    const allImports = getImports();
    const status = importStatusFilter ? importStatusFilter.value : 'all'; 
    const searchTerm = document.querySelector('.admin-control-center .form-search-input')?.value.toLowerCase() || ''; 

    const filtered = allImports.filter(p => {
        const matchesStatus = status === 'all' || p.status === status;
        const matchesSearch = p.id.toLowerCase().includes(searchTerm) || p.date.includes(searchTerm);
        return matchesStatus && matchesSearch;
    });
    renderImportList(filtered);
}

// Hàm FIX LỖI CHỨC NĂNG "XEM"
const showImportForm = (mode, id = null) => {
    if (importFormContainer) {
        // Reset form và danh sách sản phẩm trước
        document.getElementById('detailedImportForm').reset();
        document.getElementById('importProductRows').innerHTML = ''; 
        
        // Cập nhật tiêu đề và ID
        document.getElementById('importFormTitle').textContent = mode === 'add' ? 'Tạo Phiếu Nhập Hàng Mới' : `Sửa Phiếu Nhập ${id}`;
        document.getElementById('importId').value = id || 'Tự động tạo';

        const btnSaveDraft = document.querySelector('.btn-save-draft');
        const btnCompleteImport = document.getElementById('btnCompleteImport');
        const btnAddItem = document.querySelector('.btn-add-item');

        // Mặc định bật các nút và các input
        btnSaveDraft.style.display = 'inline-block';
        btnCompleteImport.style.display = 'inline-block'; 
        btnAddItem.style.display = 'block';
        document.querySelectorAll('#detailedImportForm input, #detailedImportForm select, #detailedImportForm button').forEach(el => el.disabled = false);


        if (mode === 'edit' && id) {
            const imports = getImports();
            const importToEdit = imports.find(p => p.id === id);

            if (importToEdit) {
                document.getElementById('importDate').value = importToEdit.date;
                
                // Tải chi tiết các sản phẩm (DÙ LÀ NHÁP HAY HOÀN THÀNH ĐỀU TẢI)
                if (importToEdit.items && importToEdit.items.length > 0) {
                    importToEdit.items.forEach(item => window.addImportProductRow(item)); // FIX: Chỉ truyền item
                } else {
                    window.addImportProductRow(); 
                }

                // --- LOGIC CHỈ XEM CHO PHIẾU ĐÃ HOÀN THÀNH ---
                if (importToEdit.status === 'completed') {
                    document.getElementById('importFormTitle').textContent = `Chi tiết Phiếu Nhập ${id} (Đã Hoàn Thành)`;
                    btnSaveDraft.style.display = 'none'; // Ẩn nút Lưu Nháp
                    btnCompleteImport.style.display = 'none'; // Ẩn nút Hoàn thành
                    btnAddItem.style.display = 'none'; // Ẩn nút Thêm sản phẩm
                    
                    // Vô hiệu hóa TẤT CẢ các input và select trong form
                    document.querySelectorAll('#detailedImportForm input, #detailedImportForm select, #detailedImportForm .btn-delete-row').forEach(el => {
                        el.disabled = true; // Vô hiệu hóa tất cả các input, select
                        if (el.classList.contains('btn-delete-row')) {
                            el.style.display = 'none'; // Ẩn nút xóa dòng
                        }
                    });
                     // Vô hiệu hóa luôn nút Hủy trong chế độ xem
                    document.querySelector('.btn-cancel-form').disabled = false; // Luôn giữ Hủy (Đóng) hoạt động
                }
            }
        } else {
            // Chế độ thêm mới (mode === 'add')
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('importDate').value = today;
            window.addImportProductRow(); // Thêm dòng đầu tiên
        }
        
        // Cập nhật sự kiện cho nút Hoàn thành trong form SỬA/THÊM MỚI
        if (btnCompleteImport) {
            btnCompleteImport.onclick = (e) => { 
                e.preventDefault(); 
                const currentId = document.getElementById('importId').value;
                const mode_ = currentId === 'Tự động tạo' ? 'add' : 'edit';
                saveImport(mode_, 'completed');
            };
        }
        
        importFormContainer.style.display = 'block';
        calculateImportTotal();
    }
};

const hideImportForm = () => {
    if (importFormContainer) {
        importFormContainer.style.display = 'none';
        document.getElementById('detailedImportForm').reset();
    }
};

// Hàm Lưu Phiếu Nhập (Nháp hoặc Hoàn thành)
const saveImport = (mode, status) => {
    const formData = getFormData(document.getElementById('detailedImportForm'));
    let imports = getImports();
    
    if (formData.items.length === 0) {
        alert('Vui lòng thêm ít nhất một sản phẩm vào phiếu nhập.');
        return;
    }

    if (mode === 'add') {
        const newId = 'PN-' + new Date().toISOString().slice(0, 10).replace(/-/g, '') + '-' + 
                      (imports.length + 1).toString().padStart(3, '0');
        formData.id = newId;
        formData.status = status;
        imports.unshift(formData); // Thêm vào đầu danh sách
        alert(`Đã ${status === 'draft' ? 'Lưu nháp' : 'Hoàn thành'} phiếu nhập ${newId}.`);
    } else if (mode === 'edit' && formData.id) {
        const index = imports.findIndex(p => p.id === formData.id);
        if (index !== -1) {
            imports[index].date = formData.date;
            imports[index].totalValue = formData.totalValue;
            imports[index].items = formData.items;
            if (status === 'completed') {
                imports[index].status = 'completed';
            }
            alert(`Đã ${status === 'draft' ? 'Lưu nháp' : 'Hoàn thành'} phiếu nhập ${formData.id}.`);
        }
    }
    
    setImports(imports);
    filterImports(); 
    hideImportForm();

    // Logic cập nhật tồn kho (giả định)
    if (status === 'completed') {
        // Sau khi nhập hàng xong, nếu đang ở trang tồn kho, cần gọi hàm tính lại tồn kho
        if (typeof calculateAndRenderInventory === 'function') {
            calculateAndRenderInventory(); 
        }
    }
};

// Hàm Hoàn thành phiếu nhập (GỌI TỪ NÚT TRONG DANH SÁCH)
const completeImport = (id) => {
    let imports = getImports();
    const importIndex = imports.findIndex(p => p.id === id);

    if (importIndex !== -1) {
        const importToComplete = imports[importIndex];
        
        if (importToComplete.status === 'completed') {
            alert(`Phiếu nhập ${id} đã được hoàn thành trước đó.`);
            return;
        }

        // Lấy lại dữ liệu chi tiết để đảm bảo tổng tiền vẫn chính xác (nếu cần)
        // Trong trường hợp này, ta giả định phiếu nháp đã lưu đủ chi tiết.
        
        if (confirm(`Bạn có chắc chắn muốn HOÀN THÀNH phiếu nhập ${id}? Hành động này không thể hoàn tác và sẽ cập nhật Tồn kho.`)) {
            importToComplete.status = 'completed';
            setImports(imports);
            filterImports(); 
            hideImportForm(); 
            alert(`Phiếu nhập ${id} đã được hoàn thành. Đã cập nhật tồn kho (giả định).`);
            
            // Sau khi hoàn thành, nếu đang ở trang tồn kho, cần gọi hàm tính lại tồn kho
            if (typeof calculateAndRenderInventory === 'function') {
                calculateAndRenderInventory(); 
            }
        }
    }
};

// Đảm bảo các hàm có thể được gọi từ HTML
window.showImportForm = showImportForm;
window.hideImportForm = hideImportForm;
window.completeImport = completeImport;
window.addImportProductRow = addImportProductRow;
window.removeImportProductRow = removeImportProductRow;
window.updateImportPrice = updateImportPrice;
window.calculateImportTotal = calculateImportTotal;
window.filterImports = filterImports;
window.saveImport = saveImport; // Thêm hàm này để form submit có thể gọi


// ==============================================================================
// VI. Chức năng Quản lý Giá bán (prices.html) - Chức năng 6
// ==============================================================================
// VI. Chức năng Quản lý Giá bán (prices.html) - Cấp độ Lợi nhuận (Loại > Sản phẩm)
// ĐÃ FIX LỖI UNDEFINED VÀ BAO GỒM CHỨC NĂNG LƯU TẤT CẢ
// ==============================================================================

// --- MAP VÀ DỮ LIỆU GIẢ ĐỊNH ---

// 1. Map lợi nhuận mặc định theo loại (Giả định lưu trữ trong JS)
// FIX: Sử dụng key Tiếng Việt có dấu để khớp với categoryMap đã sửa
const defaultProfitMarginsByType = {
    "Mì kimchi": 35, 
    "Mì lẩu thái": 35, 
    "Trộn": 45, 
    "Snack": 45, 
    "Nước": 60, 
    // Thêm các loại chung như một fallback an toàn
    "mon-chinh": 35, 
    "mon-phu": 45,   
    "do-uong": 60,   
};

// 2. Map lợi nhuận tùy chỉnh theo TỪNG sản phẩm (Giả định lưu trữ)
let customProfitMarginsByProduct = {
    // Dữ liệu tùy chỉnh ban đầu
};

// 3. Hàm tính Giá bán
const calculateSellingPrice = (costPrice, profitMarginPercent) => {
    if (typeof costPrice !== 'number' || isNaN(costPrice) || costPrice <= 0) return 0;
    const price = costPrice * (1 + (profitMarginPercent / 100));
    // Làm tròn lên hàng nghìn gần nhất
    return Math.ceil(price / 1000) * 1000; 
};

// --- LOGIC LƯU THÔNG TIN CẤU HÌNH ---

// 6.1. Cập nhật % Lợi nhuận theo Loại (Cấp độ Mặc định)
const saveProfitMarginByType = (element) => {
    const row = element.closest('tr');
    const inputEl = row.querySelector('.profit-margin-input');
    const typeKey = inputEl.dataset.typeKey;
    const margin = parseInt(inputEl.value) || 0;

    if (typeKey && margin >= 0 && margin <= 100) {
        defaultProfitMarginsByType[typeKey] = margin;
        const typeName = row.children[0].textContent; 
        alert(`Đã lưu % Lợi nhuận ${margin}% cho Loại: ${typeName} (Giả định).`);
        
        renderPriceLookup();
        filterProductsByProfit(); 
    } else {
        alert("Tỉ lệ lợi nhuận không hợp lệ (phải từ 0 đến 100%).");
    }
};

// 6.2. Cập nhật % Lợi nhuận theo Sản phẩm (Cấp độ Ghi đè)
const saveProfitMarginByProduct = (element) => {
    const row = element.closest('tr');
    const productId = parseInt(row.dataset.productId);
    const productName = row.children[0].textContent;
    const inputEl = row.querySelector('.profit-margin-input');
    const margin = parseInt(inputEl.value) || 0;

    if (productId && margin >= 0 && margin <= 100) {
        customProfitMarginsByProduct[productId] = margin;
        alert(`Đã lưu % Lợi nhuận ${margin}% cho món: ${productName} (Đã tùy chỉnh).`);
        
        renderPriceLookup();
    } else {
        alert("Tỉ lệ lợi nhuận không hợp lệ (phải từ 0 đến 100%).");
    }
};

// 6.3. Hàm Lưu Tất Cả % Lợi Nhuận Theo Loại
const saveAllProfitMarginsByType = () => {
    const profitByTypeBody = document.getElementById('profit-by-type-body');
    if (!profitByTypeBody) return;

    let successCount = 0;

    profitByTypeBody.querySelectorAll('tr').forEach(row => {
        const inputEl = row.querySelector('.profit-margin-input');
        const typeKey = inputEl.dataset.typeKey;
        const margin = parseInt(inputEl.value) || 0;

        if (typeKey && margin >= 0 && margin <= 100) {
            // FIX: Sử dụng normalizeKeyMap để chuyển key không dấu từ HTML thành key có dấu
            const categoryKey = normalizeKeyMap[typeKey] || typeKey;
            defaultProfitMarginsByType[categoryKey] = margin;
            successCount++;
        }
    });

    if (successCount > 0) {
        alert(`Đã lưu thành công ${successCount} cấu hình lợi nhuận theo Loại. Vui lòng kiểm tra lại bảng Tra cứu Giá Bán.`);
        renderPriceLookup();
        filterProductsByProfit();
    } else {
        alert("Không có cấu hình nào được lưu hoặc giá trị nhập vào không hợp lệ.");
    }
};

// 6.4. Hàm Lưu Tất Cả % Lợi Nhuận Theo Sản Phẩm (Ghi đè thông minh)
const saveAllProfitMarginsByProduct = () => {
    const profitByProductBody = document.getElementById('profit-by-product-body');
    if (!profitByProductBody) return;

    let savedCount = 0;
    let clearedCount = 0;
    
    const productsInfoMap = getProductsWithPriceInfo().reduce((map, p) => {
        map[p.id] = p;
        return map;
    }, {});

    profitByProductBody.querySelectorAll('tr[data-product-id]').forEach(row => {
        const productId = parseInt(row.dataset.productId);
        const inputEl = row.querySelector('.profit-margin-input');
        const newMargin = parseInt(inputEl.value) || 0;
        const product = productsInfoMap[productId];
        
        if (!product || newMargin < 0 || newMargin > 100) return;

        // Lấy mức mặc định của loại sản phẩm đó (Cấp 1) - Dùng giá trị dự phòng 30 để so sánh
        const defaultMargin = defaultProfitMarginsByType[product.category] || 30;

        if (newMargin === defaultMargin) {
            // Trường hợp 1: Giá trị mới TRÙNG với mặc định. XÓA tùy chỉnh (nếu có).
            if (customProfitMarginsByProduct[productId] !== undefined) {
                delete customProfitMarginsByProduct[productId];
                clearedCount++;
            }
        } else {
            // Trường hợp 2: Giá trị mới KHÁC với mặc định. LƯU tùy chỉnh.
            customProfitMarginsByProduct[productId] = newMargin;
            savedCount++;
        }
    });

    if (savedCount > 0 || clearedCount > 0) {
        alert(`Đã lưu ${savedCount} tùy chỉnh mới và xóa ${clearedCount} tùy chỉnh trùng lặp.`);
        renderPriceLookup();
        filterProductsByProfit();
    } else {
        alert("Không có thay đổi nào được lưu.");
    }
};

// --- LOGIC HIỂN THỊ DANH SÁCH & TRA CỨU (CƠ CHẾ ƯU TIÊN) ---

// 6.5. Hàm lấy danh sách sản phẩm với thông tin giá hoàn chỉnh
const getProductsWithPriceInfo = () => {
    const allProducts = typeof getAllProductsForImport === 'function' ? getAllProductsForImport() : []; 

    return allProducts.map(p => {
        // CHUẨN HÓA CATEGORY (CHUYỂN TỪ KEY CÓ DẤU SANG KEY CHUẨN KHÔNG DẤU)
        const standardizedCategory = normalizeKeyMap[p.category] || p.category; 
        
        // Lấy mức lợi nhuận mặc định của loại sản phẩm, nếu không tìm thấy thì dùng 30% làm giá trị dự phòng
        const fallbackProfit = defaultProfitMarginsByType[standardizedCategory] || 30;
        
        // 1. LẤY % LỜI (ƯU TIÊN CẤP 2: Tùy chỉnh theo Sản phẩm)
        let profit = customProfitMarginsByProduct[p.id];
        let isCustom = profit !== undefined;
        
        // 2. Nếu không có, LẤY % LỜI (CẤP 1: Mặc định theo Loại sản phẩm)
        if (!isCustom) {
             profit = fallbackProfit; 
        }
        
        const sellingPrice = calculateSellingPrice(p.lastImportPrice, profit);

        return {
            id: p.id,
            title: p.title,
            category: standardizedCategory, // Dùng category key đã chuẩn hóa (không dấu)
            costPrice: p.lastImportPrice,
            profitMargin: profit,
            sellingPrice: sellingPrice,
            isCustomProfit: isCustom 
        };
    });
};

// 6.6. Hàm render danh sách sản phẩm trong phần "Theo Sản Phẩm Cụ thể" (ĐÃ FIX LỖI UNDEFINED)
const renderProductsForProfitConfig = (products) => {
    const tableBody = document.getElementById('profit-by-product-body');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    
    products.forEach(p => {
        // Lấy mức lợi nhuận mặc định của loại, nếu không tìm thấy thì dùng 30% làm giá trị dự phòng
        const defaultMargin = defaultProfitMarginsByType[p.category] || 30; 

        // Lấy % lời áp dụng cuối cùng
        const currentProfit = p.profitMargin;
        
        // CẬP NHẬT LOGIC: Chỉ hiển thị mức mặc định (defaultMargin) khi không phải là tùy chỉnh
        const placeholderText = p.isCustomProfit 
            ? '' 
            : ` (${defaultMargin}% mặc định)`;

        tableBody.innerHTML += `
            <tr data-product-id="${p.id}">
                <td>${p.title}</td>
                <td>
                    <input type="number" value="${currentProfit}" min="0" max="100" class="profit-margin-input" 
                           title="Nhập tỉ lệ mới để ghi đè tỉ lệ mặc định">${placeholderText}
                </td>
                <td><button class="btn btn-secondary btn-sm" onclick="saveProfitMarginByProduct(this)">Lưu</button></td>
            </tr>
        `;
    });
};

// 6.7. Hàm lọc sản phẩm cho phần cấu hình lợi nhuận (CHỈ CÒN TÌM KIẾM)
const filterProductsByProfit = () => {
    const allProducts = getProductsWithPriceInfo();
    const searchTerm = document.getElementById('product-search-profit')?.value.toLowerCase() || '';

    const filtered = allProducts.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm);
        return matchesSearch;
    });

    renderProductsForProfitConfig(filtered);
};


// 6.8. Hàm render bảng Tra Cứu Giá Bán Hiện Tại (CHỈ CÒN TÌM KIẾM)
const renderPriceLookup = () => {
    const productsInfo = getProductsWithPriceInfo();
    const tableBody = document.getElementById('price-lookup-body');
    if (!tableBody) return;

    const searchTerm = document.getElementById('lookup-search-input')?.value.toLowerCase() || '';
    
    const filtered = productsInfo.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm);
        return matchesSearch;
    });
    
    tableBody.innerHTML = '';
    filtered.forEach(p => {
        const formattedCostPrice = typeof formatCurrency === 'function' ? formatCurrency(p.costPrice) : p.costPrice;
        const formattedSellingPrice = typeof formatCurrency === 'function' ? formatCurrency(p.sellingPrice) : p.sellingPrice;

        tableBody.innerHTML += `
            <tr>
                <td>${p.title}</td>
                <td class="price-lookup-cost">${formattedCostPrice}</td>
                <td class="price-lookup-profit">${p.profitMargin}%</td>
                <td class="price-lookup-value">${formattedSellingPrice}</td>
            </tr>
        `;
    });
};

// 6.9. Hàm khởi tạo cho prices.html
const initPricePage = () => {
    const profitByTypeBody = document.getElementById('profit-by-type-body');
    if(profitByTypeBody) {
        profitByTypeBody.querySelectorAll('tr').forEach(row => {
            const inputEl = row.querySelector('.profit-margin-input');
            const typeKey = inputEl ? inputEl.dataset.typeKey : null;
            
            // FIX: Lấy giá trị mặc định từ key không dấu
            if (inputEl && typeKey && defaultProfitMarginsByType[typeKey] !== undefined) {
                inputEl.value = defaultProfitMarginsByType[typeKey];
            }
        });
    }

    filterProductsByProfit(); 
    renderPriceLookup();
    
};


// GẮN CÁC HÀM VÀO WINDOW ĐỂ HTML CÓ THỂ GỌI TRỰC TIẾP
window.saveProfitMarginByType = saveProfitMarginByType;
window.saveProfitMarginByProduct = saveProfitMarginByProduct;
window.filterProductsByProfit = filterProductsByProfit;
window.renderPriceLookup = renderPriceLookup;
window.initPricePage = initPricePage; 
window.saveAllProfitMarginsByType = saveAllProfitMarginsByType;
window.saveAllProfitMarginsByProduct = saveAllProfitMarginsByProduct; // Thêm hàm lưu tất cả sản phẩm
///  tới đây là hết phần 6
// THÊM LOGIC KHỞI TẠO VÀO KHỐI DOMContentLoaded CHUNG CỦA admin.js
document.addEventListener('DOMContentLoaded', () => {
    // ... (Giữ nguyên các khối khởi tạo khác)
    
    // Khởi tạo cho trang Quản lý Giá bán (prices.html)
    const profitByProductBody = document.getElementById('profit-by-product-body');
    if (profitByProductBody) {
        initPricePage();
    }
    
    // ... (Kết thúc khối DOMContentLoaded)
});
// ==============================================================================
// VII. Chức năng Quản lý Đơn hàng (orders.html) - Chức năng 7
// ==============================================================================
// VII. Chức năng Quản lý Đơn hàng (orders.html) - Chức năng 7
// ==============================================================================

// Biến dùng chung (chỉ nên dùng khi chắc chắn chúng có trên trang)
const ordersTableBody = document.querySelector('.table-orders tbody');
const statusFilter = document.getElementById('tinh-trang'); // Lấy element để sử dụng

/**
 * 7. Quản lý đơn đặt hàng của khách hàng (Hiển thị & Lọc)
 * @param {Array} orders - Danh sách đơn hàng cần hiển thị
 */
const renderOrderList = (orders) => {
    if (!ordersTableBody) return; // Bảo vệ
    ordersTableBody.innerHTML = '';

    if (!orders || orders.length === 0) {
        ordersTableBody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #b0b0b0;">Không tìm thấy đơn hàng nào.</td></tr>';
        return;
    }

    orders.forEach(order => {
        let statusClass, actions;
        let statusText = order.statusText; // Sử dụng statusText đã lưu

        // 0: Mới đặt (Chưa xử lý), 1: Đã xử lý, 3: Đã giao, 4: Đã hủy
        if (order.status === 0) {
            statusClass = 'danger';
            actions = `
                <button class="btn btn-primary btn-sm" onclick="updateOrderStatus('${order.id}', 1)">Xử lý</button>
                <button class="btn btn-danger btn-sm" onclick="updateOrderStatus('${order.id}', -1)">Hủy</button> 
            `;
        } else if (order.status === 1) {
            statusClass = 'warning';
            actions = `
                <button class="btn btn-secondary btn-sm" onclick="viewOrderDetails('${order.id}')">Xem</button>
                <button class="btn btn-primary btn-sm" onclick="updateOrderStatus('${order.id}', 3)">Đã giao</button>
            `;
        } else if (order.status === 3) {
            statusClass = 'positive';
            actions = `<button class="btn btn-secondary btn-sm" onclick="viewOrderDetails('${order.id}')">Xem</button>`;
        } else if (order.status === 4) {
            statusClass = 'danger';
            actions = `<button class="btn btn-secondary btn-sm" onclick="viewOrderDetails('${order.id}')">Xem</button>`;
        } else {
             statusClass = 'secondary';
             actions = `<button class="btn btn-secondary btn-sm" onclick="viewOrderDetails('${order.id}')">Xem</button>`;
        }

        ordersTableBody.innerHTML += `
            <tr>
                <td>${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.date}</td>
                <td>${formatCurrency(order.total)}</td>
                <td><span class="badge ${statusClass}">${statusText}</span></td>
                <td class="action-buttons">${actions}</td>
            </tr>
        `;
    });
};

/**
 * Cập nhật trạng thái đơn hàng và lưu vào localStorage.
 * @param {string} id - Mã đơn hàng
 * @param {number} newStatus - Trạng thái mới (1: Xử lý, 3: Đã giao, -1: Hủy)
 */
const updateOrderStatus = (id, newStatus) => {
    let orders = getOrders();
    const orderIndex = orders.findIndex(o => o.id === id);

    if (orderIndex !== -1) {
        let statusText = '';
        let status = newStatus;

        switch (newStatus) {
            case 1: statusText = 'Đã xử lý'; break;
            case 3: statusText = 'Đã giao'; break;
            case -1: statusText = 'Đã hủy'; status = 4; break; // Chuyển -1 thành trạng thái 4 (Hủy)
            default: return;
        }

        if (confirm(`Bạn có chắc muốn cập nhật trạng thái đơn hàng ${id} thành "${statusText}"?`)) {
            orders[orderIndex].status = status;
            orders[orderIndex].statusText = statusText;
            setOrders(orders);
            // Sau khi thay đổi, lọc lại danh sách hiện tại để render
            window.findOrder();
            alert(`Đơn hàng ${id} đã cập nhật thành "${statusText}".`);
            
             // Nếu là Đã giao (status 3), gọi hàm tính lại tồn kho (nếu có)
            if (status === 3 && typeof calculateAndRenderInventory === 'function') {
                calculateAndRenderInventory(); 
            }
        }
    }
};

/**
 * Hàm lọc và tìm kiếm đơn hàng (được gọi từ HTML onchange/oninput)
 */
const findOrder = () => {
    const orders = getOrders();
    // Lấy giá trị trạng thái từ select (2: Tất cả)
    const statusValue = statusFilter ? parseInt(statusFilter.value) : 2; 
    const searchTerm = document.getElementById('form-search-order')?.value.toLowerCase() || '';
    const timeStart = document.getElementById('time-start')?.value;
    const timeEnd = document.getElementById('time-end')?.value;

    const filtered = orders.filter(order => {
        // Lọc theo trạng thái (2: Tất cả, 0: Mới đặt, 1: Xử lý, 3: Đã giao, 4: Hủy)
        const matchesStatus = statusValue === 2 || order.status === statusValue;
        
        // Lọc theo tìm kiếm
        const matchesSearch = order.id.toLowerCase().includes(searchTerm) || 
                              order.customer.toLowerCase().includes(searchTerm);
        
        // Lọc theo khoảng thời gian
        let matchesDate = true;
        if (timeStart && order.date < timeStart) matchesDate = false;
        if (timeEnd && order.date > timeEnd) matchesDate = false;

        return matchesStatus && matchesSearch && matchesDate;
    });

    renderOrderList(filtered);
};

/**
 * Reset tất cả các bộ lọc về mặc định
 */
const resetOrderFilters = () => {
    const statusFilterEl = document.getElementById('tinh-trang');
    const searchInputEl = document.getElementById('form-search-order');
    const timeStartEl = document.getElementById('time-start');
    const timeEndEl = document.getElementById('time-end');
    
    if (statusFilterEl) statusFilterEl.value = '2'; // 2: Tất cả
    if (searchInputEl) searchInputEl.value = '';
    if (timeStartEl) timeStartEl.value = '';
    if (timeEndEl) timeEndEl.value = '';
    
    findOrder();
}
// ... (đặt hàm này trong phần VII của admin.js)
/**
 * Xem chi tiết đơn hàng (Sử dụng Modal để hiển thị thông tin)
 * @param {string} id - Mã đơn hàng
 */
const viewOrderDetails = (id) => {
    const orders = getOrders();
    const order = orders.find(o => o.id === id);
    const modal = document.getElementById('orderDetailsModal');

    if (!order || !modal) {
        alert(`Không tìm thấy đơn hàng ID: ${id} hoặc Modal.`);
        return;
    }

    // 1. Điền thông tin tổng quan
    document.getElementById('modalOrderId').textContent = order.id;
    document.getElementById('modalCustomer').textContent = order.customer;
    document.getElementById('modalDate').textContent = order.date;
    
    // Cập nhật trạng thái và class
    const statusEl = document.getElementById('modalStatus');
    statusEl.textContent = order.statusText;
    statusEl.className = 'badge'; // Reset class
    if (order.status === 0 || order.status === 4) statusEl.classList.add('danger');
    else if (order.status === 1) statusEl.classList.add('warning');
    else if (order.status === 3) statusEl.classList.add('positive');
    else statusEl.classList.add('secondary');


    // 2. Điền chi tiết sản phẩm
    const itemsBody = document.getElementById('modalOrderItemsBody');
    itemsBody.innerHTML = ''; // Xóa nội dung cũ

    if (order.items && order.items.length > 0) {
        order.items.forEach(item => {
            const subtotal = item.price * item.quantity;
            itemsBody.innerHTML += `
                <tr>
                    <td>${item.title}</td>
                    <td class="text-right">${formatCurrency(item.price)}</td>
                    <td class="text-center">${item.quantity}</td>
                    <td class="text-right">${formatCurrency(subtotal)}</td>
                </tr>
            `;
        });
    } else {
        itemsBody.innerHTML = '<tr><td colspan="4" class="text-center">Không có chi tiết sản phẩm trong đơn hàng này.</td></tr>';
    }
    
    // 3. Điền Tổng tiền
    document.getElementById('modalOrderTotal').textContent = formatCurrency(order.total);

    // 4. Hiển thị Modal
    modal.style.display = 'block';
};

// Đảm bảo các hàm có thể được gọi từ HTML
window.updateOrderStatus = updateOrderStatus;
window.viewOrderDetails = viewOrderDetails;
window.findOrder = findOrder;
window.resetOrderFilters = resetOrderFilters;

// ==============================================================================
// VIII. Chức năng Quản lý Tồn kho (tonkho.html) - Chức năng 8 (ĐÃ CẬP NHẬT & FIX KEY)
// ==============================================================================

// Biến dùng chung để chứa kết quả tồn kho cuối cùng sau khi tính toán
let currentInventory = []; 

/**
 * Hàm tính toán tồn kho hiện tại (Tồn Đầu + Nhập - Xuất = Tồn Cuối).
 * @returns {Array} Danh sách sản phẩm với dữ liệu tồn kho được tính toán.
 */
const calculateInventory = () => {
    // Lấy dữ liệu cần thiết
    const products = getProducts();
    const imports = getImports().filter(p => p.status === 'completed'); // Chỉ lấy phiếu đã hoàn thành
    const orders = getOrders().filter(o => o.status === 3); // Chỉ lấy đơn hàng Đã giao

    // 1. Khởi tạo tồn kho cho tất cả sản phẩm
    let inventoryMap = products.reduce((map, p) => {
        const costPrice = p.price * 0.7 || 50000; 
        
        // CHUẨN HÓA CATEGORY (CHUYỂN TỪ KEY CÓ DẤU SANG KEY CHUẨN KHÔNG DẤU)
        const standardizedCategory = normalizeKeyMap[p.category] || p.category; // Sử dụng normalizeKeyMap
        
        map[p.id] = {
            id: p.id,
            name: p.title,
            category: standardizedCategory, // Dùng key không dấu (chuẩn) để lọc
            type: categoryMap[standardizedCategory] || 'Chưa phân loại', // Dùng key không dấu để hiển thị
            unit: 'ĐVT', // Giả định Đơn vị tính
            costPrice: costPrice,
            beginningStock: 100, // GIẢ ĐỊNH TỒN ĐẦU KỲ
            totalImport: 0,
            totalExport: 0,
            endingStock: 100,
            importDetails: [], // Dùng cho báo cáo chi tiết
            exportDetails: []  // Dùng cho báo cáo chi tiết
        };
        return map;
    }, {});

    // 2. Tính Tổng Nhập và lưu chi tiết nhập
    imports.forEach(phiu => {
        phiu.items.forEach(item => {
            const id = item.productId;
            if (inventoryMap[id]) {
                inventoryMap[id].totalImport += item.quantity;
                inventoryMap[id].importDetails.push({
                    date: phiu.date,
                    quantity: item.quantity,
                    price: item.importPrice,
                    reference: phiu.id
                });
            }
        });
    });

    // 3. Tính Tổng Xuất và lưu chi tiết xuất (orders)
    orders.forEach(order => {
        order.items.forEach(item => {
            // Tìm sản phẩm bằng Tên (Giả định Tên món trong Order khớp với Product Title)
            const productMatch = products.find(p => p.title === item.title);
            if (productMatch && inventoryMap[productMatch.id]) {
                const id = productMatch.id;
                inventoryMap[id].totalExport += item.quantity;
                inventoryMap[id].exportDetails.push({
                    date: order.date,
                    quantity: item.quantity,
                    price: item.price,
                    reference: order.id
                });
            }
        });
    });

    // 4. Tính Tồn Cuối Kỳ và Cảnh báo
    currentInventory = Object.values(inventoryMap).map(item => {
        item.endingStock = item.beginningStock + item.totalImport - item.totalExport;
        item.value = item.endingStock * item.costPrice;
        
        // Logic Cảnh báo
        if (item.endingStock > 50) item.alert = { text: 'Tốt', class: 'positive' };
        else if (item.endingStock >= 10) item.alert = { text: 'Sắp hết', class: 'warning' };
        else item.alert = { text: `Chỉ còn ${item.endingStock}`, class: 'danger' };
        
        return item;
    });

    return currentInventory;
};

/**
 * 8.1. Render bảng Tồn kho Tổng quan và cập nhật thống kê.
 * @param {Array} inventory - Danh sách tồn kho đã được tính toán.
 */
const renderInventoryList = (inventory) => {
    const inventoryListBody = document.getElementById('inventory-list-body');
    if (!inventoryListBody) return;
    inventoryListBody.innerHTML = '';
    
    let totalValue = 0;
    let totalUnits = 0;
    let alertCount = 0;

    inventory.forEach((item, index) => {
        totalValue += item.value;
        totalUnits += item.endingStock;
        // Kiểm tra alert: danger hoặc warning (tức là <= 50)
        if (item.endingStock <= 50) alertCount++; 

        inventoryListBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.type}</td>
                <td>${item.unit}</td>
                <td>${item.endingStock}</td>
                <td>${formatCurrency(item.value).replace(' VNĐ', '')}</td>
                <td><span class="badge ${item.alert.class}">${item.alert.text}</span></td>
            </tr>
        `;
    });
    
    // Cập nhật thống kê
    document.getElementById('totalInventoryValue').textContent = formatCurrency(totalValue);
    document.getElementById('totalInventoryUnits').textContent = formatNumber(totalUnits) + ' đơn vị';
    document.getElementById('alertCount').textContent = alertCount + ' món';
};

/**
 * 8.2. Lọc danh sách tồn kho dựa trên bộ lọc (Loại, Tìm kiếm).
 */
const filterInventory = () => {
    if (currentInventory.length === 0) {
        calculateInventory();
    }
    const allInventory = currentInventory;
    
    const categoryFilterEl = document.getElementById('loai-san-pham');
    const searchInputEl = document.getElementById('form-search-inventory');
    
    const categoryFilter = categoryFilterEl ? categoryFilterEl.value : 'all'; // Lấy key không dấu từ HTML
    const searchTerm = searchInputEl ? searchInputEl.value.toLowerCase() : '';

    const filtered = allInventory.filter(item => {
        // So sánh trực tiếp key không dấu từ HTML với item.category (đã được chuẩn hóa thành không dấu)
        const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });

    renderInventoryList(filtered);
};

/**
 * 8.3. Render dropdown chọn món ăn chi tiết và hiển thị báo cáo chi tiết mặc định.
 */
const renderProductDetailSelect = () => {
    const selectEl = document.getElementById('mon-an-chi-tiet');
    if (!selectEl) return;
    
    selectEl.innerHTML = '<option value="">Chọn món ăn để xem chi tiết</option>';
    
    currentInventory.forEach(item => {
        selectEl.innerHTML += `<option value="${item.id}">${item.name}</option>`;
    });
    
    // Hiển thị báo cáo chi tiết mặc định (hàng tổng quan)
    renderDetailedInventoryReport();
};


/**
 * 8.4. Render bảng Chi tiết Nhập - Xuất - Tồn cho món được chọn.
 * Hàm này cũng dùng để render hàng tổng quan (cho mon-an-chi-tiet onchange/Xem Báo Cáo)
 */
const renderDetailedInventoryReport = () => {
    const inventoryDetailBody = document.getElementById('inventory-detail-body');
    if (!inventoryDetailBody) return;
    
    const productId = parseInt(document.getElementById('mon-an-chi-tiet')?.value);
    const item = currentInventory.find(i => i.id === productId);

    if (!item) {
        inventoryDetailBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #b0b0b0;">Vui lòng chọn món ăn để xem chi tiết</td></tr>`;
        return;
    }
    
    // ----------------------------------------------------------------------
    // TẠO BÁO CÁO NHẬP-XUẤT-TỒN (TỔNG KẾT THEO MÓN VÀ THỜI GIAN)
    // ----------------------------------------------------------------------
    
    const timeStart = document.getElementById('time-start-detail')?.value;
    const timeEnd = document.getElementById('time-end-detail')?.value;

    let filteredImports = item.importDetails;
    let filteredExports = item.exportDetails;

    // Lọc theo khoảng thời gian
    if (timeStart) {
        filteredImports = filteredImports.filter(d => d.date >= timeStart);
        filteredExports = filteredExports.filter(d => d.date >= timeStart);
    }
    if (timeEnd) {
        filteredImports = filteredImports.filter(d => d.date <= timeEnd);
        filteredExports = filteredExports.filter(d => d.date <= timeEnd);
    }
    
    // Tính toán lại Tổng Nhập/Xuất trong khoảng thời gian đã lọc
    const reportTotalImport = filteredImports.reduce((sum, d) => sum + d.quantity, 0);
    const reportTotalExport = filteredExports.reduce((sum, d) => sum + d.quantity, 0);
    
    // Giả định Tồn Đầu Kỳ = Tồn Đầu Kỳ chung của sản phẩm (cho mục đích demo)
    const reportBeginningStock = item.beginningStock; 
    const reportEndingStock = reportBeginningStock + reportTotalImport - reportTotalExport;


    inventoryDetailBody.innerHTML = `
        <tr>
            <td>**${item.name}**</td>
            <td style="text-align: center;">**${formatNumber(reportBeginningStock)}**</td>
            <td class="positive-text" style="text-align: center;">**${formatNumber(reportTotalImport)}**</td>
            <td class="danger-text" style="text-align: center;">**${formatNumber(reportTotalExport)}**</td>
            <td style="text-align: center;">**${formatNumber(reportEndingStock)}**</td>
        </tr>
    `;
};

// Hàm khởi tạo/cập nhật tồn kho khi trang được tải hoặc nút "Tra cứu" được nhấn
const calculateAndRenderInventory = () => {
    // 1. Tính toán lại tồn kho
    calculateInventory();
    
    // 2. Render bảng tổng quan (không cần lọc)
    renderInventoryList(currentInventory); 
    
    // 3. Render lại dropdown chi tiết
    renderProductDetailSelect();
};

const resetInventoryFilters = () => {
    const categoryFilterEl = document.getElementById('loai-san-pham');
    const searchInputEl = document.getElementById('form-search-inventory');
    const dateInputEl = document.getElementById('inventory-date');
    const timeStartDetailEl = document.getElementById('time-start-detail');
    const timeEndDetailEl = document.getElementById('time-end-detail');
    const productDetailSelectEl = document.getElementById('mon-an-chi-tiet');
    
    if (categoryFilterEl) categoryFilterEl.value = 'all';
    if (searchInputEl) searchInputEl.value = '';
    
    const today = new Date().toISOString().split('T')[0];
    if (dateInputEl) dateInputEl.value = today;
    if (timeStartDetailEl) timeStartDetailEl.value = '';
    if (timeEndDetailEl) timeEndDetailEl.value = '';
    if (productDetailSelectEl) productDetailSelectEl.value = '';
    
    calculateAndRenderInventory(); // Tính lại và render toàn bộ
}

// ==============================================================================
// IX. Chức năng Đăng nhập/Đăng xuất (login.html)
// ==============================================================================

/**
 * Xử lý đăng nhập bằng tài khoản giả định.
 * Tài khoản test: admin/123456 (Admin) và staff/123456 (Nhân viên)
 */
const handleLogin = (e) => {
    e.preventDefault();
    
    const usernameEl = document.getElementById('username');
    const passwordEl = document.getElementById('password');
    const messageEl = document.getElementById('login-message');

    if (!usernameEl || !passwordEl || !messageEl) return;

    const username = usernameEl.value.trim().toLowerCase();
    const password = passwordEl.value.trim();
    
    // 1. Kiểm tra tài khoản cứng
    let role = null;
    let redirectPage = null;

    if (username === 'admin' && password === '123456') {
        role = 'admin';
        redirectPage = 'dashboard.html';
    } else if (username === 'staff' && password === '123456') {
        role = 'staff';
        redirectPage = 'orders.html';
    }

    if (role) {
        // 2. Đăng nhập thành công: Lưu trạng thái và chuyển hướng
        localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify({ username, role, timestamp: Date.now() }));
        messageEl.style.color = 'var(--positive, #28a745)';
        messageEl.textContent = 'Đăng nhập thành công! Đang chuyển hướng...';
        
        // Chuyển hướng sau 1 giây
        setTimeout(() => {
            window.location.href = redirectPage;
        }, 1000);
    } else {
        // 3. Đăng nhập thất bại
        messageEl.style.color = 'var(--danger, #dc3545)';
        messageEl.textContent = 'Tên đăng nhập hoặc mật khẩu không đúng.';
    }
};

/**
 * Xử lý đăng xuất.
 */
const handleLogout = () => {
    if (confirm('Bạn có chắc chắn muốn Đăng xuất không?')) {
        localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
        window.location.href = 'login.html';
    }
};

window.handleLogout = handleLogout; // Gắn vào window để gọi từ menu Đăng xuất (login.html)
// ==============================================================================
// KHỐI GẮN SỰ KIỆN CHUNG (FIX LỖI NULL)
// ==============================================================================

// Khối này đảm bảo rằng code của các trang khác nhau (products, users, imports,...)
// chỉ chạy khi các phần tử HTML tương ứng tồn tại.
document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // I. Khởi tạo cho trang Quản lý Sản phẩm (products.html)
    // ----------------------------------------------------------------------
    const productListContainer = document.querySelector('.product-list');
    if (productListContainer) { 
        // Lấy lại các biến cục bộ (vì chúng chỉ tồn tại trên trang này)
        const categoryFilter = document.getElementById('category');
        const searchInput = document.querySelector('.form-search-input'); // Chỉ tìm 1 input search
        
        // Đảm bảo getProducts() đã được gọi để khởi tạo dữ liệu
        renderProductList(getProducts().filter(p => p.status === 1)); 

        if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);
        if (searchInput) searchInput.addEventListener('input', filterProducts); // Lỗi 218 nằm ở đây nếu không có IF
        
        const btnAddProduct = document.querySelector('.btn-add-product');
        if (btnAddProduct) btnAddProduct.addEventListener('click', addProduct);
    }

    // ----------------------------------------------------------------------
    // II. Khởi tạo cho trang Quản lý Người dùng (users.html)
    // ----------------------------------------------------------------------
    if (document.getElementById('users-table-body')) {
        // Gán các hàm quan trọng ra window (Đã làm ở trên, chỉ nhắc lại)
        window.lockUnlockUser = lockUnlockUser;
        window.resetPassword = resetPassword;
        window.filterUsers = filterUsers;

        filterUsers(); // **GỌI HIỂN THỊ DANH SÁCH KHÁCH HÀNG LẦN ĐẦU**

        const statusFilterEl = document.getElementById('tinh-trang-user');
        const searchInputEl = document.getElementById('form-search-user');
        const timeStartEl = document.getElementById('time-start-user');
        const timeEndEl = document.getElementById('time-end-user');
        const resetBtnEl = document.querySelector('.btn-reset-user');

        if (statusFilterEl) statusFilterEl.addEventListener('change', filterUsers);
        if (searchInputEl) searchInputEl.addEventListener('input', filterUsers);
        if (timeStartEl) timeStartEl.addEventListener('change', filterUsers);
        if (timeEndEl) timeEndEl.addEventListener('change', filterUsers);
        
        if (resetBtnEl) {
            resetBtnEl.addEventListener('click', () => {
                if (statusFilterEl) statusFilterEl.value = '2';
                if (searchInputEl) searchInputEl.value = '';
                if (timeStartEl) timeStartEl.value = '';
                if (timeEndEl) timeEndEl.value = '';
                filterUsers();
            });
        }
    }
    
    // ----------------------------------------------------------------------
    // III. Khởi tạo cho trang Quản lý Nhập hàng (import.html)
    // ----------------------------------------------------------------------
   // ----------------------------------------------------------------------
 
    if (importsTableBody) {
        renderImportList(getImports());
        if (importStatusFilter) importStatusFilter.addEventListener('change', filterImports);
        
        // Gắn sự kiện tìm kiếm
        document.querySelector('.admin-control-center .form-search-input')?.addEventListener('input', filterImports); 
        
        // Gắn sự kiện Tạo phiếu nhập
        document.querySelector('.btn-control-large')?.addEventListener('click', () => showImportForm('add'));

        // Gắn sự kiện Lưu Nháp (dùng saveImport('add/edit', 'draft'))
        document.getElementById('detailedImportForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const currentId = document.getElementById('importId').value;
            const mode = currentId === 'Tự động tạo' ? 'add' : 'edit';
            saveImport(mode, 'draft'); // Luôn lưu nháp khi submit
        });
    }
    // ----------------------------------------------------------------------
    // IV. Khởi tạo cho trang Quản lý Đơn hàng (orders.html)
    // ----------------------------------------------------------------------
// IV. Khởi tạo cho trang Quản lý Đơn hàng (orders.html)
// ----------------------------------------------------------------------
// Cần khai báo lại các biến để đảm bảo trong scope của DOMContentLoaded
const ordersTableBody_init = document.querySelector('.table-orders tbody');
const statusFilter_init = document.getElementById('tinh-trang');
if (ordersTableBody_init) {
    // 1. Gán sự kiện cho các bộ lọc (đã có trong HTML, nhưng gán lại cho chắc)
    statusFilter_init?.addEventListener('change', findOrder);
    document.getElementById('form-search-order')?.addEventListener('input', findOrder);
    document.getElementById('time-start')?.addEventListener('change', findOrder);
    document.getElementById('time-end')?.addEventListener('change', findOrder);

    // 2. Gán sự kiện cho nút Reset
    const resetBtnEl = document.querySelector('.btn-reset-order');
    if (resetBtnEl) {
        resetBtnEl.addEventListener('click', resetOrderFilters);
    }
    
    // 3. Hiển thị danh sách lần đầu
    findOrder();
}
    // ----------------------------------------------------------------------
    // V. Khởi tạo cho trang Tồn kho (tonkho.html)
    // ----------------------------------------------------------------------
    if (document.getElementById('inventory-list-body')) {
    // Gắn các hàm vào window để gọi từ HTML
    window.calculateAndRenderInventory = calculateAndRenderInventory;
    window.filterInventory = filterInventory;
    window.renderDetailedInventoryReport = renderDetailedInventoryReport;
    window.resetInventoryFilters = resetInventoryFilters;
    
    // Lần đầu tải trang: Tính toán và render
    calculateAndRenderInventory(); 
    
    // Gắn sự kiện cho các bộ lọc
    document.getElementById('loai-san-pham')?.addEventListener('change', filterInventory);
    document.getElementById('form-search-inventory')?.addEventListener('input', filterInventory);
    document.getElementById('mon-an-chi-tiet')?.addEventListener('change', renderDetailedInventoryReport);
    document.getElementById('inventory-date').value = new Date().toISOString().split('T')[0]; // Set ngày hiện tại
}
// Thêm vào cuối khối DOMContentLoaded
// ----------------------------------------------------------------------
// VII. Khởi tạo cho trang Đăng nhập (login.html)
// ----------------------------------------------------------------------
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
}
// ----------------------------------------------------------------------
// Kết thúc khối DOMContentLoaded
// ----------------------------------------------------------------------

    // ----------------------------------------------------------------------
    // VI. Gắn hàm global cho các hàm còn lại (để HTML có thể gọi)
    // ----------------------------------------------------------------------
    window.findOrder = findOrder; 
    window.filterImports = filterImports;
    window.saveProfitMarginByType = saveProfitMarginByType;
    window.saveProfitMarginByProduct = saveProfitMarginByProduct;
});