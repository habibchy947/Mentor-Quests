
# Mentor Quest

The Mentor Quest Website is a dynamic, single-page application designed to help users make informed decisions about their career paths by providing professional guidance, personalized advice, and curated resources. Built with a focus on functionality and responsiveness, this platform ensures a seamless user experience across all devices.





## Take a look
![mentor-quest-readme](https://github.com/user-attachments/assets/b1a11fd8-ccdc-4b91-8e98-b5fdba04a66d)
## 🛠️ Technologies Used
### Frontend
- React.js
- React Router
- Tailwind CSS
### Authentication
- Firebase
### Animation
- Swiper
### Hosting
- Firebase






## 🔑 Key Features

  **Comprehensive Career Services**:  
   - Browse and learn about various services like career counseling and resume review.  
   - Protected service details pages with complete information.  

  **Secure Authentication**:  
   - Login and registration via email/password and Google.  
   - Persistent login state across page reloads using Firebase's `onAuthStateChanged()`.  

  **Responsive Design**:  
   - Optimized for mobile, tablet, and desktop devices.  

  **Dynamic Profile Management**:  
   - Edit name and profile picture using Firebase's `updateProfile()` method.  

  **Additional Features**:  
   - Forgot password functionality with email-based reset.  
   - Eye-catching animations with AOS and Swiper Slider.  
   - Custom 404 page and an extra private route.  







    
## 📦 Dependencies
- `"animate.css":` "^4.1.1",
- `"firebase":` "^11.0.2",
- `"localforage":` "^1.10.0",
- `"match-sorter":` "^8.0.0",
- `"react":` "^18.3.1",
- `"react-awesome-button":` "^7.0.5",
- `"react-dom":` "^18.3.1",
- `"react-helmet-async":` "^2.0.5",
- `"react-hot-toast":` "^2.4.1",
- `"react-icons":` "^5.3.0",
- `"react-router-dom":` "^6.28.0",
- `"sort-by":` "^1.2.0",
- `"swiper":` "^11.1.14"
## ⚙️ Run Locally
Follow these steps to run the project on your local machine: 
Clone the project

```bash
  git clone https://github.com/habibchy947/Mentor-Quest.git
```

Go to the project directory

```bash
  cd Mentor-Quest
```

Install dependencies fro both client and server

```bash
  npm install
```
Create a .env.local file in root path and add below api_key from firebase with the following:
```bash
  REACT_APP_FIREBASE_API_KEY=your_api_key  
  REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain  
  REACT_APP_FIREBASE_PROJECT_ID=your_project_id  
  REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket  
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id  
  REACT_APP_FIREBASE_APP_ID=your_app_id  
```

Start the server

```bash
  npm run start
```


## 🌐Live link

- ## [https://mentor-quest-habib.netlify.app](https://mentor-quest-habib.netlify.app)




## 📋 Relevant Links
- **Github repo**  [https://github.com/habibchy947/Mentor-Quest.git](https://github.com/habibchy947/Mentor-Quest.git)


