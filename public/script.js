document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const sidebar = document.getElementById("sidebar");

    let isSidebarOpen = false;

    // Function to toggle sidebar visibility
    function toggleSidebar() {
        if (isSidebarOpen) {
            sidebar.style.right = "-250px";  // Hide sidebar
            isSidebarOpen = false;
        } else {
            sidebar.style.right = "0";  // Show sidebar
            isSidebarOpen = true;
        }
    }

    // Add click event listener to the hamburger button
    hamburgerMenu.addEventListener("click", toggleSidebar);
});
