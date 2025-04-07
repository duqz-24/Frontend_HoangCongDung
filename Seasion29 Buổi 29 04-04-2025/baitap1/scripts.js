let contacts = []; 

function menu() {
  while (true) {
    console.log("\n--- MENU ---");
    console.log("1. Thêm liên hệ");
    console.log("2. Hiển thị danh bạ");
    console.log("3. Tìm kiếm theo số điện thoại");
    console.log("4. Cập nhật liên hệ");
    console.log("5. Xóa liên hệ");
    console.log("6. Thoát");

    let choice = prompt("Chọn chức năng: ");

    switch (choice) {
      case "1":
        addContact();
        break;
      case "2":
        displayContacts();
        break;
      case "3":
        searchContact();
        break;
      case "4":
        updateContact();
        break;
      case "5":
        deleteContact();
        break;
      case "6":
        return; 
      default:
        console.log("Lựa chọn không hợp lệ!");
    }
  }
}

function addContact() {
  let name = prompt("Tên: ");
  let email = prompt("Email: ");
  let phone = prompt("Số điện thoại: ");

  let newContact = {
    id: contacts.length + 1,
    name: name,
    email: email,
    phone: phone,
  };

  contacts.push(newContact);
  console.log("Đã thêm liên hệ thành công!");
}

function displayContacts() {
  if (contacts.length === 0) {
    console.log("Danh bạ trống!");
  } else {
    console.log("--- Danh bạ ---");
    contacts.forEach((contact) => {
      console.log(`ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}`);
    });
  }
}

function searchContact() {
  let searchPhone = prompt("Nhập số điện thoại cần tìm: ");
  let foundContact = contacts.find((contact) => contact.phone === searchPhone);

  if (foundContact) {
    console.log("Thông tin liên hệ:");
    console.log(`ID: ${foundContact.id}, Tên: ${foundContact.name}, Email: ${foundContact.email}, SĐT: ${foundContact.phone}`);
  } else {
    console.log("Không tìm thấy liên hệ!");
  }
}

function updateContact() {
  let contactId = parseInt(prompt("Nhập ID liên hệ cần cập nhật: "));
  let contactToUpdate = contacts.find((contact) => contact.id === contactId);

  if (contactToUpdate) {
    let newName = prompt("Tên mới: ");
    let newEmail = prompt("Email mới: ");
    let newPhone = prompt("Số điện thoại mới: ");

    contactToUpdate.name = newName;
    contactToUpdate.email = newEmail;
    contactToUpdate.phone = newPhone;

    console.log("Cập nhật liên hệ thành công!");
  } else {
    console.log("Không tìm thấy liên hệ!");
  }
}

function deleteContact() {
  let contactId = parseInt(prompt("Nhập ID liên hệ cần xóa: "));
  let contactIndex = contacts.findIndex((contact) => contact.id === contactId);

  if (contactIndex !== -1) {
    contacts.splice(contactIndex, 1);
    console.log("Xóa liên hệ thành công!");
  } else {
    console.log("Không tìm thấy liên hệ!");
  }
}

menu();