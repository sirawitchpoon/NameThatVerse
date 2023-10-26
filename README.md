# NameThatVerse

EN813701 Web Application Development Projects 2023
  
WAD23-05 NameThatVerse

Member 1: Sirawitch Butryojantho 643040542-0
Member 2: Jiraphol Wannapram 643040520-0

In Login.jsx

const redirect_uri = "https://name-that-verse.netlify.app";
Use this redirect_uri if you deploy on Netlify. The sound work but there will be a problem if you run on localhost

const redirect_uri = "http://localhost:3000";
Use this redirect_uri if you run on localhost. But the sound will not work due to the CORS policy
