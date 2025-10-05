async function fetchUserData() {
    const apiurl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data")
 try { const response = await fetch(apiurl);
    if (!response.ok){
      throw new Error()  
    }
    const users = await response.json()
    dataContainer.innerHTML =''
    const userList = document.createElement("ul");
 users.forEach(user => {
    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    userList.appendChild(listItem); 
 });   
    dataContainer.appendChild(userList);

 } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching dara', error)
 }   
}
document.addEventListener("DOMContentLoaded", fetchUserData);