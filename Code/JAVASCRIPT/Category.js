async function call() {
  var x = localStorage.getItem("userID");
  var api = `https://localhost:7129/api/Category?id=${x}`;

  const response = await fetch(api, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  const result = await response.json();
  console.log(result);
  for (let i = 0; i < result.payload.length; i++) {
    $("table").append(`<tr>
            <td>${i + 1}</td>
            <td>${result.payload[i].categoryName}</td>
            <td><a onclick="EditCategory(${
              result.payload[i].categoryID
            })" class="btn btn-primary btn sm edit-btn" style="background-color: #ffc424;">Edit</a>
            <a onclick="DeleteCategory(${
              result.payload[i].categoryID
            })" class="btn btn-primary btn sm delete-btn" style="background-color: #dc3444;">Delete</a></td>
            </tr>`);
  }
}

async function DeleteCategory(i) {
  PopUpDelete();
  document
    .getElementById("deleteCategoryButton")
    .addEventListener("click", async () => {
      var categories = document.getElementById("categoryName").value;
      var x = localStorage.getItem("userID");
      var api = `https://localhost:7129/api/Category/Delete${i}`;

      const response = await fetch(api, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json;charset=utf-8",
        },
      });

      const result = await response.json();
      console.log(result);
      call();
      window.location.replace("/Code/HTML/Category.html");
    });
}

async function EditCategory(i) {
  PopUpEdit();
  document
    .getElementById("editCategoryButton")
    .addEventListener("click", async () => {
      var x = localStorage.getItem("userID");
      var api = `https://localhost:7129/api/Category/Edit${i}`;
      var categories = document.getElementById("editCategoryInput").value;

      const data = {
        categoryName: categories,
      };
      const response = await fetch(api, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      window.location.replace("/Code/HTML/category.html");
    });
}

async function AddCategory() {
  const category = document.getElementById("categoryName").value;
  const id = localStorage.getItem("userID");

  const item = {
    CategoryName: category.trim(),
  };

  const response = await fetch(
    `https://localhost:7129/api/Category/Add Category${id}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(item),
    }
  );

  const result = response.json();
  console.log(result);
  window.location.replace("/Code/HTML/Category.html");
}

function PopUpDelete() {
  document.getElementById("deleteCategoryModal").style.display = "block";
}

function PopUpEdit() {
  document.getElementById("editCategoryModal").style.display = "block";
}

call();
