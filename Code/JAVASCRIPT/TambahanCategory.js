document.addEventListener("DOMContentLoaded", function () {
  const addCategoryBtn = document.getElementById("addCategoryBtn");
  const addCategoryModal = document.getElementById("addCategoryModal");
  const closeModal = document.getElementById("closeModal");

  addCategoryBtn.addEventListener("click", function () {
    addCategoryModal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
    addCategoryModal.style.display = "none";
  });

  function showEditCategoryPopup() {
    document.getElementById("editCategoryModal").style.display = "block";
  }

  function hideEditCategoryPopup() {
    document.getElementById("editCategoryModal").style.display = "none";
  }

  function showDeleteCategoryPopup() {
    document.getElementById("deleteCategoryModal").style.display = "block";
  }

  function hideDeleteCategoryPopup() {
    document.getElementById("deleteCategoryModal").style.display = "none";
  }

  document.querySelectorAll(".edit-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      showEditCategoryPopup();
    });
  });

  document.querySelectorAll(".delete-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      showDeleteCategoryPopup();
    });
  });

  document
    .getElementById("closeEditCategoryModal")
    .addEventListener("click", function () {
      hideEditCategoryPopup();
    });

  document
    .getElementById("closeDeleteCategoryModal")
    .addEventListener("click", function () {
      hideDeleteCategoryPopup();
    });

  document
    .getElementById("editCategoryButton")
    .addEventListener("click", function () {
      hideEditCategoryPopup();
    });

  document
    .getElementById("deleteCategoryButton")
    .addEventListener("click", function () {
      hideDeleteCategoryPopup();
    });
});
