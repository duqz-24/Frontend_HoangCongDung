let products = [];

function addProduct() {
    let id;
    while (true) {
        id = +prompt("Hãy nhập ID:");
        if (products.some(product => product.id === id)) {
            alert("ID đã tồn tại, hãy nhập lại");
            continue;
        }
        break;
    }

    let name = prompt("Hãy nhập tên sản phẩm:");
    
    let price;
    do {
        price = parseFloat(prompt("Hãy nhập giá sản phẩm:"));
        if (isNaN(price) || price <= 0) {
            alert("Giá sản phẩm phải là số dương!");
        }
    } while (isNaN(price) || price <= 0);

    let category = prompt("Hãy nhập danh mục sản phẩm:");

    let quantity;
    do {
        quantity = parseInt(prompt("Hãy nhập số lượng sản phẩm:"));
        if (isNaN(quantity) || quantity < 0) {
            alert("Số lượng sản phẩm phải là số không âm!");
        }
    } while (isNaN(quantity) || quantity < 0);

    products.push({ id, name, price, category, quantity });
}

function showProducts() {
    if (products.length === 0) {
        console.log("Danh sách sản phẩm trống!");
        return;
    }
    products.forEach(product => {
        console.log(`ID: ${product.id}\nName: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}\nQuantity: ${product.quantity}`);
    });
}

function showProductById() {
    let id = +prompt("Nhập sản phẩm cần xem:");
    let product = products.find(p => p.id === id);
    if (product) {
        console.log(`ID: ${product.id}\nName: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}\nQuantity: ${product.quantity}`);
    } else {
        alert("Không tìm thấy sản phẩm với ID này!");
    }
}

function updateProduct() {
    let id = +prompt("Nhập ID sản phẩm cần cập nhật:");
    let product = products.find(p => p.id === id);
    if (product) {
        product.name = prompt("Nhập tên mới:") || product.name;

        let newPrice = parseFloat(prompt("Nhập giá mới:"));
        if (!isNaN(newPrice) && newPrice > 0) {
            product.price = newPrice;
        }

        product.category = prompt("Nhập danh mục mới:") || product.category;

        let newQuantity = parseInt(prompt("Nhập số lượng mới:"));
        if (!isNaN(newQuantity) && newQuantity >= 0) {
            product.quantity = newQuantity;
        }

        alert("Cập nhật thành công!");
    } else {
        alert("Không tìm thấy sản phẩm với ID này!");
    }
}

function deleteProduct() {
    let id = +prompt("Nhập sản phẩm cần xóa:");
    let index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        alert("Xóa sản phẩm thành công!");
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}

function filterByPriceRange() {
    let minPrice, maxPrice;
    
    do {
        minPrice = parseFloat(prompt("Nhập giá tối thiểu:"));
        if (isNaN(minPrice) || minPrice < 0) {
            alert("Giá tối thiểu phải là số không âm!");
        }
    } while (isNaN(minPrice) || minPrice < 0);

    do {
        maxPrice = parseFloat(prompt("Nhập giá tối đa:"));
        if (isNaN(maxPrice) || maxPrice < minPrice) {
            alert("Giá tối đa phải lớn hơn hoặc bằng giá tối thiểu!");
        }
    } while (isNaN(maxPrice) || maxPrice < minPrice);

    let filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            console.log(`ID: ${product.id}\nName: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}\nQuantity: ${product.quantity}`);
        });
    } else {
        alert("Không tìm thấy sản phẩm nào trong khoảng giá này!");
    }
}

function menu() {
    let choice;
    do {
        console.log("1. Thêm sản phẩm\n2. Hiển thị tất cả sản phẩm\n3. Hiển thị sản phẩm theo ID\n4. Cập nhật sản phẩm theo ID\n5. Xóa sản phẩm theo ID\n6. Lọc sản phẩm theo khoảng giá\n7. Thoát");
        choice = parseInt(prompt("Nhập lựa chọn của bạn: "));
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                showProducts();
                break;
            case 3:
                showProductById();
                break;
            case 4:
                updateProduct();
                break;
            case 5:
                deleteProduct();
                break;
            case 6:
                filterByPriceRange();
                break;
            case 7:
                alert("Thoát chương trình");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    } while (choice !== 7);
}

menu();