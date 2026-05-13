<h1 align="center">
 🧠 Second Brain App
</h1>

<p align="center">
A full-stack <b>Second Brain Application</b> to store, organize, search, and manage personal notes/resources in one centralized place.
</p>

<p align="center">
Inspired by the concept of a <b>"Second Brain"</b> — an external system to capture ideas, knowledge, resources, and thoughts so they are always accessible.
</p>

---

##  Live Demo

<div align="center">


###  Frontend  
🔗 https://second-brain-self-ten.vercel.app

###  Backend API  
🔗 https://secondbrain-wrez.onrender.com

###  Swagger Docs  
🔗 https://secondbrain-wrez.onrender.com/api-docs

Test credentials:
testEmail: test12@gmail.com
test password:test1234

</div>

---

## 📸 Screenshots

<div align="center">

### Dashboard

<img width="900" alt="Dashboard" src="https://github.com/user-attachments/assets/f36c348d-846b-4d2d-a3ad-e51e23eb2e82" />

<br/>
<br/>

### Create Notes

<img width="1901" height="840" alt="image" src="https://github.com/user-attachments/assets/fac6e4f6-9739-4216-b59c-2cdeb00ba123" />


<br/>
<br/>

### Single Note Page

<img width="900" alt="Single Post" src="https://github.com/user-attachments/assets/f5958bb9-880e-4f7d-baaa-0f870c932024" />

</div>



# Challenges faced 
- While deploying the application I faced an issue in logging in as the attributes for my setCookie and clear Cookie function in the login controller and logout controller for the sameSite were different in login it was sameSite:lax and sameSite:none.

-  While implementing the search feature, I faced issues with excessive API requests being sent to the backend on every keystroke. This initially caused unnecessary database queries and affected performance. To solve this, I implemented a debounce mechanism on the frontend so the search request is only triggered after the user stops typing for a short duration.

---


