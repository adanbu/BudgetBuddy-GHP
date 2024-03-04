document.addEventListener("DOMContentLoaded",function(){function e(){const t=`
            <nav class="bg-blue-500 p-4">
                <div class="container mx-auto flex justify-between items-center">
                    <a href="#" class="text-white font-bold text-xl">Budget Buddy</a>
                    <div class="container mx-auto flex items-center justify-between relative">
                        <button id="menuBtn" class="block sm:hidden bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 ml-auto">
                            &#9776; <!-- Hamburger Icon -->
                        </button>
                        <div class="sm:flex space-x-4 hidden">
                            <a href="mainuser.html" class="hover:text-gray-300">Home</a>
                            <a href="#features" class="hover:text-gray-300">Features</a>
                            <a href="/pages/aboutUs.html" class="hover:text-gray-300">About Us</a>
                            <a href="/pages/contactUs.html" class="hover:text-gray-300">Contact Us</a>
                        </div>
                        <div class="items-center sm:flex hidden">
                            <a href="/pages/login.html" class="mr-4 bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 block">Login</a>
                            <a href="/pages/register.html" class="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 block">Register</a>
                        </div>
                        <div id="popupmenu" class="justify-start gap-4 hidden sm:hidden absolute bg-slate-600 width-[70px] top-[60px] rounded-lg left-0 right-0 p-4 pb-6">
                            <a href="mainuser.html" class="hover:text-gray-300 block">Home</a>
                            <a href="#features" class="hover:text-gray-300 block">Features</a>
                            <a href="/pages/aboutUs.html" class="hover:text-gray-300 block">About Us</a>
                            <a href="/pages/contactUs.html" class="hover:text-gray-300 block">Contact Us</a>
                            <a href="/pages/login.html" class="mr-4 bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 block my-2">Login</a>
                            <a href="/pages/register.html" class="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 block">Register</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;document.getElementById("navbar-container").innerHTML=t,document.getElementById("menuBtn").addEventListener("click",()=>{document.getElementById("popupmenu").classList.toggle("hidden")})}e()});
