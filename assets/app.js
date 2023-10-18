const userData = [
  {
    image: "./assets/Images/user2.jpg",
    username: "susan smith",
    designation: "web developer",
    bio: "In the realm of the web, the developer is both architect and wizard, crafting the very portals through which we navigate the boundless realms of the internet.",
  },
  {
    image: "./assets/Images/user1.jpg",
    username: "Haroon Maheshwari",
    designation: "copy paste developer",
    bio: "A copy-paste developer, often criticized for recycling code, can streamline routine tasks, but creativity and problem-solving may be left on the cutting room floor.",
  },
  {
    image: "./assets/Images/JohnLewis3.jpg",
    username: "John Lewis",
    designation: "Senior Accountant",
    bio: "Accountants play a critical role in deciphering the language of numbers, providing businesses with the insights needed to make informed financial decisions and navigate the complex world of finance.",
  },
];

// Show Data UI
const userImage = document.getElementById("user-image");
const userName = document.getElementById("user-name");
const userDesignation = document.getElementById("desig");
const userInfo = document.getElementById("user-bio");

let userCurrIndex = 0;

// Move Data
function setUser() {
  userImage.src = userData[userCurrIndex].image;
  userName.textContent = userData[userCurrIndex].username;
  userDesignation.textContent = userData[userCurrIndex].designation;
  userInfo.textContent = userData[userCurrIndex].bio;
}
setUser();

function moveForward() {
  userCurrIndex++;
  if (userCurrIndex == userData.length) {
    userCurrIndex--;
    return;
  }

  setUser();
}

function moveBackward() {
  userCurrIndex--;
  if (userCurrIndex < 0) {
    userCurrIndex++;
    return;
  }

  setUser();
}

// Set Data
function addReview() {
  // Get Data UI
  const userImageInput = document.getElementById("user-image-input");
  const userNameInput = document.getElementById("user-name-input").value;
  const userDesignationInput =
    document.getElementById("user-desig-input").value;
  const userInfoInput = document.getElementById("user-bio-input").value;

  if (
    userNameInput == "" ||
    userDesignationInput == "" ||
    userInfoInput == ""
  ) {
    alert("All Fields are required");
    return;
  }

  if (userImageInput.files.length > 0) {
    const image = userImageInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;

      const userInputData = {
        image: imageUrl,
        username: userNameInput,
        designation: userDesignationInput,
        bio: userInfoInput,
      };

      // Set the information
      userData.push(userInputData);
      userCurrIndex = userData.length - 1;
      setUser();
    };
    reader.readAsDataURL(image);
  } else {
    alert("Please select an image to upload.");
  }
}
